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