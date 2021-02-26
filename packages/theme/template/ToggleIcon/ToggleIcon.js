/**
 * Provides MyTheme Icon component with interactive toggleable capabilities.
 *
 * `ToggleIcon` does not implement a visual change when a user interacts with the control and must
 * be customized by the consumer using [css className
 * overrides]{@link ui/ToggleIcon.ToggleIconBase.css}.
 *
 * Often, an [Icon value]{@link my-theme/Icon.Icon} is passed as `children` to represent the
 * selected state but is not required. Omitting `children` allows the consumer to implement more
 * advanced approaches such as styling the `::before` and `::after` pseudo-elements to save a DOM
 * node.
 *
 * The following MyTheme components use `ToggleIcon`, and make good examples of various usages:
 *
 * * [Checkbox]{@link my-theme/Checkbox.Checkbox}
 * * [RadioItem]{@link my-theme/RadioItem.RadioItem}
 *
 * @example
 * <ToggleIcon onToggle={(props)=> console.log(props.selected)}>
 *   check
 * </ToggleIcon>
 *
 * @module my-theme/ToggleIcon
 * @exports ToggleIcon
 * @exports ToggleIconBase
 * @exports ToggleIconDecorator
 */

import kind from '@enact/core/kind';
import UiToggleIcon from '@enact/ui/ToggleIcon';
import compose from 'ramda/src/compose';

import Icon from '../Icon';
import Skinnable from '../Skinnable';

/**
 * A component that indicates a boolean state.
 *
 * @class ToggleIconBase
 * @memberof my-theme/ToggleIcon
 * @extends ui/ToggleIcon.ToggleIcon
 * @ui
 * @public
 */
const ToggleIconBase = kind({
	name: 'ToggleIcon',

	render: (props) => {
		return (
			<UiToggleIcon {...props} iconComponent={Icon} />
		);
	}
});

/**
 * MyTheme-specific behaviors to apply to `ToggleIconBase`.
 *
 * @hoc
 * @memberof my-theme/ToggleIcon
 * @mixes my-theme/Skinnable.Skinnable
 * @public
 */
const ToggleIconDecorator = compose(
	Skinnable
);

/**
 * A customizable MyTheme starting point [Icon]{@link my-theme/Icon.Icon} that responds to the
 * `selected` prop.
 *
 * @class ToggleIcon
 * @memberof my-theme/ToggleIcon
 * @extends my-theme/ToggleIcon.ToggleIconBase
 * @mixes my-theme/ToggleIcon.ToggleIconDecorator
 * @ui
 * @public
 */
const ToggleIcon = ToggleIconDecorator(ToggleIconBase);

export default ToggleIcon;
export {
	ToggleIcon,
	ToggleIconBase,
	ToggleIconDecorator
};
