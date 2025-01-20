import kind from '@enact/core/kind';
import ThemeDecorator from '@enact/limestone/ThemeDecorator';
import Panels from '@enact/limestone/Panels';

import MainPanel from '../views/MainPanel';

import css from './App.module.less';

const App = kind({
	name: 'App',

	styles: {
		css,
		className: 'app'
	},

	render: (props) => (
		<div {...props}>
			<Panels>
				<MainPanel />
			</Panels>
		</div>
	)
});

export default ThemeDecorator(App);
