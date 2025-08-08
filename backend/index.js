const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.get('/data', (req, res) => {
    res.json({ message: '/data endpoint works' });
});

app.get('/hello', (req, res) => {
    res.json({ message: '/hello endpoint works' });
});

app.listen(port, () => {
    console.log(`Backend listening on port ${port}`);
});

//