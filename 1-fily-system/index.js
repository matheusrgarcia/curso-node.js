const fs = require('fs'); // file system

fs.readFile('arquivo.txt', 'utf8' , (err, data) => {
  if (err) {
    console.log('error', err);
    return;
  }
  console.log('data', data)
})