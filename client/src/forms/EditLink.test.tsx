import { render, waitFor } from '@testing-library/react';
import EditLink from './EditLink';
import axios from 'axios';
import { Router } from 'react-router-dom';

// Mock axios module
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

// Mock useParams hook to return a specific id
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn().mockReturnValue({ id: '1' }),
}));

describe('EditLink', () => {
  it('fetches link info successfully', async () => {
    // Define the mock response for the GET request
    const mockLinkInfoResponse = {
      name: 'Test Link',
      url: 'https://testlink.com',
      category: 'Test Category',
    };

    // Set up the mock to resolve the promise with the mock response
    mockedAxios.get.mockResolvedValueOnce({ data: mockLinkInfoResponse });

    // Render the EditLink component
    const { getByLabelText } = render(
      <Router>
        <EditLink/>
      </Router>
    );

    // Wait for the link info to be fetched and the state to be updated
    await waitFor(() => {
      const nameInput = getByLabelText('name') as HTMLInputElement;
      const urlInput = getByLabelText('url') as HTMLInputElement;
      const categoryInput = getByLabelText('category') as HTMLInputElement;

      expect(nameInput.value).toBe(mockLinkInfoResponse.name);
      expect(urlInput.value).toBe(mockLinkInfoResponse.url);
      expect(categoryInput.value).toBe(mockLinkInfoResponse.category);
    });
  });
});