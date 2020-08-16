import { Router, Request, Response } from 'express';

class MensajeRoutes {

    router: Router;

    constructor() {
        this.router = Router();
        this.config();
    }

    config(): void {
        this.router.get('/', (req: Request, res: Response) => {
            res.json({
                ok: true,
                message: 'Peticion GET /mensajes funcionando!!! '
            });
        });

        this.router.post('/:id', (req: Request, res: Response) => {
            const { cuerpo, de } = req.body;
            const id = req.params.id;
            res.json({
                ok: true,
                message: 'Peticion POST /mensajes funcionando!!!',
                cuerpo,
                de,
                id
            });
        });
    }

}

const mensajeRoutes = new MensajeRoutes();
export default mensajeRoutes.router;