const ejs = require('ejs');
const util = require('util');
const fs = require('fs');

//*******************************
//** Utils
//*******************************
const mkdir = util.promisify(fs.mkdir);
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

function render(fromFile, toFile, model) {
  return ejs
    .renderFile(fromFile, model)
    .then(html => writeFile(toFile, html, 'utf8'))
    .catch(console.log);
}

//*******************************
//** Main
//*******************************
async function main() {
  console.log('Converting .ejs to .html');

  const manifest = await require('./dist/manifest.json');

  const model = {
    mainJS: manifest['main.js'],
    mainCSS: manifest['main.css'],
  };

  render('templates/pages/home.ejs', 'dist/index.html', model);
  render('templates/pages/404.ejs', 'dist/404.html', model);
}

main();
