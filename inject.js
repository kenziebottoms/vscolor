const fs = require('fs')
const { genSettings } = require('./src/Theme.js')

const spineSource = process.argv[2] || null
if (!spineSource) {
  console.error('No or invalid spine source!')
} else {
  const destination = process.argv[3] || '.vscode/settings.json'

  fs.readFile(spineSource, 'utf8', (err, spine) => {
    if (err) {
      console.error(err)
      return
    }

    const content = JSON.stringify(genSettings(JSON.parse(spine)))
    
    fs.writeFile(destination, content, err => {
      if (err) {
        console.error(err)
      }
      // file written successfully
    })
  })
}
