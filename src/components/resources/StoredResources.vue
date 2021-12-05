<template>
  <ul>
    <li v-for="res in resources" :key="res.id">
      <cart-base>
        <cart-base-details>
          <template #header> {{ res.title }} </template>
          <template #entry>{{ res.desc }}</template>
          <template #footer>
            <the-button mode="btn-primary" @click="goToResource(res.link)">
              Link to resorces
            </the-button>
          </template>
        </cart-base-details>
      </cart-base>
    </li>
  </ul>
</template>

<script>
export default {
  inject: ["resources"],
  methods: {
    goToResource(link) {
      window.open(link, "_blank");
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
</style>
