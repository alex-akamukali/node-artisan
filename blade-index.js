// const BladeModal = require("./blade-modal");
const CodeGen = require("./code-gen");
const TableFields = require("./table-fields");


const BladeIndex = function(path,tableName,title,bladeCreateViewPath,bladeEditViewPath,routeDestroy){
 
    let code = CodeGen("resources/views/" + path,"templates/blade-index.stub");
    let query = TableFields(tableName);

    async function commit(){
       code.commit({
        title,
        tableHeader: await renderTableHeaders(),
        tableRow: await renderTableRows(),
        bladeCreateViewPath,
        bladeEditViewPath,
        routeDestroy
       },".blade.php");
      //  bladeCreateModal.commit();
      //  bladeEditModal.commit();
    }

    //v2/Settings/Config/Index

    function getViewPath(){
      let p = code.getPath().split("resources/views/");
      p = p[1].split('/').join("\\").split("\\").join(".");
      return p;
    }

    async function renderTableHeaders(){
      let fields = await query.getFields(tableName);
      let r = [];
      fields.forEach((item,index)=>{
        r.push(_renderTableHeaders(code._getHumanCase(item)));
      });
      console.log(r);
      return Promise.resolve(r.join("\n"));
    }

    function _renderTableHeaders(label){
      return `<th>${label}</th>`;
    }

    async function renderTableRows(){
      let fields = await query.getFields(tableName);
      let r = [];
      fields.forEach((item,index)=>{
        r.push(_renderTableRows(item));
      });
      console.log(r);
      return r.join("\n");
    }

    function _renderTableRows(field){
       return `<td>{{$item->${field}}}</td>`;
    }

    return Object.seal({
        ...code,
        commit,
        getViewPath
    });
    
};


module.exports = BladeIndex;