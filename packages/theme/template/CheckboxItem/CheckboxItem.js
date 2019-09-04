/**
 * MyTheme styled item components with a toggleable checkbox.
 *
 * @example
 * <CheckboxItem onToggle={console.log}>
 * 	Item with a Checkbox
 * </CheckboxItem>
 *
 * @module my-theme/CheckboxItem
 * @exports CheckboxItem
 * @exports CheckboxItemBase
 */

import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import React from 'react';

import Checkbox from '../Checkbox';
import ToggleItem from '../ToggleItem';

import componentCss from './CheckboxItem.module.less';

/**
 * An item with a checkbox component, ready to use in my-theme applications.
 *
 * `CheckboxItem` may be used to allow the user to select a single option or used as part of a
 * [Group]{@link ui/Group} when multiple [selections]{@link ui/Group.Group.select} are possible.
 *
 * Usage:
 * ```
 * <CheckboxItem
 * 	defaultSelected={selected}
 * 	onToggle={handleToggle}
 * >
 *  Item with a Checkbox
 * </CheckboxItem>
 * ```
 *
 * @class CheckboxItem
 * @memberof my-theme/CheckboxItem
 * @extends my-theme/ToggleItem.ToggleItem
 * @omit iconComponent
 * @ui
 * @public
 */
const CheckboxItemBase = kind({
	name: 'CheckboxItem',

	propTypes: /** @lends my-theme/CheckboxItem.CheckboxItem.prototype */ {
		/**
		 * Customizes the component by mapping the supplied collection of CSS class names to the
		 * corresponding internal Elements and states of this component.
		 *
		 * The following classes are supported:
		 *
		 * * `checkboxItem` - The root class name
		 *
		 * @type {Object}
		 * @public
		 */
		css: PropTypes.object
	},

	styles: {
		css: componentCss,
		className: 'checkboxItem',
		publicClassNames: ['checkboxItem']
	},

	render: ({css, ...rest}) => (
		<ToggleItem
			{...rest}
			css={css}
			iconComponent={Checkbox}
		/>
	)
});

export default CheckboxItemBase;
export {
	CheckboxItemBase as CheckboxItem,
	CheckboxItemBase
};
