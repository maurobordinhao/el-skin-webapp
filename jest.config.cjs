/** @type {import('jest').Config} */
module.exports = {
  coverageProvider: 'v8',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': ['ts-jest', { tsconfig: 'tsconfig.jest.json', useESM: false }],
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|sass|scss)$': '<rootDir>/test/__mocks__/styleMock.js',
    '\\.(gif|ttf|eot|svg|png|jpg|jpeg|webp)$': '<rootDir>/test/__mocks__/fileMock.js',
  },
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/dist/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/app/**',
    '!src/components/Footer/**',
    '!src/components/Header/HeaderAntigo.tsx',
    '!src/store/store.ts',
    '!src/store/hooks.ts',
    '!src/store/index.ts',
    '!src/service/carouselService.ts',
  ],
  coverageReporters: ['text', 'lcov', 'html'],
  coverageThreshold: { global: { statements: 80 } },
  transformIgnorePatterns: ['/node_modules/(?!(@testing-library|nanoid|uuid)/)']
};
