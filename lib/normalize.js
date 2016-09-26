'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.normalizeArray = exports.normalizeObject = undefined;

var _normalizr = require('normalizr');

var getJson = function getJson(json, propertyName) {
    return propertyName ? json[propertyName] : json;
};

var buildPromise = function buildPromise(json, schema) {
    return Promise.resolve((0, _normalizr.normalize)(json, schema));
};

var normalizeObject = exports.normalizeObject = function normalizeObject(schema, propertyName) {
    return function (json) {
        return buildPromise(getJson(json, propertyName), schema);
    };
};

var normalizeArray = exports.normalizeArray = function normalizeArray(schema, propertyName) {
    return function (json) {
        return buildPromise(getJson(json, propertyName), (0, _normalizr.arrayOf)(schema));
    };
};

exports.default = normalizeObject;