import kind from '@enact/core/kind';
import Panels from '@enact/limestone/Panels';
import ThemeDecorator from '@enact/limestone/ThemeDecorator';

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
