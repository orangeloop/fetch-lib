'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.formatUri = formatUri;
exports.withAuthorization = withAuthorization;
exports.withJson = withJson;
exports.allHeaders = allHeaders;

var _reactCookie = require('react-cookie');

var cookie = _interopRequireWildcard(_reactCookie);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function formatUri(base, uri) {
    return base + (uri && uri[0] === '/' ? uri : '/' + uri);
}

function withAuthorization(headers) {
    if (cookie.load('auth_token')) {
        return _extends({}, headers, {
            'Authorization': 'Bearer ' + cookie.load('auth_token')
        });
    }

    return headers;
}

function withJson(headers) {
    return _extends({}, headers, {
        'Accept': 'appliction/json',
        'Content-Type': 'application/json'
    });
}

function allHeaders() {
    return withJson(withAuthorization({}));
}