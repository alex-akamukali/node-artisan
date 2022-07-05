const BladeController = require("./blade-controller");
const Controller = require("./controller");
const Model = require("./model");


const Route = function(path,modelPath,table){

    

    let code = Model("routes/web","templates/route.stub");
    let controller = BladeController(path,modelPath,table);
    let auxModel = Model(path,"");

    function commit(){
        code.commitAppend({
            resource:auxModel.getHyphenCase(),
            controllerUse:controller.getUseStatment()
        },".php");
        controller.commit();
    }

    return Object.seal({
       ...code,  
       commit
    });
};

module.exports = Route;