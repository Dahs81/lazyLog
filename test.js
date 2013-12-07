
var ll = require('./index');

// Simple log
console.log('Simple example:');
ll.log('This is a simple log');

// Simple examples of other log functions
console.log('\ntoLower examples:');
ll.toLower('TEST');
ll.toLower({name: 'JOHN DOE'});
ll.toLower(['ONE', 'TWO', 'THREE']);

console.log('\ntoUpper examples:');
ll.toUpper('test');
ll.toUpper({name: 'john doe'});
ll.toUpper(['one', 'two', 'three']);

console.log('\nChaining examples:');
ll.log('test simple').toLower('TEST').toUpper('test');

console.log('\nComplex examples:');
console.log('Example 1:');
ll.toLower(['TEST', {a: 'MAKE LOWER'}, [{a:'AAA', b: ['BBB', {c: 'CCC'}]}]]);
console.log('\nExample 2:');
ll.toLower(['TEST', {a: 'MAKE LOWER'}]).toUpper('test').toUpper([{a: 'aaa'}]);

console.log();

console.log('toArr example:');
ll.toArr(['Test', {a: 'b', foo: 'bar'}, {c: ['NEWS', {test: 'apple'}]}]);

console.log('regEx examples:');
ll.reg('This is my message that I am looking for the word "message"', /message/i);
ll.reg('This is my message that I am looking for the word "message"', /message/g);
ll.reg({test: 'message', b: 'this is a message - message'}, /message/g);


// var m = 'test';
// m.match(/test/g)