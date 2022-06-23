/**
 * Provides MyTheme themed item components and behaviors. Useful for content in lists.
 *
 * @example
 * <Item>Hello Enact!</Item>
 *
 * @module my-theme/Item
 * @exports Item
 * @exports ItemBase
 */

import Spottable from '@enact/spotlight/Spottable';
import {ItemBase as UiItemBase, ItemDecorator as UiItemDecorator} from '@enact/ui/Item';
import compose from 'ramda/src/compose';

import Skinnable from '../Skinnable';

import componentCss from './Item.module.less';

/**
 * A MyTheme styled item.
 *
 * @class ItemBase
 * @memberof my-theme/Item
 * @ui
 * @public
 */
const ItemBase = (props) => (
	<UiItemBase
		{...props}
		css={componentCss}
	/>
);

/**
 * MyTheme specific item behaviors to apply to `Item`.
 *
 * @class ItemDecorator
 * @hoc
 * @memberof my-theme/Item
 * @mixes spotlight.Spottable
 * @mixes my-theme/Skinnable
 * @ui
 * @public
 */
const ItemDecorator = compose(
	UiItemDecorator,
	Spottable,
	Skinnable
);

const Item = ItemDecorator(ItemBase);

export default Item;
export {
	Item,
	ItemBase,
	ItemDecorator
};
