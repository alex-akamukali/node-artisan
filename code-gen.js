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

    function commitAppend(data,ext=".php"){
      scafold.generateAppend(__dirname + '/' +  template,getPath() + ext,data);
    }

    function _getSnakeCase(str){
      let name = str;
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


    function getSnakeCase(){
      return _getSnakeCase(getName());
    }

    function _getHyphenCase(str){
      return _getSnakeCase(str).split('_').join('-');
    }


    function getHyphenCase(){
      return _getHyphenCase(getName());
      // return getSnakeCase().split('_').join('-');
    }

    function _getHumanCase(str){
      let r = _getHyphenCase(str).split('-');
      let t = [];
      for (let i in r){
        if (r[i]){
          t.push(ucFirst(r[i]));
        }
        
      }
      return t.join(' ');
    }

    function ucFirst(str){
      let r = str.split('');
      // console.log(str,r);
      r[0] = r[0].toUpperCase();
      return r.join('');
    }

    function getHumanCase(){
       return _getHumanCase(getName());
    }



    const pathArray = decodePath(path);


    return Object.seal({
        getPath,
        getName,
        getSnakeCase,
        getPathArray,
        commit,
        commitAppend,
        copy,
        getHyphenCase,
        _getHumanCase,
        getHumanCase,
        ucFirst 
    });

};

module.exports = CodeGen;
