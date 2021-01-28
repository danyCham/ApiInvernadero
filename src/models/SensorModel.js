//llamada a la conexión de la base de datos
const mysqlCn = require('../../config/dbConnection'); 
//declaración de clase modelo para el uso de las Sensores

class SensorModel{
    
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
                        p_Opcion)
        {
            return new Promise((resolve,reject)=>{
                mysqlCn.query('call SP_Procesa_Sensor (?,?,?,?,?,?,?,?,?,?)',[
                                p_Id_registro_sensor,
                                p_Id_Registra,
                                p_Sensor,
                                p_Valor,
                                p_Unidad_medida,
                                p_Latitud,
                                p_Longitud,
                                p_Fecha_ini,
                                p_Fecha_fin,
                                p_Semaforo,
                                p_Opcion],
                            (error,result)=>{
                            if(error){
                                console.log(error);
                                reject(error);
                            }
                            else{
                                console.log(error);
                                resolve(result);
                            }
                        })
            });
        }
    
    consultaSensor(p_Sensor, 
                   p_Fecha_ini, 
                   p_Fecha_fin,
                   p_Opcion)
        {        
        return new Promise((resolve,reject)=>
        {
            mysqlCn.query('call SP_Procesa_Sensor (?,?,?,?,?,?,?,?,?,?,?)',
                ['0','0',p_Sensor,'0',null,null,null,p_Fecha_ini,p_Fecha_fin,null,p_Opcion],(error,result)=>{
                if(error){
                    console.log(error);
                    reject(error);
                    
                }
                else{
                     
                    resolve(result);
                }
            })
        })
    }

}

module.exports = new SensorModel();