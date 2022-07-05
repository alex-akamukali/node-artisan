let mysql = require("mysql");
let DbConnection = require("./db-connection");

const TableFields = function (table) {
 
  let connection = DbConnection();

  function getFields(){
    return connection.query(`show COLUMNS from ${table}`).then(extractFields);
  }

  function extractFields(res){
    let fields = [];
    for (let i in res){
      fields.push(res[i].Field);
    }
    // connection.end();
    return Promise.resolve(fields);
  }
   

  return Object.seal({
    // initConnection,
    getFields
  });
};

module.exports = TableFields;
