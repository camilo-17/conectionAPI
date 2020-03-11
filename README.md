# conectionAPI
 Respositorio con 4 API

## Comenzando 🚀

_Este respositorio es un API a la cual se le pueden realizar 4 peticiones en Node.js._

Seguir las  **Instrucciones** para conocer como desplegar el proyecto.

### API 📋

_API http://localhost:9000/cliente metodo POST_

Recibe una petición via POST para mostrar los datos de un cliente de la BD. 

```
{
"cedula" : "3173350"
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

_API http://localhost:9000/clima POST_

Recibe una petición via POST para ver el clima

```
{
"latitud" : "4.5552492",
"longitud": "-74.2139028"
}
```
_API http://localhost:9000/ciudad GET_

Recibe una petición via GET para insertar una ciuidad en la BD

```
{
"ciudad" : "new york"
}
```