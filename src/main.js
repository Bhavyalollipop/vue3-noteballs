import { createApp } from "vue";
import { router } from "@/router";
import FontAwesomeIcon from "@/utilities/fontawesome";
import { createPinia } from "pinia";

import App from "./App.vue";

import "./assets/main.css";

createApp(App)
  .component("FontAwesomeIcon", FontAwesomeIcon)
  .use(createPinia())
  .use(router)
  .mount("#app");
