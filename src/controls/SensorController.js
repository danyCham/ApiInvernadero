const sensorModel = require('../models/SensorModel');

class SensorController
{
    mantenimientoSensor(p_Id_registro_sensor,
                        p_Id_Registra,
                        p_Sensor,
                        p_Valor,
                        p_Unidad_medida,
                        p_Latitud,
                        p_Longitud,
                        p_Fecha_ini,
                        p_Fecha_fin,
                        p_Semaforo,
                        p_Opcion){
         let mantenimiento = sensorModel.mantenimientoSensor(   p_Id_registro_sensor,
                                                                p_Id_Registra,
                                                                p_Sensor,
                                                                p_Valor,
                                                                p_Unidad_medida,
                                                                p_Latitud,
                                                                p_Longitud,
                                                                p_Fecha_ini,
                                                                p_Fecha_fin,
                                                                p_Semaforo,
                                                                p_Opcion);
         return mantenimiento;
    }

    consultaSensor(p_Sensor, 
                   p_Fecha_ini, 
                   p_Fecha_fin,
                   p_Opcion){
        let consulta = sensorModel.consultaSensor(p_Sensor, 
                                                  p_Fecha_ini, 
                                                  p_Fecha_fin,
                                                  p_Opcion);
        return consulta;
    }
}

module.exports = new SensorController();