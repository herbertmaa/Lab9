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

function getTerm1() {


    const ref = firebaseApp.database().ref('Term/Term1');

    return ref.once('value').then(snap => snap.val());

}

function getTerm2() {


    const ref = firebaseApp.database().ref('Term/Term2');

    return ref.once('value').then(snap => snap.val());

}


function getTerm3() {

    const ref = firebaseApp.database().ref('Term/Term3');
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

app.get('/term1.html', (request, response) => {

    response.set('Cache-Control', 'public, max-age = 300, s-maxage=600')


    getTerm1().then(facts => {


 
    var t = {'<>':'div','class':'course','html':[
        {'<>': 'h6', 'html':'${course_name}'},
        {'<>': 'p', 'html':'${course_id} Credits: ${course_credits}'}

    ]};

    var html = json2html.transform(facts,t);


    response.send(html);
 
       
    })
});

app.get('/term1.json', (request, response) => {

    response.set('Cache-Control', 'public, max-age = 300, s-maxage=600')

    getTerm1().then(facts => {

        response.json(facts);

    })
});

app.get('/term2.html', (request, response) => {

    response.set('Cache-Control', 'public, max-age = 300, s-maxage=600')


    getTerm2().then(facts => {


 
    var t = {'<>':'div','class':'course','html':[
        {'<>': 'h6', 'html':'${course_name}'},
        {'<>': 'p', 'html':'${course_id} Credits: ${course_credits}'}

    ]};

    var html = json2html.transform(facts,t);


    response.send(html);
 
       
    })
});

app.get('/term2.json', (request, response) => {

    response.set('Cache-Control', 'public, max-age = 300, s-maxage=600')

    getTerm2().then(facts => {

        response.json(facts);

    })
});

app.get('/term3.html', (request, response) => {

    response.set('Cache-Control', 'public, max-age = 300, s-maxage=600')


    getTerm3().then(facts => {


    var t = {'<>':'div','class':'course','html':[
        {'<>': 'h6', 'html':'${course_name}'},
        {'<>': 'p', 'html':'${course_id} Credits: ${course_credits}'}

    ]};

    var html = json2html.transform(facts,t);


    response.send(html);
 
       
    })
});

app.get('/term3.json', (request, response) => {

    response.set('Cache-Control', 'public, max-age = 300, s-maxage=600')

    getTerm3().then(facts => {

        response.json(facts);

    })
});

app.get('/movies.html', (request, response) => {

    response.set('Cache-Control', 'public, max-age = 300, s-maxage=600')


    getFacts().then(facts => {


 
    var t = {'<>':'div','html':[
        {'<>': 'img', 'alt': 'default_logo', 'src': 'https://via.placeholder.com/150.jpg'},
        {'<>': 'h5', 'html':'${Name}'},
        {'<>': 'a', 'class': 'Btn Btn--primary', 'href': '#', 'html': 'Advance Tickets'}
    
    ]};

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
