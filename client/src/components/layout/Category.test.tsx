import { BrowserRouter as Router } from "react-router-dom"
import Category from "./Category"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import Categories from "./Category"
import { CATEGORY_LIST_ROUTE, LINK_LIST_ROUTE } from "../../constants/url"
import axios from "axios";

jest.mock("axios");

const renderCategory = () => {
    render(
        <Router>
            <Category />
        </Router>
    )
}
const data = [


    { _id: '6500675ef8e09161af1e4d7e', name: 'institution knowledge' }

    ,
    { _id: '650067dcf8e09161af1e4d80', name: 'software testing' }

    ,
    { _id: '65006804f8e09161af1e4d82', name: 'directory server' }
    ,
    { _id: '65006836f8e09161af1e4d84', name: 'containers' }
    ,
    { _id: '65006868f8e09161af1e4d86', name: 'installation folder' }
    ,
    { _id: '6501b6ac7687a365fb11f871', name: 'library' }
    ,
    { _id: '6501bba23beb0851afe9381b', name: 'services' }
]

describe("category ", () => {
    renderCategory()
it("should get all category" ,async() => {
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.get.mockResolvedValue({ data: data });renderCategory();

const category = await waitFor(() => screen.getByTestId(/institution knowledge/i))
expect(category).toBeInTheDocument()
})
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
        expect(categoryElements).toHaveLength(2);
    });


})