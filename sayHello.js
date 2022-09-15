(function (exports, require, module, __filename, __dirname) {
let name = 'Andrew';

function sayHello (name) {
    console.log(`Hi ${name} How are you?`)
}

module.exports.sayHello = sayHello;
module.exports.myName = name;
})
