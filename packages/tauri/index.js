module.exports = {
	complete: ({directory, name}) => {
		console.log();
		console.log('Success! Created ' + name + ' at ' + directory);
		console.log();
		console.log('Inside that directory, you can run several NPM commands, including:');
		console.log('	npm run serve');
		console.log('		Starts the enact app that is used inside Tauri.');
		console.log('	npm run pack');
		console.log('		Bundles the renderer into static files in development mode.');
		console.log('	npm run pack-p');
		console.log('		Bundles the renderer into static files in production mode.');
		console.log('	npm run tauri-dev');
		console.log('		Builds and runs the Tauri app in dev mode.');
		console.log('	npm run tauri-build');
		console.log('		Builds the latest Tauri app.');
		console.log('	npm run test');
		console.log('		Starts the test runner.');
		console.log();
		console.log('Refer to https://tauri.app/v1/api/config for more details on Tauri APIs.');
		console.log();
		console.log('Have fun!');
	}
};
