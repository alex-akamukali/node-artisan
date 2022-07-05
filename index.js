const Route = require("./route");
const readline = require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
});

let repository = '';
let model = '';
let table = '';
readline.question("Repository:",function(ans1){
    //#!/usr/bin/env node
    repository = ans1;

    
    readline.question("Model:",function(ans2){
        model = ans2;
        

        readline.question("Table:",function(ans3){
            table = ans3;

            
            let code = Route(
                repository, //repo-path
                model, //model-path
                table  //"filebase"
            );

            code.commit();

            readline.close();
              
        });
        
    });
    
});

// let query = TableFields('bidrecords');
// query.getFields().then(res=>console.log(res)).catch(err=>console.log(err));

// code.commit();
