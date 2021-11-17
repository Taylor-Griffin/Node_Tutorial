const { john, peter } = require('./names');
const sayHi = require('./utils');
require('./mind-grenade');
sayHi('Susan');
sayHi(john);
sayHi(peter);
