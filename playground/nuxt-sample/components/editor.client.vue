<script setup>
	import ckeditor from '@ckeditor/ckeditor5-vue';

	import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
	import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
	import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
	import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
	import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
	import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';

	const editorData = ref( "<p>Hello world</p>" );

	const editorConfig = {
		plugins: [ Essentials, Paragraph, Bold, Italic, Underline ],
		toolbar: [ 'bold', 'italic', 'underline' ]
	};
</script>

<template>
		<ckeditor.component 
			:editor="ClassicEditor" 
			:config="editorConfig" 
			v-model="editorData"
		/>
</template>
