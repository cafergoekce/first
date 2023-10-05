const app = require('express')();
const countries = require('./countries');
const webTechs = require('./web_techs.js');


console.log("Countries:", countries);

console.log("Web Technologies:", webTechs);

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(`Hello! Go to item:`);
});

app.get('/api/:slug', (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
});

module.exports = app;