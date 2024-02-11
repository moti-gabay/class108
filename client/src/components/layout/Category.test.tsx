import { BrowserRouter as Router } from "react-router-dom"
import Category from "./Category"
import { fireEvent, render, screen } from "@testing-library/react"

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
    })
})