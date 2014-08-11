module.exports = function(grunt) {
  'use strict';

  // Port number used for the live reload server.
  var LIVERELOAD_PORT = 35729;

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.initConfig({
    connect: {
      server: {
        options: {
          // This will serve the files inside public folder.
          base: 'public',
          // This will inject live reload script into the html.
          livereload: LIVERELOAD_PORT
        }
      }
    },

    watch: {
      all: {
        // See https://github.com/gruntjs/grunt-contrib-watch#files
        files: ['public/index.html', 'public/css/*.css'],
        options: {
          livereload: LIVERELOAD_PORT
        }
      }
    }
  });

  // Register new task 'server'.
  grunt.registerTask('server', function() {
    // Run 'connect' and 'watch' task.
    grunt.task.run([
      'connect',
      'watch'
    ]);
  });

  // Run default grunt task by typing 'grunt' in the terminal.
  // Make default task execute server task.
  grunt.registerTask('default', ['server']);
};
