const CodeGen = require("./code-gen");

const Model =function(path,template=""){

    let code = CodeGen(path,template);


    function getUseStatment(){
        let pathArray = code.getPathArray();
        let t = pathArray[0].split('');
        t[0] = t[0].toUpperCase();
        t = t.join('');
        pathArray[0] = t;
        return pathArray.join("\\");
    }

    function getNamespace(){
      let t = code.copy(code.getPathArray());
      t.pop();
      return t.join("\\"); 
    }

    function getVariableName(){
        let t = code.getName().split('');
        t[0] = t[0].toLowerCase();
        return t.join('');
    }

    return Object.seal({
        getUseStatment,
        getName:code.getName,
        getVariableName,
        getNamespace,
        commit:code.commit,
        getPath:code.getPath,
        getName:code.getName
    });

};

module.exports = Model;