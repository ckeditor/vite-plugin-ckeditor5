/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */

declare global {
	interface Window {
		editor: ClassicEditor;
	}
 }

import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';

const element = document.querySelector( '#editor' ) as HTMLElement;

if ( element ) {
	ClassicEditor
		.create( element, {
			plugins: [ Essentials, Paragraph, Bold, Italic, Underline ],
			toolbar: [ 'bold', 'italic', 'underline' ]
		} )
		.then( editor => {
			window.editor = editor;
			console.log( 'Editor was initialized', editor );
		} )
		.catch( error => {
			console.error( error );
		} );
}

