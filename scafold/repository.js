const Model = require("./model");

const Repository = function (path) {
  let code = Model(
    "app/Repositories/" + path + "Repository",
    "templates/repository.stub"
  );
  let model = Model("app/Models/" + path);

  function commit() {
    code.commit(
      {
        modelName: model.getName(),
        modelUse: model.getUseStatment(),
        modelVariable: model.getVariableName(),
        namespace: code.getNamespace(),
        name: code.getName(),
      },
      ".php"
    );
  }

  return Object.seal({
    ...code,
    commit,
  });
};

module.exports = Repository;

// createFilePath("this/is/good/nice.txt",`Cool..`);

// createFilePath("app/Services/UserService.php",readFilePath("service.stub"));
// generateScafold("service.stub","app/Service/User/UserService.php",{
//     fields:([1,2,3].join(','))
// });
// fs.mkdirSync("cool/nice/ok/nice.txt",{recursive:true});
//  fs.writeSync()
// let vl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// vl.question("What is your name?", (name) => {
//   console.log(`Your name is ${name}`);
//   vl.close();
// });

// vl.on("close", () => {
//   console.log("closed");
//   process.exit();
// });
