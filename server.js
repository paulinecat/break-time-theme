const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

const DIST_DIR = 'public';
const INDEX_FILE = path.resolve(DIST_DIR, 'index.html');

app.use(express.static(DIST_DIR));

app.get('*', (req, res) => {
  res.sendFile(INDEX_FILE);
});

app.listen(PORT, () => {
  console.log(`Theme app is listening on http://localhost:${PORT}`);
});