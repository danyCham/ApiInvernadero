//libraria para crear instancia de conexión hacia la base de datos;
const mysqlCn = require('mysql');

//exponiento la conexión hacia la base de datos para el uso interno de los modelos a configurar
module.exports = mysqlCn.createPool({
   host:'xxxxxxxxx',
   port: '3306',
   database : 'xxxxxxx',
   user: 'xxxxxx',
   password : 'xxxxx'
});
