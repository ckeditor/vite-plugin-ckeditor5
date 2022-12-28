import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';

const editorConfig = {
	plugins: [ Essentials, Paragraph, Bold, Italic, Underline ],
	toolbar: [ 'bold', 'italic', 'underline' ]
};

const Editor = () => {
	return (
		<>
			<h2>Editor:</h2>
			<CKEditor
			editor={ ClassicEditor }
			config={ editorConfig }
			data="<p>Hello from CKEditor 5!</p>"
			onReady={ editor => {
				console.log( 'Editor is ready to use!', editor );
			} }
			onChange={ ( event, editor ) => {
				const data = editor.getData();
				console.log( { event, editor, data } );
			} }
			onBlur={ ( event, editor ) => {
				console.log( 'Blur.', editor );
			} }
			onFocus={ ( event, editor ) => {
				console.log( 'Focus.', editor );
			} }
			/>
		</>
	);
};

export default Editor;