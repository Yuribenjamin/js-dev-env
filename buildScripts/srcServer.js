import express from 'express';
import { join } from 'path';
import open from 'open';

class Server {
	constructor(port, app) {
		this.port = port;
		this.app = app;
	}
	core() {
		this.app.get('/', (req, res)=>{res.sendFile(join(__dirname, '../src/index.html'));});
		this.app.listen(this.port,() =>{ open(`http://localhost:${this.port}`);});
	}
}

let server = new Server(3000, express());
server.core();
