module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          port: 80
        }
      }
    },
    jade: {
      compile: {
      files: [
      {
        expand: true,
        cwd: 'html',
        src: ['*.jade'],
        dest: 'html',
        ext: '.html'
      }
      ],
      options: {
        pretty: true
      }
    },
    },
    less: {
      compile: {
      files: [
      {
        expand: true,
        cwd: 'html/css',
        src: ['*.less'],
        dest: 'html/css',
        ext: '.css'
      }
      ],
    },
    },
    watch: {
      preview: {
        files: ['html/*.jade'],
        tasks: ['jade'],
        options: {livereload:true},
      },
      styles: {
        files: ['html/css/*.less'],
        tasks: ['less'],
        options: {livereload:true},
      },
      assets: {
        files: ['html/**/*.js']
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  //grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-connect');
  //grunt.loadNpmTasks('grunt-contrib-lesselements');
  //grunt.loadNpmTasks('grunt-newer');

  grunt.registerTask('default', ['connect','watch']);
};