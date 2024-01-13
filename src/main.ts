import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import MainButton from '@/components/MainButton.vue';

const app = createApp(App);

app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('main-');

app.component('MainButton', MainButton);
app.mount('#app');
