import {MetricType} from 'web-vitals';

const reportWebVitals = (onPerfEntry?: (metric: MetricType) => void) => {
	if (onPerfEntry && onPerfEntry instanceof Function) {
		import('web-vitals').then(({onCLS, onFID, onFCP, onINP, onLCP, onTTFB}) => {
			onCLS(onPerfEntry);
			onFID(onPerfEntry);
			onFCP(onPerfEntry);
			onINP(onPerfEntry);
			onLCP(onPerfEntry);
			onTTFB(onPerfEntry);
		});
	}
};

export default reportWebVitals;
