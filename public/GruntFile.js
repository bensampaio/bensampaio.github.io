module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass : {
      styles : {
        options : {
          style : 'compressed'
        },
        files : {
          'styles/css/main.css' : 'styles/scss/main.scss'
        }
      }
    },
    uglify: {
      app : {
        options: {
          compress : true
        },
        files: {
          'js/app.min.js': [
            'js/app/init.js',
            'js/app/filters.js',
            'js/app/directives.js',
            'js/app/navigation.js',
            'js/app/sections.js'
          ],
        },
      }
    },
    watch : {
      css : {
        files : [ 'styles/scss/*.scss' ],
        tasks : [ 'sass' ]
      },
      js : {
        files: [ 'js/app/*.js' ],
        tasks : [ 'uglify' ]
      }
    }
  });

  // Load the plugins tasks.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'uglify', 'watch']);

};