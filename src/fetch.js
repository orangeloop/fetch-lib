import validateResponse from './validateResponse';
import parseJson        from './parseJson';
import {
    formatUri, 
    withAuthorization, 
    withJson
}                       from './api';

function buildRequest(method, data) {
    return {
        method: method,
        headers: withJson(withAuthorization({})),
        body: JSON.stringify(data)
    };   
}

export const api = (base) => {
    return {
        getJSON: function getJSON(uri) {
            return fetch(formatUri(base, uri), {
                method: 'get',
                headers: withAuthorization({})
            })
            .then(validateResponse)
            .then(parseJson);
        },

        putJSON: function putJSON(uri, data) {
            return fetch(formatUri(base, uri), buildRequest('put', data))
                .then(validateResponse)
                .then(parseJson);
        },

        postJSON: function postJSON(uri, data) {
            return fetch(formatUri(base, uri), buildRequest('post', data))
                .then(validateResponse)
                .then(parseJson);
        },

        deleteJSON: function deleteJSON(uri) {
            return fetch(formatUri(base, uri), {
                method: 'delete',
                headers: withAuthorization({})
            })
            .then(validateResponse)
            .then(parseJson);
        }
    }
};