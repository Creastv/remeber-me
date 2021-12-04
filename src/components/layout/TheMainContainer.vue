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
  width: calc(100% - 30px);
  margin: 15px auto;
}
.defaultTitle {
  margin-bottom: 50px;
}
</style>
