// importation de la librairie request
// recherche par défaut dans le répertoire node_modules

//let request = require("request");
import request, * as Request from "request";
import { Presentation } from "./presentation";
//let presentation = require("./presentation.js");
//let presentation = new Presentation();

//let data;

// TODO visualiser l'adresse https://jsonplaceholder.typicode.com/posts avec votre navigateur.
// les données sont exposées au format JSON.
// Envoie de la requête http
// err -> objet erreur en cas de code 4XX ou 5XX
// res -> objet réponse HTTP complet
// body -> corps de la réponse
// L'option { json: true } permet d'obtenir un objet JavaScript dans body (au lieu
// d'une chaîne de caractères).


export class Service {


    constructor() {}

    public getListData = new Promise<void>((resolve, reject) => {
        request('https://jsonplaceholder.typicode.com/users', { json: true }, function (err: any, res: any, body: any) {
            if (err) { reject(err); }

            // body contient les données récupérées
            //console.log(body);
            //let presentation = new Presentation();
            //presentation.start();
            resolve(body);
            return;
        });
    })
    
    /*
    getListData() {
        //let request = new Request(); // https://jsonplaceholder.typicode.com/posts
        request('https://jsonplaceholder.typicode.com/users', { json: true }, function (err: any, res: any, body: any) {
            if (err) { return console.log('Erreur', err); }

            // body contient les données récupérées
            console.log(body);
            let presentation = new Presentation();
            presentation.start();
            return;
        });
    }
    */
}