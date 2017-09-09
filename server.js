'use strict';

const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;
const sa = require('superagent');

var express = require('express');
var app = express();
app.use(express.static('./public'));

app.post('/articles', bodyParser, function(request, response) {
  console.log(request.body);
  response.send('Record posted to server!!');
})

app.get('/repos', (req, res) => {
  sa.get('https://api.github.com/user/repos')
    .set('Authorization', `token ${process.env.GITHUB_TOKEN}`)
    .end((err,results) => {
      if(err) console.log(err);
      res.send(result.body);
    })
})

app.listen(PORT, function() {
  console.log(`server up on Port:${PORT}`);
});


app.get('/*', function(there, backAgain) {
  backAgain.sendFile('index.html', {root: './public'});
});
