const CordovaConfig = require('cordova-config');
const fs = require('fs-extra');
const path = require('path');
const spawn = require('cross-spawn');

function silentSpawn(bin, args, cwd) {
	return new Promise((resolve, reject) => {
		const stdio = ['ignore', 'ignore', process.stderr];
		const child = spawn(bin, args, {stdio, cwd, env:process.env});
		child.on('close', code => {
			if (code !== 0) {
				reject({code});
			} else {
				resolve();
			}
		});
	});
}

module.exports = {
	validate: ({opts, defaultGenerator, template, directory, name}) => {
		const startsWithLetter = /^(\b[a-zA-Z]\w*.*)+$/;
		if (opts.id && !startsWithLetter.test(opts.id)) {
			throw new Error('Invalid reverse-DNS ID value.');
		} else if (!opts.id && !startsWithLetter.test(name)) {
			throw new Error('Invalid name; needs to start with a letter character.');
		}
		defaultGenerator.validate({opts, defaultGenerator, template, directory, name});
	},
	prepare: ({opts, defaultGenerator, template, directory, name}) => {
		// We can re-use much of the default app preparep, but also want to create the
		// initial Cordova project workspace to copy the template into.
		defaultGenerator.prepare({opts, defaultGenerator, template, directory, name});
		return silentSpawn('cordova', ['create', '.'], directory)
			.catch(() => {
				throw new Error('Failed to create a new Cordova workspace. Ensure the '
								+ 'Cordova CLI is globally installed.');
			})
			.then(() => console.log('Generated Cordova project workspace.'))
			.then(() => fs.remove(path.join(directory, 'res')))
			.then(() => fs.remove(path.join(directory, 'hooks')))
			.then(() => fs.remove(path.join(directory, '.npmignore')))
			.then(() => fs.remove(path.join(directory, 'package.json')));
	},
	setup: ({opts, defaultGenerator, template, directory, name}) => {
		// We can re-use much of the default app setup, but also want to update the Cordova
		// config.xml for the default values and ensure hooks have correct permissions.
		defaultGenerator.setup({opts, defaultGenerator, template, directory, name});
		const meta = fs.readJsonSync(path.join(directory, 'package.json'), {encoding:'UTF8', throws:false}) || {};
		const config = new CordovaConfig(path.join(directory, 'config.xml'));
		config.setID(opts.id || `com.example.${name.replace(/-+/g, '')}`);
		config.setName(opts.name || name.replace(/-+/g, ' ').replace(/\b\w/g, l => l.toUpperCase()));
		config.setVersion(meta.version);
		config.setDescription(meta.description);
		config.setAuthor('John Doe', 'contact@email.com', 'http://example.com');
		return config.write();
	},
	complete: ({directory, name}) => {
		return silentSpawn('cordova', ['platform', 'add', 'browser'], directory)
			.then(() => console.log('Initialized Cordova browser platform.'))
			.then(() => fs.remove(path.join(directory, 'www')))
			.then(() => {
				console.log();
				console.log('Success! Created ' + name + ' at ' + directory);
				console.log();
				console.log('Inside that directory, you can run several NPM commands, including:');
				console.log('	npm run serve');
				console.log('		Starts the development server.');
				console.log('	npm run pack');
				console.log('		Bundles the app into static files in development mode.');
				console.log('	npm run pack-p');
				console.log('		Bundles the app into static files in production mode.');
				console.log('	npm run test');
				console.log('		Starts the test runner.');
				console.log();
				console.log('Additionally, the directory acts as a fully-functioning Cordova '
							+ 'project workspace.');
				console.log('See https://cordova.apache.org/ for more details on Cordova and its '
							+ 'CLI commands.');
				console.log();
				console.log('Have fun!');
			});
	}
};
