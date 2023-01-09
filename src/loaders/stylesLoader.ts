/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import * as fs from 'node:fs';
import * as path from 'node:path';
import * as util from 'node:util';
const readFile = util.promisify( fs.readFile );

import { normalizePath, type Plugin } from 'vite';
import type { CKEditor5PluginOptions } from '../index';
import postcss, { type AcceptedPlugin } from 'postcss';
import postcssNesting from 'postcss-nesting';
import postcssMixins from 'postcss-mixins';
import postcssImport from 'postcss-import';

const postcssOptions = {
	plugins: [
		postcssNesting(),
		postcssMixins(),
		postcssImport()
	]
} as unknown as Array<AcceptedPlugin>;

const stylesLoader = ( theme: CKEditor5PluginOptions['theme'] ): Plugin => {
	return {
		name: 'vite-ckeditor5-styles-loader',
		enforce: 'pre',

		async transform( code, id ) {
			if ( !id.includes( 'ckeditor5-' ) || !id.endsWith( '.css' ) ) {
				return;
			}

			const themeStyles = await loadThemeStyles( id, theme );
			const stylesToLoad = code + themeStyles;

			return loadPostcssFile( stylesToLoad, id );
		}
	};
};

export default stylesLoader;

async function loadThemeStyles( id: string, theme: string ) {
	const themeFilePath = getThemeFilePath( id, theme );

	if ( themeFilePath && fs.existsSync( themeFilePath ) ) {
		const css = await readFile( themeFilePath );
		const result = await postcss( postcssOptions ).process( css, { from: themeFilePath } );
		return result.css.toString();
	}

	return '';
}

async function loadPostcssFile( code: string, id: string ) {
	const result = await postcss( postcssOptions ).process( code, { from: id } );

	return {
		code: result.css.toString()
	};
}

function getThemeFilePath( inputFilePath: string, theme: CKEditor5PluginOptions['theme'] ) {
	const themeDir = path.dirname( theme );
	const packageName = getPackageName( inputFilePath );

	if ( !packageName ) {
		return;
	}

	const inputFileName = inputFilePath.split(
		normalizePath( path.join( packageName, 'theme', path.sep ) )
	)[ 1 ];

	if ( !inputFileName ) {
		return;
	}

	return path.resolve( themeDir, packageName, inputFileName );
}

function getPackageName( inputFilePath: string ) {
	const match = inputFilePath.match( /^.+[/\\](ckeditor5-[^/\\]+)/ );

	if ( match ) {
		return match.pop();
	} else {
		return null;
	}
}
