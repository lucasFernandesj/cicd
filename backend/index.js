const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.get('/data', (req, res) => {
    res.json({ message: 'Hello from the backend! This is the first endpoint.' });
});

app.get('/hello', (req, res) => {
    res.json({ message: 'Hello from the backend! This is the second endpoint.' });
});

app.listen(port, () => {
    console.log(`Backend listening on port ${port}`);
});

//