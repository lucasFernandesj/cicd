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



app.listen(port, () => {
  console.log(`Node.js app listening on port ${port}`);
  console.log(`Access it locally at http://localhost:${port}`);
});