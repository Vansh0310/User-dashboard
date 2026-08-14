module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/test/setup.js'],
    testMatch: ['<rootDir>/src/**/*.test.[jt]s?(x)'],
    moduleNameMapper: {
      '\\.css$': 'identity-obj-proxy',
    },
  }