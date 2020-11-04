module.exports = {
  // Load setup-tests.js before test execution
  setupFilesAfterEnv: ['<rootDir>setup-tests.js'],
  preset: "jest-expo",
  transform: {
    "^.+\\.jsx$": "babel-jest",
    "^.+\\.js$": "babel-jest"
  },
  moduleDirectories: [
    "node_modules"
  ],
  testEnvironment: "jsdom"
};
