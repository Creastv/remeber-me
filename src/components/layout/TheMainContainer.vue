<template>
  <main>
    <slot>
      <h1 class="defaultTitle">{{ defaultTitle }}</h1>
    </slot>
  </main>
</template>

<script>
export default {
  data() {
    return {
      defaultTitle: "Main container"
    };
  }
};
</script>

<style scoped>
main {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}
.defaultTitle {
  margin-bottom: 50px;
}
</style>
