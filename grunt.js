#!/usr/bin/env node

module.exports = function (grunt) {
    "use strict";

      grunt.loadNpmTasks('grunt-recess');
      grunt.loadNpmTasks('grunt-contrib-clean');
      grunt.loadNpmTasks('grunt-contrib-copy');
      grunt.loadTasks('build');

    // Project configuration.
    grunt.initConfig({
        distdir: 'dist',
        pkg:'<json:package.json>',
        meta:{
          banner:'/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? " * " + pkg.homepage + "\n" : "" %>' +
            ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>;\n' +
            ' */'
        },
        src: {
            js: ['src/**/*.js', 'dist/tmp/**/*.js']
        },
        clean: ['<%= distdir %>/*'],
        copy: {
          assets: {
            files: {'<%= distdir %>/': 'src/assets/**'}
          },
          css: {
            files: {'<%= distdir %>/css/': 'vendor/bootstrap/css/**'}
          },
          partials: {
            files: {'<%= distdir %>/partials/': 'src/app/partials/**'}
          },
          data: {
            files: {'<%= distdir %>/data/': 'src/app/data/**'}
          },
          bootstrap: {
            files: {'<%= distdir %>/img/': 'vendor/bootstrap/img/**'}
          }
        },
        concat:{
          dist:{
            src:['<banner:meta.banner>', '<config:src.js>'],
            dest:'<%= distdir %>/<%= pkg.name %>.js'
          },
          angular: {
            src:['vendor/angular/angular.js'],
            dest: '<%= distdir %>/angular.js'
          },
          bootstrap: {
            src:['vendor/bootstrap/js/*.js'],
            dest: '<%= distdir %>/bootstrap.js'
          },
          jquery: {
            src:['vendor/jquery/*.js'],
            dest: '<%= distdir %>/jquery.js'
          }
        },
        min: {
          dist:{
            src:['<banner:meta.banner>', '<config:src.js>'],
            dest:'<%= distdir %>/<%= pkg.name %>.js'
          },
          angular: {
            src:['<config:concat.angular.src>'],
            dest: '<%= distdir %>/angular.js'
          },
          mongo: {
            src:['vendor/mongolab/*.js'],
            dest: '<%= distdir %>/mongolab.js'
          },
          bootstrap: {
            src:['vendor/bootstrap/*.js'],
            dest: '<%= distdir %>/bootstrap.js'
          },
          jquery: {
            src:['vendor/jquery/*.js'],
            dest: '<%= distdir %>/jquery.js'
          }
        },
        test: {
          unit: ['test/unit/**/*Spec.js'],
          e2e: ['test/e2e/**/*Scenario.js']
        },
        lint: {
            files:['grunt.js', '<config:src.js>'] /* , '<config:test.unit>', '<config:test.e2e>' */
        },
        jshint:{
            options:{
                curly:true,
                eqeqeq:true,
                immed:true,
                latedef:true,
                newcap:true,
                noarg:true,
                sub:true,
                boss:true,
                eqnull:true
            },
            globals:{}
        }
    });

    // Default task.
    grunt.registerTask('default', 'lint build test:unit');
    grunt.registerTask('build', 'clean concat index copy');
    grunt.registerTask('release', 'clean min lint test index copy e2e');
    grunt.registerTask('heroku', 'clean min lint index copy');

    // HTML stuff
    grunt.registerTask('index', 'Process index.html', function(){
        grunt.file.copy('src/index.html', 'dist/index.html', {process:grunt.template.process});
    });
};