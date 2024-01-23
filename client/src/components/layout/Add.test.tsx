import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import Add from "./Add";

describe("Add Component", () => {
 test("renders Add component with 'Add category' when add state is true", () => {
    render(
      <Router>
        <Add />
      </Router>
    );
    const addElement = screen.getByText(/Add category/i);
    expect(addElement).toBeInTheDocument();
 });

 test("renders Add component with 'Add link' when add state is false", () => {
    render(
      <Router>
        <Add />
      </Router>
    );
    const addElement = screen.getByText(/Add link/i);
    expect(addElement).toBeInTheDocument();
 });

//  test("toggles between 'Add category' and 'Add link' when button is clicked", () => {
//     render(
//       <Router>
//         <Add />
//       </Router>
//     );
//     const button = screen.getByRole('button');
//     fireEvent.click(button);
//     const addElement = screen.getByText(/Add link/i);
//     expect(addElement).toBeInTheDocument();
//  });

//  test("calls the nav function when logout button is clicked", () => {
//     const mockNav = jest.fn();
//     jest.spyOn(require('react-router-dom'), 'useNavigate').mockReturnValue(mockNav);
//     render(
//       <Router>
//         <Add />
//       </Router>
//     );
//     const logoutButton = screen.getByText(/logout/i);
//     fireEvent.click(logoutButton);
//     expect(mockNav).toHaveBeenCalledWith(-1);
//  });
 });

describe("Add Component", () => {
  test("renders Add component", () => {
    render(
      <Router>
        <Add />
      </Router>
    );
    const addElement = screen.getByText(/Add category/i);
    expect(addElement).toBeInTheDocument();
  });

});
