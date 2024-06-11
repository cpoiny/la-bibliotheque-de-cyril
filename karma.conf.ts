module.exports = function(config: any) {
    config.set({
      frameworks: ['jasmine'],
      browsers: ['Chrome', 'Edge', 'Firefox'],
      files: [
        'src/**/*.spec.ts'
      ],
      reporters: ['progress', 'coverage'],
      preprocessors: {
        'src/**/*.ts': ['coverage']
      },
      coverageReporter: {
        type : 'html',
        dir : 'coverage/'
      },
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      singleRun: false,
      concurrency: Infinity
    });
  };