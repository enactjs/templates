/**
 * Provides MyTheme styled icon components and behaviors.
 *
 * @example
 * <Icon>flag</Icon>
 *
 * @module my-theme/Icon
 * @exports Icon
 * @exports IconBase
 * @exports IconDecorator
 * @exports icons
 */

import kind from '@enact/core/kind';
import UiIcon from '@enact/ui/Icon';
import PropTypes from 'prop-types';
import compose from 'ramda/src/compose';

import Skinnable from '../Skinnable';

import componentCss from './Icon.module.less';

/**
 * Renders a MyTheme-styled icon without any behavior.
 *
 * my-theme uses Material icons out-of-the-box. For a complete list of supported icons, visit the
 * material icons website: https://material.io/tools/icons/
 *
 * @class IconBase
 * @memberof my-theme/Icon
 * @extends ui/Icon.Icon
 * @ui
 * @public
 */
const IconBase = kind({
	name: 'Icon',

	propTypes: /** @lends my-theme/Icon.Icon.prototype */ {
		/**
		 * The icon content.
		 *
		 * May be specified as either:
		 *
		 * * A string that represents an icon from the [iconList]{@link ui/Icon.Icon.iconList},
		 * * An HTML entity string, Unicode reference or hex value (in the form '0x...'),
		 * * A URL specifying path to an icon image, or
		 * * An object representing a resolution independent resource (See {@link ui/resolution}).
		 *
		 * @type {String|Object}
		 * @public
		 */
		children: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
	},

	styles: {
		css: componentCss,
		className: 'material-icons-round'
	},

	render: (props) => (
		<UiIcon
			{...props}
			css={props.css}
		/>
	)
});

/**
 * MyTheme-specific behaviors to apply to [IconBase]{@link my-theme/Icon.IconBase}.
 *
 * @hoc
 * @memberof my-theme/Icon
 * @mixes my-theme/Skinnable.Skinnable
 * @public
 */
const IconDecorator = compose(
	Skinnable
);

/**
 * A MyTheme-styled icon.
 *
 * @class Icon
 * @memberof my-theme/Icon
 * @extends my-theme/Icon.IconBase
 * @mixes my-theme/Icon.IconDecorator
 * @ui
 * @public
 */
const Icon = IconDecorator(IconBase);

export default Icon;
export {
	Icon,
	IconBase,
	IconDecorator
};
