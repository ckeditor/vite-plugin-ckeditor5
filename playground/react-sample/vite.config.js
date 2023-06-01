/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Note: If this sample is used outside of this repo then import from installed package:
// import ckeditor5 from "@ckeditor/vite-plugin-ckeditor5";
import ckeditor5 from '../../dist/index.mjs';

export default defineConfig( {
	plugins: [
		react(),
		ckeditor5( { theme: require.resolve( '@ckeditor/ckeditor5-theme-lark' ) } )
	]
} );
