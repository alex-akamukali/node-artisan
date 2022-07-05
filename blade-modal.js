const CodeGen = require("./code-gen");
const TableFields = require("./table-fields");


const BladeModal = function({path,tableName,title,id,action,actionCommit,routeAction}){
   
    let query = TableFields(tableName);

    let code = CodeGen("resources/views/" + path,"templates/blade-modal.stub");

    async function commit(){
       code.commit({
        id,
        fieldSet: await renderFieldSet(),
        title,
        action,
        actionCommit,
        routeAction
       },".blade.php");
    }

    //v2/Settings/Config/Index

    function getViewPath(){
      let p = code.getPath().split("resources/views/");
      p = p[1].split('/').join("\\").split("\\").join(".");
      return p;
    }

    async function renderFieldSet(){
      let fields = await query.getFields(tableName);
      let r = [];
      fields.forEach((item,index)=>{
        r.push(
            _renderFieldSet(code._getHumanCase(item),item)
        );
      });

      return Promise.resolve(r.join("\n"));
    }

    function _renderFieldSet(label,field){
        return `<div class="col-md-12">
        <label class="control-label">${label}
          <b style="color:red">*</b>
        </label>
        <input class="form-control" name="${field}" placeholder="${label}" />
       </div>${"\n"}`;
    }

    return Object.seal({
        ...code,
        commit,
        getViewPath
    });
    
};


module.exports = BladeModal;