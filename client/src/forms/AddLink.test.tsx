import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AddLink from "./addLink";

describe("AddLink Component", () => {
 test("renders AddLink component and submits form", async () => {
    render(
      <Router>
        <AddLink />
      </Router>
    );

    const nameInput = screen.getByLabelText(/Name/i);
    const urlInput = screen.getByLabelText(/URL/i);
    const categoryInput = screen.getByTestId("select");
    const submitButton = screen.getByRole("button", { name: /Add/i });
// const els = [
// nameInput,
// urlInput,
// categoryInput,
// submitButton
// ];
// expect(els).toBeInTheDocument();
    fireEvent.change(nameInput, { target: { value: "Test Link" } });
    fireEvent.change(urlInput, { target: { value: "http://example.com" } });
    fireEvent.change(categoryInput, { target: { value: "Test Category" } });

    fireEvent.click(submitButton);

    // Add assertions here to check if the form submission was successful
    // For example, you might check if a certain message is displayed, or if a certain API call was made
 });
});