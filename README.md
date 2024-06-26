CKEditor 5 Vite plugin
======================

Integrate the [CKEditor 5](https://ckeditor.com)'s build process in your [Vite](https://vitejs.dev/) setup.

## 🚨 Deprecated package

The Vite plugin is deprecated, and new versions will not be released. CKEditor 5 version 42.0.0 works with Vite without any special setup. For more information, read the migration guide: https://ckeditor.com/docs/ckeditor5/latest/updating/nim-migration/customized-builds.html

## Usage

If you are integrating CKEditor 5 with version 42.0.0 or higher or your editor is already built then this plugin is not needed.

You can use this plugin when [building CKEditor 5 in legacy way from source](https://ckeditor.com/docs/ckeditor5/latest/installation/advanced/alternative-setups/integrating-from-source.html) in a Vite application. It handles loading the `.svg` icons and styles from the packages and theme package. 

1. Install the package.
```bash
npm install -D @ckeditor/vite-plugin-ckeditor5
# or
yarn add -D @ckeditor/vite-plugin-ckeditor5
```

2. Import and use the plugin in Vite configuration.
```js
// vite.config.js
import { defineConfig } from 'vite';
import ckeditor5 from '@ckeditor/vite-plugin-ckeditor5';

export default defineConfig( {
	plugins: [
		ckeditor5( { theme: require.resolve( '@ckeditor/ckeditor5-theme-lark' ) } )
	]
} );
```

### Options:

#### `theme`

This should be an absolute path to the main file in theme package. Example:

```js
{ theme: require.resolve( '@ckeditor/ckeditor5-theme-lark' ) }
```

Note: If you are using this plugin in an ESM project you may encounter an error stating that `require.resolve` is not a function. In this case you can add the following to the top of your `vite.config.js` file:

```js
import { createRequire } from 'node:module';
const require = createRequire( import.meta.url );
```

## Known issues

- This plugin will not emit any translation files and only english is currently supported.
- When using the Export to Word or Export to PDF plugins the editor styles will not be automatically collected.

## Releasing package

### Changelog

Before starting the release process, you need to generate the changelog:

```bash
npm run changelog
```

### Publishing

After generating the changelog, you are able to release the package.

First, you need to bump the version:

```bash
npm run release:bump-version
```

You can also use the `--dry-run` option in order to see what this task does.

After bumping the version, you can publish the changes:

```bash
npm run release:publish
```

As in the previous task, the `--dry-run` option is also available.

Note: Only the `dist/` directory will be published.

## License

Licensed under the terms of [GNU General Public License Version 2 or later](http://www.gnu.org/licenses/gpl.html). For full details about the license, please check the `LICENSE.md` file.
