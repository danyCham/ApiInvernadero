//llamada a la conexión de la base de datos
const mysqlCn = require('../../config/dbConnection'); 

class UsuarioModel{
    
    mantenimientoUsuario(p_Id_Usuario,
                        p_Id_Registra,
                        p_Nombre,
                        p_Apellido,
                        p_Email,
                        p_Direccion,
                        p_telefono,
                        p_Fecha_nacimiento,
                        p_Clave,
                        p_Id_rol,
                        p_Estado,
                        p_Opcion)
    {
        return new Promise((resolve,reject)=>{
            mysqlCn.query('call SP_Procesa_Usuario(?,?,?,?,?,?,?,?,?,?,?,?)',
                                [p_Id_Usuario,
                                p_Id_Registra,
                                p_Nombre,
                                p_Apellido,
                                p_Email,
                                p_Direccion,
                                p_telefono,
                                p_Fecha_nacimiento,
                                p_Clave,
                                p_Id_rol,
                                p_Estado,
                                p_Opcion],(error,result)=>
            {
                if(error){
                    console.log(error);
                    reject(error);
                }
                else{
                    resolve(result);
                }
            })
        });
    }
    
    consultaUsuario(p_Clave,p_Email,p_Opcion)
    {
        return new Promise((resolve,reject)=>
        {
            mysqlCn.query('call sp_Procesa_Usuario(?,?,?,?,?,?,?,?,?,?,?,?)',
                ['0','0',null,null,p_Email,null,null,null,p_Clave,null,null,p_Opcion],(error,result)=>{
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

module.exports = new UsuarioModel();