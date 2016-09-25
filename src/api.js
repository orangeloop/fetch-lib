import * as cookie from 'react-cookie';

const URI = process.env.API_ENDPOINT;

export function formatUri(uri) {
	return URI + ((uri && uri[0] === '/') ? uri : '/' + uri);
}

export function withAuthorization(headers) {
	if (reactCookie.load('auth_token')) {
        return {
            ...headers,
            'Authorization': `Bearer ${reactCookie.load('auth_token')}`
        };
	}
    		
	return headers;
}

export function withJson(headers) {
    return {
        ...headers,
        'Accept': 'appliction/json',
        'Content-Type': 'application/json'
    }
}

export function allHeaders() {
    return withJson(withAuthorization({}));
}