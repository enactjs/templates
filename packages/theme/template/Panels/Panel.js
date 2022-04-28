import kind from '@enact/core/kind';
import SpotlightContainerDecorator, {spotlightDefaultClass} from '@enact/spotlight/SpotlightContainerDecorator';
import {Cell, Column} from '@enact/ui/Layout';
import Slottable from '@enact/ui/Slottable';
import PropTypes from 'prop-types';

import Skinnable from '../Skinnable';

import componentCss from './Panel.module.less';

/**
 * A Panel is the standard view container used inside a [Panels]{@link my-theme/Panels.Panels} view
 * manager instance. [Panels]{@link my-theme/Panels.Panels} will typically contain several
 * instances of these and transition between them.
 *
 * @class Panel
 * @memberof my-theme/Panels
 * @ui
 * @public
 */
const PanelBase = kind({

	name: 'Panel',

	propTypes: /** @lends my-theme/Panels.Panel.prototype */ {
		/**
		 * Customizes the component by mapping the supplied collection of CSS class names to the
		 * corresponding internal Elements and states of this component.
		 *
		 * The following classes are supported:
		 *
		 * * `panel` - The root class name
		 * * `header` - Applied to the header block of the panel
		 * * `body` - Applied to the body block of the panel
		 *
		 * @type {Object}
		 * @public
		 */
		css: PropTypes.object,

		/**
		 * Header for the panel.
		 *
		 * This can also be passed by the [Slottable]{@link ui/Slottable.Slottable} API by using a
		 * component that has a `defaultSlot` value of `'header'`.
		 *
		 * @type {Node}
		 * @public
		 */
		header: PropTypes.node
	},

	styles: {
		css: componentCss,
		className: 'panel',
		publicClassNames: true
	},

	computed: {
		bodyClassName: ({header, styler}) => styler.join({
			body: true,
			noHeader: !header
		})
	},

	render: ({bodyClassName, css, children, header, ...rest}) => {

		return (
			<Column
				component="article"
				role="region"
				{...rest}
			>
				<Cell
					className={css.header}
					shrink
				>
					{header}
				</Cell>
				<Cell
					className={bodyClassName}
					component="section"
				>
					{children}
				</Cell>
			</Column>
		);
	}
});

const Panel = SpotlightContainerDecorator(
	{
		// this `defaultElement` selector will prefer any spottable within the panel body for first render
		defaultElement: [`.${spotlightDefaultClass}`, `.${componentCss.body} *`],
		preserveId: true
	},
	Slottable(
		{slots: ['header']},
		Skinnable(
			PanelBase
		)
	)
);

export default Panel;
export {Panel, PanelBase};
