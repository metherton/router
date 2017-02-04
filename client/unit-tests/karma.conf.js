module.exports = function(config){
  config.set({

    basePath : './../',

    files : [
      'bower_components/jquery/dist/jquery.js',
      'node_modules/angular/angular.js',
      'node_modules/angular-route/angular-route.js',
      'node_modules/angular-aria/angular-aria.js',
      'node_modules/angular-animate/angular-animate.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'node_modules/angular-material/angular-material.js',
      'built/common/users/users.js',
      'built/common/users/users-service.js',
      'built/common/routeadvice/routeadvices.js',
      'built/common/routeadvice/routeadvice-service.js',
      'built/app.js',
      'unit-tests/**/*.spec.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
        'karma-chrome-launcher',
        'karma-firefox-launcher',
        'karma-jasmine',
        'karma-junit-reporter'
        ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
