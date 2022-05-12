import kind from '@enact/core/kind';
import Button from '@enact/sandstone/Button';
import {Header, Panel} from '@enact/sandstone/Panels';

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
