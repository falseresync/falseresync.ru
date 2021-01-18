<template>
  <div class="page">
    <header class="page__header header">
      <div class="header__header">
        <NuxtLink class="link" to="/">
          <h1>falseresync</h1>
        </NuxtLink>
        <ClientOnly>
          <button class="theme-changer" @click="changeTheme">
            <IconSun
              v-if="$colorMode.preference === 'dark'"
              class="theme-changer__icon"
            />
            <IconMoon v-else class="theme-changer__icon" />
          </button>
        </ClientOnly>
      </div>
      <nav class="header__nav">
        <NuxtLink class="header__nav-link nav-link link" to="/">
          <IconBlog class="nav-link__icon" />
          <span class="nav-link__text">Blog</span>
        </NuxtLink>
        <NuxtLink class="header__nav-link nav-link link" to="/projects">
          <IconProjects class="nav-link__icon" />
          <span class="nav-link__text">Projects</span>
        </NuxtLink>
        <a
          class="header__nav-link nav-link link"
          href="https://github.com/falseresync"
          rel="noreferrer"
          target="_blank"
        >
          <IconGitHub class="nav-link__icon" />
          <span class="nav-link__text">GitHub</span>
        </a>
        <a
          class="header__nav-link nav-link link"
          href="https://discord.gg/Wy9ns2RGnY"
          rel="noreferrer"
          target="_blank"
        >
          <IconDiscord class="nav-link__icon" />
          <span class="nav-link__text">Discord</span>
        </a>
      </nav>
    </header>
    <Nuxt class="page__content content" />
  </div>
</template>

<script>
import IconSun from '~/assets/icons/sun.svg?inline'
import IconMoon from '~/assets/icons/moon.svg?inline'
import IconBlog from '~/assets/icons/blog.svg?inline'
import IconProjects from '~/assets/icons/projects.svg?inline'
import IconGitHub from '~/assets/icons/github.svg?inline'
import IconDiscord from '~/assets/icons/discord.svg?inline'

export default {
  components: {
    IconSun,
    IconMoon,
    IconBlog,
    IconProjects,
    IconGitHub,
    IconDiscord,
  },
  methods: {
    changeTheme() {
      this.$colorMode.preference =
        this.$colorMode.preference === 'dark' ? 'light' : 'dark'
    },
  },
}
</script>

<style lang="scss" scoped>
.page {
  margin: 0 auto 20rem auto;
  max-width: 45rem;
  padding: 0 1rem;
}

.page__content {
  margin-top: 1rem;
}

.header__header {
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.header__nav-link:not(:last-child) {
  margin-right: 1rem;
}

.theme-changer {
  background-color: transparent;
  border: none;
  color: var(--color-text);
  cursor: pointer;
  margin: 0;
  padding: 0;

  &:hover {
    color: var(--color-text-hover);
  }
}

.theme-changer__icon {
  height: 25px;
  width: 25px;
}

.nav-link {
  align-items: center;
  display: inline-flex;
  margin-bottom: 1rem;

  &.nuxt-link-exact-active {
    text-decoration: underline;
  }
}

.nav-link__icon {
  height: 20px;
}

.nav-link__text {
  padding-bottom: 3px;
}
</style>
