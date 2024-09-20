const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  // moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleDirectories: ['node_modules', 'src'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  testMatch: ['**/src/test/unit/**/*.test.js'],  // Ensures Jest looks in the correct path
  // testRegex: '(/src/test/unit/.*|(\\.|/)(test|spec))\\.js$', 
};

module.exports = createJestConfig(customJestConfig);
