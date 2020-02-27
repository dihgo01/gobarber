import express from 'express';
import path from 'path';
import routes from './router';

import './database';


class App {

    constructor() {
        this.server = express();

        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.server.use(express.json());
        this.server.use('/files', express.static(path.resolve(__dirname, '..','temp', 'upload'))
        );

    }
    routes() {
        this.server.use(routes)
    }
}
 export default new App().server