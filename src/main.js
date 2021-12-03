import { createApp } from "vue";

import App from "./App.vue";
import CartBase from "./components/layout/elements/CartBase.vue";

const app = createApp(App);
app.component("cart-base", CartBase);

app.mount("#app");
