import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import EditLink from "./EditLink";

// Mock the axios module
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("EditLink Component", () => {
  beforeEach(() => {
    // Mock data for categories
    const categoriesData = [
      { _id: "cat1", name: "Category 1" },
      { _id: "cat2", name: "Category 2" },
    ];

    // Mock the GET request for fetching categories
    mockedAxios.get.mockImplementation((url) => {
      if (url.includes("CATEGORY_LIST_ROUTE")) {
        return Promise.resolve({ data: categoriesData });
      }
      // Mock data for the link to be edited
      const linkData = {
        name: "Original Name",
        url: "http://original-url.com",
        category: "Category 1",
      };
      if (url.includes("LINK_INFO_ROUTE")) {
        return Promise.resolve({ data: linkData });
      }
      return Promise.reject(new Error("not found"));
    });

    // Reset mocks before each test
    mockedAxios.put.mockReset();
  });

  test("renders EditLink component and submits edited form", async () => {
    render(
      <Router>
        <EditLink />
      </Router>
    );

    // Wait for the component to fetch and display the link data
    await waitFor(() => {
      expect(screen.getByTestId(/name/i)).toHaveValue("Original Name");
      expect(screen.getByTestId(/url/i)).toHaveValue("http://original-url.com");
      // Check if the category select has the correct options
      expect(screen.getByRole("option", { name: "Category 1" })).toBeInTheDocument();
      expect(screen.getByRole("option", { name: "Category 2" })).toBeInTheDocument();
    });

    // Simulate editing the form fields
    fireEvent.change(screen.getByTestId(/name/i), { target: { value: "Edited Name" } });
    fireEvent.change(screen.getByTestId(/url/i), { target: { value: "http://edited-url.com" } });
    fireEvent.change(screen.getByRole("combobox"), { target: { value: "Category 2" } });

    // Simulate form submission
    fireEvent.click(screen.getByRole("button", { name: /edit/i }));

    // Expect the PUT request to have been made with the edited data
    await waitFor(() => {
      expect(mockedAxios.put).toHaveBeenCalledWith(expect.any(String), {
        name: "Edited Name",
        url: "http://edited-url.com",
        category: "Category 2",
      }, expect.any(Object));
    });
  });
});