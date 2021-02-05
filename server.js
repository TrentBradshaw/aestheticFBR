const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public' + '/index.html');
// res.status(200).send('Hello World from the server!');
});
app.listen(port, function () {
 console.log('App listening on port: ' + port);
});