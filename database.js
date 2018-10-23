const fs = require('fs')
const CircularJSON = require('circular-json')

module.exports = {
   save(data){
   fs.writeFileSync('data.json', CircularJSON.stringify(data))
   },

   load() {
       return JSON.parse(fs.readFileSync('data.json'))
   }
}