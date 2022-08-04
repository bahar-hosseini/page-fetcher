//External modules:
const request = require('request');
const fs = require('fs');

let arg = process.argv.slice(2);

request(arg[0], (error, response, body) => {
 
  fs.writeFile(arg[1] , body, err => {
    if (err) {
      console.error(err);
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${arg[1]}`);
  });
});