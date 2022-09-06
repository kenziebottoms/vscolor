const fs = require('fs');

const destination = process.argv[2] || '.vscode/settings.json';

const content = 'Some content! Love, ' + new Date().toString();

fs.writeFile(destination, content, err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});
