<template>
  <TheHeader />
  <TheMainContainer>
    <CartBase>
      <template #header> test </template>
      <template #entry>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo atque
        quis itaque repellat odio perferendis veniam iusto alias voluptatibus,
        id exercitationem totam reiciendis quo reprehenderit aperiam recusandae
        laborum nesciunt quibusdam?
      </template>
      <template #footer> test </template>
    </CartBase>
    <CartBase>
      <template #header> test </template>
      <template #entry>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo atque
        quis itaque repellat odio perferendis veniam iusto alias voluptatibus,
        id exercitationem totam reiciendis quo reprehenderit aperiam recusandae
        laborum nesciunt quibusdam?
      </template>
      <template #footer> test </template>
    </CartBase>
  </TheMainContainer>
  <TheFooter />
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheMainContainer from "./components/layout/TheMainContainer.vue";
import TheFooter from "./components/layout/TheFooter.vue";
import CartBase from "./components/layout/elements/CartBase.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheMainContainer,
    TheFooter,
    CartBase
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@100;700&display=swap");

html,
body {
  margin: 0;
  padding: 0;
}
*::before,
*::after {
  box-sizing: border-box;
}
#app {
  width: 100%;
  font-family: "Fira Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
