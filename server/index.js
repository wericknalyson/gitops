const express = require('express');

const app = express();
const version = '1.0.1'

app.get('/', (req, res) => {
    res.send(`<h1>Version ${version}</h1>`)
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})