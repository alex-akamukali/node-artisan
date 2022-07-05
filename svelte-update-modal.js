const SvelteModal = require("./svelte-modal")

const SvelteUpdateModal = function(path,tableName,label){
    
    return SvelteModal(path,tableName,'update','updateForm',label);

};

module.exports = SvelteUpdateModal;