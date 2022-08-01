const path = require('path');

exports.config = {
    specs: [
      './src/specs/**/*.ts'
    ],
    specFileRetries: 0,
    maxInstances: 1,
    maxInstancesPerCapability: 1,
    framework: 'jasmine',
    jasmineOpts: {
      invertGrep: false,
      isVerbose: false,
    },
    logLevel: 'debug',
    runner: 'local',
    outputDir: path.resolve(__dirname, 'logs'),
    reporters: ['spec'],
  };