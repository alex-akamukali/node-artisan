const Model = require("./model");

const FormRequest = function(path){

    let code = Model("app/Http/Requests/" + path,"templates/form-request.stub");

    function commit(){
       code.commit({
           namespace:code.getNamespace(),
           name:code.getName()
       },'.php');
    }

    return Object.seal({
        ...code, 
        commit
    });
};


module.exports = FormRequest;