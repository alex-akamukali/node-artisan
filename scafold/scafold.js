const readline = require("readline");
const fs = require('fs');


const GenerateScafold = function(){

    const readFilePath=(path)=>{
        return fs.readFileSync(path,"utf-8");
    }

    const createFilePath = (path,data)=>{
        // console.log(path);
        let pathSplit = path.split('/');
        let file = pathSplit[pathSplit.length - 1];
        pathSplit.pop();
        fs.mkdirSync(pathSplit.join("/"),{recursive:true});
        if (!fs.existsSync(path)){
            fs.writeFileSync(path,data,"utf-8");
        }
        
    }; 
    
    const writeFilePath =(path,data)=>{
        if (fs.existsSync(path)){
            fs.writeFileSync(path,data,"utf-8");
        } 
    };

    const generate =(fromTemplate,toTarget,data)=>{
        let fromData = readFilePath(fromTemplate);
        for (let i in data){
            fromData = fromData.split("{" + i + "}").join(data[i]);
        }
        //fromData;
        createFilePath(toTarget,fromData);
    }

    function generateAppend(fromTemplate,toTarget,data){
        let fromData = readFilePath(fromTemplate);
        for (let i in data){
            fromData = fromData.split("{" + i + "}").join(data[i]);
        }
        let toData = readFilePath(toTarget);
        writeFilePath(toTarget,toData + "\n" + fromData);
    }
    
    return Object.seal({
        generate,
        generateAppend
    });
};


module.exports = GenerateScafold;
