const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts', 'jest-axe/extend-expect'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/dist'],
  collectCoverage: false,
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/components/$1',
    '^@config/(.*)$': '<rootDir>/config/$1',
    '^@pages/(.*)$': '<rootDir>/pages/$1',
    '^@schemas/(.*)$': '<rootDir>/schemas/$1',
    '^@tests/(.*)$': '<rootDir>/tests/$1',
  },
};

module.exports = createJestConfig(customJestConfig);
