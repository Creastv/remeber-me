import { createApp } from "vue";

import App from "./App.vue";
import CartBase from "./components/elements/CartBase.vue";
import CartBaseDetails from "./components/elements/CartBaseDetails.vue";
import TheButton from "./components/elements/TheButton.vue";

const app = createApp(App);
app.component("cart-base", CartBase);
app.component("the-button", TheButton);
app.component("cart-base-details", CartBaseDetails);

app.mount("#app");
