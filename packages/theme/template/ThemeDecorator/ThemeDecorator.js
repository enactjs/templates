/**
 * Exports the {@link my-theme/ThemeDecorator.ThemeDecorator} HOC
 *
 * @module my-theme/ThemeDecorator
 */

import {addAll} from '@enact/core/keymap';
import kind from '@enact/core/kind';
import hoc from '@enact/core/hoc';
import I18nDecorator from '@enact/i18n/I18nDecorator';
import SpotlightRootDecorator from '@enact/spotlight/SpotlightRootDecorator';
import {FloatingLayerDecorator} from '@enact/ui/FloatingLayer';
import {ResolutionDecorator} from '@enact/ui/resolution';

import Skinnable from '../Skinnable';

import screenTypes from './screenTypes.json';

import css from './ThemeDecorator.module.less';

/**
 * Default config for {@link my-theme/ThemeDecorator.ThemeDecorator}.
 *
 * @memberof my-theme/ThemeDecorator
 * @hocconfig
 */
const defaultConfig = {
	float: true,
	i18n: true,
	noAutoFocus: false,
	ri: {
		screenTypes
	},
	spotlight: true,
	skin: true
};

/**
 * {@link my-theme/ThemeDecorator.ThemeDecorator} is a Higher-order Component that applies
 * MyTheme theming to an application. It also applies
 * [floating layer]{@link ui/FloatingLayer.FloatingLayerDecorator},
 * [resolution independence]{@link ui/resolution.ResolutionDecorator},
 * [skin support]{@link ui/Skinnable}, [spotlight]{@link spotlight.SpotlightRootDecorator}, and
 * [internationalization support]{@link i18n/I18nDecorator.I18nDecorator}. It is meant to be applied to
 * the root element of an app.
 *
 * [Skins]{@link ui/Skinnable} provide a way to change the coloration of your app. Only one skin
 * ("my-skin") is included with this theme. It is currently set as the default so you don't need to
 * set anything yet. Use the `skin` property to assign a skin when or if you add more.
 * Ex: `<DecoratedApp skin="my-skin-light" />`
 *
 * @class ThemeDecorator
 * @memberof my-theme/ThemeDecorator
 * @hoc
 * @public
 */
const ThemeDecorator = hoc(defaultConfig, (config, Wrapped) => {
	const {float, i18n, noAutoFocus, ri, skin, spotlight} = config;

	const bgClassName = 'enact-fit';

	let App = Wrapped;
	if (float) App = FloatingLayerDecorator({wrappedClassName: bgClassName}, App);
	if(ri) App = ResolutionDecorator(ri, App);
	if (i18n) App = I18nDecorator(App);
	if (spotlight) App = SpotlightRootDecorator({noAutoFocus}, App);
	if (skin) App = Skinnable({defaultSkin: 'my-skin'}, App);

	// add webOS-specific key maps
	addAll({
		cancel: 461,
		pointerHide: 1537,
		pointerShow: 1536
	});

	return kind({
		name: 'ThemeDecorator',
		styles: {
			css,
			className: 'root enact-unselectable'
		},
		computed: {
			className: ({styler}) => styler.append(bgClassName)
		},
		render: (props) => (
			<App {...props} />
		)
	});
});

export default ThemeDecorator;
export {ThemeDecorator};
