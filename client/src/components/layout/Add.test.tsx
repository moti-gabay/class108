import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from "@testing-library/react";
import Add from "./Add";
const renderAddComp =() => {
  render(
    <Router>
      <Add />
    </Router>
  );
}
describe("Add Component", () => {
 test("renders Add component with 'Add category' when add state is true", () => {
  renderAddComp();
    const addElement = screen.getByText(/Add category/i);
    expect(addElement).toBeInTheDocument();
 });

 test("renders Add component with 'Add link' when add state is false", () => {
  renderAddComp();
    const addElement = screen.getByText(/Add link/i);
    expect(addElement).toBeInTheDocument();
 });

 test("toggles between 'Add category' and 'Add link' when button is clicked", () => {
  renderAddComp();
    const buttonLink = screen.getByRole('button',{name:/add link/i});
    fireEvent.click(buttonLink);
    const addElement = screen.getByRole('heading',{name:/Add link/i});
    expect(addElement).toBeInTheDocument();
 });

 test("find the buttons ",() => {
  renderAddComp();
  const btnsEl = screen.getAllByRole('button')
  expect(btnsEl).toHaveLength(4)
 })

//  test("calls the nav function when logout button is clicked", () => {
//     const mockNav = jest.fn();
//     jest.spyOn(require('react-router-dom'), 'useNavigate').mockReturnValue(mockNav);
//      renderAddComp();
//     const logoutButton = screen.getByText(/logout/i);
//     fireEvent.click(logoutButton);
//     expect(mockNav).toHaveBeenCalledWith(-1);
//  });
 });
