import express, { Application } from 'express';
import { SERVER_PORT } from '../global/enviroment';
import mensajeRoutes from '../routes/mensajeRoutes';
import cors from 'cors';

export default class Server {

    __app: Application;

    constructor() {
        this.__app = express();
        this.__app.set('port', SERVER_PORT);
        this.config();
        this.routes();
    }

    config(): void {
        this.__app.use(express.urlencoded({ extended: true }));
        this.__app.use(express.json());
        this.__app.use(cors({ origin: true, credentials: true }))
    }

    routes(): void {
        this.__app.use('/mensajes', mensajeRoutes);
    }

    start(callback: Function) {
        this.__app.listen(this.__app.get('port'), callback());
    }

}