import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import NavBar from './NavBar';
import '@testing-library/jest-dom';
// import { LOGIN_REQ } from '../../constants/url';
// import axios from 'axios';
// import React from 'react';
// import axios from 'axios';
// import { User } from '../../types/types';
// import { LOGIN_REQ, TOKEN_KEY } from '../../constants/url';
// const renderNavBar = (isGust : boolean) => {
//    render(
//     <Router>
//       <NavBar isGust={isGust} />
//     </Router>
//   );
// }

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

jest.mock('axios');

jest.mock('axios', () => ({
  post: jest.fn(),
}));

describe('NavBar Component', () => {
  it('navigates to the home page when the image is clicked', () => {
    // Create a mock navigate function
    const mockNavigate = jest.fn();

    // Set the mock implementation of useNavigate to return the mock navigate function
    (useNavigate as jest.Mock).mockImplementation(() => mockNavigate);

    render(
      <Router>
        <NavBar />
      </Router>
    );

    // Find the image element and simulate a click event
    const imgElement = screen.getByRole('img', { name: '' }); // Adjust the query as needed to match your image
    fireEvent.click(imgElement);

    // Check that the navigate function was called with '/' to navigate to the home page
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });

 
   test('checks if the button redirects to Home page', () => {
     const historyMock = jest.fn();
      window.history.pushState = jest.fn().mockImplementation(()=>{
            return historyMock;
      })
     })
     

  it('displays the login form when the image-login button is clicked', () => {
   
    // Mock the useNavigate hook to prevent navigation during the test
    (useNavigate as jest.Mock).mockImplementation(() => jest.fn());

    // Render the NavBar component
    render(
      <Router>
        <NavBar />
      </Router>
    );

    // Find the button with data-testid="image-login" and simulate a click event
    const loginButton = screen.getByRole('button',{name:'image-login'});
    fireEvent.click(loginButton);

    // Check that the login form is present in the document
    const loginForm = screen.getByRole('form');
    expect(loginForm).toBeInTheDocument();

   
  });

  // it('sends form data to the server when the login form is submitted', async () => {
  //   // Mock the useNavigate hook to prevent navigation during the test
  //   (useNavigate as jest.Mock).mockImplementation(() => jest.fn());

  //   // Mock the axios.post method to resolve with a successful response
  //   const mockPost = jest.fn().mockResolvedValue({
  //     data: {
  //       token: {
  //         role: 'admin',
  //         token: 'mock-token',
  //       },
  //     },
  //   });
  //   axios.post = mockPost;

  //   // Render the NavBar component
  //    const  { getByTestId } = render(
  //     <Router>
  //       <NavBar />
  //     </Router>
  //   );
  //   const loginButton = screen.getByRole('button',{name:'image-login'});
  //   fireEvent.click(loginButton);
  //   // Find the login form and simulate filling out the form
  //   const nameInput = screen.getByPlaceholderText(/name/i);
  //   const passwordInput = screen.getByPlaceholderText(/password/i);
  //   fireEvent.change(nameInput, { target: { value: 'Test User' } });
  //   fireEvent.change(passwordInput, { target: { value: 'password123' } });

  //   // Find the submit button and simulate a click event
  //   const submitButton = getByTestId(/login-btn/i );
  //   fireEvent.click(submitButton);

  //   // Check that axios.post was called with the correct arguments
  //   expect(mockPost).toHaveBeenCalledWith(LOGIN_REQ, {
  //     name: 'Test User',
  //     password: 'password123',
  //   });
  // });
 
});

afterEach(() => {
  jest.resetAllMocks();
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
    


// describe('loginReq', () => {
//   it('should log in successfully and update local storage', async () => {
//     // Mock the axios.post method to resolve with a successful response
//     const mockPost = jest.fn().mockResolvedValue({
//       data: {
//         token: {
//           role: 'admin',
//           token: 'mock-token',
//         },
//       },
//     });
//     axios.post = mockPost;

//     // Call the loginReq function with a mock user object
//     const mockUser: User = {
//       name: 'Test User',
//       password: 'password123',
//     };
//     await NavBar.loginReq(mockUser);

//     // Assert that axios.post was called with the correct arguments
//     expect(mockPost).toHaveBeenCalledWith(LOGIN_REQ, mockUser);

//     // Assert that local storage was updated correctly
//     expect(localStorage.getItem(TOKEN_KEY)).toEqual('mock-token');
//   });

//   it('should handle login failure', async () => {
//     // Mock the axios.post method to reject with an error
//     const mockPost = jest.fn().mockRejectedValue(new Error('Login failed'));
//     axios.post = mockPost;

//     // Call the loginReq function with a mock user object
//     const mockUser: User = {
//       name: 'Test User',
//       password: 'wrong-password',
//     };
//     try {
//       await NavBar.loginReq(mockUser);
//     } catch (error) {
//       // Assert that an error was thrown
//       expect(error).toEqual(new Error('Login failed'));
//     }
//   });
// });