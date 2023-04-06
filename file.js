import fs from 'fs'

const data = Date()
// console.log(date);

fs.appendFile('saveTime.txt', data, (err) => {
    if (err) throw err;
    console.log('The data is append');
  });