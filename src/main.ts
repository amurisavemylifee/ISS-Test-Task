import { createApp } from "vue";
import "./style/index.scss";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";

createApp(App).use(ElementPlus).mount("#app");
