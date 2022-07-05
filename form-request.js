const Model = require("./model");
const TableFields = require("./table-fields");

const FormRequest = function(path,table){

    let code = Model("app/Http/Requests/" + path,"templates/form-request.stub");
    let query = TableFields(table);

    async function commit(){
       code.commit({
           namespace:code.getNamespace(),
           name:code.getName(),
           fields: await getFields()
       },'.php');
    }

    async function getFields(){
      if (table == ''){
        return Promise.resolve('');
      }  
      let fields = await query.getFields();
      let list = [];
      for (let i in fields){
         list.push(renderRequiredField(fields[i]));
      }
      return Promise.resolve(list.join(",\n"));
    }

    function renderRequiredField(field){
        return `"${field}"=>"required"`;
    }


    return Object.seal({
        ...code, 
        commit
    });
};


module.exports = FormRequest;