import { BrowserRouter as Router } from "react-router-dom"
import Category from "./Category"
import { fireEvent, render, screen } from "@testing-library/react"
import Categories from "./Category"
import { CATEGORY_LIST_ROUTE, LINK_LIST_ROUTE } from "../../constants/url"

const renderCategory = () => {
    render(
        <Router>
            <Category />
        </Router>
    )
}


describe("category ", () => {
    renderCategory()

    it("check if result from the search is on thee screen", () => {
        const searchInput = screen.getByRole('textbox', { name: /search/i });
        fireEvent.change(searchInput, { target: { value: "mui" } });
        expect(screen.getByText(/Search Results/i))
        expect(screen.getByText(/mui/i))
        expect(screen.getByText(/defult name/i))
        expect(screen.getByText(/defult url/i))
        screen.debug()
    });
    it('renders the correct number of categories', async () => {
        // Mock the API calls to get categories and links
        jest.mock('axios');
        const mockedAxios = require('axios');
        mockedAxios.get.mockImplementation((url: string) => {
            if (url === CATEGORY_LIST_ROUTE) {
                return Promise.resolve({ data: [{ _id: '1', name: 'Category  1' }, { _id: '2', name: 'Category  2' }] });
            } else if (url === LINK_LIST_ROUTE) {
                return Promise.resolve({ data: [] });
            }
        });

        // Render the Categories component
        const { findAllByTestId } = render(
            <Router>

                <Categories />
            </Router>
        );

        // Wait for the categories to be fetched and rendered
        const categoryElements = await findAllByTestId(/category-\d+/i);

        // Check the number of categories
        expect(categoryElements).toHaveLength(12);
    });
})