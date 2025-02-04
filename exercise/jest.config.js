module.exports = {
  testEnvironment: "node",
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 90,
      lines: 90,
      statements: 90,
    },
    collectCoverageFrom: ["bookManager.js"]
  },
};
