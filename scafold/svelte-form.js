const CodeGen = require("./code-gen");
const TableFields = require("./table-fields");

const SvelteForm = function(path,tableName,resource){
    console.log(resource);
    
    let code = CodeGen("resources/js/Pages/v2/" + path,'templates/svelte-form.stub');

    async function commit(){
       
    //    console.log((await getFields())); 

       code.commit({
           fields: await getFields(),
           resource
       },".js");
    }

    async function getFields(){
        if (tableName == ''){
          return Promise.resolve('{}');
        }
        let fields = await TableFields(tableName).getFields();
        let obj = {};
        for (let i in fields){
            obj[fields[i]] = '';
        }
        return Promise.resolve(JSON.stringify(obj,null,"\t"));
        // return Promise.resolve("'" + fields.join("','") + "'"); 
    }

    return Object.seal({
       commit
    });
};

module.exports = SvelteForm;