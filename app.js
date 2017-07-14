const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('public'));
app.use(expressLayouts);
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('layout', 'layouts/main-layout');

let players = ['Curry', 'Green', 'Durant', 'Igoudala', 'Thompson'];

app.get('/', (req, res) => {
  res.render('home');
});

app.post('/addplayer', (req, res) => {
  console.log(req.body); //this prints the value of the post req
  let newPlayer = req.body.newplayer; //get the player and
  players.push(newPlayer)
  res.redirect('/players');
});

app.get('/players', (req, res) => {
  res.render('players', {players: players});
});

app.get('*', (req, res) => {
  res.send('Page not found');
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
