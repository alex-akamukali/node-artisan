const Model = require("./model");
const Service = require("./service");
const FormRequest = require("./form-request");
const SvelteComponent = require("./svelte-component");
const SvelteForm = require("./svelte-form");
const SvelteCreateModal = require("./svelte-create-modal");
const SvelteUpdateModal = require("./svelte-update-modal");
const BladeIndex = require("./blade-index");


const BladeController = function(path,modelPath,table=''){

    

    let code = Model("app/Http/Controllers/v1/" + path + "Controller","templates/blade-controller.stub");

    let storeRequest = FormRequest(path + "/StoreRequest",table);
    let updateRequest = FormRequest(path + "/UpdateRequest",table);

    let serviceBuilder = Service(path,modelPath);

    
    
    let labelBuilder = Model(path,""); //just to re-use functionality.

    let bladeIndex = BladeIndex(path + "/index",table,labelBuilder.getHumanCase());
    
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
          bladeCreate:''

        //   svelteEdit:svelteEdit.getViewPath(),
        //   svelteCreate:svelteCreate.getViewPath(),
        //   svelteShow:svelteShow.getViewPath()

        },'.php');
        serviceBuilder.commit();
        storeRequest.commit();
        updateRequest.commit();

        bladeIndex.commit();
        
        // svelteEdit.commit();
        // svelteCreate.commit();
        // svelteShow.commit();

        // svelteForm.commit();

        // svelteCreateModal.commit();
        // svelteUpdateModal.commit();
        
    }

    return Object.seal({
        ...code,
        commit
    });

};


module.exports = BladeController; 