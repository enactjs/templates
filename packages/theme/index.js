const fs = require('fs');
const path = require('path');

const capitalize = name => name.charAt(0).toUpperCase() + name.slice(1);
const capEachWord = text => text.split(/[-_\s]/).map(capitalize).join('');
const ilibVar = name => `ILIB_${name.toUpperCase().replace(/[-_\s]/g, '_')}_PATH`;

const sourceFiles = (dir, action) => {
	const list = fs.readdirSync(dir);
	list.forEach(item => {
		const itemPath = path.join(dir, item);
		if (fs.statSync(itemPath).isDirectory()) {
			sourceFiles(itemPath, action);
		} else if (/\.(css|less|js|jsx|ts|tsx|md)$/.test(item)) {
			action(itemPath);
		}
	});
};

module.exports = {
	type: 'theme',
	setup: ({defaultGenerator, directory, name, skin = 'default-skin'}) => {
		skin = skin.replace(/ /g, '-').toLowerCase();
		// Execute default setup stage
		defaultGenerator.setup({directory, name});
		// Rename skin stylesheets according to skin name
		[
			'colors-my-skin.less',
			'variables-my-skin.less'
		].forEach(file => {
			const newSkinFile = file.replace('my-skin', skin);
			const oldPath = path.join(directory, 'styles', file);
			const newPath = path.join(directory, 'styles', newSkinFile);
			fs.renameSync(oldPath, newPath);
		});
		// Update source code files to use user-defined theme/skin names
		const simpleName = path.basename(name);
		sourceFiles(directory, file => {
			let text = fs.readFileSync(file, {encoding: 'utf8'});
			text = text.replace(/my-theme/g, simpleName);
			text = text.replace(/MyTheme/g, capEachWord(simpleName));
			text = text.replace(/MyTheme/g, capEachWord(simpleName));
			text = text.replace(/ILIB_MY_THEME_PATH/g, ilibVar(simpleName));
			text = text.replace(/my-skin/g, skin);
			text = text.replace(/MySkin/g, capEachWord(skin));
			fs.writeFileSync(file, text, {encoding: 'utf8'});
		});
	},
	complete: ({directory, name}) => {
		import('chalk').then(({default: chalk}) => {
			// Output a notice when using an unstable template release with prerelease Enact
			const meta = require('./package.json');
			const pre = ['next', 'pre', 'alpha', 'beta', 'rc'];
			if (pre.some(id => meta.version.includes(id))) {
				console.log('NOTICE: This theme uses prerelease Enact code and may ' +
					'contain unstable or unfinished APIs.');
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
			console.log('We suggest that you begin by typing:');
			if (path.resolve(process.cwd()) !== path.resolve(directory)) {
				console.log(chalk.cyan('	cd ' + path.relative(process.cwd(), directory)));
			}
			console.log('	' + chalk.cyan('npm run transpile'));
			console.log('	' + chalk.cyan('npm link build'));
			console.log('This will build your theme library into ES5/CSS and then link that ' +
				'output into the global NPM userspace, where you can then ' +
				chalk.cyan('npm link ' + name) + ' to link the library into an app. ' +
				'Re-transpile anytime the theme is updated your app will automatically ' +
				'receive those changes.');
			console.log();
			console.log('Have fun!');
		});
	}
};
