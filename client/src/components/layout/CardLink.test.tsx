import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import CardLink from './CardLink';
import '@testing-library/jest-dom';
// import axios from 'axios';

// Mock the axios module
jest.mock('axios');

describe('CardLink Component', () => {
  // Define a sample link object to pass as a prop
  const sampleLink = {
    _id: '1',
    name: 'Test Link',
    url: 'http://example.com',
    category: 'Test Category',
  };

  test('renders CardLink component with provided link details', () => {
    render(
      <Router>
        <CardLink {...sampleLink} />
      </Router>
    );

    const nameElement = screen.getByRole("button");
    const urlElement = screen.getByText(/url/i);

    expect(nameElement).toBeInTheDocument();
    expect(urlElement).toBeInTheDocument();
  });

//   test('calls deleteLink function when delete button is clicked', () => {
//     // Mock the window.confirm function
//     window.confirm = jest.fn(() => true);
//     // Mock the axios.delete function
//     axios.delete = jest.fn();

//     render(
//       <Router>
//         <CardLink {...sampleLink} />
//       </Router>
//     );

//     const deleteButton = screen.getByRole("button",{name:"deleteButton"});
//     fireEvent.click(deleteButton);

//     expect(window.confirm).toHaveBeenCalledWith('do you want to delete this link ?');
//     expect(axios.delete).toHaveBeenCalledWith(expect.stringContaining(sampleLink._id));
//   });

  // Add more tests as needed...
});