import http from 'http2';

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.write('Hola Mundo');
  res.end();
})

server.listen(8080, () => {
  console.log('Server running on port 8080')
});