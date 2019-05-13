const express = require('express');

const app = express();

app.use(require('./routes'));
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/css/'));
app.use(express.static('public'));
app.set('view engine', 'pug');


app.use(require('./routes'));


app.use((req, res) => {
  res.status(404)
  .redirect('/');
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
