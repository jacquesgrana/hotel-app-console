
let readline = require("readline");
let service = require("./service.js");

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function start() {

    // appel readline
    // si 1
    // affiche ce qu'il faut
    // si 99 quit
    let response;
    let quit = false;
    //do {
    displayMenu();

    rl.question("Saisir votre choix : ", function (response) {
        //console.log("response :", response);
        if (response == "99") {
            console.log("Au revoir");
            rl.close();
            process.exit(0);
        }
        if (response == "1") {
            console.log("Liste des clients");
            //displayMenu();
            // start et return
            //console.log(service.getListData());
            service.getListData();
            //console.log(service.data);
            //start();
            return;
        }
        
    });

    

    
    //}
    //while (!quit);
}

function displayMenu() {
    console.log("1. Lister les clients");
    console.log("99. Sortir");
}

exports.start = start;