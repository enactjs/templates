import Button from '@enact/limestone/Button';
import kind from '@enact/core/kind';
import {Panel, Header} from '@enact/limestone/Panels';

const MainPanel = kind({
	name: 'MainPanel',

	render: (props) => (
		<Panel {...props}>
			<Header title="Hello world!" />
			<Button>Click me</Button>
		</Panel>
	)
});

export default MainPanel;
