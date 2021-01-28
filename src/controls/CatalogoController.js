const catalogoModel = require('../models/CatalogoModel');

class CatalogoController
{
    mantenimientoCatalogo(p_idCatalogoCabecera,p_idCatalogoDetalle,p_Nombre,p_Descripcion,p_Estado,p_Usuario,p_Opcion){
         let mantenimiento = catalogoModel.mantenimientoCatalogo(p_idCatalogoCabecera,p_idCatalogoDetalle,p_Nombre,p_Descripcion,p_Estado,p_Usuario,p_Opcion);
         return mantenimiento;
    }
    consultaCatalogo(p_Opcion){
        let consulta = catalogoModel.consultaCatalogo(p_Opcion);
        return consulta;
    }
}

module.exports = new CatalogoController();