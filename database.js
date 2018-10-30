const fs = require('fs')
const CircularJSON = require('circular-json')

async function save(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./data.json', CircularJSON.stringify(data), (err, file) => {
            if (err) return reject(err)
            resolve()
        })
    })
}
    
async function load(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, file) => {
            if (err) return reject(err)
            const data = CircularJSON.parse(file)
            resolve(data)
       })
    })
}
    
module.exports = {
    save,
    load
}
