/**
 * MyTheme styled button components and behaviors.
 *
 * @example
 * <Button>Hello Enact!</Button>
 *
 * @module my-theme/Button
 * @exports Button
 * @exports ButtonBase
 * @exports ButtonDecorator
 */

import kind from '@enact/core/kind';
import Spottable from '@enact/spotlight/Spottable';
import {ButtonBase as UiButtonBase, ButtonDecorator as UiButtonDecorator} from '@enact/ui/Button';
import PropTypes from 'prop-types';
import compose from 'ramda/src/compose';

import Icon from '../Icon';
import Skinnable from '../Skinnable';

import componentCss from './Button.module.less';

/**
 * A button component.
 *
 * This component is most often not used directly but may be composed within another component as it
 * is within [Button]{@link my-theme/Button.Button}.
 *
 * @class ButtonBase
 * @memberof my-theme/Button
 * @extends ui/Button.ButtonBase
 * @ui
 * @public
 */
const ButtonBase = kind({
	name: 'Button',

	propTypes: /** @lends my-theme/Button.ButtonBase.prototype */ {
		/**
		 * Customizes the component by mapping the supplied collection of CSS class names to the
		 * corresponding internal Elements and states of this component.
		 *
		 * The following classes are supported:
		 *
		 * * `button` - The root class name
		 * * `bg` - The background node of the button
		 * * `selected` - Applied to a `selected` button
		 *
		 * @type {Object}
		 * @public
		 */
		css: PropTypes.object,

		/**
		 * Provides a way to call special interface attention to this button. It will be "featured"
		 * in some way by the theme's visual rules.
		 *
		 * @type {Boolean}
		 * @public
		 */
		// This demonstrates how a Boolean prop can be easily converted into a classname.
		// True applies the class, false doesn't. This lets you manage a visual state purely in the
		// styling code.
		selected: PropTypes.bool
	},

	styles: {
		css: componentCss,
		publicClassNames: true
	},

	computed: {
		className: ({selected, styler}) => styler.append(
			{selected}
		),
		minWidth: ({children}) => (!children)
	},

	render: ({css, ...rest}) => {
		delete rest.selected;

		return (
			<UiButtonBase
				{...rest}
				css={css}
				iconComponent={Icon}
			/>
		);
	}
});

/**
 * Applies MyTheme specific behaviors to [Button]{@link my-theme/Button.ButtonBase} components.
 *
 * @hoc
 * @memberof my-theme/Button
 * @mixes ui/Button.ButtonDecorator
 * @mixes spotlight/Spottable.Spottable
 * @mixes my-theme/Skinnable.Skinnable
 * @public
 */
const ButtonDecorator = compose(
	UiButtonDecorator,
	Spottable,
	Skinnable
);

/**
 * A button component, ready to use in MyTheme applications.
 *
 * Usage:
 * ```
 * <Button>
 * 	Press me!
 * </Button>
 * ```
 *
 * @class Button
 * @memberof my-theme/Button
 * @extends my-theme/Button.ButtonBase
 * @mixes my-theme/Button.ButtonDecorator
 * @ui
 * @public
 */
const Button = ButtonDecorator(ButtonBase);

export default Button;
export {
	Button,
	ButtonBase,
	ButtonDecorator
};
