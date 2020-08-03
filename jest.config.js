module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  testRegex: '((\\.|/*.)(test))\\.(js|jsx)?$',
  setupFilesAfterEnv: ['./.jest/jest.setup.js'],
  snapshotResolver: './.jest/snapshotResolver.js',
}
