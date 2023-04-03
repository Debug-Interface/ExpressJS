const { TOKEN, DOMAIN, SLASH, TAG } = process.env;
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: new Intents(32767) });
client.once('ready', () => { console.log(`Name: ${client.user.username}`) });
client.login(TOKEN);

const Express = require('express');
const App = Express();
const Path = require('path');
const Parser = require('body-parser');

App.use(Parser.urlencoded({ extended: true }));
App.set('views', Path.join(__dirname, '/Website'));
App.set('view engine', 'ejs');
App.use(Express.static('public'));

App.get('/', (req, res) => {
  res.render('Home', {
    client: client,
    DOMAIN: DOMAIN,
    SLASH: SLASH,
    TAG: TAG
  });
});

App.listen(8080, () => {
  console.log('Running!');
});

```
