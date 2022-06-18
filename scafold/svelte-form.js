const CodeGen = require("./code-gen");

const SvelteForm = function(path,tableName){
    return CodeGen(path,'templates/svelte-form.stub');
};

module.exports = SvelteForm;