import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import React from 'react';
import {SlideLeftArranger, ViewManager} from '@enact/ui/ViewManager';

import Skinnable from '../Skinnable';

import Panel from './Panel';

import componentCss from './Panels.module.less';

const PanelsBase = kind({
	name: 'Panels',
	propTypes: {
		/**
		 * Index of the active panel
		 *
		 * @type {Number}
		 * @default 0
		 * @public
		 */
		index: PropTypes.number
	},
	defaultProps: {
		index: 0
	},
	styles: {
		css: componentCss,
		className: 'panels enact-fit',
		publicClassNames: true
	},
	render: (props) => {
		return (
			<ViewManager arranger={SlideLeftArranger} {...props} />
		);
	}
});

const Panels = Skinnable(PanelsBase);

export default Panels;
export {
	Panel,
	Panels,
	PanelsBase
};
