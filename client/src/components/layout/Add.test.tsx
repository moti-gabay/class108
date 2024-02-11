import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from "@testing-library/react";
import Add from "./Add";
import { useNavigate } from 'react-router-dom';
import { TOKEN_KEY } from '../../constants/url';

// import { TOKEN_KEY } from '../../constants/url';
const renderAddComp =() => {
  render(
    <Router>
      <Add />
    </Router>
  );
}
describe("Add Component", () => {
 test("renders Add component with 'Add category' end 'add link", () => {
  renderAddComp();
    const catElement = screen.getByText(/Add category/i);
    const linkElement = screen.getByText(/Add link/i);
    expect(linkElement).toBeInTheDocument();
    expect(catElement).toBeInTheDocument();
 });

//  test("renders Add component with 'Add link' when add state is false", () => {
//   renderAddComp();
//     const addElement = screen.getByText(/Add link/i);
//     expect(addElement).toBeInTheDocument();
//  });

//  test("toggles between 'Add category' and 'Add link' when add link's button is clicked", () => {
//   renderAddComp();
//     const buttonLink = screen.getByRole('button',{name:/add link/i});
//     fireEvent.click(buttonLink);
//     const addElement = screen.getByRole('heading',{name:/Add link/i});
//     expect(addElement).toBeInTheDocument();
//  });
//  test("toggles between 'Add category' and 'Add link' when add category's button is clicked", () => {
//   renderAddComp();
//     const buttonCat = screen.getByRole('button',{name:/add category/i});
//     fireEvent.click(buttonCat);
//     const CatElement = screen.getByRole('heading',{name:/Add category/i});
//     expect(CatElement).toBeInTheDocument();
//  });

 test("find the buttons ",() => {
  renderAddComp();
  const btnsEl = screen.getAllByRole('button')
  expect(btnsEl).toHaveLength(6)
 })



 });
 jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

// describe('Add Component', () => {
//   it('navigates to the previous page on logout', () => {
//     const mockNavigate = jest.fn();
//     useNavigate.mockReturnValue(mockNavigate);


//     render(
//       <Router>
//         <Add />
//       </Router>
//     );

//     // Simulate clicking the logout button
//     const logoutButton = screen.getByRole('button', { name: /logout/i });
//     fireEvent.click(logoutButton);

//     // Check that the navigate function was called with -1 to go back
//     expect(mockNavigate).toHaveBeenCalledWith(-1);
//   });

//   // ... (other tests)
// });
describe('Add Component', () => {

  

  // it('removes token from local storage and navigates on logout', () => {
  //   render(
  //     <Router>
  //       <Add />
  //     </Router>
  //   );

  //   // Simulate clicking the logout button
  //   const logoutButton = screen.getByRole('button', { name: /logout/i });
  //   fireEvent.click(logoutButton);

  //   // Check that the token has been removed from local storage
  //   expect(localStorage.getItem(TOKEN_KEY)).toBeNull();
  //   // You would also need to mock the navigate function to check that it was called
  // });

  // ... (other tests)
});
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('Add Component', () => {
  it('removes token from local storage and navigates on logout',async () => {
    // Create a mock navigate function
    const mockNavigate = jest.fn();

    // Set the mock implementation of useNavigate to return the mock navigate function
    (useNavigate as jest.Mock).mockImplementation(() => mockNavigate);

    // Set a token in local storage before rendering the component
    await localStorage.setItem(TOKEN_KEY, 'mock-token');

    render(
      <Router>
        <Add />
      </Router>
    );

    // Simulate clicking the logout button
    const logoutButton = screen.getByRole('button', { name: /logout/i });
    fireEvent.click(logoutButton);

    // Check that the token has been removed from local storage
    expect(localStorage.getItem(TOKEN_KEY)).toBeNull();

    // Check that the navigate function was called with -1 to go back
    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });

  // ... (other tests)
});