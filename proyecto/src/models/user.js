var unirest = require("unirest");
const mysql = require('mysql');
connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '',
  database : 'prueba'
});

let userModel = {};

userModel.getUsers = (callback) => {
    if (connection){
        connection.query('SELECT * FROM usuario ORDER BY cedula',
        (err, rows) =>{
            if(err){
                throw err;
            }else{
                callback(null,rows)
            }
        }
        )
    }
};

userModel.InsertDatos = (UserData, callback) => {
    if (connection){
        connection.query('INSERT INTO ciudad SET ?', UserData,
        (err, rows) =>{
            if(err){
                throw err;
            }else{
                callback(null,rows)
            }
        }
        )
    }
};

userModel.consultaClima = (UserData, callback) => {
    var req = unirest("GET", "https://weatherbit-v1-mashape.p.rapidapi.com/current");

    req.query({
        "lang": "en",
        "lon": "-74.0652501",
        "lat": "4.6964141999999995"
    });
    
    req.headers({
        "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
        "x-rapidapi-key": "c697daf86dmsh5e5b023fc0fed8bp140097jsnabebd27f678d"
    });
    
    
    req.end(function (res) {
        if (res.error) throw new Error(res.error);
    
        console.log(res.body);
    });
};

userModel.insertUbicacion = (UserData, callback) => {
    if (connection){
        connection.query('INSERT INTO ubicacion SET ?', UserData,
        (err, rows) =>{
            if(err){
                throw err;
            }else{
                callback(null,rows)
            }
        }
        )
    }
};

userModel.getDatos = (UserData, callback) => {
    if (connection){
        var adr = UserData;
        var sql = 'SELECT * FROM usuario WHERE cedula =' + mysql.escape(adr);
        connection.query(sql,
        (err, rows) =>{
            if(err){
                throw err;
            }else{
                callback(null,rows)
            }
        }
        )
    }
};

module.exports = userModel;