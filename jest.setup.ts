// jest.setup.ts


import '@testing-library/jest-dom';


import 'whatwg-fetch';


import { TextEncoder, TextDecoder } from 'util';

if (!global.TextEncoder) {
  // @ts-ignore
  global.TextEncoder = TextEncoder;
}
if (!global.TextDecoder) {
  // @ts-ignore
  global.TextDecoder = TextDecoder;
}


if (!globalThis.fetch || !globalThis.Request || !globalThis.Response) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { fetch, Headers, Request, Response } = require('cross-fetch');
  Object.assign(globalThis, { fetch, Headers, Request, Response });
}


const okJson = (data: unknown) =>
  new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });

beforeAll(() => {
  jest.spyOn(globalThis, 'fetch').mockImplementation(async () => okJson([]));
});

afterAll(() => {
  (globalThis.fetch as jest.Mock).mockRestore?.();
});


Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),            // compat legado
    removeListener: jest.fn(),         // compat legado
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }),
});
