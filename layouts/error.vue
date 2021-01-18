<template>
  <div>
    <NuxtLink to="/" class="link">
      <h2>{{ error.statusCode }} - {{ error.message }}</h2>
      <p>
        An error occurred! Click this text to go back home, and find your way
        back!
      </p>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default() {
        return {
          statusCode: 404,
          message: 'Page not found',
        }
      },
    },
  },
}
</script>
