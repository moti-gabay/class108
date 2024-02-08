import { server } from './homeRoute.test'; // Adjust the path to where your server setup is located
import { loginReq } from '../src/components/header/NavBar'; // Adjust the path to where your loginReq function is located
import { TOKEN_KEY } from '../src/constants/url';

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

describe('loginReq', () => {
  it('should successfully log in and store the token', async () => {
    const user = { name: 'test', password: 'test' };
    const result = await loginReq(user);

    expect(result).toEqual({ token: { role: 'admin', token: 'mock-token' } });
    expect(localStorage.getItem(TOKEN_KEY)).toBe('mock-token');
  });
});