var restify = require('restify');

function ok(req, res, next) {
  res.send('OK!');
  next();
}

function hello(req, res, next) {
  res.send(`Hello ${req.params.name}`);
  next();
}

const server = restify.createServer();

server.get('/', ok);

server.get('/hello/:name', hello);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});