const fs = require('fs')

function readFromFile(pathToFile) {
    return new Promise((resolve, reject) => {
        fs.readFile(pathToFile, 'utf8', (err, text) => {
            if (err) { 
            reject(err) 
            }
            else { 
            resolve(text) 
            }
        })
    })
}

readFromFile('Task1.txt').then(text => {
    let array = text.split('\r\n')
    printEvenLines(array)
}).catch(err => {
    console.log(err.message)
})

function printEvenLines(array) {
    if (array.length < 2) { throw new Error('File must have at least 2 lines') }
    let filtered = array.filter((element, index) => {
        return (index % 2 === 1)
    })
    console.log(filtered)
}
