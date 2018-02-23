

var fs = require('fs')

// var data = require('./data.json')

// console.log(data.name)

// fs.readFile('data.json', 'utf-8',(err, data) => {
//     data = JSON.parse(data)
//     console.log(data.name)
// })

// fs.readdir('C:/', (error, data) => {
//     console.log(data)
// })
dataToWrite = {
    "name":"Nitish"
}
fs.writeFile('data1.json', JSON.stringify(dataToWrite), (error) => {
    console.log(error)
})
