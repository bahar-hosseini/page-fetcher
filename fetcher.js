//External modules:
const request = require('request');
const fs = require('fs');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arg = process.argv.slice(2);
try {
  if (fs.existsSync(arg[1])) {
    readline.question(`one file exists at ${arg[1]} Do you want to overwrite the file(Y)`, ans => {
      console.log(` ${ans}!`);
      if (ans === 'Y') {
        request(arg[0], (error, response, body) => {
 
          fs.writeFile(arg[1], body,err => {
            if (err) {
              console.error(err);
            }
            console.log(`Downloaded and saved ${body.length} bytes to ${arg[1]}`);
          });
        });
      }
      readline.close();
    });
  }

} catch (err) {
  console.error(err);
}

