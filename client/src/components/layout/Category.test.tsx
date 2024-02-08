import { render, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Categories from './Category';
import axios from 'axios';
import { CATEGORY_LIST_ROUTE, LINK_LIST_ROUTE } from '../../constants/url';

jest.mock('axios');

describe('Categories', () => {
  it('fetches and displays links after mounting', async () => {
    // Mock the axios.get method to resolve with a successful response
    const mockGet = jest.fn().mockResolvedValue({
      data: [
        {
          _id: '1',
          name: 'Example Link 1',
          url: 'https://example.com',
          category: 'General 1',
        },
        {
            _id: '2',
            name: 'Example Link 2',
            url: 'https://example.com',
            category: 'General 2',
          },
          {
            _id: '3',
            name: 'Example Link 3',
            url: 'https://example.com',
            category: 'General 3',
          },
        // ... other links
      ],
    });
    axios.get = mockGet;

    const { getByText } = render(
      <Router>
        <Categories />
      </Router>
    );

    // Wait for the component to fetch and display the links
    await waitFor(() => {
      // Replace 'Example Link' with the actual text you expect to see
      expect(getByText('Example Link 1')).toBeInTheDocument();
      expect(getByText('Example Link 2')).toBeInTheDocument();
      expect(getByText('Example Link 3')).toBeInTheDocument();
    });

    // Assert that axios.get was called with the correct argument
    expect(mockGet).toHaveBeenCalledWith(LINK_LIST_ROUTE);
  });

  // ... (other test cases)
});
describe('Categories', () => {
    it('fetches and displays categories after mounting', async () => {
      // Mock the axios.get method to resolve with a successful response
      const mockGet = jest.fn().mockResolvedValue({
        data: [
          {
            _id: '1',
            name: 'Category  1',
          },
          {
            _id: '2',
            name: 'Category  2',
          },
          // ... other categories
        ],
      });
      axios.get = mockGet;
  
      const { getByText } = render(
        <Router>
          <Categories />
        </Router>
      );
  
      // Wait for the component to fetch and display the categories
      await waitFor(() => {
        // Replace 'Category  1' and 'Category  2' with the actual text you expect to see
        expect(getByText('Category  1')).toBeInTheDocument();
        expect(getByText('Category  2')).toBeInTheDocument();
      });
  
      // Assert that axios.get was called with the correct argument
      expect(mockGet).toHaveBeenCalledWith(CATEGORY_LIST_ROUTE);
    });
  
    // ... (other test cases)
  });