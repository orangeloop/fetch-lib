import {
    normalize as normalizeSchema,
    schema
}               from 'normalizr';

const getJson = (json, propertyName) => {
    return (propertyName) ? json[propertyName] : json;
};

const buildPromise = (json, schema) => {
    return Promise.resolve(normalizeSchema(json, schema));
};

export const normalize = (schema, propertyName) => {
    return (json) => {
        return buildPromise(getJson(json, propertyName), schema);
    };
};