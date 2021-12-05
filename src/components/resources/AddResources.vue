<template>
  <form @submit.prevent="addRes">
    <div class="form-control">
      <label for="title">Title:</label>
      <input type="text" name="title" id="title" ref="title" />
    </div>
    <div class="form-control">
      <label for="des">Description:</label>
      <textarea type="text" name="des" id="des" row="3" ref="desc" />
    </div>
    <div class="form-control">
      <label for="link">Link:</label>
      <input type="text" name="link" id="link" ref="link" />
    </div>
    <div class="form-control">
      <the-button type="send" mode="btn-secundary">Add resource</the-button>
    </div>
  </form>
</template>

<script>
export default {
  inject: ["addResource"],
  methods: {
    addRes() {
      const idRes = new Date().toISOString;
      const titleRes = this.$refs.title.value;
      const descRes = this.$refs.desc.value;
      const linkRes = this.$refs.link.value;
      this.addResource(idRes, titleRes, descRes, linkRes);
    },
  },
};
</script>

<style></style>
