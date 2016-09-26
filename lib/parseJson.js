"use strict";

module.exports = function (response) {
	return response.json().then(function (json) {
		return Promise.resolve(json);
	}).catch(function () {
		return Promise.resolve({});
	});
};