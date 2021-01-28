//declaracion del servicio de express
const express = require('express');
const catalogoRoute = express.Router();
const catalogoController = require('../controls/CatalogoController');
const verificarToken = require('../../config/verificaAutenticacion');

catalogoRoute.post('/',(req,res)=>{
    let mantenimiento = catalogoController.mantenimientoCatalogo(
        req.body.p_idCatalogoCabecera,req.body.p_idCatalogoDetalle,req.body.p_Nombre,
        req.body.p_Descripcion,req.body.p_Estado,req.body.p_Usuario,req.body.p_Opcion
        );

    mantenimiento.then((data)=>{
        return res.status(200).send(
            (
                {
                    respuesta: data[0]
                }
            )
        );
        }).catch((data)=>{
        return res.status(200).send(
            (
                {
                    respuesta: data[0]
                }
            )
        );
    });
});

catalogoRoute.get('/:p_Opcion',(req,res)=>{
    let consulta = catalogoController.consultaCatalogo(req.params.p_Opcion);
    
    consulta.then((data)=>{
        return res.status(200).send(
            (
                {
                    respuesta: data[0]
                }
            )
        );
        }).catch((data)=>{
        return res.status(200).send(
            (
                {
                    respuesta: data[0]
                }
            )
        );
    });
});

module.exports = catalogoRoute;