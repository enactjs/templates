const eslintEnactProxy = require('eslint-config-enact-proxy/strict');
const { FlatCompat } = require("@eslint/eslintrc");

const compat = new FlatCompat({});

console.log(eslintEnactProxy)
module.exports = [
	...compat.extends(eslintEnactProxy),
	//...compat.extends("enact-proxy/strict"),
	{
		ignores: [
			"node_modules",
			"packages/theme"
		]
	}
];