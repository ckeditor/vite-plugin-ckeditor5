/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import type { Plugin } from 'vite';

import * as fs from 'node:fs';

const isCKEditor5Icon = ( id: string ) => id.endsWith( '.svg' ) && id.includes( 'ckeditor5-' );

const iconsLoader = (): Plugin => {
	return {
		name: 'vite-ckeditor5-icons-loader',
		enforce: 'pre',

		load: id => {
			if ( !isCKEditor5Icon( id ) ) {
				return;
			}

			return fs.readFileSync( id, 'utf8' );
		},

		transform: ( code, id ) => {
			if ( !isCKEditor5Icon( id ) ) {
				return;
			}

			const content = JSON.stringify( code );

			return {
				code: `export default ${ content };`,
				map: { mappings: '' }
			};
		}
	};
};

export default iconsLoader;

