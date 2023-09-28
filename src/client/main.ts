import "./style.css";
import { createApp } from "vue";
import App from "./App.vue";
import { LoadFonts } from "./utils/FontAwesomeLoad";

const vue = createApp(App)

LoadFonts(vue)

vue.mount("#app");
