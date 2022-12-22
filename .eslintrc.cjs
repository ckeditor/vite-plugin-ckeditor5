/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

module.exports = {
	env: {
		'node': true
	},
	extends: [
		'eslint:recommended',
		'ckeditor5'
	],
	parserOptions: {
		'ecmaVersion': 12,
		'sourceType': 'module'
	},
	rules: {
		'max-len': [ 'error', { 'ignoreStrings': true, 'ignoreTemplateLiterals': true, 'ignoreComments': true, 'code': 140 } ],
		'spaced-comment': 'off',
		'linebreak-style': 'off',
		'ckeditor5-rules/use-require-for-debug-mode-imports': 'off',
		'ckeditor5-rules/license-header': [ 'error', {
			headerLines: [
				'/**',
				' * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.',
				' * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license',
				' */'
			]
		} ]
	}
};
