/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import { defineConfig } from 'vite';

import vue from '@vitejs/plugin-vue';

// Note: If this sample is used outside of this repo then import from installed package:
// import ckeditor5 from "@ckeditor/vite-plugin-ckeditor5";
import ckeditor5 from '../../dist/index.mjs';

export default defineConfig( {
	plugins: [
		vue(),
		ckeditor5( { theme: require.resolve( '@ckeditor/ckeditor5-theme-lark' ) } )
	],
	build: {
		sourcemap: true
	}
} );
