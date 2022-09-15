const Person = require('./Person.js');

const person = new Person();

person.on('click', (data) => {
    console.log('Event Fired!')
    person.printPerson(data);
});

person.emit('click', { firstName: 'John', lastName: 'Doe'});