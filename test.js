
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