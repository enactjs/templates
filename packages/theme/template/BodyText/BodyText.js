/**
 * MyTheme styled text block components and behaviors.
 *
 * @example
 * <BodyText centered>Hello Enact!</BodyText>
 *
 * @module my-theme/BodyText
 * @exports BodyText
 * @exports BodyTextBase
 * @exports BodyTextDecorator
 */

import kind from '@enact/core/kind';
import UiBodyText from '@enact/ui/BodyText';
import PropTypes from 'prop-types';
import compose from 'ramda/src/compose';

import Skinnable from '../Skinnable';

import componentCss from './BodyText.module.less';

/**
 * A simple text block component.
 *
 * This component is most often not used directly but may be composed within another component as it
 * is within [BodyText]{@link my-theme/BodyText.BodyText}.
 *
 * @class BodyTextBase
 * @memberof my-theme/BodyText
 * @extends ui/BodyText.BodyText
 * @ui
 * @public
 */
const BodyTextBase = kind({
	name: 'BodyText',

	propTypes: /** @lends my-theme/BodyText.BodyTextBase.prototype */ {
		/**
		 * Customizes the component by mapping the supplied collection of CSS class names to the
		 * corresponding internal Elements and states of this component.
		 *
		 * The following classes are supported:
		 *
		 * * `bodyText` - The root class name
		 *
		 * @type {Object}
		 * @public
		 */
		css: PropTypes.object
	},

	styles: {
		css: componentCss,
		publicClassNames: 'bodyText'
	},

	render: ({css, ...rest}) => {

		return (
			<UiBodyText
				{...rest}
				css={css}
			/>
		);
	}
});

/**
 * Applies MyTheme specific behaviors to [BodyText]{@link my-theme/BodyText.BodyTextBase}.
 *
 * @hoc
 * @memberof my-theme/BodyText
 * @mixes my-theme/Skinnable.Skinnable
 * @public
 */
const BodyTextDecorator = compose(
	Skinnable
);

/**
 * A simple text block component, ready to use in MyTheme applications.
 *
 * `BodyText` may be used to display a block of text and is sized and spaced appropriately for a
 * MyTheme application.
 *
 * Usage:
 * ```
 * <BodyText>
 *  I have a Ham radio. There are many like it, but this one is mine.
 * </BodyText>
 * ```
 *
 * @class BodyText
 * @memberof my-theme/BodyText
 * @extends my-theme/BodyText.BodyTextBase
 * @mixes my-theme/BodyText.BodyTextDecorator
 * @ui
 * @public
 */
const BodyText = BodyTextDecorator(BodyTextBase);

export default BodyText;
export {
	BodyText,
	BodyTextBase,
	BodyTextDecorator
};
