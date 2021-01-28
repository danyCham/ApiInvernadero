//llamada a la librería de express
const express = require('express');
//creación de constante para ruteador
const rutasProtegidas = express.Router(); 
//llamada a la librería de JWT para la verificación de seguridad
const jwt = require('jsonwebtoken');
//llamada al appKey del api
const appKeySecret = require('./appKey');

rutasProtegidas.use((req, res, next) => {
    const token = req.headers['authorization'];    
    if (token) {
      jwt.verify(token, appKeySecret, (err, decoded) => {      
        if (err) {
          return res.status(401).send(({data: [{'CodigoError' :'0001','MensajeError':'Token inválida' }],}));    
        } else {
          req.decoded = decoded;    
          next();
        }
      }); 
    } else {
        return res.status(401).send(({data: [{'CodigoError' :'0001','MensajeError':'Token no proveída' }],})); 
    }
 });

 module.exports = rutasProtegidas;