import * as cookie from 'react-cookie';

export function formatUri(base, uri) {
	return base + ((uri && uri[0] === '/') ? uri : '/' + uri);
}

export function withAuthorization(headers) {
	if (cookie.load('auth_token')) {
        return {
            ...headers,
            'Authorization': `Bearer ${cookie.load('auth_token')}`
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