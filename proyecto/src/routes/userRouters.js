const User = require('../models/user');
const forecastIo = require('forecastio');
const weather = new forecastIo("779beff927296f354e39f88efa83bed3");

module.exports = function(app){
    /*app.get('/users', (req, res) =>{
        //URLSearchParams.getUsers((err,data) => {
        User.getUsers((err,data) => {
            res.status(200).json(data);
        });
        //res.json([]);
    });*/

 // Punto numero 2 inserción a la tabla ciudad

    app.get('/ciudad', (req, res) =>{
        if (req.body.ciudad == null)
        {
            res.json({
                success: false,
                msg: "vacio"
            });
        }
        else
        {
        const userData = {
            id : null,
            ciudad: req.body.ciudad
        };
        User.InsertDatos(userData,(err, data) =>{
            if(data && data.insertId){
                res.json({
                    success: true,
                    msg: "insertado"
                })
            }else{
                res.status(500).json({
                    success:false,
                    msg: 'Error'
                })
            }
        });
    }
    });

// punto numero uno 
// consulta de parametros a traves del id del cliente (cedula)

    app.post('/cliente', (req, res) =>{
        if (req.body.cedula == null || req.body.cedula == "")
        {
            res.json({
                success: false,
                msg: "vacio"
            });
        }
        else
        {
        const userData = {
            id : null,
            cedula: req.body.cedula
        };
        User.getDatos(req.body.cedula,(err, data) =>{
            if(data){
                res.json({
                    success: true,
                    msg: "Exitoso",
                    data : data
                })
            }else{
                res.status(500).json({
                    success:false,
                    msg: 'Error'
                })
            }
        });
    }
    });

    app.post('/ubicacion', (req, res) =>{
        if (req.body.hasOwnProperty('ciudad') && req.body.hasOwnProperty('cedula') && req.body.hasOwnProperty('longitud') && req.body.hasOwnProperty('latitud'))
        {
            const userData = {
                cedula : req.body.cedula,
                ciudad : req.body.ciudad,
                longitud : req.body.longitud,
                latitud : req.body.latitud,
                fecha : null
            };
            User.insertUbicacion(userData,(err, data) =>{
                if(data){
                    res.json({
                        success: true,
                        msg: "Exitoso",
                        data : data
                    })
                }else{
                    res.status(500).json({
                        success:false,
                        msg: 'Error'
                    })
                }
            });
        }
        else
        {
            res.json({
                success: false,
                msg: "faltan propiedades"
            });
    }
    });

    // API clima

    app.post('/clima', (req, res) =>{
        if (req.body.hasOwnProperty('longitud') && req.body.hasOwnProperty('latitud'))
        {
            const userData = {
                lang : 'en',
                lon : req.body.longitud,
                lat : req.body.latitud
            };

            let latitude = parseInt(req.body.latitud, 10);
            let longitude = parseInt(req.body.longitud, 10);

            weather.forecast(latitude,longitude, (err,data) =>{
                if (err){
                    console.log('error');
                }
                else{
                   res.json({
                        summary : data.currently.summary,
                        temperature : data.currently.temperature,
                        humidity : data.currently.humidity,
                        timezone : data.timezone
                    });
                }
            });

        }
        else
        {
            res.json({
                success: false,
                msg: "faltan propiedades"
            });
    }
    });
}