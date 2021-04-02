<template>
  <div class="w-full flex justify-end xl:justify-center">
    <nav
      class="fixed z-50 flex justify-end px-0 w-screen font-mono md:px-12 lg:px-24 xl:px-48 max-w-screen-2xl mx-auto"
    >
      <ul class="flex justify-end">
        <li class="flex-1 mr-2">
          <nuxt-link
            class="w-40 px-12 py-4 mr-10 text-xl font-black bg-gray-300 shadow-mdOrange"
            to="/"
            >Home</nuxt-link
          >
        </li>
        <li class="flex-1 mr-2">
          <nuxt-link
            class="w-40 px-12 py-4 mr-10 text-xl font-black bg-gray-300 shadow-mdOrange hover:bg-yellow-400"
            to="/blog"
            >Blog</nuxt-link
          >
        </li>
        <li class="flex-1">
          <nuxt-link
            class="w-40 px-12 py-4 text-xl font-black bg-gray-300 shadow-mdOrange hover:bg-yellow-400"
            to="/projects"
            >Projects</nuxt-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="postcss" scoped>
.nuxt-link-exact-active {
  @apply text-black bg-yellow-400;
  &:hover {
    @apply text-black bg-yellow-400;
  }
}
.light-mode {
  & .nuxt-link-exact-active {
    @apply bg-yellow-400;
    &:hover {
      @apply bg-yellow-400;
    }
  }
}
</style>
