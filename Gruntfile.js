module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      files: 'client/**/*.js',
      options: {
        force: 'true',
        jshintrc: '.jshintrc',
        ignores: [
        'client/lib/**/*.js'
        ]
      }
    },

    karma: {
      unit: {
        configFile: 'karma.conf.js'
      },

      continuous: {
        configFile: './karma.conf.js',
        singleRun: true,
        browsers: ['PhantomJS']
      },
    },



  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-karma');

  // grunt.registerTask('server-dev', function (target) {
    // Running nodejs in a different process and displaying output on the main console
  //   var nodemon = grunt.util.spawn({
  //        cmd: 'grunt',
  //        grunt: true,
  //        args: 'nodemon'
  //   });
  //   nodemon.stdout.pipe(process.stdout);
  //   nodemon.stderr.pipe(process.stderr);

  //   grunt.task.run([ 'watch' ]);
  // });

  ////////////////////////////////////////////////////
  // Main grunt tasks
  ////////////////////////////////////////////////////

  // grunt.registerTask('log', function() {
  //   console.log('==============================================');
  //   console.log('Task is running...');
  //   console.log('==============================================');
  // });

  // grunt.registerTask('default', ['test', 'build', 'upload']);

  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('continuous', ['continuous']);

  // grunt.registerTask('build', ['concat', 'uglify', 'cssmin']);

  // grunt.registerTask('upload', function(n) {
  //   if(grunt.option('prod')) grunt.task.run([ 'shell:prodServer' ]);
  //   else grunt.task.run([ 'server-dev' ]);
  // });

  // grunt.registerTask('deploy', ['test', 'build', 'upload']);
  


};
