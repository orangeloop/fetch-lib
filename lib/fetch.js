'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.api = undefined;

var _validateResponse = require('./validateResponse');

var _validateResponse2 = _interopRequireDefault(_validateResponse);

var _parseJson = require('./parseJson');

var _parseJson2 = _interopRequireDefault(_parseJson);

var _api = require('./api');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function buildRequest(method, data) {
    return {
        method: method,
        headers: (0, _api.withJson)((0, _api.withAuthorization)({})),
        body: JSON.stringify(data)
    };
}

var api = exports.api = function api(base) {
    return {
        getJSON: function getJSON(uri) {
            return fetch((0, _api.formatUri)(base, uri), {
                method: 'get',
                headers: (0, _api.withAuthorization)({})
            }).then(_validateResponse2.default).then(_parseJson2.default);
        },

        putJSON: function putJSON(uri, data) {
            return fetch((0, _api.formatUri)(base, uri), buildRequest('put', data)).then(_validateResponse2.default).then(_parseJson2.default);
        },

        postJSON: function postJSON(uri, data) {
            return fetch((0, _api.formatUri)(base, uri), buildRequest('post', data)).then(_validateResponse2.default).then(_parseJson2.default);
        },

        deleteJSON: function deleteJSON(uri) {
            return fetch((0, _api.formatUri)(base, uri), {
                method: 'delete',
                headers: (0, _api.withAuthorization)({})
            }).then(_validateResponse2.default).then(_parseJson2.default);
        }
    };
};