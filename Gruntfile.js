/* jshint maxstatements: false */
/* global __dirname, module */
module.exports = function(grunt) {
  'use strict';

  grunt.registerTask('bowerupdate', 'update the frontend dependencies', function() {
    var exec = require('child_process').exec;
    var cb = this.async();
    exec('bower update', {cwd: '.'}, function(err, stdout, stderr) {
      console.log(stdout);
      console.err(stderr);
      cb();
    });
  });

  grunt.registerTask('npmupdate', 'update the development dependencies', function() {
    var exec = require('child_process').exec;
    var cb = this.async();
    exec('npm update', {cwd: '.'}, function(err, stdout, stderr) {
      console.log(stdout);
      console.err(stderr);
      cb();
    });
  });

  grunt.registerMultiTask('phantomjs', 'execute script with phantomjs', function() {
    var childProcess = require('child_process');
    var phantomjs = require('phantomjs');
    var path = require('path');
    var binPath = phantomjs.path;
    var cb = this.async();

    var childArgs = [
      path.join(__dirname, this.data.script)
    ];

    childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
      grunt.log.writeln(stdout);
      if(stderr) {
        grunt.log.error(stderr);
      }
      grunt.log.writeln('Done');
      cb();
    }); 
  });

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    handlebars: {
      compile: {
        options: {
          namespace: 'wysihtml5.tpl',
          processName: function(filePath) {
            return filePath.split('/')[2].split('.')[0];
          },
          node: false
        },
        files: {
          'src/generated/templates.js': ['src/templates/*.hbs']
        }
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        compress: {
          sequences     : true,  // join consecutive statemets with the “comma operator”
          properties    : true,  // optimize property access: a["foo"] → a.foo
          dead_code     : true,  // discard unreachable code
          drop_debugger : true,  // discard “debugger” statements
          drop_console  : true,  // discard console.* statements
          unsafe        : true, // some unsafe optimizations (see below)
          conditionals  : true,  // optimize if-s and conditional expressions
          comparisons   : true,  // optimize comparisons
          evaluate      : true,  // evaluate constant expressions
          booleans      : true,  // optimize boolean expressions
          loops         : true,  // optimize loops
          unused        : true,  // drop unused variables/functions
          hoist_funs    : true,  // hoist function declarations
          hoist_vars    : true, // hoist variable declarations
          if_return     : true,  // optimize if-s followed by return/continue
          join_vars     : true,  // join var declarations
          cascade       : true,  // try to cascade `right` into `left` in sequences
          side_effects  : false,  // drop side-effect-free statements
          warnings      : true,  // warn about potentially dangerous optimizations/code
          global_defs   : {}     // global definitions 
        }
      },
      build: {
        files: {
          'dist/bootstrap3-wysihtml5.min.js': [
            'src/generated/templates.js', 
            'src/bootstrap3-wysihtml5.js',
            'src/generated/commands.js', 
            'src/locales/bootstrap-wysihtml5.en-US.js'
          ],
          'dist/bootstrap3-wysihtml5.all.min.js': [
            'components/wysihtml5x/dist/wysihtml5x-toolbar.js',
            'components/handlebars/handlebars.runtime.min.js',
            'src/generated/templates.js', 
            'src/bootstrap3-wysihtml5.js',
            'src/generated/commands.js', 
            'src/locales/bootstrap-wysihtml5.en-US.js'
          ],
          'dist/amd/bootstrap3-wysihtml5.all.min.js': [
            'dist/amd/bootstrap3-wysihtml5.all.js'
          ]
        }
      }
    },
    cssmin: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      minify: {
        files: {
          'dist/bootstrap3-wysihtml5.min.css': ['src/bootstrap3-wysihtml5.css']
        }
      }
    },
    clean: {
      build: ['dist'],
      'parser_rules': ['src/parser_rules'],
      'generated': ['src/generated']
    },
    copy: {
      main: {
        files: [
          {expand: true, cwd: 'src/', src: ['*.js'], dest: 'dist/'},
          {expand: true, cwd: 'src/', src: ['*.css'], dest: 'dist/'},
          {expand: true, cwd: 'src/generated', src: ['*.js'], dest: 'dist/'},
          {expand: true, cwd: 'src/', src: ['locales/*.js'], dest: 'dist/'},
        ]
      },
      amd: {
        files: [
          {expand: true, cwd: 'components/handlebars', src: ['handlebars.runtime.amd.js'], dest: 'dist/amd'}
        ]
      },
      'parser_rules': {
        files: [
          {expand: true, cwd: 'src/parser_rules', src: ['*.json'], dest: 'dist/parser_rules'}
        ]
      }
    },
    concat: {
      options: {
        separator: '',
      },
      commands: {
        src: ['src/commands/small.js'],
        dest: 'src/generated/commands.js',
      },
      all: {
        src: [
          'components/wysihtml5x/dist/wysihtml5x-toolbar.js',
          'components/handlebars/handlebars.runtime.min.js',
          'src/generated/templates.js', 
          'src/bootstrap3-wysihtml5.js',
          'src/generated/commands.js', 
          'src/locales/bootstrap-wysihtml5.en-US.js'
        ],
        dest: 'dist/bootstrap3-wysihtml5.all.js'
      },
      amd: {
        src: [
          'dist/amd/wysihtml5.js',
          'dist/amd/handlebars.runtime.amd.js',
          'dist/amd/templates.js',
          'dist/amd/commands.js',
          'src/bootstrap3-wysihtml5.js'
        ],
        dest: 'dist/amd/bootstrap3-wysihtml5.all.js'
      }
    },
    wrap: {
      wysihtml5: {
        src: ['components/wysihtml5x/dist/wysihtml5x-toolbar.js'], 
        dest: 'dist/amd/wysihtml5.js',
        options: {
          /*jshint multistr: true */
          wrapper: ['define(\'wysihtml5\', [\'rangy\', \'rangy-selectionsaverestore\'], function (rangy) {\n\
                window.rangy = rangy;\n', '\nreturn wysihtml5;\n});']
        }
      },
      templates: {
        src: ['src/generated/templates.js'],
        dest: 'dist/amd/templates.js',
        options: {
          wrapper: ['define("bootstrap.wysihtml5.templates", ["handlebars.runtime", "wysihtml5"], function(HandlebarsEnv, wysihtml5) {\n\tthis["wysihtml5"] = wysihtml5;\n\tvar Handlebars = HandlebarsEnv.default;\n', '\n});']
        }
      },
      commands: {
        src: ['src/generated/commands.js'],
        dest: 'dist/amd/commands.js',
        options: {
          wrapper: ['define("bootstrap.wysihtml5.commands", ["wysihtml5"], function(wysihtml5) {\n', '\n});']
        }
      }
    },
    'http-server': {
      'dev': {
        // the server root directory
        root: '.',
        port: 8282,
        host: '127.0.0.1',
        cache: 0,
        showDir : true,
        autoIndex: true,
        ext: 'html',
        runInBackground: false
      }
    },
    phantomjs: {
      'parser_rules': {
        script: 'generator/print_parser_rules.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-wrap');
  grunt.loadNpmTasks('grunt-http-server');

  // Default task(s).
  grunt.registerTask('parser_rules', ['clean:parser_rules', 'phantomjs:parser_rules', 'copy:parser_rules']);
  grunt.registerTask('dev', ['handlebars', 'concat:commands', 'parser_rules']);
  grunt.registerTask('amd', ['concat:all', 'wrap:wysihtml5', 'wrap:templates', 'wrap:commands', 'copy:amd', 'concat:amd']);
  grunt.registerTask('build', ['clean', 'handlebars', 'concat:commands', 'amd', 'uglify', 'cssmin', 'copy:main', 'parser_rules']);
  grunt.registerTask('with-update', ['bowerupdate', 'npmupdate', 'build']);
  grunt.registerTask('default', ['build']);

};
