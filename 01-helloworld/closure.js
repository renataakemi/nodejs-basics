function sayHello(name) {
    console.log('Hi ' + name);
}

function sayGoodbye(name) {
    console.log('Good bye ' + name)
}

sayHello('Renata');

function execute(callback, name) {
    callback(name);
}

execute(sayHello, 'Akemi');
execute(sayGoodbye, 'Nakashima');