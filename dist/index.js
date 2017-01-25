(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["fetchLib"] = factory();
	else
		root["fetchLib"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _fetch = __webpack_require__(1);
	
	Object.defineProperty(exports, 'getJSON', {
	  enumerable: true,
	  get: function get() {
	    return _fetch.getJSON;
	  }
	});
	Object.defineProperty(exports, 'putJSON', {
	  enumerable: true,
	  get: function get() {
	    return _fetch.putJSON;
	  }
	});
	Object.defineProperty(exports, 'postJSON', {
	  enumerable: true,
	  get: function get() {
	    return _fetch.postJSON;
	  }
	});
	Object.defineProperty(exports, 'deleteJSON', {
	  enumerable: true,
	  get: function get() {
	    return _fetch.deleteJSON;
	  }
	});
	
	var _normalize = __webpack_require__(9);
	
	Object.defineProperty(exports, 'normalizeArray', {
	  enumerable: true,
	  get: function get() {
	    return _normalize.normalizeArray;
	  }
	});
	Object.defineProperty(exports, 'normalizeObject', {
	  enumerable: true,
	  get: function get() {
	    return _normalize.normalizeObject;
	  }
	});
	
	var _parseJson = __webpack_require__(3);
	
	Object.defineProperty(exports, 'parseJson', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_parseJson).default;
	  }
	});
	
	var _validateResponse = __webpack_require__(2);
	
	Object.defineProperty(exports, 'validateResponse', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_validateResponse).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.deleteJSON = exports.postJSON = exports.putJSON = exports.getJSON = undefined;
	
	var _validateResponse = __webpack_require__(2);
	
	var _validateResponse2 = _interopRequireDefault(_validateResponse);
	
	var _parseJson = __webpack_require__(3);
	
	var _parseJson2 = _interopRequireDefault(_parseJson);
	
	var _api = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var getJSON = exports.getJSON = function getJSON(base, uri) {
	    return fetch((0, _api.formatUri)(base, uri), {
	        method: 'get',
	        headers: (0, _api.withAuthorization)({})
	    }).then(_validateResponse2.default).then(_parseJson2.default);
	};
	
	var putJSON = exports.putJSON = function putJSON(base, uri, data) {
	    return fetch((0, _api.formatUri)(base, uri), buildRequest('put', data)).then(_validateResponse2.default).then(_parseJson2.default);
	};
	
	var postJSON = exports.postJSON = function postJSON(base, uri, data) {
	    return fetch((0, _api.formatUri)(base, uri), buildRequest('post', data)).then(_validateResponse2.default).then(_parseJson2.default);
	};
	
	var deleteJSON = exports.deleteJSON = function deleteJSON(base, uri) {
	    return fetch((0, _api.formatUri)(base, uri), {
	        method: 'delete',
	        headers: (0, _api.withAuthorization)({})
	    }).then(_validateResponse2.default).then(_parseJson2.default);
	};
	
	function buildRequest(method, data) {
	    return {
	        method: method,
	        headers: (0, _api.withJson)((0, _api.withAuthorization)({})),
	        body: JSON.stringify(data)
	    };
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (response) {
	  if (response.status >= 200 && response.status < 300 || response.status === 404) {
	    return response;
	  } else {
	    return response.text().then(function (err) {
	      var error = new Error(err);
	      error.response = response;
	      throw error;
	    });
	  }
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	exports.default = function (response) {
		return response.json().then(function (json) {
			return Promise.resolve(json);
		}).catch(function () {
			return Promise.resolve({});
		});
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.allHeaders = exports.withJson = exports.withAuthorization = exports.formatUri = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _reactCookie = __webpack_require__(5);
	
	var cookie = _interopRequireWildcard(_reactCookie);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var formatUri = exports.formatUri = function formatUri(base, uri) {
	    return base + (uri && uri[0] === '/' ? uri : '/' + uri);
	};
	
	var withAuthorization = exports.withAuthorization = function withAuthorization(headers) {
	    if (cookie.load('auth_token')) {
	        return _extends({}, headers, {
	            'Authorization': 'Bearer ' + cookie.load('auth_token')
	        });
	    }
	
	    return headers;
	};
	
	var withJson = exports.withJson = function withJson(headers) {
	    return _extends({}, headers, {
	        'Accept': 'application/json',
	        'Content-Type': 'application/json'
	    });
	};
	
	var allHeaders = exports.allHeaders = function allHeaders() {
	    return withJson(withAuthorization({}));
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.load = load;
	exports.select = select;
	exports.save = save;
	exports.remove = remove;
	exports.setRawCookie = setRawCookie;
	exports.plugToRequest = plugToRequest;
	
	var _cookie = __webpack_require__(7);
	
	var _cookie2 = _interopRequireDefault(_cookie);
	
	var _objectAssign = __webpack_require__(8);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var IS_NODE = typeof document === 'undefined' || process && process.env && process.env.NODE_ENV === 'test';
	var _rawCookie = {};
	var _res = undefined;
	
	function _isResWritable() {
	  return _res && !_res.headersSent;
	}
	
	function load(name, doNotParse) {
	  var cookies = IS_NODE ? _rawCookie : _cookie2.default.parse(document.cookie);
	  var cookieVal = cookies && cookies[name];
	
	  if (typeof doNotParse === 'undefined') {
	    doNotParse = !cookieVal || cookieVal[0] !== '{' && cookieVal[0] !== '[';
	  }
	
	  if (!doNotParse) {
	    try {
	      cookieVal = JSON.parse(cookieVal);
	    } catch (e) {
	      // Not serialized object
	    }
	  }
	
	  return cookieVal;
	}
	
	function select(regex) {
	  var cookies = IS_NODE ? _rawCookie : _cookie2.default.parse(document.cookie);
	
	  if (!cookies) {
	    return {};
	  }
	
	  if (!regex) {
	    return cookies;
	  }
	
	  return Object.keys(cookies).reduce(function (accumulator, name) {
	    if (!regex.test(name)) {
	      return accumulator;
	    }
	
	    var newCookie = {};
	    newCookie[name] = cookies[name];
	    return (0, _objectAssign2.default)({}, accumulator, newCookie);
	  }, {});
	}
	
	function save(name, val, opt) {
	  _rawCookie[name] = val;
	
	  // allow you to work with cookies as objects.
	  if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
	    _rawCookie[name] = JSON.stringify(val);
	  }
	
	  // Cookies only work in the browser
	  if (!IS_NODE) {
	    document.cookie = _cookie2.default.serialize(name, _rawCookie[name], opt);
	  }
	
	  if (_isResWritable() && _res.cookie) {
	    _res.cookie(name, val, opt);
	  }
	}
	
	function remove(name, opt) {
	  delete _rawCookie[name];
	
	  if (typeof opt === 'undefined') {
	    opt = {};
	  } else if (typeof opt === 'string') {
	    // Will be deprecated in future versions
	    opt = { path: opt };
	  } else {
	    // Prevent mutation of opt below
	    opt = (0, _objectAssign2.default)({}, opt);
	  }
	
	  if (typeof document !== 'undefined') {
	    opt.expires = new Date(1970, 1, 1, 0, 0, 1);
	    opt.maxAge = 0;
	    document.cookie = _cookie2.default.serialize(name, '', opt);
	  }
	
	  if (_isResWritable() && _res.clearCookie) {
	    _res.clearCookie(name, opt);
	  }
	}
	
	function setRawCookie(rawCookie) {
	  if (rawCookie) {
	    _rawCookie = _cookie2.default.parse(rawCookie);
	  } else {
	    _rawCookie = {};
	  }
	}
	
	function plugToRequest(req, res) {
	  if (req.cookie) {
	    _rawCookie = req.cookie;
	  } else if (req.cookies) {
	    _rawCookie = req.cookies;
	  } else if (req.headers && req.headers.cookie) {
	    setRawCookie(req.headers.cookie);
	  } else {
	    _rawCookie = {};
	  }
	
	  _res = res;
	
	  return function unplug() {
	    _res = null;
	    _rawCookie = {};
	  };
	}
	
	exports.default = {
	  setRawCookie: setRawCookie,
	  load: load,
	  select: select,
	  save: save,
	  remove: remove,
	  plugToRequest: plugToRequest
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 6 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 7 */
/***/ function(module, exports) {

	/*!
	 * cookie
	 * Copyright(c) 2012-2014 Roman Shtylman
	 * Copyright(c) 2015 Douglas Christopher Wilson
	 * MIT Licensed
	 */
	
	'use strict';
	
	/**
	 * Module exports.
	 * @public
	 */
	
	exports.parse = parse;
	exports.serialize = serialize;
	
	/**
	 * Module variables.
	 * @private
	 */
	
	var decode = decodeURIComponent;
	var encode = encodeURIComponent;
	var pairSplitRegExp = /; */;
	
	/**
	 * RegExp to match field-content in RFC 7230 sec 3.2
	 *
	 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
	 * field-vchar   = VCHAR / obs-text
	 * obs-text      = %x80-FF
	 */
	
	var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
	
	/**
	 * Parse a cookie header.
	 *
	 * Parse the given cookie header string into an object
	 * The object has the various cookies as keys(names) => values
	 *
	 * @param {string} str
	 * @param {object} [options]
	 * @return {object}
	 * @public
	 */
	
	function parse(str, options) {
	  if (typeof str !== 'string') {
	    throw new TypeError('argument str must be a string');
	  }
	
	  var obj = {}
	  var opt = options || {};
	  var pairs = str.split(pairSplitRegExp);
	  var dec = opt.decode || decode;
	
	  for (var i = 0; i < pairs.length; i++) {
	    var pair = pairs[i];
	    var eq_idx = pair.indexOf('=');
	
	    // skip things that don't look like key=value
	    if (eq_idx < 0) {
	      continue;
	    }
	
	    var key = pair.substr(0, eq_idx).trim()
	    var val = pair.substr(++eq_idx, pair.length).trim();
	
	    // quoted values
	    if ('"' == val[0]) {
	      val = val.slice(1, -1);
	    }
	
	    // only assign once
	    if (undefined == obj[key]) {
	      obj[key] = tryDecode(val, dec);
	    }
	  }
	
	  return obj;
	}
	
	/**
	 * Serialize data into a cookie header.
	 *
	 * Serialize the a name value pair into a cookie string suitable for
	 * http headers. An optional options object specified cookie parameters.
	 *
	 * serialize('foo', 'bar', { httpOnly: true })
	 *   => "foo=bar; httpOnly"
	 *
	 * @param {string} name
	 * @param {string} val
	 * @param {object} [options]
	 * @return {string}
	 * @public
	 */
	
	function serialize(name, val, options) {
	  var opt = options || {};
	  var enc = opt.encode || encode;
	
	  if (typeof enc !== 'function') {
	    throw new TypeError('option encode is invalid');
	  }
	
	  if (!fieldContentRegExp.test(name)) {
	    throw new TypeError('argument name is invalid');
	  }
	
	  var value = enc(val);
	
	  if (value && !fieldContentRegExp.test(value)) {
	    throw new TypeError('argument val is invalid');
	  }
	
	  var str = name + '=' + value;
	
	  if (null != opt.maxAge) {
	    var maxAge = opt.maxAge - 0;
	    if (isNaN(maxAge)) throw new Error('maxAge should be a Number');
	    str += '; Max-Age=' + Math.floor(maxAge);
	  }
	
	  if (opt.domain) {
	    if (!fieldContentRegExp.test(opt.domain)) {
	      throw new TypeError('option domain is invalid');
	    }
	
	    str += '; Domain=' + opt.domain;
	  }
	
	  if (opt.path) {
	    if (!fieldContentRegExp.test(opt.path)) {
	      throw new TypeError('option path is invalid');
	    }
	
	    str += '; Path=' + opt.path;
	  }
	
	  if (opt.expires) {
	    if (typeof opt.expires.toUTCString !== 'function') {
	      throw new TypeError('option expires is invalid');
	    }
	
	    str += '; Expires=' + opt.expires.toUTCString();
	  }
	
	  if (opt.httpOnly) {
	    str += '; HttpOnly';
	  }
	
	  if (opt.secure) {
	    str += '; Secure';
	  }
	
	  if (opt.sameSite) {
	    var sameSite = typeof opt.sameSite === 'string'
	      ? opt.sameSite.toLowerCase() : opt.sameSite;
	
	    switch (sameSite) {
	      case true:
	        str += '; SameSite=Strict';
	        break;
	      case 'lax':
	        str += '; SameSite=Lax';
	        break;
	      case 'strict':
	        str += '; SameSite=Strict';
	        break;
	      default:
	        throw new TypeError('option sameSite is invalid');
	    }
	  }
	
	  return str;
	}
	
	/**
	 * Try decoding a string using a decoding function.
	 *
	 * @param {string} str
	 * @param {function} decode
	 * @private
	 */
	
	function tryDecode(str, decode) {
	  try {
	    return decode(str);
	  } catch (e) {
	    return str;
	  }
	}


/***/ },
/* 8 */
/***/ function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	
	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.normalize = undefined;
	
	var _normalizr = __webpack_require__(10);
	
	var getJson = function getJson(json, propertyName) {
	    return propertyName ? json[propertyName] : json;
	};
	
	var buildPromise = function buildPromise(json, schema) {
	    return Promise.resolve((0, _normalizr.normalize)(json, schema));
	};
	
	var normalize = exports.normalize = function normalize(schema, propertyName) {
	    return function (json) {
	        return buildPromise(getJson(json, propertyName), schema);
	    };
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.denormalize = exports.normalize = exports.schema = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _Entity = __webpack_require__(11);
	
	var _Entity2 = _interopRequireDefault(_Entity);
	
	var _Union = __webpack_require__(12);
	
	var _Union2 = _interopRequireDefault(_Union);
	
	var _Values = __webpack_require__(14);
	
	var _Values2 = _interopRequireDefault(_Values);
	
	var _Array = __webpack_require__(15);
	
	var ArrayUtils = _interopRequireWildcard(_Array);
	
	var _Object = __webpack_require__(16);
	
	var ObjectUtils = _interopRequireWildcard(_Object);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var visit = function visit(value, parent, key, schema, addEntity) {
	  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object' || !value) {
	    return value;
	  }
	
	  if ((typeof schema === 'undefined' ? 'undefined' : _typeof(schema)) === 'object' && (!schema.normalize || typeof schema.normalize !== 'function')) {
	    var method = ObjectUtils.normalize;
	    if (Array.isArray(schema)) {
	      method = ArrayUtils.normalize;
	    }
	    return method(schema, value, parent, key, visit, addEntity);
	  }
	
	  return schema.normalize(value, parent, key, visit, addEntity);
	};
	
	var addEntities = function addEntities(entities) {
	  return function (schema, processedEntity, value, parent, key) {
	    var schemaKey = schema.key;
	    var id = schema.getId(value, parent, key);
	    if (!(schemaKey in entities)) {
	      entities[schemaKey] = {};
	    }
	
	    var existingEntity = entities[schemaKey][id];
	    if (existingEntity) {
	      entities[schemaKey][id] = schema.merge(existingEntity, processedEntity);
	    } else {
	      entities[schemaKey][id] = processedEntity;
	    }
	  };
	};
	
	var schema = exports.schema = {
	  Array: ArrayUtils.default,
	  Entity: _Entity2.default,
	  Object: ObjectUtils.default,
	  Union: _Union2.default,
	  Values: _Values2.default
	};
	
	var normalize = exports.normalize = function normalize(input, schema) {
	  if (!input || (typeof input === 'undefined' ? 'undefined' : _typeof(input)) !== 'object') {
	    throw new Error('Unexpected input given to normalize. Expected type to be "object", found "' + (typeof input === 'undefined' ? 'undefined' : _typeof(input)) + '".');
	  }
	
	  var entities = {};
	  var addEntity = addEntities(entities);
	
	  var result = visit(input, input, null, schema, addEntity);
	  return { entities: entities, result: result };
	};
	
	var unvisit = function unvisit(input, schema, entities) {
	  if ((typeof schema === 'undefined' ? 'undefined' : _typeof(schema)) === 'object' && (!schema.normalize || typeof schema.normalize !== 'function')) {
	    var method = ObjectUtils.denormalize;
	    if (Array.isArray(schema)) {
	      method = ArrayUtils.denormalize;
	    }
	    return method(schema, input, unvisit, entities);
	  }
	
	  return schema.denormalize(input, unvisit, entities);
	};
	
	var denormalize = exports.denormalize = function denormalize(input, schema, entities) {
	  if (!input) {
	    return input;
	  }
	
	  return unvisit(input, schema, entities);
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var EntitySchema = function () {
	  function EntitySchema(key) {
	    var definition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	    _classCallCheck(this, EntitySchema);
	
	    if (!key || typeof key !== 'string') {
	      throw new Error('Expected a string key for Entity, but found ' + key + '.');
	    }
	
	    var _options$idAttribute = options.idAttribute,
	        idAttribute = _options$idAttribute === undefined ? 'id' : _options$idAttribute,
	        _options$mergeStrateg = options.mergeStrategy,
	        mergeStrategy = _options$mergeStrateg === undefined ? function (entityA, entityB) {
	      return _extends({}, entityA, entityB);
	    } : _options$mergeStrateg,
	        _options$processStrat = options.processStrategy,
	        processStrategy = _options$processStrat === undefined ? function (input) {
	      return _extends({}, input);
	    } : _options$processStrat;
	
	
	    this._key = key;
	    this._getId = typeof idAttribute === 'function' ? idAttribute : function (input) {
	      return input[idAttribute];
	    };
	    this._mergeStrategy = mergeStrategy;
	    this._processStrategy = processStrategy;
	    this.define(definition);
	  }
	
	  _createClass(EntitySchema, [{
	    key: 'define',
	    value: function define(definition) {
	      this.schema = Object.keys(definition).reduce(function (entitySchema, key) {
	        var schema = definition[key];
	        return _extends({}, entitySchema, _defineProperty({}, key, schema));
	      }, this.schema || {});
	    }
	  }, {
	    key: 'getId',
	    value: function getId(input, parent, key) {
	      return this._getId(input, parent, key);
	    }
	  }, {
	    key: 'merge',
	    value: function merge(entityA, entityB) {
	      return this._mergeStrategy(entityA, entityB);
	    }
	  }, {
	    key: 'normalize',
	    value: function normalize(input, parent, key, visit, addEntity) {
	      var _this = this;
	
	      var processedEntity = this._processStrategy(input, parent, key);
	      Object.keys(this.schema).forEach(function (key) {
	        if (processedEntity.hasOwnProperty(key) && _typeof(processedEntity[key]) === 'object') {
	          var schema = _this.schema[key];
	          processedEntity[key] = visit(processedEntity[key], processedEntity, key, schema, addEntity);
	        }
	      });
	
	      addEntity(this, processedEntity, input, parent, key);
	      return this.getId(input, parent, key);
	    }
	  }, {
	    key: 'denormalize',
	    value: function denormalize(entityOrId, unvisit, entities) {
	      var _this2 = this;
	
	      var entity = (typeof entityOrId === 'undefined' ? 'undefined' : _typeof(entityOrId)) === 'object' ? entityOrId : entities[this.key][entityOrId];
	      var entityCopy = _extends({}, entity);
	      Object.keys(this.schema).forEach(function (key) {
	        if (entityCopy.hasOwnProperty(key)) {
	          var schema = _this2.schema[key];
	          entityCopy[key] = unvisit(entityCopy[key], schema, entities);
	        }
	      });
	
	      return entityCopy;
	    }
	  }, {
	    key: 'key',
	    get: function get() {
	      return this._key;
	    }
	  }]);
	
	  return EntitySchema;
	}();
	
	exports.default = EntitySchema;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Polymorphic = __webpack_require__(13);
	
	var _Polymorphic2 = _interopRequireDefault(_Polymorphic);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var UnionSchema = function (_PolymorphicSchema) {
	  _inherits(UnionSchema, _PolymorphicSchema);
	
	  function UnionSchema(definition, schemaAttribute) {
	    _classCallCheck(this, UnionSchema);
	
	    if (!schemaAttribute) {
	      throw new Error('Expected option "schemaAttribute" not found on UnionSchema.');
	    }
	    return _possibleConstructorReturn(this, (UnionSchema.__proto__ || Object.getPrototypeOf(UnionSchema)).call(this, definition, schemaAttribute));
	  }
	
	  _createClass(UnionSchema, [{
	    key: 'normalize',
	    value: function normalize(input, parent, key, visit, addEntity) {
	      return this.normalizeValue(input, parent, key, visit, addEntity);
	    }
	  }, {
	    key: 'denormalize',
	    value: function denormalize(input, unvisit, entities) {
	      return this.denormalizeValue(input, unvisit, entities);
	    }
	  }]);
	
	  return UnionSchema;
	}(_Polymorphic2.default);
	
	exports.default = UnionSchema;

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var PolymorphicSchema = function () {
	  function PolymorphicSchema(definition, schemaAttribute) {
	    _classCallCheck(this, PolymorphicSchema);
	
	    if (schemaAttribute) {
	      this._schemaAttribute = typeof schemaAttribute === 'string' ? function (input) {
	        return input[schemaAttribute];
	      } : schemaAttribute;
	    }
	    this.define(definition);
	  }
	
	  _createClass(PolymorphicSchema, [{
	    key: 'define',
	    value: function define(definition) {
	      this.schema = definition;
	    }
	  }, {
	    key: 'getSchemaAttribute',
	    value: function getSchemaAttribute(input, parent, key) {
	      return !this.isSingleSchema && this._schemaAttribute(input, parent, key);
	    }
	  }, {
	    key: 'inferSchema',
	    value: function inferSchema(input, parent, key) {
	      if (this.isSingleSchema) {
	        return this.schema;
	      }
	
	      var attr = this.getSchemaAttribute(input, parent, key);
	      return this.schema[attr];
	    }
	  }, {
	    key: 'normalizeValue',
	    value: function normalizeValue(value, parent, key, visit, addEntity) {
	      var schema = this.inferSchema(value, parent, key);
	      if (!schema) {
	        return value;
	      }
	      var normalizedValue = visit(value, parent, key, schema, addEntity);
	      return this.isSingleSchema || normalizedValue === undefined || normalizedValue === null ? normalizedValue : { id: normalizedValue, schema: this.getSchemaAttribute(value, parent, key) };
	    }
	  }, {
	    key: 'denormalizeValue',
	    value: function denormalizeValue(value, unvisit, entities) {
	      if (!this.isSingleSchema && !value.schema) {
	        return value;
	      }
	      var schema = this.isSingleSchema ? this.schema : this.schema[value.schema];
	      return unvisit(value.id || value, schema, entities);
	    }
	  }, {
	    key: 'isSingleSchema',
	    get: function get() {
	      return !this._schemaAttribute;
	    }
	  }]);
	
	  return PolymorphicSchema;
	}();
	
	exports.default = PolymorphicSchema;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Polymorphic = __webpack_require__(13);
	
	var _Polymorphic2 = _interopRequireDefault(_Polymorphic);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ValuesSchema = function (_PolymorphicSchema) {
	  _inherits(ValuesSchema, _PolymorphicSchema);
	
	  function ValuesSchema() {
	    _classCallCheck(this, ValuesSchema);
	
	    return _possibleConstructorReturn(this, (ValuesSchema.__proto__ || Object.getPrototypeOf(ValuesSchema)).apply(this, arguments));
	  }
	
	  _createClass(ValuesSchema, [{
	    key: 'normalize',
	    value: function normalize(input, parent, key, visit, addEntity) {
	      var _this2 = this;
	
	      return Object.keys(input).reduce(function (output, key, index) {
	        var value = input[key];
	        return value !== undefined && value !== null ? _extends({}, output, _defineProperty({}, key, _this2.normalizeValue(value, input, key, visit, addEntity))) : output;
	      }, {});
	    }
	  }, {
	    key: 'denormalize',
	    value: function denormalize(input, unvisit, entities) {
	      var _this3 = this;
	
	      return Object.keys(input).reduce(function (output, key) {
	        var entityOrId = input[key];
	        return _extends({}, output, _defineProperty({}, key, _this3.denormalizeValue(entityOrId, unvisit, entities)));
	      }, {});
	    }
	  }]);
	
	  return ValuesSchema;
	}(_Polymorphic2.default);
	
	exports.default = ValuesSchema;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.denormalize = exports.normalize = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Polymorphic = __webpack_require__(13);
	
	var _Polymorphic2 = _interopRequireDefault(_Polymorphic);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var validateSchema = function validateSchema(definition) {
	  var isArray = Array.isArray(definition);
	  if (isArray && definition.length > 1) {
	    throw new Error('Expected schema definition to be a single schema, but found ' + definition.length + '.');
	  }
	
	  return definition[0];
	};
	
	var getValues = function getValues(input) {
	  return Array.isArray(input) ? input : Object.keys(input).map(function (key) {
	    return input[key];
	  });
	};
	
	var normalize = exports.normalize = function normalize(schema, input, parent, key, visit, addEntity) {
	  schema = validateSchema(schema);
	
	  var values = getValues(input);
	
	  // Special case: Arrays pass *their* parent on to their children, since there
	  // is not any special information that can be gathered from themselves directly
	  return values.map(function (value, index) {
	    return visit(value, parent, key, schema, addEntity);
	  });
	};
	
	var denormalize = exports.denormalize = function denormalize(schema, input, unvisit, entities) {
	  schema = validateSchema(schema);
	  return input.map(function (entityOrId) {
	    return unvisit(entityOrId, schema, entities);
	  });
	};
	
	var ArraySchema = function (_PolymorphicSchema) {
	  _inherits(ArraySchema, _PolymorphicSchema);
	
	  function ArraySchema() {
	    _classCallCheck(this, ArraySchema);
	
	    return _possibleConstructorReturn(this, (ArraySchema.__proto__ || Object.getPrototypeOf(ArraySchema)).apply(this, arguments));
	  }
	
	  _createClass(ArraySchema, [{
	    key: 'normalize',
	    value: function normalize(input, parent, key, visit, addEntity) {
	      var _this2 = this;
	
	      var values = getValues(input);
	
	      return values.map(function (value, index) {
	        return _this2.normalizeValue(value, parent, key, visit, addEntity);
	      }).filter(function (value) {
	        return value !== undefined && value !== null;
	      });
	    }
	  }, {
	    key: 'denormalize',
	    value: function denormalize(input, unvisit, entities) {
	      var _this3 = this;
	
	      return input.map(function (value) {
	        return _this3.denormalizeValue(value, unvisit, entities);
	      });
	    }
	  }]);
	
	  return ArraySchema;
	}(_Polymorphic2.default);
	
	exports.default = ArraySchema;

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _normalize = function _normalize(schema, input, parent, key, visit, addEntity) {
	  var object = _extends({}, input);
	  Object.keys(schema).forEach(function (key) {
	    var localSchema = schema[key];
	    var value = visit(input[key], input, key, localSchema, addEntity);
	    if (value === undefined || value === null) {
	      delete object[key];
	    } else {
	      object[key] = value;
	    }
	  });
	  return object;
	};
	
	exports.normalize = _normalize;
	var _denormalize = function _denormalize(schema, input, unvisit, entities) {
	  var object = _extends({}, input);
	  Object.keys(schema).forEach(function (key) {
	    var localSchema = schema[key];
	    if (object[key]) {
	      object[key] = unvisit(object[key], localSchema, entities);
	    }
	  });
	  return object;
	};
	
	exports.denormalize = _denormalize;
	
	var ObjectSchema = function () {
	  function ObjectSchema(definition) {
	    _classCallCheck(this, ObjectSchema);
	
	    this.define(definition);
	  }
	
	  _createClass(ObjectSchema, [{
	    key: "define",
	    value: function define(definition) {
	      this.schema = Object.keys(definition).reduce(function (entitySchema, key) {
	        var schema = definition[key];
	        return _extends({}, entitySchema, _defineProperty({}, key, schema));
	      }, this.schema || {});
	    }
	  }, {
	    key: "normalize",
	    value: function normalize() {
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	
	      return _normalize.apply(undefined, [this.schema].concat(args));
	    }
	  }, {
	    key: "denormalize",
	    value: function denormalize() {
	      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }
	
	      return _denormalize.apply(undefined, [this.schema].concat(args));
	    }
	  }]);
	
	  return ObjectSchema;
	}();
	
	exports.default = ObjectSchema;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=index.js.map