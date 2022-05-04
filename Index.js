const { Client, Intents } = require('discord.js');
const Client = new Client({ intents: new Intents(32767) });
client.once('ready', () => { console.log('Ready!') })
client.login('TOKEN');

const Express = require('express');
const App = Express();
const Path = require('path');
const Parser = require('body-parser');

App.use(Parser.urlencoded({ extended: true }));
App.set('views', Path.join(__dirname, '/Website'));
App.set('view engine', 'ejs');
App.use(Express.static('public'));

App.get('/', (req, res) => {
  res.render('Home', { client: client });
});

App.listen(process.env.PORT, () => {
  console.log('Server Started');
});
