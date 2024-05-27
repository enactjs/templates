/**
 * Provides a MyTheme item component that accepts multiple positions for children.
 *
 * Using the usual `children` prop, as well as two additional props: `slotBefore`, and `slotAfter`.
 * It is customizable by a theme or application.
 *
 * @example
 * <SlotItem autoHide="both">
 * 	<slotBefore>
 * 		<Icon>flag</Icon>
 * 		<Icon>star</Icon>
 * 	</slotBefore>
 * 	An Item that will show some icons before and after this text when spotted
 * 	<Icon slot="slotAfter">trash</Icon>
 * </SlotItem>
 *
 * @module my-theme/SlotItem
 * @exports SlotItem
 * @exports SlotItemBase
 * @exports SlotItemDecorator
 */

import kind from '@enact/core/kind';
import Spottable from '@enact/spotlight/Spottable';
import {ItemDecorator as UiItemDecorator} from '@enact/ui/Item';
import {SlotItemBase as UiSlotItemBase, SlotItemDecorator as UiSlotItemDecorator} from '@enact/ui/SlotItem';

import PropTypes from 'prop-types';
import compose from 'ramda/src/compose';

import {ItemBase} from '../Item';
import Skinnable from '../Skinnable';

import * as componentCss from './SlotItem.module.less';

/**
 * A MyTheme styled SlotItem without any behavior.
 *
 * @class SlotItemBase
 * @memberof my-theme/SlotItem
 * @extends ui/SlotItem.SlotItemBase
 * @omit component
 * @mixes my-theme/Item.ItemBase
 * @ui
 * @public
 */
const SlotItemBase = kind({
	name: 'SlotItem',

	propTypes: /** @lends my-theme/SlotItem.SlotItemBase.prototype */ {
		/**
		 * Customizes the component by mapping the supplied collection of CSS class names to the
		 * corresponding internal Elements and states of this component.
		 *
		 * The following classes are supported:
		 *
		 * * `slotItem` - The root class name
		 *
		 * @type {Object}
		 * @public
		 */
		css: PropTypes.object
	},

	styles: {
		css: componentCss,
		publicClassNames: ['slotItem']
	},

	render: ({children, css, ...rest}) => {
		return (
			<UiSlotItemBase
				{...rest}
				component={ItemBase}
				css={css}
			>
				<div className={css.content}>{children}</div>
			</UiSlotItemBase>
		);
	}
});

/**
 * MyTheme-specific item with overlay behaviors to apply to SlotItem.
 *
 * @class SlotItemDecorator
 * @memberof my-theme/SlotItem
 * @mixes ui/SlotItem.SlotItemDecorator
 * @mixes ui/Toggleable
 * @mixes spotlight.Spottable
 * @mixes my-theme/Skinnable
 * @hoc
 * @public
 */
const SlotItemDecorator = compose(
	UiSlotItemDecorator,
	UiItemDecorator, // (Touchable)
	Spottable,
	Skinnable
);

/**
 * A MyTheme styled item with built-in support for overlays.
 *
 * ```
 *	<SlotItem autoHide="both">
 *		<slotBefore>
 *			<Icon>flag</Icon>
 *			<Icon>star</Icon>
 *		</slotBefore>
 *		An Item that will show some icons before and after this text when spotted
 *		<Icon slot="slotAfter">trash</Icon>
 *	</SlotItem>
 * ```
 *
 * @class SlotItem
 * @memberof my-theme/SlotItem
 * @extends my-theme/SlotItem.SlotItemBase
 * @mixes my-theme/SlotItem.SlotItemDecorator
 * @ui
 * @public
 */
const SlotItem = SlotItemDecorator(SlotItemBase);

export default SlotItem;
export {
	SlotItem,
	SlotItemBase,
	SlotItemDecorator
};
