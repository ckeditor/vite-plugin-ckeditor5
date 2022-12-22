/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig( {
	entries: [ './src/index' ],
	externals: [ 'vite' ],
	rollup: {
		emitCJS: true,
		inlineDependencies: true
	},
	declaration: true,
	outDir: 'dist'
} );
