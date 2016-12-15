var express = require('express');
var app = express();
var jwt = require('express-jwt');
var cors = require('cors');

app.use(cors());

var authCheck = jwt({
  secret: new Buffer('4GdO3xs6J3p_Rg5uQZ-wxWNQjg8Oqe7G9BRTnavWEIheVbcnhlQ43KUTAG5u2HEW', 'base64'),
  audience: 'gzYHsvv1lrYFAORxhDt5XGdhn3dlAWKv'
});

app.get('/api/public', function(req, res) {
  res.json({ message: "Hello from a public endpoint! You don't need to be authenticated to see this." });
});

app.get('/api/private', authCheck, function(req, res) {
  res.json({ message: "Hello from a private endpoint! You DO need to be authenticated to see this." });
});

app.listen(3001);
console.log('Listening on http://localhost:3001');