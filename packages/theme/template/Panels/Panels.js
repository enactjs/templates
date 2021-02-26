/**
 * MyTheme styled Panels component.  A `Panels` component's children are typically
 * {@link my-theme/Panels.Panel} components.
 *
 * @example
 * <Panels>
 *     <Panel>
 *         Panel 1
 *     </Panel>
 *     <Panel>
 *         Panel 2
*      </Panel>
 * </Panels>
 *
 * @module my-theme/Panels
 * @exports Panel
 * @exports Panels
 * @exports PanelsBase
 */

import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import {SlideLeftArranger, ViewManager} from '@enact/ui/ViewManager';

import Skinnable from '../Skinnable';

import Panel from './Panel';

import componentCss from './Panels.module.less';

/**
 * Basic Panels component using a `SlideLeftArranger` [arranger]{@link ui/ViewManager.Arranger}
 *
 * @class Panels
 * @memberof my-theme/Panels
 * @ui
 * @public
 */
const PanelsBase = kind({
	name: 'Panels',

	propTypes: /** @lends my-theme/Panels.Panels.prototype */ {
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
