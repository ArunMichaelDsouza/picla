module.exports = function(grunt) {
    grunt.initConfig({
        uglify: {
            my_target: {
                files: {
                    'build/picla.min.js': ['src/picla.js']
                }
            }
        },
        watch: {
            scripts: {
                files: ['src/picla.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false,
                },
            },
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch']);
}
