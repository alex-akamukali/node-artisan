const Model = require("./model");
const Service = require("./service");
const FormRequest = require("./form-request");
const SvelteComponent = require("./svelte-component");
const SvelteForm = require("./svelte-form");
const SvelteCreateModal = require("./svelte-create-modal");
const SvelteUpdateModal = require("./svelte-update-modal");


const Controller = function(path,modelPath,table=''){

    let code = Model("app/Http/Controllers/v1/" + path + "Controller","templates/controller.stub");

    let storeRequest = FormRequest(path + "/StoreRequest",table);
    let updateRequest = FormRequest(path + "/UpdateRequest",table);

    let serviceBuilder = Service(path,modelPath);

    let svelteIndex = SvelteComponent(path + "/Index");
    let svelteEdit = SvelteComponent(path + "/Edit");
    let svelteCreate = SvelteComponent(path + "/Create");
    let svelteShow = SvelteComponent(path + "/Show");
    let svelteForm = SvelteForm(path + "/Form",table,code.getHyphenCase());

    let labelBuilder = Model(path,""); //just to re-use functionality.
    let svelteCreateModal = SvelteCreateModal(path + "/ModalCreate",table,labelBuilder.getHumanCase());
    let svelteUpdateModal = SvelteUpdateModal(path + "/ModalUpdate",table,labelBuilder.getHumanCase());

    function commit(){
        code.commit({
          name:code.getName(),
          serviceUse:serviceBuilder.getUseStatment(),
          serviceVariable:serviceBuilder.getVariableName(),
          namespace:code.getNamespace(),
          serviceName:serviceBuilder.getName(), 
          useStoreRequest:storeRequest.getUseStatment(),
          useUpdateRequest:updateRequest.getUseStatment(),

          svelteIndex:svelteIndex.getViewPath(),
          svelteEdit:svelteEdit.getViewPath(),
          svelteCreate:svelteCreate.getViewPath(),
          svelteShow:svelteShow.getViewPath()

        },'.php');
        serviceBuilder.commit();
        storeRequest.commit();
        updateRequest.commit();

        svelteIndex.commit();
        svelteEdit.commit();
        svelteCreate.commit();
        svelteShow.commit();

        svelteForm.commit();

        svelteCreateModal.commit();
        svelteUpdateModal.commit();
        
    }


    return Object.seal({
        ...code,
        commit
    });

};


module.exports = Controller; 