const Model = require("./model");
const Service = require("./service");


const Controller = function(path){

    let code = Model("app/Controllers/Http/" + path + "Controller","templates/controller.stub");

    let serviceBuilder = Service(path);

    function commit(){
        code.commit({
          name:code.getName(),
          serviceUse:serviceBuilder.getUseStatment(),
          serviceVariable:serviceBuilder.getVariableName(),
          namespace:code.getNamespace(),
          serviceName:serviceBuilder.getName()
        },'.php');
        serviceBuilder.commit();
    }


    return Object.seal({
        ...code,
        commit
    });

};


module.exports = Controller; 