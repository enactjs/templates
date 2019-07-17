module.exports = {
	complete: ({directory, name}) => {
		const meta = require('./package.json');
		const pre = ['next', 'pre', 'alpha', 'beta', 'rc'];
		if (pre.some(id => meta.version.includes(id))) {
			console.log('NOTICE: This theme uses prerelease Enact code and may '
					+ 'contain unstable or unfinished APIs.');
			console.log();
		}
		
		// After everything is complete, output message to user
		console.log();
		console.log('Success! Created ' + name + ' at ' + directory);
		console.log();
		console.log('Inside that directory, you can run several npm commands, including:');
		console.log(chalk.cyan('	npm run transpile'));
		console.log('		Transpiles into publishable ES5 package');
		console.log(chalk.cyan('	npm run test'));
		console.log('		Starts the test runner.');
		console.log(chalk.cyan('	npm run lint'));
		console.log('		Lints the source code.');
		console.log();
		console.log('Have fun!');
	}
};
