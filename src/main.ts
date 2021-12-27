import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import WaveUI from "wave-ui";
import "wave-ui/dist/wave-ui.css";
import "./assets/scss/styles.scss";
import "@mdi/font/css/materialdesignicons.min.css";

const app = createApp(App).use(router);

new WaveUI(app, {
  // Some Wave UI options.
  shit: "together",
});

app.mount("#app");
