/**
 * Created by martin on 03/02/17.
 */
module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-typescript');

  grunt.initConfig({

    typescript: {
      base: {
        src: ['typings/**/*.ts','app/**/*.ts'],
        dest: 'target',
        options: {
          target: 'es5', //or es3
          basePath: 'app',
          sourceMap: true,
          declaration: true
        }
      }
    }
  });

  grunt.registerTask('default', ['typescript']);

};
