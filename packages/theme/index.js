const fs = require('fs');
const path = require('path');

const capitalize = name => name.charAt(0).toUpperCase() + name.slice(1);
const capEachWord = text => text.split(/[-_\s]/).map(capitalize).join('');

const sourceFiles => (dir, action) {
	const list = fs.readdirSync(dir);
	list.forEach(item => {
		const itemPath = path.join(dir, item);
		if (fs.statSync(itemPath).isDirectory()) {
			sourceFiles(itemPath, action);
		} else if (/\.(css|less|js|jsx|md)$/.test(item)) {
			action(itemPath);
		}
	})
};

module.exports = {
	setup: ({defaultGenerator, directory, name, skin = 'default-skin'}) => {
		defaultGenerator.setup({directory, name});
		sourceFiles(directory, file => {
			const text = fs.readFileSync(file, {encoding: 'utf8'});
			text = text.replace(/my-theme/g, name);
			text = text.replace(/MyTheme/g, capEachWord(name));
			text = text.replace(/my-skin/g, skin);
			text = text.replace(/MySkin/g, capEachWord(skin));
			fs.writeFileSync(file, text, {encoding: 'utf8'});
		});
		[
			'colors-my-skin.less',
			'variables-my-skin.less'
		].forEach(file => {
			const newSkinFile = file.replace('my-skin', skin);
			fs.renameSync(
				path.join(directory, 'styles', file),
				path.join(directory, 'styles', newSkinFile)
			);
		})
		
	},
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
