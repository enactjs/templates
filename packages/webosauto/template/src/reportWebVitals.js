const reportWebVitals = (onPerfEntry) => {
	if (onPerfEntry && onPerfEntry instanceof Function) {
		import('web-vitals').then(({getCLS, getFID, getFCP, getLCP, getTTFB, getINP}) => {
			getCLS(onPerfEntry);
			getFID(onPerfEntry);
			getFCP(onPerfEntry);
			getLCP(onPerfEntry);
			getTTFB(onPerfEntry);
			getINP(onPerfEntry);
		});
	}
};

export default reportWebVitals;
