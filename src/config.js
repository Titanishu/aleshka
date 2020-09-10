const path = require('path');

// Корень проекта, от которого строятся все остальные пути
const ROOT = path.resolve('./');

// Директория с данными
const DATA_DIR = path.join(ROOT, 'src', 'data');
// Файл с данными
const DATA = path.join(DATA_DIR, 'data.json');

module.exports = {
  ROOT,
  DATA_DIR,
  DATA,
}
