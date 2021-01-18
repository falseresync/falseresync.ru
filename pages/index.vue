<template>
  <main>
    <article
      v-for="{ title, description, slug, createdAt, prettyDate } in articles"
      :key="createdAt"
      class="post"
    >
      <div class="post__date">{{ prettyDate }}</div>
      <NuxtLink :to="`/blog/${slug}`" class="post__title link">
        {{ title }}
      </NuxtLink>
      <p class="post__description">{{ description }}</p>
    </article>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, $dayjs, params }) {
    const articles = (
      await $content('blog', { deep: true })
        .only(['title', 'description', 'slug', 'createdAt'])
        .sortBy('createdAt', 'desc')
        .fetch()
    ).map((article) => ({
      ...article,
      prettyDate: $dayjs(article.createdAt).format('MMM D, YYYY'),
    }))

    return {
      articles,
    }
  },
}
</script>

<style lang="scss" scoped>
.post {
  margin-bottom: 2rem;
}

.post__date {
  align-items: center;
  display: flex;
  grid-area: date;
  margin-bottom: 0.5rem;
}

.post__title {
  display: block;
  grid-area: title;
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0 0 0.5rem 0;
  padding: 0;
}

.post__description {
  grid-area: description;
  margin: 0;
  padding: 0;
}

@media (min-width: 1024px) {
  .post {
    display: grid;
    gap: 0.5rem 0;
    grid:
      'date title'
      '. description'
      / 1fr 5fr;
  }

  .post__date,
  .post__title {
    margin-bottom: 0;
  }
}
</style>
