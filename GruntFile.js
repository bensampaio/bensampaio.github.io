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
          'public/styles/css/main.css' : 'public/styles/scss/main.scss'
        }
      }
    },
    uglify: {
      app : {
        options: {
          compress : true
        },
        files: {
          'public/js/app.min.js': [
            'public/js/app/init.js',
            'public/js/app/directives.js',
            'public/js/app/navigation.js',
            'public/js/app/sections.js'
          ],
        },
      }
    },
    watch : {
      css : {
        files : [ 'public/styles/scss/*.scss' ],
        tasks : [ 'sass' ]
      },
      js : {
        files: [ 'public/js/app/*.js' ],
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