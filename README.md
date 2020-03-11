# conectionAPI
 Repositorio con 4 API

## Comenzando 

_Este repositorio es un API a la cual se le pueden realizar 4 peticiones en Node.js._

Seguir las  **Instrucciones** para conocer como desplegar el proyecto.

### API 

_API http://localhost:9000/cliente metodo POST_

Recibe una petición via POST para mostrar los datos de un cliente de la BD. 

```
{
"cedula" : "3173350"
}
```
Respuesta
```
{
    "success": true,
    "msg": "Exitoso",
    "data": [
        {
            "cedula": 3173350,
            "nombre": "benito",
            "apellido": "Perez",
            "edad": 41,
            "genero": "masculino"
        }
    ]
}
```
_API http://localhost:9000/ubicacion POST_

Recibe una petición via POST para insertar una ubicación en la BD

```
{
"cedula" : "101114643",
"ciudad" : "bogota",
"latitud" : "4.5552492",
"longitud": "-74.2139028"
}
```
Respuesta
```
{
    "success": true,
    "msg": "Exitoso",
    "data": {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 0,
        "serverStatus": 2,
        "warningCount": 0,
        "message": "",
        "protocol41": true,
        "changedRows": 0
    }
}
```
_API http://localhost:9000/clima POST_

Recibe una petición via POST para ver el clima

```
{
"latitud" : "4.5552492",
"longitud": "-74.2139028"
}
```
Respuesta

```
{
    "summary": "Mostly Cloudy",
    "temperature": 60.83,
    "humidity": 0.85,
    "timezone": "America/Bogota"
}
```

_API http://localhost:9000/ciudad GET_

Recibe una petición via GET para insertar una ciuidad en la BD

```
{
"ciudad" : "new york"
}
```

Respuesta

```
{
    "success": true,
    "msg": "insertado"
}
```

## Autores 

Camilo Caro