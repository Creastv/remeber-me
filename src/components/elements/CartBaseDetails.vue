<template>
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
</template>
