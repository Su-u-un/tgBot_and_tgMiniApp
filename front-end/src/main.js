import { createApp } from 'vue';
import App from './App.vue';
import { setupStore } from './store'
import router from './router';
// 1. Import the components you need
import { Progress } from 'vant';
// 2. Import the components style
import 'vant/lib/index.css';

const app = createApp(App);
setupStore(app)
app.use(router);

app.use(Progress);
app.mount('#app');
