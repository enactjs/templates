const reportWebVitals = (onPerfEntry) => {
	if (onPerfEntry && onPerfEntry instanceof Function) {
		import('web-vitals').then(({getCLS, getFCP, getLCP, getTTFB, onINP}) => {
			getCLS(onPerfEntry);
			getFCP(onPerfEntry);
			getLCP(onPerfEntry);
			getTTFB(onPerfEntry);
			onINP(onPerfEntry);
		});
	}
};

export default reportWebVitals;
