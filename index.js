//Sección de librerías de NodeJs y Llamadas a los recursos del api rest.
//<===============================================================================>
const express = require('express'); //declaración de constante para la librería de express js
const bodyParser = require('body-parser'); //constante utilizada para poder acceder a los bodys de los request
const cors = require('cors') //libreria para habilitar el header de las solicitudes externas

const usuarioRouter = require('./src/routes/UsuarioRoutes');
const catalogoRouter = require('./src/routes/CatalogoRoutes');
const sensorRouter = require('./src/routes/SensorRoutes');

const app = express(); //instanciación de la librería de express
app.use(bodyParser.json());//para poder usar los bodys en los request
//<===============================================================================>
app.use('/src/v1.0/usuario',usuarioRouter); //ruta para la autenticacion/registro de usuarios
app.use('/src/v1.0/catalogo',catalogoRouter);//ruta para los catalogos
app.use('/src/v1.0/sensor',sensorRouter);//ruta para los sensores


app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credetials', true);
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
app.use(cors({
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'origin': '*',
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}));

//ruta de bienvenida
app.get('/',(req,res)=>{
   res.status(200).send(({data : [{'CodigoError':'0000','MensajeError':'Api Rest Invernadero Started'}]} ));
});
//Levantar el servicio api rest en el puerto 3000
app.listen(3000,()=>{
    console.log('Escuchando en el puerto 3000');
});
//<===============================================================================>

