//llamada a la conexión de la base de datos
const mysqlCn = require('../../config/dbConnection'); 

//clase 
class CatalogoModel
{
    mantenimientoCatalogo(p_idCatalogoCabecera,p_idCatalogoDetalle,p_Nombre,p_Descripcion,p_Estado,p_Usuario,p_Opcion){
        return new Promise((resolve,reject)=>{
            mysqlCn.query('call SP_Procesa_Catalogo (?,?,?,?,?,?,?)',[p_idCatalogoCabecera,p_idCatalogoDetalle,p_Nombre,p_Descripcion,p_Estado,p_Usuario,p_Opcion],
            (error,result)=>{
                if(error){
                    reject(error);
                }
                else{
                    resolve(result);
                }
            })
        });
    }
    consultaCatalogo(p_Opcion){        
        return new Promise((resolve,reject)=>{
            mysqlCn.query('call SP_Procesa_Catalogo (?,?,?,?,?,?,?)',[
                '0','0','0','0' ,'0' ,'0',p_Opcion],(error,result)=>{
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

module.exports = new CatalogoModel();