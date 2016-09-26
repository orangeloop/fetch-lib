"use strict";

module.exports = function (response) {
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