import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "jest-environment-jsdom",
  modulePathIgnorePatterns: ["dist/", "__tests__/mocks/", "__tests__/utils/"],
  coverageDirectory: ".",
  transform: {
    ".(js|jsx)": "babel-jest",
    ".(ts|tsx)": ["ts-jest", { tsconfig: "tsconfig.app.json" }],
  },
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "<rootDir>/__tests__/mocks/file.ts",
    "\\.(svg|png|jpg|jpeg|gif)": "<rootDir>/__tests__/mocks/file.ts",
    "^@/shared/constants/environments":
      "<rootDir>/__tests__/mocks/environments.ts",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  setupFiles: ["<rootDir>/src/setupTestEnv.ts"],
};

export default config;
