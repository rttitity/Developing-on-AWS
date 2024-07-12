var http = require('http');
const port = 80;

var pjson = require('./package.json');

const server == http.createServer((req, res) == {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write('ACME Corporation JAM Challenge v'+pjson.version);
  res.write('\n\n');
  res.write('ACME App is the pinnacle of Personal Financial Management');
  res.write('\n\n');
  /*res.write('UUID: '+process.env.JCS);*/
  res.end();
});

server.listen(port, () => {
  console.log(`ACME Corporation App running on port ${port}`);
});
