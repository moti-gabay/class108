import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';
import '@testing-library/jest-dom';


test('renders NavBar component', () => {
 render(
   <Router>
     <NavBar />
   </Router>
 );
 const btnEl = screen.getByRole("button");
 expect(btnEl).toBeInTheDocument();
});

// jest.spyOn(React, 'useState').mockReturnValue([true]);

// test('renders NavBar component inputs', async () => {
//     render(
//       <Router>
//         <NavBar />
//       </Router>
//     );
//     const nameInput = await screen.findByRole("textbox",{name:/name/i});
//     const passwordInput = await screen.findByRole("textbox",{name: /password/i});
//     expect(nameInput).toBeInTheDocument();
//     expect(passwordInput).toBeInTheDocument();
// });
test('renders NavBar component', () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );
    const imgEl = screen.getByRole("img");
    expect(imgEl).toBeInTheDocument();
   });

   test('checks if the button redirects to Home page', () => {
     const historyMock = jest.fn();
      window.history.pushState = jest.fn().mockImplementation(()=>{
            return historyMock;
      })
     })
    //  test('displays login form when user is not logged in', () => {
    //     render(
    //        <Router>
    //          <NavBar />
    //        </Router>
    //     );
    //     const loginForm = screen.getByText(/login/i);
    //     expect(loginForm).toBeInTheDocument();
    //    });
    // test('displays add link button when user is logged in', () => {
    //     render(
    //        <Router>
    //          <NavBar />
    //        </Router>
    //     );
    //     const addLinkButton = screen.getByText(/add link/i);
    //     expect(addLinkButton).toBeInTheDocument();
    //    });
    
    // jest.spyOn(React, 'useState').mockReturnValue([true, jest.fn()]);
    // describe('NavBar Component', () => {
    //  test('renders NavBar component', () => {
    //     render(
    //       <Router>
    //         <NavBar />
    //       </Router>
    //     );
    
    //     // Check if the image is present
    //     const imgEl = screen.getByRole('img');
    //     expect(imgEl).toBeInTheDocument();
    
    //     // Check if the login form is present
    //     const loginForm = screen.getByText(/login/i);
    //     expect(loginForm).toBeInTheDocument();
    //  });
    // });