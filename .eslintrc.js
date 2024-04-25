module.exports = {
	env: {
		node: true
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
    rules: {
        "no-unused-vars": "error"
    }
};