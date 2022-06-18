const GenerateScafold = require("./scafold");

const CodeGen = function(path,template){

    let scafold = GenerateScafold();

    function copy(from){
       let to = []; 
       for (let i in from){
         to[i] = from[i];
       }
       return to;
    }

    function decodePath($path){
       return $path.split("/").join("\\").split("\\");
    }

    function getPath(takeout="__none__"){
      let t =  pathArray.join("/");
      t = t.split(takeout);
      // console.log(t);
      return t[0];
    }

    function getPathArray(){
        return pathArray;
    }

    function getName(takeout='__none__'){
      let t = copy(pathArray).pop();
      t = t.split(takeout);
      return t[0];
      //return copy(pathArray).pop();
    }

    

    function commit(data,ext='.php'){
      scafold.generate(__dirname + '/' +  template,getPath() + ext,data);
    }

    function getSnakeCase(){
       let name = getName();
       let charList = name.split('');
       let newCharList = [];
       for (let i in charList){
           let char = charList[i];
           let isUpperCase = (char.toLowerCase() != char); 
           if (i > 0 && isUpperCase){
              newCharList.push('_');
              newCharList.push(char.toLowerCase());
           }else{
               newCharList.push(char.toLowerCase());
           }
       }
       return newCharList.join(''); 
    }

    const pathArray = decodePath(path);


    return Object.seal({
        getPath,
        getName,
        getSnakeCase,
        getPathArray,
        commit,
        copy 
    });

};

module.exports = CodeGen;
