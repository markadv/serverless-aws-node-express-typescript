/* This is used to convert all files in routes folder into functions */
const fs = require('fs')

/* Checks if the files is a .yml file before converting to file variable for serverless */
const routes = fs.readdirSync(__dirname).flatMap((file) => (file.includes('.yml') ? `\${file(./functions/${file})}` : []))

module.exports = routes
