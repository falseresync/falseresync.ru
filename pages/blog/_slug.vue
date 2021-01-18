<template>
  <main>
    <h1>{{ article.title }}</h1>
    <nuxt-content :document="article" />
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const [article] = await $content('blog', { deep: true })
      .where({ slug: { $eq: params.slug } })
      .limit(1)
      .fetch()
      .catch((_) => {
        error({ statusCode: 404, message: 'Page not found' })
      })

    return {
      article,
    }
  },
  head() {
    return {
      title: this.article.title,
    }
  },
}
</script>
