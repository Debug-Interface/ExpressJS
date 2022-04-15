Discord = require('discord.js');
Client = new Discord.Client({ intents: new Discord.Intents(32767) });
Client.on('ready', () => { console.log('Ready!') })
Client.login('TOKEN');

Express = require('express');
App = Express();
Path = require('path');
Parser = require('body-parser')

App.use(Parser.urlencoded({extended: true}));
App.set('views', Path.join(__dirname, '/Website'));
App.set('view engine', 'ejs')
App.use(Express.static('public'));

App.get('/', (req, res) => {
  res.render('Home', {Client: Client})
});

App.listen(process.env.PORT, () => {
  console.log('Server Started')
});
