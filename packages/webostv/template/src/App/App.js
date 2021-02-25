import kind from '@enact/core/kind';
import ThemeDecorator from '@enact/moonstone/ThemeDecorator';
import Panels from '@enact/moonstone/Panels';
import React from 'react';

import MainPanel from '../views/MainPanel';

import './attachErrorHandler';

import css from './App.module.less';

const App = kind({
	name: 'App',

	styles: {
		css,
		className: 'app'
	},

	render: (props) => (
		<Panels {...props}>
			<MainPanel />
		</Panels>
	)
});

export default ThemeDecorator(App);
