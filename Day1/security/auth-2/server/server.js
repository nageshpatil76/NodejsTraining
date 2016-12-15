var express = require('express');
var app = express();
var jwt = require('express-jwt');
var cors = require('cors');

app.use(cors());

var authCheck = jwt({
  secret: new Buffer('kO04JhWEv0k_sB6D8HTvwQs9ZxUw7MXFZArskhC7zOpK8g9dk9LxJM8i6voaooNW', 'base64'),
  audience: 'OKVP8wB1jAt0aUN6EqmalNZYTK7Wi06o'
});

app.get('/api/public', function(req, res) {
  res.json({ message: "Hello from a public endpoint! You don't need to be authenticated to see this." });
});

app.get('/api/private', authCheck, function(req, res) {
  res.json({ message: "Hello from a private endpoint! You DO need to be authenticated to see this." });
});

app.listen(3001);
console.log('Listening on http://localhost:3001');