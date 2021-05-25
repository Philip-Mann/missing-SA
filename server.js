const express = require('express');
const es6Renderer = require('express-es6-template-engine');
const kids = require('kids');
const app = express();

app.engine('html', es6Renderer);     
app.set('views', 'templates');       
app.set('view engine', 'html');

app.get('/', (req, res) => {
    res.send("Missing Kids")
})





// Setting up PORT and link to Localhost
const portNum = 3000;
const portUrl = `http://localhost:`;
app.listen(process.env.PORT || portNum, () => {
    console.log(portUrl + portNum);
});