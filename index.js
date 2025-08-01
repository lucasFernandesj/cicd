const express = require('express');
const app = express();
const port = process.env.PORT || 8080;


app.get('/', (req, res) => {
  res.send('Hello');
});


app.get('/work', (req, res) => {
  res.send('work');
});

app.get('/bring', (req, res) => {
  res.send('Them back!');
});

app.get('/xss', (req, res) => {
  const payload = req.query.payload || 'Guest';
  res.send(`<h1>${payload}</h1>`);
});


app.get('/greet', (req, res) => {
  const name = req.query.name;
  if (!name) {
    return res.status(400).send('Invalid input: Please provide a name.');
  }
  res.send(`${name}`);
});

app.get('/xss', (req, res) => {
  const payload = req.query.payload || 'Guest';
  res.send(`<h1>${payload}</h1>`);
});


if (require.main === module) {
  app.listen(port, () => {
    console.log(`Node.js app listening on port ${port}`);
    console.log(`Access it locally at http://localhost:${port}`);
  });
}


module.exports = app;