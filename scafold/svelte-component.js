const CodeGen = require("./code-gen");


const SvelteComponent = function(path){
 
    let code = CodeGen("resources/js/Pages/v2/" + path,"templates/svelte-component.stub");

    function commit(){
       code.commit({},".svelte");
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


module.exports = SvelteComponent;