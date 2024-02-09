import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";

import router from "./router";

import "./style/index.scss";
import "element-plus/dist/index.css";

import App from "./App.vue";

createApp(App).use(ElementPlus).use(router).use(createPinia()).mount("#app");
