import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";

import axios from "axios";
import AddCategory from "./AddCategory";

// Mock the axios module
jest.mock("axios");
const mockPost = axios.post as jest.MockedFunction<typeof axios.post>;
const renderAddCategoryComp = () => {
  render(
    <Router>
      <AddCategory />
    </Router>
  )
}
describe("AddCategory Component", () => {

  test("find all the buttons in the AddCategory conponent", () => {
    renderAddCategoryComp();
    const addCategoryBtns = screen.getAllByRole('button')
    expect(addCategoryBtns).toHaveLength(2)
  })

  test("AddCategory inputs number", () => {
    renderAddCategoryComp()
    const inputs = screen.getByRole('textbox',{name:"Category Name"})
    expect(inputs);
  });

  test("submits the category name when the form is submitted", async () => {
    mockPost.mockResolvedValue({ data: { name: "New Category" } });

    renderAddCategoryComp()

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
  test("check the name of the buttons in addCategory",()=>{
    renderAddCategoryComp()
    const addBtnEl = screen.getByRole('button',{name:/add/i})
    const backBtnEl = screen.getByRole('button',{name:/back/i})
    expect(addBtnEl).toBeInTheDocument()
    expect(backBtnEl).toBeInTheDocument()
  })
  test('check the title of the addCategory component' ,() => {
    renderAddCategoryComp()
    const titleEl = screen.getByRole('heading',{name:/add category/i})
    expect(titleEl).toBeInTheDocument()
  })
});
