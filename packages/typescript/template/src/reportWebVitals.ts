import {ReportHandler} from 'web-vitals';

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
	if (onPerfEntry && onPerfEntry instanceof Function) {
		import('web-vitals').then(({getCLS, getFID, getFCP, getLCP, getTTFB, onINP}) => {
			getCLS(onPerfEntry);
			getFID(onPerfEntry);
			getFCP(onPerfEntry);
			getLCP(onPerfEntry);
			getTTFB(onPerfEntry);
			onINP(onPerfEntry);
		});
	}
};

export default reportWebVitals;
