let mysql = require("mysql");
const dotenv = require('dotenv');

dotenv.config();


const DbConnection = function () {
  let connection = null;
  function initConnection() {
    // console.log(process.env.USER);
    connection = mysql.createConnection({
      host: process.env.DB_HOST2,
      user: process.env.DB_USER2,
      password: process.env.DB_PASSWORD2,
      port: process.env.DB_PORT2,
      database:process.env.DB_NAME2 //'canada-bid-db'
    });
    connection.connect(function (err) {
      if (err) throw err;
      console.log("Connected!");
    });
  }

  initConnection();

  function query(sql){
      return new Promise((resolve,reject)=>{
        connection.query(sql,(err,result)=>{
           if (err)reject(err); 
           resolve(result);
           connection.end();
        });  
      });
  }

  return Object.seal({
    // initConnection,
    query
  });
};

module.exports = DbConnection;
