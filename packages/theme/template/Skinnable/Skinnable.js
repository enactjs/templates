/**
 * Exports the {@link my-theme/Skinnable.Skinnable} Higher-order Component (HOC).
 *
 * @module my-theme/Skinnable
 * @public
 */

import hoc from '@enact/core/hoc';
import UiSkinnable from '@enact/ui/Skinnable';

const defaultConfig = {
	skins: {
		// Name of the skin, referred to in the `skin`` prop : skin className (in CSS)
		// These can be different strings, they just happen to be the same in this case.
		'my-skin': 'my-skin'
	}
};

/**
 * This Higher-order Component is based on [ui/Skinnable]{@link ui/Skinnable.Skinnable} and comes
 * pre-configured for MyTheme's supported skin, "my-skin". It is used to apply the relevant skinning
 * classes to each component.
 *
 * @class Skinnable
 * @memberof my-theme/Skinnable
 * @hoc
 * @public
 */
const Skinnable = hoc(defaultConfig, UiSkinnable);

/**
 * Select a skin by name by specifying this property. This may be changed at runtime. All components
 * already use their defaults, but a skin may be changed via this prop or by using
 * {@link my-theme/Skinnable} directly and a config object.
 *
 * Example:
 * ```
 * <Button skin="my-other-skin">
 * ```
 *
 * @name skin
 * @type {String}
 * @default 'my-skin'
 * @memberof my-theme/Skinnable.Skinnable
 * @instance
 * @public
 */

export default Skinnable;
export {
	Skinnable
};
