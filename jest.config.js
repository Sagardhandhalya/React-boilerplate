/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  rootDir: 'src',
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/declarations/mock.js',
  },
}
