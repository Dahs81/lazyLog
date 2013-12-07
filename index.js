/*
 * Copyright (c) 2013 Shad Beard

 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:

 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/*
 *	Name: Shad Beard
 *  Github: Dahs81
 */

module.exports = lazyLog = (function() {

	function basic (name, jsFunct) {
		return function(mess) {
			var self = this;

			if (jsFunct) {
				if (typeof mess === 'string') {
					console.log(mess[jsFunct]());
				} else if (mess instanceof Array) {
					for (var i = 0; i < mess.length; i++) {
						if (typeof mess[i] === 'string') {
							self[name](mess[i]);
						} else {
							// This will be an object
							self[name](mess[i]);
						}
					}
				} else {
					for (var pp in mess) {
						self[name](mess[pp]);
					}
				}
			} else {
				console.log(mess);
			}
			
			return this;
		};
	}

	function toArr (mess) {
		var m = [];

		var recurse = function(mess) {
			if (typeof mess === 'string') {
				m.push(mess);
			} else if (mess instanceof Array) {
				for (var i = 0; i < mess.length; i++) {
					if (typeof mess[i] === 'string') {
						recurse(mess[i]);
					} else {
						// This will be an object
						recurse(mess[i]);
					}
				}
			} else {
				for (var pp in mess) {
					recurse(mess[pp]);
				}
			}
		};

		recurse(mess);

		console.log(m);
		return this;
	}

	// TODO: Search through the string, array, or object to find a pattern
	function reg (mess, pattern) {
		if (typeof mess === 'string') {
			console.log(mess.match(pattern));
		} else if (mess instanceof Array) {
			for (var i = 0; i < mess.length; i++) {
				if (typeof mess[i] === 'string') {
					reg(mess[i], pattern);
				} else {
					// This will be an object
					reg(mess[i], pattern);
				}
			}
		} else {
			for (var pp in mess) {
				reg(mess[pp], pattern);
			}
		}

		return this;
	}


	return {
		log : basic('log', ''),
		toUpper : basic('toUpper', 'toUpperCase'),
		toLower : basic('toLower', 'toLowerCase'),
		toArr   : toArr,
		reg     : reg
	};
})();