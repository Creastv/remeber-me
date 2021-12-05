<template>
  <the-header></the-header>
  <the-main-container>
    <the-resources></the-resources>
  </the-main-container>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheMainContainer from "./components/layout/TheMainContainer.vue";
import TheFooter from "./components/layout/TheFooter.vue";
import TheResources from "./components/resources/TheResources.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheMainContainer,
    TheFooter,
    TheResources,
  },
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
