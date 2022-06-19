const SvelteModal = require("./svelte-modal")

const SvelteCreateModal = function(path,tableName,label){
    
    return SvelteModal(path,tableName,'create','createForm',label);

};

module.exports = SvelteCreateModal;