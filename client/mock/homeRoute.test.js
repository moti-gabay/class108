import { rest } from 'msw';
import { setupServer } from 'msw/node';
import TOKEN_KEY from "../src/constants/url"
import NavBar from "../src/components/header/NavBar"
import { MemoryRouter } from 'react-router-dom';

const handlers = [
  rest.post('/login', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ token: { role: 'admin', token: TOKEN_KEY } })
    );
  }),
];


export const server = setupServer(...handlers);

beforeAll(() => {
  server.listen()
console.log("server run ...");
});
afterEach(() => {
  server.resetHandlers()
  console.log("server reaset ...");
});
afterAll(() => {
  server.close()
  console.log("server off ...");
});


test("log in req" , () => {
  render(
    <MemoryRouter>

      <NavBar/>
    </MemoryRouter>
  )
  expect(localStorage.getItem(TOKEN_KEY)).to
  // 
  screen.debug()
})