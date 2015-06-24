module.exports = function( grunt ) {

grunt.initConfig( {
	pkg: grunt.file.readJSON( "package.json" ),
	jshint: {
		files: [ "*.js", "static/**/*.js" ],
		options: {
			jshintrc: ".jshintrc"
		}
	},
	jscs: {
		src: [ "*.js", "static/**/*.js" ]
	},
	htmllint: {
		src: [ "static/**/*.html" ]
	}
} );
grunt.loadNpmTasks( "grunt-contrib-jshint" );
grunt.loadNpmTasks( "grunt-jscs" );
grunt.loadNpmTasks( "grunt-html" );
grunt.registerTask( "default", [ "jshint", "jscs", "htmllint" ] );
};
