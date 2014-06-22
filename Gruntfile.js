module.exports = function(grunt) {

  grunt.registerTask('bowerupdate', 'update the frontend dependencies', function() {
    var exec = require('child_process').exec;
    var cb = this.async();
    exec('bower update', {cwd: '.'}, function(err, stdout, stderr) {
      console.log(stdout);
      cb();
    });
  });

  grunt.registerTask('npmupdate', 'update the development dependencies', function() {
    var exec = require('child_process').exec;
    var cb = this.async();
    exec('npm update', {cwd: '.'}, function(err, stdout, stderr) {
      console.log(stdout);
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
          node: true
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
          drop_console: true
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
            'components/wysihtml5/dist/wysihtml5-0.3.0.min.js',
            'components/handlebars/handlebars.runtime.min.js',
            'src/generated/templates.js', 
            'src/bootstrap3-wysihtml5.js',
            'src/generated/commands.js', 
            'src/locales/bootstrap-wysihtml5.en-US.js'
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
      build: ["dist"]
    },
    copy: {
      main: {
        files: [
          {expand: true, cwd: 'src/', src: ['*.js'], dest: 'dist/'},
          {expand: true, cwd: 'src/', src: ['*.css'], dest: 'dist/'},
          {expand: true, cwd: 'src/generated', src: ['*.js'], dest: 'dist/'},
          {expand: true, cwd: 'src/', src: ['locales/*.js'], dest: 'dist/'},
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
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-handlebars');

  // Default task(s).
  grunt.registerTask('dev', ['handlebars', 'concat:commands']);
  grunt.registerTask('build', ['clean:build', 'handlebars', 'concat:commands', 'uglify', 'cssmin', 'copy']);
  grunt.registerTask('with-update', ['bowerupdate', 'npmupdate', 'build']);
  grunt.registerTask('default', ['build']);

};
