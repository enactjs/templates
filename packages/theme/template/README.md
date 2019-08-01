# Enact Starter Theme
A starting theme for Enact developers to customize at will.

## What's In It

This theme is a minimal set of components, behaviors, and styles that can be used as a starting point to create a new theme as well as to start a new Enact project.

### Components

Most of the components in the starter theme are built from base components provided by [`@enact/ui`](https://github.com/enactjs/enact/tree/master/packages/ui).  The base components have minimal styling, just enough to ensure that the behavior and structure works, the rest is intentionally kept unassigned for the theme to define.

* `BodyText` - simple component for displaying text
* `Button` - a button; can support icons
* `Checkbox` - a checkbox
* `CheckboxItem` - a combined `ToggleItem` and `Checkbox`
* `Heading` - a heading with optional divider line
* `Icon` - an icon that can be used alone; also used by `Button` and other components
* `Item` - a themed, generic item; great for lists of things
* `Panels` - a component to handle multiple views; also exports `Panel`
* `RadioItem` - a selectable `ToggleItem` with a radio button
* `Skinnable` - a HOC for providing skin support to components
* `SlotItem` - an `Item` that has "slots" where additional components (like an `Icon`) can be rendered
* `ThemeDecorator` - a HOC for applying the theme's behaviors to an application
* `ToggleIcon` - an `Icon` with `ui/Toggleable` behavior
* `ToggleItem` - an `Item` with `ui/Toggleable` behavior

There is also an internal implementation for `$L` (an `ilib` translation module) that can be used by theme components to provide translations.

### Behaviors

The Enact framework has several modules that provide various behaviors.  The starter theme applies the following behaviors to the wrapped app by default:

* Internationalization/localization - uses the [iLib](http://github.com/iLib-js/iLib) library to provide localized rendering
* Resolution independence - makes sure components are the same size (relative or not) on different screen resolutions
* Spotlight - spatial navigation with pointer or other input devices

### Styles

The Enact framework uses [LESS](http://lesscss.org/) to create the styles that are applied to components.  Theme-wide variables/rules that should apply to all skins in the theme are kept in files in the `styles` directory.  Developers can mostly stick to `variables.less`, but additional functions can be added to `mixins.less`.

The theme components use these variables and functions in their specific `*.module.less` files located in each component's source directory.

#### Skins

The way we've defined a "theme" vs. a "skin" is that a theme includes all of the components, behaviors, and collections of skins, while a skin is purely the styling, the appearance of those components.  Think of a theme as the model of a car and the skin as its paint job.

The starter theme comes with one skin (`my-skin`) and the variables and colors for it are found in `variables-my-skin.less` and `colors-my-skin.less`, respectively.

## Customizing
 
### Components

Occasionally, the need for a new component arises.  The `@enact/ui` module provides a wide range of base components which can be used to create new components for the starter theme.

The general procedure is to identify the base component(s) and/or behavior(s) that will be used to create the new one.  `Button`, for example, is implemented using `ButtonBase` (base component) and `ButtonDecorator` (behavior) from `@enact/ui`.

It can be helpful to look at other Enact modules' ([`@enact/agate`](https://github.com/enactjs/agate), [`@enact/moonstone`](https://github.com/enactjs/enact/tree/master/packages/moonstone), etc.) components to see if there is something that can be used as the start of a new component implementation.

### Skins

The `styles/skin.less` file sets up the named skins with their respective variables and color values.  It uses a mixin (`applySkins` in `styles/mixins.less`) to match a classname that is equal to a component's `skin` prop, imports the skin colors and variables, then applies the ruleset provided.

First, add the skin name, such as `neutron`, to `Skinnable/Skinnable.js`.
```javascript
...
const defaultConfig = {
	skins: {
		'proton': 'proton',
		'neutron': 'neutron'
	}
};
...
``` 

Then, add a new entry to `skin.less` with the new skin name.
```less
// skin.less
//

.applySkins(@componentRules) when (isruleset(@componentRules)) {
	// original skin "proton"
	&:global(.proton) {
		// Load the proton rules into this scope
		@import "./colors-proton.less";
		@import "./variables-proton.less";

		@componentRules();
	}

	// new skin "neutron"
	&:global(.neutron) {
		// Load the neutron rules into this scope
		@import "./colors-neutron.less";
		@import "./variables-neutron.less";

		@componentRules();
	}
}
```

Next, create the `variables-neutron.less` and `colors-neutron.less` files and populate them with the variables and colors for the new skin.

Finally, give your app a `skin` prop (`"proton"` or `"neutron"`) and wrap it in your `ThemeDecorator`.  If you don't supply the `skin` prop, it will use a default value of `"proton"` or whatever was specified for the default skin when the template was used to create a new theme.

