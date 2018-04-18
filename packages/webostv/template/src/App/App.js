import kind from '@enact/core/kind';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';
import Panels from '@enact/moonstone/Panels';
import React from 'react';

import MainPanel from '../views/MainPanel';

import attachErrorHandler from './attachErrorHandler';

import css from './App.less';

const App = kind({
	name: 'App',

	styles: {
		css,
		className: 'app'
	},

	render: (props) => (
		<Panels {...props} ref={attachErrorHandler}>
			<MainPanel />
		</Panels>
	)
});

export default MoonstoneDecorator(App);
