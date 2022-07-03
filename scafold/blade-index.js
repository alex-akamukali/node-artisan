const CodeGen = require("./code-gen");


const BladeIndex = function(path,title){
 
    let code = CodeGen("resources/views/" + path,"templates/blade-index.stub");

    function commit(){
       code.commit({
        
       },".blade.php");
    }

    //v2/Settings/Config/Index

    function getViewPath(){
      let p = code.getPath().split("resources/js/Pages/");
      p = p[1];
      return p;
    }

    return Object.seal({
        ...code,
        commit,
        getViewPath
    });
    
};


module.exports = BladeIndex;