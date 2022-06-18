const Model = require("./model");
const Service = require("./service");
const FormRequest = require("./form-request");


const Controller = function(path){

    let code = Model("app/Http/Controllers/v1/" + path + "Controller","templates/controller.stub");

    let storeRequest = FormRequest(path + "/StoreRequest");
    let updateRequest = FormRequest(path + "/UpdateRequest");

    let serviceBuilder = Service(path);

    function commit(){
        code.commit({
          name:code.getName(),
          serviceUse:serviceBuilder.getUseStatment(),
          serviceVariable:serviceBuilder.getVariableName(),
          namespace:code.getNamespace(),
          serviceName:serviceBuilder.getName(), 
          useStoreRequest:storeRequest.getUseStatment(),
          useUpdateRequest:updateRequest.getUseStatment()
        },'.php');
        serviceBuilder.commit();
        storeRequest.commit();
        updateRequest.commit();
    }


    return Object.seal({
        ...code,
        commit
    });

};


module.exports = Controller; 