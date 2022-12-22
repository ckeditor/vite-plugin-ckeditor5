/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import type { Plugin } from 'vite';

import iconsLoader from './loaders/iconsLoader.js';
import stylesLoader from './loaders/stylesLoader.js';

export type CKEditor5PluginOptions = {

	/**
      * This should be an absolute path to the main file in theme package. Example:
	  *
	  * ```
	  *  { theme: require.resolve( '@ckeditor/ckeditor5-theme-lark' ) }
	  * ```
	  *
	  * Note: If you are using this plugin in an ESM project you may encounter an error stating that `require.resolve` is not a function. In this case you can add the following to the top of your `vite.config.js` file:
	  *
	  * ```
	  * import { createRequire } from 'node:module';
	  * const require = createRequire( import.meta.url );
	  * ```
     */
	theme: string;
};

/**
 * Main plugin that should be used in `vite.config.js` when building CKEditor 5 from source. This plugin handles loading the `.svg` icons and styles from the packages and theme package.
 */
const ckeditor5 = ( { theme }: CKEditor5PluginOptions ): Array<Plugin> => {
	return [
		iconsLoader(),
		stylesLoader( theme )
	];
};

export default ckeditor5;

