const http = require("http");

http.createServer((req, res) => {
		res.writeHead(200);
		res.write("FINE");
		res.end();
	}
).listen(8124);
