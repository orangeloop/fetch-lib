import * as cookie from 'react-cookie';

export const formatUri = (base, uri) => {
	return base + ((uri && uri[0] === '/') ? uri : '/' + uri);
};

export const withAuthorization = (headers) => {
	if (cookie.load('auth_token')) {
        return {
            ...headers,
            'Authorization': `Bearer ${reactCookie.load('auth_token')}`
        };
	}
    		
	return headers;
};

export const withJson = (headers) => {
    return {
        ...headers,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
};

export const allHeaders = () => {
    return withJson(withAuthorization({}))
};