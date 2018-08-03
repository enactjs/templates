module.exports = {
	complete: ({defaultGenerator, directory, name}) => {
		const meta = require('./package.json');
		const pre = ['next', 'pre', 'alpha', 'beta', 'rc'];
		if (pre.some(id => meta.version.includes(id))) {
			console.log('NOTICE: This app uses prerelease Enact code and may '
					+ 'contain unstable or unfinished APIs.');
			console.log();
		}
		defaultGenerator.complete({directory, name});
	}
};
