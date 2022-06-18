const Model = require("./model");
const Repository = require("./repository");

const Service = function(path){

    let code = Model('app/Services/' + path + "Service",'templates/service.stub');
    let repo = Repository(path);

    function commit(){
      code.commit({
         name:code.getName(),
         namespace:code.getNamespace(),
         repoUse:repo.getUseStatment(),
         repoVariable:repo.getVariableName(),
         repoName:repo.getName()
      },'.php');
      repo.commit();
    }


    return Object.seal({
        ...code,
       commit
    });

};


module.exports = Service;