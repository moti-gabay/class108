import { render, screen } from "@testing-library/react"
import EditLink from "./EditLink"
import { BrowserRouter as Router } from 'react-router-dom';


describe("test the buttton in the screen ", () => {
  it("tow buttons found", () => {

    render(
      <Router>

        <EditLink />
      </Router>

    )
    const editButton = screen.getByRole('button',{name:'Edit'});
    const backButton = screen.getByRole('button',{name:'back'});
    expect(editButton).toBeInTheDocument()
    expect(backButton).toBeInTheDocument()
  })
})