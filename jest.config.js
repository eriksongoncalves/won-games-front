module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/styles/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/mock.ts',
    '!src/**/stories.tsx',
    '!src/styles/**/*.ts(x)?',
    '!src/pages/_*.ts(x)?',
    '!src/types/*',
    '!src/graphql/**/*.ts(x)?',
    '!src/utils/apollo.ts',
    '!src/components/index.ts',
    '!src/utils/index.ts',
    '!src/types/**/*.d.ts'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest']
};
