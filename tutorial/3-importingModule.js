// Modules
// CommonJS, every file is a module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-name');
const sayHi = require('./5-utils');
const data = require('./6-altModule');
console.log(data)

require('./7-mind')

console.log(names)

sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)
