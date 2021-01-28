//declaracion del servicio de express
const express = require('express');
const sensorController = require('../controls/SensorController');
const sensorRouter = express.Router();

sensorRouter.get('/:p_Sensor/:p_Fecha_ini/:p_Fecha_fin/:p_Opcion',(req,res)=>{
    let consulta = sensorController.consultaSensor(req.params.p_Sensor, 
                                                   req.params.p_Fecha_ini, 
                                                   req.params.p_Fecha_fin,
                                                   req.params.p_Opcion);
    
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


sensorRouter.post('/',(req,res)=>{
    let mantenimiento = sensorController.mantenimientoSensor(req.body.p_Id_registro_sensor,
                                                             req.body.p_Id_Registra,
                                                             req.body.p_Sensor,
                                                             req.body.p_Valor,
                                                             req.body.p_Unidad_medida,
                                                             req.body.p_Latitud,
                                                             req.body.p_Longitud,
                                                             req.body.p_Fecha_ini,
                                                             req.body.p_Fecha_fin,
                                                             req.body.p_Semaforo,
                                                             req.body.p_Opcion);

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

module.exports = sensorRouter;
