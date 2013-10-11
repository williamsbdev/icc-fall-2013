module.exports = function(karma) {
    karma.set({
        basePath: '.',
        frameworks: ["qunit"],
        files: [
          // "lib/deps.min.js",
          "tests/*.js"
        ],
        port: 9876,
        colors: true,
        logLevel: karma.LOG_ERROR,
        browsers: ['PhantomJS'],
        singleRun: true,
        autoWatch: false,

        plugins: [
            'karma-qunit',
            'karma-phantomjs-launcher'
        ]
    });
};
