/**
 * Created by a on 14-7-7.
 */


module.exports = function(grunt) {
	require('time-grunt')(grunt);

	grunt.initConfig({
		copy: {
			dist: {
				files: {
					'dist/index.html': 'src/index.html'
				}
			}
		},
		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'dist/style.css': 'src/style.scss'
				}
			}
		},
		replace: {
			dist: {
				src: 'dist/style.css',
				dest: 'dist/style.css',
				replacements: [{
					from: '${usrname}',
					to: '程序猿小卡'
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-text-replace');

	grunt.registerTask('default', ['copy:dist', 'sass:dist', 'replace:dist']);
};