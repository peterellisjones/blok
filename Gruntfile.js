/**
 * Gruntfile.js
 *
 * Copyright (c) 2012 quickcue
 */


module.exports = function(grunt) {
    // Load dev dependencies
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take for build time optimizations
    require('time-grunt')(grunt);

    // Configure the app path
    var base = 'app';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        bowercopy: grunt.file.readJSON('bowercopy.json'),
        // The actual grunt server settings
        connect: {
            options: {
                port: 9001,
                livereload: 35729,
                // Change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    open: true,
                    base: [ base ]
                }
            }
        },
        coffeelint: {
          app: ['app/src/*.coffee']
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [ base + '/js/*.js' ]
        },
        jsonlint: {
            pkg: [ 'package.json' ],
            bower: [ '{bower,bowercopy}.json' ]
        },
        watch: {
            js: {
                files: [
                    '<%= jshint.all %>'
                ],
                tasks: ['jshint']
            },
            coffee: {
              files: [
                'app/src/**/*.coffee',
              ],
              tasks: ['coffeelint', 'coffee']
            },
            json: {
                files: [
                    '{package,bower}.json'
                ],
                tasks: ['jsonlint']
            },
            // Live reload
            reload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '**/*.js',
                    '<%= watch.json.files %>',
                    base + '/css/**/*.css',
                    '**/*.html'
                ]
            }
        },
        coffee: {
          app: {
            options: {
              sourceMap: true
            },
            files: [
              {
                expand: true,
                cwd: 'app/src',
                src: ['**/*.coffee'],
                dest: 'app/js',
                ext: '.js'
              }
            ]
          }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-coffeelint');

    grunt.registerTask('serve', function () {
        grunt.task.run([
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('default', ['newer:coffeelint', 'newer:jsonlint', 'newer:jshint', 'serve']);
};
