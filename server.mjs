import jsonServer from 'json-server';
import cors from 'cors';
import path from 'path';

const server = jsonServer.create();
const dbPath = path.join(__dirname, 'build/db/app.json'); // Łączenie ścieżki do pliku app.json
const router = jsonServer.router(dbPath);

// Dodaj obsługę CORS
server.use(cors());

const port = process.env.PORT || 3131;

server.use(jsonServer.rewriter({
  '/api/*': '/$1'
}));

server.use(router);
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});

/*start on replit: node server.mjs*/