/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import { defineConfig } from 'vite';

import ckeditor5 from '../../dist/index.mjs';

export default defineConfig( {
	root: './src',
	build: {
		outDir: '../dist'
	},
	esbuild: {
		sourcemap: true
	},
	plugins: [
		ckeditor5( { theme: require.resolve( '@ckeditor/ckeditor5-theme-lark' ) } )
	]
} );
