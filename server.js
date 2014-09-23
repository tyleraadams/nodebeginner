var http = require('http');
var url = require('url');

function start(route, handle){

	http.createServer(onRequest).listen(8888);

	function onRequest(request, response){
		var postData = "";
		var pathname = url.parse(request.url).pathname;
		console.log("request for " + pathname + " received");

		// request.setEncoding('utf8');
		// request.addListener("data", function(postDataChunk){
			// postData += postDataChunk;
			// console.log('received post data chunk ' + postDataChunk)
		// });

		// request.addListener('end', function(){
			route(handle, pathname, response, request);
		// });
		// response.writeHead(200, {"Content-Type": "text/plain"});
		// response.write("Hello, world!");
		// response.end();


	}

	console.log("Server has started");
}

exports.start = start;

