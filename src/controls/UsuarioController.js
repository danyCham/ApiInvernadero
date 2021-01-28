const usuarioModel = require('../models/UsuarioModel');

class UsuarioController
{
    //método para registrar usuario , envía los datos al modelo
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
                            p_Opcion){    

        let registrarUser = usuarioModel.mantenimientoUsuario(p_Id_Usuario,
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
                                                            p_Opcion);
        return registrarUser;        
    }

    //metodo para autenticar usuario
    consultaUsuario(p_Clave,
                    p_Email,
                    p_Opcion){   
            
        let consultar = usuarioModel.consultaUsuario(p_Clave,
                                                    p_Email,
                                                    p_Opcion);
        return consultar;
    }
}

module.exports = new UsuarioController();