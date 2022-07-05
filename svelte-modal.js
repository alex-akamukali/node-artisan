let CodeGen = require("./code-gen");
const TableFields = require("./table-fields");

let SvelteModal = function (path, tableName, action,actionContainer,label) {
  let code = CodeGen("resources/js/Pages/v2/" + path, "templates/svelte-modal.stub");
  let query = TableFields(tableName);

  async function commit() {
    let actionLabel = code.ucFirst(action) + ' ' + label;
    code.commit(
      {
        action,
        actionContainer,
        fieldSet: await getRenderFieldSets(actionContainer),
        label,
        actionLabel
      },
      ".svelte"
    );
  }
//fieldSet
  async function getRenderFieldSets(actionContainer) {
    if (tableName == "") {
      return Promise.resolve("no-fields");
    }
    let fields = await query.getFields();
    let list = [];
    for (let i in fields) {
      list.push(
        renderFieldSets(
          fields[i],
          code._getHumanCase(fields[i]),
          actionContainer,
          label
        )
      );
    }
    return Promise.resolve(list.join(""));
  }

  function renderFieldSets(field, label, actionContainer) {
    return `
        <div class="col-md-12">
<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="control-label"
    >${label} <b style="color:red">*</b></label
>
<input
    type="text"
    class="form-control"
    placeholder=""
    required=""
    bind:value={$${actionContainer}.${field}}
/>

</div> ${"\n"}
        `;
  }

  return Object.seal({
    commit,
  });
};

module.exports = SvelteModal;
