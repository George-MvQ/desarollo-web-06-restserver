const express = require('express');

class Server{
    
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        // se va agradabdi ek middleware
        this.middleware();

        this.routes();
    }
    
    // Me sirve para archivos estaticos
    middleware(){
        this.app.use(express.static('public'));

    }

    routes(){

        this.app.get('/api0', (req, res) => {
            res.json({
                ok: true,
                msg: 'get API'
            })
        });

        this.app.put('/api0', (req, res) => {
            res.status(400).json({
                ok: true,
                msg: 'put API'
            })
        });

        this.app.post('/api0', (req, res) => {
            res.status(201).json({
                ok: true,
                msg: 'post API2'
            })
        });

        this.app.delete('/api0', (req, res) => {
            res.json({
                ok: true,
                msg: 'delete API2'
            })
        });
        this.app.patch('/api0', (req, res) => {
            res.json({
                ok: true,
                msg: 'patch API2'
            })
        });
        
        this.app.get('/api', (req, res) => {
            res.send('Hello world! Text')
            
        });
        
        this.app.get('/ap2', (req, res) => {
            res.json({
                ok: true,
                msg: 'get API2'
            })
            
        });
        this.app.get('/api3', (req, res) => {
            res.status(403).json({
                ok: true,
                msg: 'get API3'
            })
            
        });

    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }

}

module.exports = Server;






























     // this.app.get('/api', (req, res) => {
        //     res.send('Hello world!,  2023');
        // });

        // this.app.get('/api0', (req, res) => {
        //     res.json({

        //         ok:true,
        //         msg: 'get API api0'
        //     })
        // });

        // this.app.get('/api1', (req, res) => {
        //     res.status(403).json({
        //         ok:true,
        //         msg: 'get API'
        //     })
        // });

        // this.app.put('/api2', (req, res) => {
        //     res.json({
        //         ok:true,
        //         msg: 'get API2'
        //     })
        // });

        // this.app.post('/api2', (req, res) => {
        //     res.status(201).json({
        //         ok:true,
        //         msg: 'get API2'
        //     })
        // });

        // this.app.delete('/api2', (req, res) => {
        //     res.json({
        //         ok:true,
        //         msg: 'delete API2'
        //     })
        // });
        // this.app.patch('/api2', (req, res) => {
        //     res.json({
        //         ok:true,
        //         msg: 'patch API2'
        //     })
        // });