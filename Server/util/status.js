module.exports = {
    CREATED: {
        title: 'Error in created',
        httpCode: 403
    },
    RESOURCE_EXIST: { // if resource already exists
		title: "resource exist",
		httpCode: 409
	},
    BAD_REQUEST: {
        title: "bad request",
        status_code: 400
    },
    INVALID_INPUT: {
		title: "invalid input",
		httpCode: 400
	},
    NOT_FOUND: {
        title: "not found",
        httpCode: 404
    },
    EXPECTATION_FAILED: {
        title: "expectation failed",
        httpCode: 417
    },
    NO_CONTENT: {
        title: "No_Content",
        httpCode: 204
    },
    OK: {
        message: 'ok',
        httpCode: 200
    }
}