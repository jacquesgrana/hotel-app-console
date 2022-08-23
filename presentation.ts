
let data : any;
//let readline = require("readline");

import * as readline from "readline";
import { start } from "repl";
//let service = require("./service.js");
import { Service } from "./service";

let service = new Service();

let rl = readline.createInterface({
    terminal: true,
    input: process.stdin,
    output: process.stdout
});
export class Presentation {

    constructor() {}

    start() {
        displayMenu();
        this.generalMenu();
    }
    
    generalMenu () {
        rl.question("Saisir votre choix : ", function (response : any) {
            //console.log("response :", response);
            if (response == "99") {
                quit();
            } else if (response == "1") {
                console.log("Liste des clients :");
                console.log("");
                service.getListData.then((jsondata) => {
                    //console.log(jsondata);
                    loadDatas(jsondata, data);
                    let presentation = new Presentation();
                    presentation.start();
                })
                .catch((e) => {console.log('erreur : ' + e)});
                
                //displayData(data);
                //return;
            } else if (response == "2") {
                searchMenu();
            }

        });
    }
    /*
    setData(dataToImport : any) {
        data = dataToImport;
    }
    
    displayData(dataToDisplay : any) {
        let toDisplay = JSON.stringify(dataToDisplay);
        console.log(toDisplay);
    }
*/
    

}

function displayMenu() {
    console.log("");
    console.log("Menu :");
    console.log("1. Lister les users");
    console.log("2. Rechercher un user par son username");
    console.log("99. Sortir");
}

function quit() {
    console.log("Au revoir");
    rl.close();
    process.exit(0);
}

function displayData(dataToDisplay : any) {
    let toDisplay = JSON.stringify(dataToDisplay);
    console.log(toDisplay);
}



function loadDatas(jsondata: any, data: any) {
    data = jsondata.map((d:any) => {return {id: d.id, name: d.name, username: d.username, email:d.email}});
    data.forEach((element:any) => {
        console.log("User : id : " + element.id + " / name : " + element.name + " / username : " + element.username + " / email : " + element.email);
    });
    //console.log('datas : ' + data);
}

function searchMenu() {
    rl.question("Saisir un username : ", function (response : any) {

        service.getListData.then((jsondata:any) => {
            //console.log(jsondata);
            //loadDatas(jsondata, data);
            data = jsondata.map((d:any) => {return {id: d.id, name: d.name, username: d.username, email:d.email}});
            data  = jsondata.filter((d:any) => d.username == response)[0];
            console.log("User : id : " + data.id + " / name : " + data.name + " / username : " + data.username + " / email : " + data.email);

            let presentation = new Presentation();
            presentation.start();
        })
        .catch((e) => {console.log('erreur : ' + e)});
    });  
}
//exports.start = start;
//exports.setData = setData;