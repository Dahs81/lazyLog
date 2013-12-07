# Lazy Log

A simple wrapper for console.log that does some fun stuff.

## A fun logger

This module is a wrapper around console.log.
~ The available functions all use a **chainable** syntax.
~ If a string is passed to one of the functions, it will log out the transformed string.
~ If an object is passed to one of the functions, it will log out all of the values and transform each one.  The key is not currently logged.
if an array is passed to one of the functions, it will loop over the array and either log the string or act on it in the manner mentioned above if it is an object.

### Installation and Setup

```
npm install lazy-log
```

```
var ll = require('lazyLog');
```

### Examples

```
ll.log('This is a simple log');
ll.log({foo: 'bar'});
ll.log(['Test', 'baz', {foo: 'bar'}]);

This is a simple log
```

```
// Simple examples of other log functions
ll.toLower('TEST');
ll.toLower({name: 'JOHN DOE'});
ll.toLower(['ONE', 'TWO', 'THREE']);

test
john doe
one
two
three
```

```
ll.toUpper('test');
ll.toUpper({name: 'john doe'});
ll.toUpper(['one', 'two', 'three']);

TEST
JOHN DOE
ONE
TWO
THREE
```

```
ll.log('test simple').toLower('TEST').toUpper('test');

test simple
test
TEST
```

```
ll.toLower(['TEST', {a: 'MAKE LOWER'}, [{a:'AAA', b: ['BBB', {c: 'CCC'}]}]]);

test
make lower
aaa
bbb
ccc
```

```
ll.toLower(['TEST', {a: 'MAKE LOWER'}]).toUpper('test').toUpper([{a: 'aaa'}]);

test
make lower
TEST
AAA
```

```
ll.toArr(['Test', {a: 'b', foo: 'bar'}, {c: ['NEWS', {test: 'apple'}]}]);

[ 'Test', 'b', 'bar', 'NEWS', 'apple' ]
```

```
ll.reg('This is my message that I am looking for the word "message"', /message/i);
ll.reg('This is my message that I am looking for the word "message"', /message/g);
ll.reg({test: 'message', b: 'this is a message - message'}, /message/g);

[ 'message',
  index: 11,
  input: 'This is my message that I am looking for the word "message"' ]
[ 'message', 'message' ]
[ 'message' ]
[ 'message', 'message' ]
```

### To the Community
I will probably be adding some more functions some, but adding new functionality is super easy.  Check out the code, do pull requests, and let me know if you have any questions.
