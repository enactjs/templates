import {error} from '@enact/webos/pmloglib'
import React from 'react';
import {render} from 'react-dom';

import App from './App';

const appElement = (<App />);

// In a browser environment, render instead of exporting
if (typeof window !== 'undefined') {
	window.addEventListener('error', function (ev) {
		let stack = ev.error && ev.error.stack || null;

		if (stack && stack.length > 512) {
			// JSON must be limitted to 1024 characters so we truncate the stack to 512 for safety
			stack = ev.error.stack.substring(0, 512);
		}

		error('window.onerror', {
			message: ev.message,
			url: ev.filename,
			line: ev.lineno,
			column: ev.colno,
			stack,
		}, '');
	});

	render(appElement, document.getElementById('root'));
}

export default appElement;
