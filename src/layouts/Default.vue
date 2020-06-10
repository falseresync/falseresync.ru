<template>
  <main class="layout" role="main">
    <Header :siteName="$page.metadata.siteName" />
    <slot />
  </main>
</template>

<script>
import Header from "@/components/Header";

export default {
  components: {
    Header
  }
};
</script>

<style lang="scss">
:root {
  --app-background-color: #ffffff;
  --app-font-color: black;

  font-size: 20px;
}

[theme="dark"] {
  --app-background-color: #091a28;
  --app-font-color: white;
}

[theme="sepia"] {
  --app-background-color: #f1e7d0;
  --app-font-color: #433422;
}

body {
  background-color: var(--app-background-color);
  color: var(--app-font-color);
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  padding-bottom: 10rem;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

a {
  border-bottom: 1px solid currentColor;
  color: rgb(32, 201, 151);
  text-decoration: none;
}

a:hover {
  border-bottom-color: currentColor;
  color: #686868;
}

pre,
code {
  background: var(--app-background-color) !important;
  color: var(--app-font-color) !important;
  text-shadow: none !important;
  font-size: 0.8rem !important;
}

code > * {
  background: var(--app-background-color) !important;
}

@media only screen and (max-width: 500px) {
  .header {
    h1 {
      font-size: 1em;
    }
  }
}
</style>
