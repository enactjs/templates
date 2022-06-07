/**
 * MyTheme styled labeled Heading components and behaviors
 *
 * @example
 * <Heading>
 *   A Content Section Heading
 * </Heading>
 *
 * @module my-theme/Heading
 * @exports Heading
 * @exports HeadingBase
 * @exports HeadingDecorator
 */

import kind from '@enact/core/kind';
import UiHeading from '@enact/ui/Heading';
import PropTypes from 'prop-types';
import compose from 'ramda/src/compose';

import Skinnable from '../Skinnable';

import componentCss from './Heading.module.less';

/**
 * A labeled Heading component.
 *
 * This component is most often not used directly but may be composed within another component as it
 * is within [Heading]{@link my-theme/Heading.Heading}.
 *
 * @class HeadingBase
 * @memberof my-theme/Heading
 * @ui
 * @public
 */
const HeadingBase = kind({
	name: 'Heading',

	propTypes: /** @lends my-theme/Heading.HeadingBase.prototype */ {
		/**
		 * Customizes the component by mapping the supplied collection of CSS class names to the
		 * corresponding internal elements and states of this component.
		 *
		 * The following classes are supported:
		 *
		 * * `heading` - The root component class
		 *
		 * @type {Object}
		 * @public
		 */
		css: PropTypes.object,

		/**
		 * Adds a horizontal-rule (line) under the component
		 *
		 * @type {Boolean}
		 * @public
		 */
		showLine: PropTypes.bool
	},

	styles: {
		css: componentCss,
		className: 'heading'
	},

	computed: {
		className: ({showLine, styler}) => styler.append({showLine})
	},

	render: ({css, ...rest}) => {
		delete rest.showLine;
		return (<UiHeading
			{...rest}
			css={css}
		/>);
	}
});

/**
 * Applies MyTheme specific behaviors to [HeadingBase]{@link my-theme/Heading.HeadingBase}.
 *
 * @hoc
 * @memberof my-theme/Heading
 * @mixes my-theme/Skinnable.Skinnable
 * @public
 */
const HeadingDecorator = compose(
	Skinnable
);

/**
 * A labeled Heading component, ready to use in MyTheme applications.
 *
 * `Heading` may be used as a header to group related components.
 *
 * Usage:
 * ```
 * <Heading>
 *   Related Settings
 * </Heading>
 * <CheckboxItem>A Setting</CheckboxItem>
 * <CheckboxItem>A Second Setting</CheckboxItem>
 * ```
 *
 * @class Heading
 * @memberof my-theme/Heading
 * @extends my-theme/Heading.HeadingBase
 * @mixes my-theme/Heading.HeadingDecorator
 * @ui
 * @public
 */
const Heading = HeadingDecorator(HeadingBase);

export default Heading;
export {
	Heading,
	HeadingBase,
	HeadingDecorator
};
