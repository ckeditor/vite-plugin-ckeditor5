/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import { defineNuxtConfig } from 'nuxt/config';

// Note: If this sample is used outside of this repo then import from installed package:
// import ckeditor5 from "@ckeditor/vite-plugin-ckeditor5";
import ckeditor5 from '../../dist/index.mjs';

export default defineNuxtConfig( {
	vue: {
		config: {
			productionTip: false,
			devtools: true
		}
	},
	vite: {
		plugins: [
			ckeditor5( { theme: require.resolve( '@ckeditor/ckeditor5-theme-lark' ) } )
		]
	}
} );
