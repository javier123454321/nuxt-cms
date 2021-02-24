<template>
  <nav class="sticky flex justify-end w-full font-mono">
    <ul class="flex justify-end">
      <li class="flex-1 mr-2">
        <nuxt-link
          class="px-12 py-4 mr-10 text-xl font-black bg-gray-300 shadow-mdOrange"
          to="/"
          >Home</nuxt-link
        >
      </li>
      <li class="flex-1 mr-2">
        <nuxt-link
          class="px-12 py-4 mr-10 text-xl font-black bg-gray-300 shadow-mdOrange hover:bg-yellow-400"
          to="/blog"
          >Blog</nuxt-link
        >
      </li>
      <li class="flex-1">
        <nuxt-link
          class="px-12 py-4 text-xl font-black bg-gray-300 shadow-mdOrange"
          to="/projects"
          >Projects</nuxt-link
        >
      </li>
    </ul>
  </nav>
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
