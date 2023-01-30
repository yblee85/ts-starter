import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  moduleNameMapper: {
    'src/(.*)$': '<rootDir>/src/$1',
  },
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: '.',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s', '!**/*.config.ts', '!**/.*rc.js', '!**/*.module.ts'],
  coverageDirectory: './coverage',
  testEnvironment: 'node',
  setupFiles: ['dotenv/config'],
  modulePathIgnorePatterns: ['dist', 'coverage'],
  coveragePathIgnorePatterns: ['node_modules', 'test'],
  maxWorkers: '50%',
};

export default config;