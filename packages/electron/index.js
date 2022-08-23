/* eslint-disable no-console */
module.exports = {
	complete: ({directory, name}) => {
		console.log();
		console.log('Success! Created ' + name + ' at ' + directory);
		console.log();
		console.log('Inside that directory, you can run several NPM commands, including:');
		console.log('	npm run serve');
		console.log('		Starts the development server and Electron shell using it.');
		console.log('	npm run pack');
		console.log('		Bundles the renderer into static files in development mode.');
		console.log('	npm run pack-p');
		console.log('		Bundles the renderer into static files in production mode.');
		console.log('	npm run electron');
		console.log('		Runs the latest built renderer bundle in Electron.');
		console.log('	npm run stage');
		console.log('		Stages a standalone Electron app with the main and renderer processes.');
		console.log('	npm run test');
		console.log('		Starts the test runner.');
		console.log();
		console.log('Refer to https://electronjs.org/docs/api for more details on Electron APIs.');
		console.log();
		console.log('Have fun!');
	}
};
