import fs from 'node:fs/promises';
import http from 'node:http';
import path from 'node:path';

const server = http.createServer(async (req, res) => {
  switch (req.url) {
    case '/':
      const indexHtmlPath = path.resolve('index.html');
      const html = await fs.readFile(indexHtmlPath, 'utf-8');

      res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
      res.end(html);
      break;
    case '/cat':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end(getRandomCatName());
      break;
    default:
      res.writeHead(404).end();
      break;
  }
});

server.listen(3000);
console.log('🤖 SERVER STARTED.');

function getRandomCatName() {
  // These are all real cats.
  const catNames = ['Gerald', 'Sadie', 'Fat Tina', 'Fufu', 'Tofu', 'Chairman Meow', 'Whiskers', 'Deckard', 'Walter', 'Annie', 'Razzy', 'Tiger', 'Shadow'];
  
  return catNames[Math.floor(Math.random() * catNames.length)];
}
