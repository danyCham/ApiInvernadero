const express = require('express');
const usuarioController = require('../controls/UsuarioController');
const usuarioRoute = express.Router();


usuarioRoute.get('/:p_Clave/:p_Email/:p_Opcion',(req,res)=>{
    console.log(req.params);
    let consulta = usuarioController.consultaUsuario(req.params.p_Clave,
                                                       req.params.p_Email,
                                                       req.params.p_Opcion);
        
    consulta.then((data)=>{
        return res.status(200).send(
            (
                {
                    result: data[0]
                }
            )
        );
    }).catch((data)=>{
        return res.status(200).send(
            (
                {
                    result: data[0]
                }
            )
        );
    });
});

//ruta para gestionar los usuarios desde el la pantalla principal
usuarioRoute.post('/registrarUsuario',(req,res)=>{
    let registrar = usuarioController.mantenimientoUsuario(
            req.body.p_Id_Usuario,
            req.body.p_Id_Registra,
            req.body.p_Nombre,
            req.body.p_Apellido,
            req.body.p_Email,
            req.body.p_Direccion,
            req.body.p_telefono,
            req.body.p_Fecha_nacimiento,
            req.body.p_Clave,
            req.body.p_Id_rol,
            req.body.p_Estado,
            req.body.p_Opcion);
    registrar.then((data)=>{
    return res.status(200).send(
        (
            {                
                result: data[0]
            }
        )
    );
    }).catch((data)=>{
    return res.status(200).send(
        (
            {
                result: data[0]
            }
        )
    );
    })
});

module.exports = usuarioRoute;