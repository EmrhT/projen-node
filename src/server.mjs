import pkg from 'hello-world-npm'; // added dummy package to simulate automated dependency upgrade with projen
const { helloWorld } = pkg;

import { createRequire } from 'module'
const require = createRequire(import.meta.url);
const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log(helloWorld());
});