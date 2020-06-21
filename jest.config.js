module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  snapshotSerializers: ["jest-emotion"],
  collectCoverage: true,
  coverageReporters: ["lcov"],
  coverageDirectory: "test-coverage",
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  moduleDirectories: ["node_modules", "src"],
};
