// jest.config.ts
import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',

  // setup de matchers (testing-library/jest-dom, etc.)
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  // mocks de assets e estilos
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(png|jpg|jpeg|svg)$': '<rootDir>/__mocks__/fileMock.ts',
  },

  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testMatch: ['**/*.test.ts?(x)'],
  clearMocks: true,

  // ===== Cobertura =====
  collectCoverage: true,
  coverageReporters: ['text', 'lcov', 'html'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',        // mede tudo em src
    '!src/index.tsx',           // entrypoint do React
    '!src/reportWebVitals.ts',  // boilerplate CRA
    '!src/react-app-env.d.ts',  // tipos gerados
    '!src/**/*.d.ts',           // arquivos de definição
    '!src/styles/**',           // temas/estilos
    '!src/**/types{,/**}/*',    // pastas de tipos
    '!src/**/test/**',          // helpers de teste
    '!src/setupTests.ts',       // setup do testing library
    '!src/config/**',           // configs puras
    '!src/components/Header/HeaderAntigo.tsx', //legados
    '!src/reducers/**',
    '!src/store/index.ts',
    '!src/service/api.ts',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/__mocks__/',
  ],

  // Metas mínimas 
  // coverageThreshold: {
  //   global: { statements: 80, branches: 70, functions: 70, lines: 80 },
  // },
};

export default config;