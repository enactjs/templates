import React from 'react';
import {render} from 'react-dom';
import App from './App';

const appElement = (<App />);

// In a browser environment, render instead of exporting
if (typeof window !== 'undefined') {
	if(!window.cordova) {
		render(appElement, document.getElementById('root'));
	} else {
		document.addEventListener('deviceready', () => {
			render(appElement, document.getElementById('root'));
		}, false);
	}
}

export default appElement;
