const express = require('express');

const app = express();

app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/css/'));
app.use(express.static('public'));
app.set('view engine', 'pug');


app.use(require('./routes'));


app.use((req, res) => {
  res.status(404)
  .redirect('/');
});

app.listen(3000, () => {
  console.log('App is listening on port 3000');
});
