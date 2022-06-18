const Controller = require("./controller");
const TableFields = require("./table-fields");

// let $repo = 'Payment/Transaction';

let code = Controller("Payment/Transaction","bidrecords");

// let query = TableFields('bidrecords');
// query.getFields().then(res=>console.log(res)).catch(err=>console.log(err));

code.commit();