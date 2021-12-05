<template>
  <button :type="type" :class="['btn', mode]">
    <slot>{{ defaultText }}</slot>
  </button>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      reequired: true,
      validator(value) {
        const pos = ["btn-primary", "btn-secundary"];
        const valid = pos.includes(value);
        if (!valid) {
          console.warn(
            'Available mode options :"btn-primary", "btn-secondary" '
          );
        }
        return valid;
      },
    },
    type: {
      type: String,
      reequired: false,
    },
  },
  data() {
    return {
      defaultText: "Button Base Comp",
    };
  },
};
</script>

<style scoped>
/* Reset button CSS */
button {
  border: none;
  background: none;
  cursor: pointer;
}
.btn {
  padding: 5px 20px;
  margin: 5px;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 3px;
}
.btn-primary {
  color: blueviolet;
  border: 1px solid blueviolet;
}
.btn-primary:hover {
  background-color: rgba(137, 43, 226, 0.289);
}
.btn-secundary {
  color: #fff;
  border: 1px solid blueviolet;
  background-color: blueviolet;
}
.btn-secundary:hover {
  background-color: rgba(137, 43, 226, 0.289);
}
</style>
