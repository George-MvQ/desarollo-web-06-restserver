//uso del CORS

const express = require('express');
const cors = require('cors');

class Server{


    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        //Middelwares : Funciones que agrega mas funcionalidades
        this.middlewares();

        //Routas de mi aplicacion
        this.routes();
    }

    middlewares() {

        this.app.use(cors());

        //Directorio Publico
        this.app.use(express.static('public'));
    }

    routes() {

        //ERRRORES 400 y 500 
        //Deben de ser muy bien trabajados por parte del diseñador
        //ya que hay darle información a las personas del Front-
        //Porque el Black-End está enviando un error.
        //Generalmente los errrore de servidor es recomendable
        //Desarrollar logs para darnos más información,
        //Los errores del cliente no son responsabilidad nuestra
        //Los errores del servidor hay que colocar las atención debida

        //end-point GET ejemplo text 
        //Petición de recursos
        this.app.get('/api0', (req, res) => {
            res.json({
                ok: true,
                msg: 'get API'
            })
        });

        //end-point PUT ejemplo text
        //Para actualizar registros

        this.app.put('/api0', (req, res) => {
            res.status(400).json({
                ok: true,
                msg: 'put API'
            })
        });

        //end-point POST ejemplo text
        //Para crear nuevos recursos como usuario

        this.app.post('/api0', (req, res) => {
            res.status(201).json({
                ok: true,
                msg: 'post API2'
            });
        });

        //end-point DELETE ejemplo text
        //Borrar algo, pero puede para el usuario que se borro
        //pero a nivel de base de datos se actualizo
        this.app.delete('/api0', (req, res) => {
            res.json({
                ok: true,
                msg: 'delete API2'
            })
        });

        //PATCH
        this.app.patch('/api0', (req, res) => {
            res.json({
                ok: true,
                msg: 'patch API2'
            })
        });

        //end-point ejemplo text
        this.app.get('/api', (req, res) => {
            res.send('Hello Word Text')
        });

        //end-point ejemplo json
        this.app.get('/api2', (req, res) => {
            res.json({
                ok: true,
                msg: 'get API2'
            })
        });

        //end-point, 403 cuando se hace un llamado ilegal
        //peticion o autorizada

        this.app.get('/api3', (req, res) => {
            res.status(403).json({
                ok: true,
                msg: 'post API3'
            })
        });
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }

}

module.exports = Server;