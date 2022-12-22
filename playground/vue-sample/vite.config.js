/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import { defineConfig } from 'vite';

import vue from '@vitejs/plugin-vue';
import ckeditor5 from '../../dist/index.mjs';
// Note: If this sample would be used outside of this repo then a package "@ckeditor/vite-plugin-ckeditor5"
// needs to installed first. Then you should use the following import instead:
// import ckeditor5 from '@ckeditor/vite-plugin-ckeditor5';

export default defineConfig( {
	plugins: [
		vue(),
		ckeditor5( { theme: require.resolve( '@ckeditor/ckeditor5-theme-lark' ) } )
	]
} );
