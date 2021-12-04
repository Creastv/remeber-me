<template>
  <div class="cart">
    <header>
      <h2>
        <slot name="header"></slot>
      </h2>
    </header>
    <div class="entry">
      <p>
        <slot name="entry"></slot>
      </p>
    </div>
    <footer>
      <nav>
        <slot name="footer"></slot>
      </nav>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.cart {
  background-color: #fff;
  border: 1px solid rgb(216, 216, 216);
  border-radius: 5px;
  box-shadow: 0px 2px 5px 5px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin-bottom: 20px;
}
</style>
