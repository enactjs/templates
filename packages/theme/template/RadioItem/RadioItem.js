/**
 * Provides a MyTheme Item component and interactive radio toggle icon.
 *
 * @example
 * <RadioItem>Item</RadioItem>
 *
 * @module my-theme/RadioItem
 * @exports RadioItem
 * @exports RadioItemBase
 */

import kind from '@enact/core/kind';
import PropTypes from 'prop-types';

import ToggleIcon from '../ToggleIcon';
import ToggleItem from '../ToggleItem';

import * as componentCss from './RadioItem.module.less';

/**
 * Renders an `Item` with a radio-dot icon.
 *
 * @class RadioItem
 * @memberof my-theme/RadioItem
 * @extends my-theme/ToggleItem.ToggleItem
 * @omit iconComponent
 * @ui
 * @public
 */
const RadioItemBase = kind({
	name: 'RadioItem',

	propTypes: /** @lends my-theme/RadioItem.RadioItem.prototype */ {
		/**
		 * Customizes the component by mapping the supplied collection of CSS class names to the
		 * corresponding internal Elements and states of this component.
		 *
		 * The following classes are supported:
		 *
		 * * `radioItem` - The root class name
		 *
		 * @type {Object}
		 * @public
		 */
		css: PropTypes.object
	},

	styles: {
		css: componentCss,
		className: 'radioItem',
		publicClassNames: true
	},

	render: ({css, ...rest}) => (
		<ToggleItem
			{...rest}
			css={css}
			iconComponent={
				<ToggleIcon css={css} />
			}
		/>
	)
});

export default RadioItemBase;
export {
	RadioItemBase as RadioItem,
	RadioItemBase
};
