const express = require('express');
const app = express();
const port = process.env.PORT || 8080;


app.get('/', (req, res) => {
  res.send('Hello');
});

app.get('/bring', (req, res) => {
  res.send('Them back!');
});

app.get('/work', (req, res) => {
  res.send('work');
});



//VULN
// SQL Injection vulnerability
app.get('/user', async (req, res) => {
  const userId = req.query.id;
  const result = await db.query(`SELECT * FROM users WHERE id = '${userId}'`);
  res.json(result.rows);
});

// Open Redirect vulnerability
app.get('/redirect', (req, res) => {
  const target = req.query.url;
  res.redirect(target);
});

// Missing security headers
app.get('/no-security-headers', (req, res) => {
  res.send('No headers set!');
});

app.get('/greet', (req, res) => {
  const name = req.query.name;
  if (!name) {
    return res.status(400).send('Invalid input: Please provide a name.');
  }
  res.send(`${name}`);
});




if (require.main === module) {
  app.listen(port, () => {
    console.log(`Node.js app listening on port ${port}`);
    console.log(`Access it locally at http://localhost:${port}`);
  });
}


module.exports = app;