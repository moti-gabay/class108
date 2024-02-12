import {  fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import AddLink from "./addLink";
import { CATEGORY_LIST_ROUTE, LINK_LIST_ROUTE } from "../constants/url";



const renderAddLink = () => {
    render(
        <Router>
            <AddLink />
        </Router>
    )
}
jest.mock('axios');
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate:() =>jest.fn(),
  }));
describe('AddLink', () => {
    // it('navigates back when the back button is clicked', () => {
    //     // Set up the mock navigate function
    //     const mockNavigate = jest.fn();
    //     useNavigate.mockReturnValue(() =>mockNavigate);
    
    //     // Render the AddLink component
    //     const { getByRole } = render(<AddLink />);
    
    //     // Click the back button
    //     fireEvent.click(getByRole('button', { name: /back/i }));
    
    //     // Check if the navigate function was called with -1
    //     expect(mockNavigate).toHaveBeenCalledWith(-1);
    //   });
    it('renders the correct number of categories in the select option', async () => {
        // Mock the API calls to get categories and links
        jest.mock('axios');
        const mockedAxios = require('axios');
        mockedAxios.get.mockImplementation((url: string) => {
            if (url === CATEGORY_LIST_ROUTE) {
                return Promise.resolve({ data: [{ _id: '1', name: 'Category  1' }, { _id: '2', name: 'Category  2' }, { _id: '3', name: 'Category  3' }] });
            } else if (url === LINK_LIST_ROUTE) {
                return Promise.resolve({ data: [] });
            }
        });

        // Render the Categories component
        renderAddLink()

        // Wait for the categories to be fetched and rendered
        const optionElements = await screen.findAllByRole('option');
        screen.debug()
        // Check the number of categories
        expect(optionElements).toHaveLength(3);
    });
    // it('submits the form successfully', async () => {
    //     // Define the mock response for the GET request
    //     const mockCategoriesResponse = [
    //         { _id: '1', name: 'Category  1' },
    //         { _id: '2', name: 'Category  2' },
    //     ];

    //     // Set up the mock to resolve the promise with the mock response
    //     mockedAxios.get.mockResolvedValueOnce({ data: mockCategoriesResponse });

    //     // Render the AddLink component
    //     const { getByLabelText, getByRole,getByText } = render(
    //         <Router>
    //             <AddLink />
    //         </Router>

    //     );

    //     // Fill out the form fields
    //     fireEvent.change(getByLabelText('Name'), { target: { value: 'Test Name' } });
    //     fireEvent.change(getByLabelText('URL'), { target: { value: 'https://example.com' } });
    //     fireEvent.change(getByLabelText('category'), { target: { value: 'Test Category' } });

    //     // Submit the form
    //     fireEvent.click(getByRole('button', { name: /add/i }));

    //     // Wait for the form to be submitted and the promise to resolve
    //     await waitFor(() => expect(mockedAxios.post).toHaveBeenCalledTimes(1));

    //     // Optionally, you can also check for UI changes after submission, such as a success message
    //     const successMessage = getByText('Link added successfully');
    //     expect(successMessage).toBeInTheDocument();
    // });
});

describe("AddLink Component", () => {
    test("test AddLink", () => {
        renderAddLink()
        const inputs = screen.getAllByRole('textbox')
        const buttons = screen.getAllByRole('button')
        expect(inputs).toHaveLength(2)
        expect(buttons).toHaveLength(2)
    });

});
