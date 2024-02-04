// import { fireEvent, render, screen, waitFor } from "@testing-library/react";
// import { BrowserRouter as Router } from "react-router-dom";
// import Category from "./Category";
// import "@testing-library/jest-dom";
// import axios from "axios";

// // Mock the axios module
// jest.mock("axios");

// describe("Category Component", () => {
//   // Define a sample category and links to pass as props
//   const sampleCategories = [
//     { name: "Category 1", _id: "cat1" },
//     { name: "Category 2", _id: "cat2" },
//   ];

//   const sampleLinks = [
//     {
//       name: "Link 1",
//       url: "http://link1.com",
//       category: "Category 1",
//       _id: "link1",
//     },
//     {
//       name: "Link 2",
//       url: "http://link2.com",
//       category: "Category 2",
//       _id: "link2",
//     },
//   ];

//   // Mock the API calls to return the sample data
//   (axios.get as jest.Mock).mockImplementation((url: string) => {
//     if (url === "EXPECTED_SUCCESS_URL") {
//       return Promise.resolve({ data: sampleCategories });
//     } else if (url === "LINK_LIST_ROUTE") {
//       return Promise.resolve({ data: sampleLinks });
//     }
//     return Promise.reject(new Error("not found"));
//   });
//   // axios.get.mockResolvedValueOnce({
//   //   data: [{ name: 'Category 1', _id: 'cat1' }],
//   // });
//   // (axios.get as jest.Mock).mockImplementation(() => {
//   //   return Promise.resolve({ data: sampleCategories }), Promise.resolve({ data: sampleLinks });

//   //   return Promise.reject(new Error("not found"));
//   // });

//   test("renders Category component with categories and links", async () => {
//     render(
//       <Router>
//         <Category />
//       </Router>
//     );

//     // Wait for the categories to be fetched and rendered
//     for (const category of sampleCategories) {
//       expect(await screen.findByText(category.name)).toBeInTheDocument();
//     }
//     await waitFor(() => {
//       expect(screen.getByText("Category 1")).toBeInTheDocument();
//     });
//     expect(await screen.findByText("Category 1")).toBeInTheDocument();

//     // Wait for the links to be fetched and rendered
//     for (const link of sampleLinks) {
//       expect(await screen.findByText(link.name)).toBeInTheDocument();
//     }
//     // Inside your test
//     // expect(
//     //   await screen.findByText((content, node: any) => {
//     //     const hasText = (node) => node.textContent === "Category 1";
//     //     const nodeHasText = hasText(node);
//     //     const childrenDontHaveText = Array.from(node.children).every(
//     //       (child) => !hasText(child)
//     //     );

//     //     return nodeHasText && childrenDontHaveText;
//     //   })
//     // ).toBeInTheDocument();
//   });

//   test("filters links based on search input", async () => {
//     render(
//       <Router>
//         <Category />
//       </Router>
//     );

//     // Simulate user typing into the search input
//     const searchInput = screen.getByPlaceholderText("Search....");
//     fireEvent.change(searchInput, { target: { value: "Link 1" } });

//     // Wait for the component to update based on the search input
//     // expect(await screen.findByText('Link 1')).toBeInTheDocument();
//     expect(screen.queryByText("Link 2")).not.toBeInTheDocument();
//   });
//   // Inside your test, after rendering
//   screen.debug();
//   // Add more tests as needed...
// });
