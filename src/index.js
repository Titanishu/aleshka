// Импорт модулей Node JS
const fs = require('fs');
// Импорт из своего кода
const config = require('./config');

const isDataDirExists = fs.existsSync(config.DATA_DIR);
if (!isDataDirExists) {
  fs.mkdirSync(config.DATA_DIR);
}

const isDataExists = fs.existsSync(config.DATA);
if (!isDataExists) {
  // Данные
  const data = {};
  // Данные в текстовом формате
  const dataText = JSON.stringify(data);

  // Запись данных в текстовом формате
  fs.writeFileSync(config.DATA, dataText);
}

if (isDataExists) {
  console.log('Data already exists');
} else {
  console.log('Data file has been created');
}
