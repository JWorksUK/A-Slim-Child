module.exports = function(grunt){
    "use strict";
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            build: {
                files: {
                    'site/www/assets/css/style.min.css': 'components/sass/style.scss'
                }
            }
        },
        cssc: {
            build: {
                files: {
                    'site/www/assets/css/style.min.css': 'site/www/assets/css/style.min.css'
                }
            }
        },
        cssmin: {
            build: {
                src: 'site/www/assets/css/style.min.css',
                dest: 'site/www/assets/css/style.min.css'
            }
        },
        jshint: {
            build: ['components/js/site.js']
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: [
                    'bower_components/jquery/dist/jquery.js',
                    'components/js/**/*.js'
                ],
                dest: 'site/www/assets/js/site.min.js'
            }
        },
        uglify: {
            build: {
                options: {
                    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                        '<%= grunt.template.today("yyyy-mm-dd") %> */'
                },
                files: {
                    'site/www/assets/js/site.min.js': ['site/www/assets/js/site.min.js']
                }
            }
        },
        watch: {
            js: {
                files: ['components/js/site.js'],
                tasks: ['buildjs']
            },
            css: {
                files: ['components/sass/**/*.scss'],
                tasks: ['buildcss']
            }
        }
    });

    grunt.registerTask('default',   ['build']);
    grunt.registerTask('build',     ['buildcss', 'buildjs']);
    grunt.registerTask('buildcss',  ['sass', 'cssc', 'cssmin']);
    grunt.registerTask('buildjs',   ['jshint', 'concat', 'uglify']);
};
