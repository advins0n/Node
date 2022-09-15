const EventEmitter = require('events');

class Person extends EventEmitter{
    printPerson (i) {
        console.log(`${i.firstName} ${i.lastName}`);
    }
};

module.exports = Person;
