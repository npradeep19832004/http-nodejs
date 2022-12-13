import { createServer } from 'http';

createServer((req, res) => {
  res.write('Hello Dear World!');
  res.end();
}).listen(process.env.PORT);
