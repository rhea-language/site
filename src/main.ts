import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "primeicons/primeicons.css";
import "@/assets/bootstrap.css";
import "@/assets/base.css";

const app = createApp(App);
app.use(router);
app.mount('#app');
