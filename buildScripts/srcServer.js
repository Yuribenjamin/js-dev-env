import express from 'express';
import { join } from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config';

class Server {
	constructor(port, app,compiler) {
		this.port = port;
		this.app = app;
		this.compiler = compiler;
	}
	core() {
		this.app.use(require('webpack-dev-middleware')(this.compiler,{ noInfo: true, publicPath: config.output.publicPath}));
		this.app.get('/', (req, res)=>{res.sendFile(join(__dirname, '../src/index.html'));});
		this.app.listen(this.port,() =>{ open(`http://localhost:${this.port}`);});
	}
}

let server = new Server(3000, express(), webpack(config));
server.core();
