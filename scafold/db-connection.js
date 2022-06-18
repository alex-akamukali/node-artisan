let mysql = require("mysql");

const DbConnection = function () {
  let connection = null;
  function initConnection() {
    connection = mysql.createConnection({
      host: "127.0.0.1",
      user: "root",
      password: "",
      port: 3310,
      database:'canada-bid-db'
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
