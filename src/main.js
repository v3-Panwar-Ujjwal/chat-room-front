import { createApp } from 'vue';
import App from './App.vue';
import './index.css'
import { createPinia } from 'pinia';
import { useWebSocketStore } from './stores/webSocket';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);

const wsStore = useWebSocketStore();
wsStore.initWebSocket();


app.mount('#app')
