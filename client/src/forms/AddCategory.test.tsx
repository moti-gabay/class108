import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";

import axios from "axios";
import AddCategory from "./AddCategory";

// Mock the axios module
jest.mock("axios");
const mockPost = axios.post as jest.MockedFunction<typeof axios.post>;

describe("AddCategory Component", () => {
  test("submits the category name when the form is submitted", async () => {
    mockPost.mockResolvedValue({ data: { name: "New Category" } });

    render(
      <Router>
        <AddCategory />
      </Router>
    );

    const inputElement = screen.getByLabelText(/Category Name/i);
    fireEvent.change(inputElement, { target: { value: "New Category" } });

    const submitButton = screen.getByRole("button", { name: /Add/i });
    fireEvent.click(submitButton);

    // Use waitFor to wait for the mockPost to be called
    await waitFor(() => {
      expect(mockPost).toHaveBeenCalledWith(
        expect.any(String),
        { name: "New Category" },
        expect.any(Object)
      );
    });
  });
});
