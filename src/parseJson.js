module.exports = (response) => {
	return response.json()
		.then((json) => Promise.resolve(json))
		.catch(() => Promise.resolve({}));
};