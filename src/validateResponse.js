module.exports = (response) => {
	if (response.status >= 200 && response.status < 300 || response.status === 404) {
		return response;
	} else {
        return response.text()
                    .then((err) => {
                        const error = new Error(err);
                        error.response = response;
                        throw error;                  
                    });
	}
};