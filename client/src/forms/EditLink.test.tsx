import { render, screen, waitFor } from "@testing-library/react"
import EditLink from "./EditLink"
import { BrowserRouter as Router } from 'react-router-dom';
import axios from "axios";

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

// Mock useParams hook to return a specific id
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn().mockReturnValue({ id: '1' }),
}));


describe("test the buttton in the screen ", () => {
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
    const { getByLabelText } =  render(
      <Router>
        <EditLink />
      </Router>

    )

    // Wait for the link info to be fetched and the state to be updated
    await waitFor(() => {
      expect(getByLabelText('name')).toBe(mockLinkInfoResponse.name);
      expect(getByLabelText('url')).toBe(mockLinkInfoResponse.url);
      expect(getByLabelText('category')).toBe(mockLinkInfoResponse.category);
    });
  });
  it("tow buttons found", () => {

    render(
      <Router>
        <EditLink />
      </Router>

    )
    const editButton = screen.getByRole('button',{name:/Edit/i});
    const backButton = screen.getByRole('button',{name:/back/i});
    expect(editButton).toBeInTheDocument()
    expect(backButton).toBeInTheDocument()
  })

})