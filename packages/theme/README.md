# @enact/template-theme

A template generator for `@enact/cli` to create Enact-based theme libraries.

## Installation

The Enact CLI itself can install this via NPM or git URI.
```
enact template install @enact/template-theme
```

## Usage 

Once installed, you can specify the `theme` template in the creation command:
```
enact create -t theme uranium
```
This will create a new copy of the starter theme in the `uranium` directory.  All references to the original theme's name, LESS variables, etc. will be updated to the appropriate values for `uranium`.

The starter theme comes with one skin, `default-skin`, and this can be updated on creation as well by passing the `--skin` flag:
```
enact create -t theme uranium --skin proton
```

Either way, the new theme is ready to be included as a dependency for your app.  Its aptly named README contains other valuable information on modifying the theme, so be sure to give it a look.
