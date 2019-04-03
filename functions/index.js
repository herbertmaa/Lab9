const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const express = require('express');
const engines = require('consolidate');
const json2html = require('node-json2html');

var config = {
    
    apiKey: "AIzaSyCs1rC1pA3M9yAd3Ve1sJknUT4_WzqCs9M",
    authDomain: "lab8-test.firebaseapp.com",
    databaseURL: "https://lab8-test.firebaseio.com",
    projectId: "lab8-test",
    storageBucket: "lab8-test.appspot.com",
    messagingSenderId: "230957358583"
};

const firebaseApp = firebase.initializeApp(config);



function getFacts() {


    const ref = firebaseApp.database().ref('Movies/');

    return ref.once('value').then(snap => snap.val());

}




const app = express();

app.engine('hbs', engines.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');



app.get('/', (request, response) => {

    response.set('Cache-Control', 'public, max-age = 300, s-maxage=600')


    getFacts().then(facts => {


        response.render('index', {
           facts
        });
    })
});

app.get('/movies.html', (request, response) => {

    response.set('Cache-Control', 'public, max-age = 300, s-maxage=600')


    getFacts().then(facts => {


 
    var t = {'<>':'div','html':'${Name} ${Playing}'};


    var html = json2html.transform(facts,t);


    response.send(html);
 
       
    })
});

app.get('/movies.json', (request, response) => {

    response.set('Cache-Control', 'public, max-age = 300, s-maxage=600')

    getFacts().then(facts => {

        response.json(facts);

    })
});
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.app = functions.https.onRequest(app);
