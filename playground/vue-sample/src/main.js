/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import { createApp } from 'vue';
import App from './app.vue';
import CKEditor from '@ckeditor/ckeditor5-vue';
import './style.css';

createApp( App ).use( CKEditor ).mount( '#app' );
