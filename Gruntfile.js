"use strict";

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            options: {
                jshintrc: true
            },
            all: [ 'Gruntfile.js', 'js/app/*.js',
                'js/app/**/*.js' ]
        },

        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true
            }
        },

        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "css/style.css": "less/style.less" // destination file and source file
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('dev', ['jshint', 'less', 'karma']);
};