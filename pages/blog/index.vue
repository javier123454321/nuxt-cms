<template>
  <main v-if="blogPosts" class="main">
    <h1 class="text-left title">Blog</h1>
    <ul v-for="(blogPost, index) in blogPosts" :key="index" class="articles">
      <nuxt-link
        :to="`blog/${blogPost.slug}`"
        class="article article--clickable"
      >
        <div class="flex justify-between align-baseline">
          <h3 class="article-title">{{ blogPost.title }}</h3>
          <h6
            v-if="blogPost.date"
            class="inline-block px-2 py-1 font-medium text-white whitespace-no-wrap rounded-sm bg-accent dark:bg-accent"
          >
            {{ formatDate(blogPost.date) }}
          </h6>
        </div>
        <div class="mt-4 mb-2">
          <p class="inline">{{ blogPost.description }}</p>
        </div>
      </nuxt-link>
    </ul>
  </main>
</template>
<script>
export default {
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts;
    },
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString(process.env.lang) || "";
    },
  },
};
</script>
