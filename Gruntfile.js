module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {}
            }
        },
        jade: {
            compile: {
                files: [{
                    expand: true,
                    cwd: 'html',
                    src: ['*.jade'],
                    dest: 'html',
                    ext: '.html'
                }]
            },
        },
        less: {
            compile: {
                files: [{
                    expand: true,
                    cwd: 'html/css',
                    src: ['*.less'],
                    dest: 'html/css',
                    ext: '.css'
                }],
            },
        },
        uglify: {
            main: {
                options: {
                    beautify: true
                },
                files: {
                    'js/app.min.js': ['js/app.js']
                }
            },
        },
        watch: {
            html: {
                files: ['html/*.jade'],
                tasks: ['jade'],
                options: {
                    livereload: true,
                },
            },
            styles: {
                files: ['html/css/*.less'],
                tasks: ['less'],
                options: {
                    livereload: true,
                },
            },
            scripts: {
                files: ['js/app.js'],
                tasks: ['uglify'],
                options: {
                    livereload: true,
                },
            },
        }
    });

    // Load the plugin that provides the "uglify" task.
    //grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.loadNpmTasks('grunt-newer');

    grunt.registerTask('default', ['connect', 'watch']);
};
