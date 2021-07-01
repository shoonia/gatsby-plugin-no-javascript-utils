/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  rootDir: '.',
  setupFiles: [
    '<rootDir>/tests/setEnvVars.js',
  ],
};
