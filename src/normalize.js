import {
    normalize,
    arrayOf
}               from 'normalizr';

const getJson = (json, propertyName) => {
    return (propertyName) ? json[propertyName] : json;
}

const buildPromise = (json, schema) => {
    return Promise.resolve(normalize(json, schema));
}

export const normalizeObject = (schema, propertyName) => {
    return (json) => {
        return buildPromise(getJson(json, propertyName), schema);
    };
}

export const normalizeArray = (schema, propertyName) => {
    return (json) => {
        return buildPromise(getJson(json, propertyName), arrayOf(schema));
    };
}

export default normalizeObject