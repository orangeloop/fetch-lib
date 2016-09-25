import validateResponse from './validateResponse';
import parseJson        from './parseJson';
import {
    formatUri, 
    withAuthorization, 
    withJson
}                       from './api';

export function getJSON(uri) {
	return fetch(formatUri(uri), {
        method: 'get',
        headers: withAuthorization({})
    })
    .then(validateResponse)
    .then(parseJson);
};

export function putJSON(uri, data) {
    return fetch(formatUri(uri), buildRequest('put', data))
        .then(validateResponse)
        .then(parseJson);
}

export function postJSON(uri, data) {
	return fetch(formatUri(uri), buildRequest('post', data))
		.then(validateResponse)
		.then(parseJson);
};

export function deleteJSON(uri) {
    return fetch(formatUri(uri), {
        method: 'delete',
        headers: withAuthorization({})
    })
    .then(validateResponse)
    .then(parseJson);
}

function buildRequest(method, data) {
    return {
        method: method,
        headers: withJson(withAuthorization({})),
        body: JSON.stringify(data)
    };   
}