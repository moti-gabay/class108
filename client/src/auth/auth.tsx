// import { render, screen } from '@testing-library/react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import AuthAdmin from './AuthAdmin';
// // import { useNavigate } from 'react-router-dom';
// // import axios from 'axios';



// jest.mock('react-router-dom', () => ({
//  ...jest.requireActual('react-router-dom'),
//  useNavigate: jest.fn(),
// }));

// jest.mock('axios', () => ({
//  get: jest.fn(),
// }));

// describe('AuthAdmin Component', () => {
//  test('navigates to * when token is invalid', async () => {
//     const navigateMock = jest.fn();
//     // useNavigate.mockImplementation(() => navigateMock);
//     // axios.get.mockResolvedValueOnce({ data: null });

//     render(
//       <Router>
//         <AuthAdmin />
//       </Router>
//     );

//     await screen.findByText(/loading/i);
//     expect(navigateMock).toHaveBeenCalledWith('*');
//  });
// });