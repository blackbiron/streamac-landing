module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      options: {
        implementation: require('node-sass'),
        sourceMap: true
      },
      dist: {
        files: {
          'build/application.css': 'source/stylesheets/application.sass'
        }
      }
    },
    watch: {
      sass: {
        files: ['source/stylesheets/**/*.sass'], // Watch for changes in Sass files
        tasks: ['sass'], // When changes detected, run the Sass task
        options: {
          livereload: true // Optional: Reload the browser when changes detected
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass']);
  grunt.registerTask('dev', ['watch']);
};
