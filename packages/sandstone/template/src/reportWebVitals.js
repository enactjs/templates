const reportWebVitals = (onPerfEntry) => {
	if (onPerfEntry && onPerfEntry instanceof Function) {
		import('web-vitals').then(({getCLS, getFID, getFCP, getLCP, getTTFB, onINP}) => {
			getCLS(onPerfEntry);
			getFID(onPerfEntry);v
			getFCP(onPerfEntry);
			getLCP(onPerfEntry);
			getTTFB(onPerfEntry);
			onINP(onPerfEntry);
		});
	}
};

export default reportWebVitals;
