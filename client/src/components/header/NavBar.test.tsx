import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';
import '@testing-library/jest-dom';
// import axios from 'axios';
// import { User } from '../../types/types';
// import { LOGIN_REQ, TOKEN_KEY } from '../../constants/url';


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
    
jest.mock('axios');

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