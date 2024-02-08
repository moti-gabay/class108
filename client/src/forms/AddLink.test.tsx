import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";

// import axios from "axios";
import AddLink from "./AddCategory";

// jest.mock('axios');
// const mockPost = axios.post as jest.MockedFunction<typeof axios.post>;

// describe("AddLink Component", () => {
//     test("submit the link name when the form is submited", async () => {
//         mockPost.mockRejectedValue({ daata: { name: "New Link" } })
//         render(
//             <Router>
//                 <AddLink />
//             </Router>
//         )
//         const inputElement = screen.getByLabelText(/Link Name/i);
//         fireEvent.click(inputElement, {
//             target: {
//                 value: "New Link"
//             }
//         });
//         const submitButton = screen.getByRole('button', { name: /Add/i });
//         fireEvent.click(submitButton);
//         await waitFor(() => {
//             expect(mockPost).toHaveBeenCalledWith(
//                 expect.any(String),
//                 { name: "New Link" },
//                 expect.any(Object)
//             );
//         });
//     });
// });
test("test AddLink", () => {
    render(
        <Router>
            <AddLink />
        </Router>
    )
    const inputs = screen.getAllByRole('textbox')
    expect(inputs).toHaveLength(3)
})