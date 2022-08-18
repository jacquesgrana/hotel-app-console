// importation de la librairie request
// recherche par défaut dans le répertoire node_modules
let request = require("request");
let presentation = require("./presentation.js");

//let data;

// TODO visualiser l'adresse https://jsonplaceholder.typicode.com/posts avec votre navigateur.
// les données sont exposées au format JSON.
// Envoie de la requête http
// err -> objet erreur en cas de code 4XX ou 5XX
// res -> objet réponse HTTP complet
// body -> corps de la réponse
// L'option { json: true } permet d'obtenir un objet JavaScript dans body (au lieu
// d'une chaîne de caractères).

function getListData() {
    request('https://jsonplaceholder.typicode.com/posts', { json: true }, function(err, res, body) {
        if (err) { return console.log('Erreur', err); }
        
        // body contient les données récupérées
        console.log(body);
        //return (body);
        //presentation.setData(body);
        presentation.start();
        return;
        });
}

//exports.data = data;
exports.getListData = getListData;

