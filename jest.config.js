module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx}"],
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"],
  transform: {
    "^.+\\.(js|jsx)?$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy",
  },
};

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx}"],
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./jest.setup.js"],
};
