var express = require( "express" );
var app = express();

//jscs:disable requireCamelCaseOrUpperCaseIdentifiers
var port = process.env.npm_package_config_port;

//jscs:enable requireCamelCaseOrUpperCaseIdentifiers

app.use ( "/", express.static( "./static" ) );
app.listen( port, function() {
	console.log( "Listening on http://localhost:" + port );
} );
