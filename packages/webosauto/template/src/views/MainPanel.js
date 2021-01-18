import Button from '@enact/agate/Button';
import kind from '@enact/core/kind';
import {Panel} from '@enact/agate/Panels';
import React from 'react';

const MainPanel = kind({
	name: 'MainPanel',

	render: (props) => (
		<Panel {...props}>
			<Button>Click Me</Button>
		</Panel>
	)
});

export default MainPanel;
