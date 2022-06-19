const controllerBuilder = require('artisan/route');

let code = controllerBuilder("Finance/Payment","Finance/Payment","solicitations");
code.commit();
// console.log(__dirname);