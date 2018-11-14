function readEvenLines (pathToFile, encoding) {
  checkParametres(pathToFile, encoding)
  let array = []
  const fs = require('fs')
  fs.readFile(pathToFile, encoding, (err, data) => {
    if (err) { return console.log(err.message) }
    array = data.toString().split('\r\n')
    if (array.length < 2) { throw new Error('File must have at least 2 lines') }
    for (let i = 1; i < array.length; i += 2) {
      console.log(array[i])
    }
  })
}
readEvenLines('task1.txt', 'utf8')

function checkParametres (pathToFile, encoding) {
  if (typeof pathToFile !== 'string' || typeof encoding !== 'string') {
    throw new Error('Wrong type of variable. Path to file or encoding must be String')
  }
}
