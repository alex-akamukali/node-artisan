const Model = require("./model");
const Service = require("./service");
const FormRequest = require("./form-request");
const SvelteComponent = require("./svelte-component");
const SvelteForm = require("./svelte-form");
const SvelteCreateModal = require("./svelte-create-modal");
const SvelteUpdateModal = require("./svelte-update-modal");
const BladeIndex = require("./blade-index");
const BladeModal = require("./blade-modal");
const BladeEditModal = require("./blade-edit-modal");


const BladeController = function(path,modelPath,table=''){

    

    let code = Model("app/Http/Controllers/v1/" + path + "Controller","templates/blade-controller.stub");

    let storeRequest = FormRequest(path + "/StoreRequest",table);
    let updateRequest = FormRequest(path + "/UpdateRequest",table);

    let serviceBuilder = Service(path,modelPath);

    let labelBuilder = Model(path,""); //just to re-use functionality.

    

    let bladeCreate = BladeModal({path: path + "/create",tableName:table,
    title:labelBuilder.getHumanCase(),id:labelBuilder.getHyphenCase() + "modal-create",action:"Add",actionCommit:"Create",routeAction:labelBuilder.getHyphenCase() + ".store"});

    let bladeEdit = BladeEditModal({path: path + "/edit",tableName:table,
    title:labelBuilder.getHumanCase(),id:labelBuilder.getHyphenCase() + "modal-edit",action:"Edit",actionCommit:"Update",routeAction:labelBuilder.getHyphenCase() + ".update"});

    let bladeIndex = BladeIndex(path,table,labelBuilder.getHumanCase(),bladeCreate.getViewPath(),bladeEdit.getViewPath(),labelBuilder.getHyphenCase() + ".destroy");
    
    // let svelteCreateModal = SvelteCreateModal(path + "/ModalCreate",table,labelBuilder.getHumanCase());
    // let svelteUpdateModal = SvelteUpdateModal(path + "/ModalUpdate",table,labelBuilder.getHumanCase());

    function commit(){
        code.commit({
          name:code.getName(),
          serviceUse:serviceBuilder.getUseStatment(),
          serviceVariable:serviceBuilder.getVariableName(),
          namespace:code.getNamespace(),
          serviceName:serviceBuilder.getName(), 
          useStoreRequest:storeRequest.getUseStatment(),
          useUpdateRequest:updateRequest.getUseStatment(),

          bladeIndex:bladeIndex.getViewPath(),
          bladeShow:'',
          bladeEdit:'',
          bladeCreate:bladeCreate.getViewPath()

        //   svelteEdit:svelteEdit.getViewPath(),
        //   svelteCreate:svelteCreate.getViewPath(),
        //   svelteShow:svelteShow.getViewPath()

        },'.php');
        serviceBuilder.commit();
        storeRequest.commit();
        updateRequest.commit();

        bladeIndex.commit();
        bladeCreate.commit();
        bladeEdit.commit();
                
    }

    return Object.seal({
        ...code,
        commit
    });

};


module.exports = BladeController; 