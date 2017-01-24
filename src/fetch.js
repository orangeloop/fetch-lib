import validateResponse from './validateResponse';
import parseJson        from './parseJson';
import {
    formatUri, 
    withAuthorization, 
    withJson
}                       from './api';

export const getJSON = (base, uri) => {
	return fetch(formatUri(base, uri), {
        method: 'get',
        headers: withAuthorization({})
    })
    .then(validateResponse)
    .then(parseJson);
};

export const putJSON = (base, uri, data) => {
    return fetch(formatUri(base, uri), buildRequest('put', data))
        .then(validateResponse)
        .then(parseJson);
};

export const postJSON = (base, uri, data) => {
	return fetch(formatUri(base, uri), buildRequest('post', data))
		.then(validateResponse)
		.then(parseJson);
};

export const deleteJSON = (base, uri) => {
    return fetch(formatUri(base, uri), {
        method: 'delete',
        headers: withAuthorization({})
    })
    .then(validateResponse)
    .then(parseJson);
};

function buildRequest(method, data) {
    return {
        method: method,
        headers: withJson(withAuthorization({})),
        body: JSON.stringify(data)
    };   
}