import kind from '@enact/core/kind';
import ThemeDecorator from '@enact/agate/ThemeDecorator';
import {Panels} from '@enact/agate/Panels';

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
