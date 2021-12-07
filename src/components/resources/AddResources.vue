<template>
  <form @submit.prevent="addRes">
    <div class="in-valid" v-if="validInputs == false">
      {{ infoValidation }}
    </div>
    <div class="form-control">
      <label for="title">Title:</label>
      <input
        type="text"
        name="title"
        id="title"
        ref="title"
        placeholder="Title"
      />
    </div>
    <div class="form-control">
      <label for="des">Description:</label>
      <textarea
        type="text"
        name="des"
        id="des"
        row="3"
        ref="desc"
        placeholder="Descriptions"
      />
    </div>
    <div class="form-control">
      <label for="link">Link:</label>
      <input
        type="text"
        name="link"
        id="link"
        ref="link"
        placeholder="Link to resource"
      />
    </div>
    <div class="form-control">
      <the-button type="send" mode="btn-secundary">Add resource</the-button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      infoValidation: "Check your inputs",
      validInputs: true,
    };
  },
  methods: {
    addResourcesToFirebase() {
      fetch(
        "https://rememberme-892e7-default-rtdb.europe-west1.firebasedatabase.app/resources.json",
        {
          method: "POST",
          header: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: this.$refs.title.value,
            desc: this.$refs.desc.value,
            link: this.$refs.link.value,
          }),
        }
      );
    },
    addRes() {
      const titleRes = this.$refs.title.value;
      const descRes = this.$refs.desc.value;
      if (titleRes == "" || descRes == "") {
        this.validInputs = false;
      } else {
        this.validInputs = true;
        this.addResourcesToFirebase();
        // this.backToRecousesList();
        this.$refs.title.value = "";
        this.$refs.desc.value = "";
        this.$refs.link.value = "";
      }
    },
  },
};
</script>

<style scoped>
form {
  max-width: 600px;
  width: 100%;
  margin: 30px auto;
}
.form-control {
  display: block;
  width: 100%;
  margin-bottom: 10px;
}
.form-control label,
.form-control input,
.form-control textarea {
  display: block;
  width: 100%;
}
.form-control label {
  font-weight: bold;
  margin-bottom: 10px;
}
.form-control input,
.form-control textarea {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid rgb(216, 216, 216);
  /* box-shadow: none; */
}
.in-valid {
  background-color: burlywood;
  border-left: 3px solid red;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
  width: 100%;
  color: #fff;
  font-weight: 900;
}
</style>
