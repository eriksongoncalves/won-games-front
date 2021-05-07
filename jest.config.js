module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/styles/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/stories.tsx',
    '!src/styles/**/*.ts(x)?',
    '!src/pages/_*.ts(x)?',
    '!src/types/*'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest']
};
