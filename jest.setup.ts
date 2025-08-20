// jest.setup.ts
import '@testing-library/jest-dom';
import 'whatwg-fetch'; 


const realFetch = global.fetch;


beforeAll(() => {
  Object.defineProperty(global, 'fetch', { value: jest.fn(), writable: true });
});


beforeEach(() => {
  (global.fetch as jest.Mock).mockReset();
});


afterAll(() => {
  Object.defineProperty(global, 'fetch', { value: realFetch, writable: true });
});
