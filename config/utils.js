//libraría para encryptar strings
const bcrypt = require('bcrypt');

//clase con métodos utilitarios a usar en el api
class Utils{

    //metodo para encriptar passwords
    encryptPassword(password){
        return new Promise((resolve,reject)=>{
              bcrypt.genSalt(10, function(err, salt) {
                  bcrypt.hash(password, salt, function(err, hash) {
                       if(hash){
                           resolve(hash);
                       }
                       else{
                           reject('Error');
                       }
                  });
              }); 
          });        
       }
       
       //metodo para validar si el password es correcto
       validatePassword(passwordSending,password){
           return new Promise((resolve,reject)=>{
               bcrypt.compare(passwordSending,password,(Error,Resul)=>{
                   if(Resul){
                        
                       resolve(Resul);
                   }
                   else{
                       
                       reject(false);
                   }
               });
           })
       }

    //metodo para generar string aleatorio
    randomString(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
}
module.exports = new Utils();