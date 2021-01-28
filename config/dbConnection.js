//libraria para crear instancia de conexión hacia la base de datos;
const mysqlCn = require('mysql');

//exponiento la conexión hacia la base de datos para el uso interno de los modelos a configurar
module.exports = mysqlCn.createPool({
   host:'209.126.1.45',
   port: '3306',
   database : 'TesisInvernadero',
   user: 'invernadero',
   password : 'invernadero123'
});
