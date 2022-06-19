// const Controller = require("./controller");
const Route = require("./route");
// const TableFields = require("./table-fields");

// let $repo = 'Payment/Transaction';

let code = Route(
  "Workflow/FirstInterview", //repo-path
  "Workflow/FirstInterview", //model-path
  "solicitations"  //"filebase"
);

// let query = TableFields('bidrecords');
// query.getFields().then(res=>console.log(res)).catch(err=>console.log(err));

code.commit();
