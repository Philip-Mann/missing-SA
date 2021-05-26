const express = require('express');
const es6Renderer = require('express-es6-template-engine');
const kids = require('./kids');
const app = express();

app.engine('html', es6Renderer);     
app.set('views', 'templates');       
app.set('view engine', 'html');

app.get('/', (req, res) => {

    const missingKids = Object.keys(kids);
    const newNameArray = missingKids.map ( _name => kids[_name]);
    const newImageArray = missingKids.map( image => kids[image]);

    res.render("home", {
        locals: {
            newNameArray,
            newImageArray
        }
    });
});

app.get('/case/:id', (req, res) => {
    const kidsName = kids[req.params.id];

    if(!kidsName){
        res.send('404 Case not found...')
    }


    res.render('case', {
        locals: {
            kidsName
        }
    })
})

app.get('*', (req, res) => {
    res.render('404')
})




// Setting up PORT and link to Localhost
const portNum = 3000;
const portUrl = `http://localhost:`;
app.listen(process.env.PORT || portNum, () => {
    console.log(portUrl + portNum);
});