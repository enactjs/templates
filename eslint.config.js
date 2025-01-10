const eslintEnactProxy = require('eslint-config-enact-proxy/strict');
const { FlatCompat } = require("@eslint/eslintrc");

const compat = new FlatCompat({});

module.exports = [
	...compat.extends(eslintEnactProxy),
	{
		ignores: [
			"node_modules",
			"packages/theme"
		]
	}
];