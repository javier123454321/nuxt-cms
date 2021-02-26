<template>
  <article
    v-if="blogPost"
    class="container max-w-screen-md py-12 mx-auto main article"
  >
    <div class="pt-12 pb-8">
      <div class="mb-12">
        <h1
          class="absolute z-10 max-w-screen-md mb-0 font-mono text-6xl font-black text-left"
        >
          <span>{{ blogPost.title }}</span>
        </h1>
        <div
          class="h-32 px-4 transform translate-x-4 translate-y-4 bg-blue-400 w-100 -rotate-3"
        ></div>
      </div>
      <p
        v-if="blogPost.date"
        class="w-48 px-2 py-4 font-mono text-xl font-black text-center bg-yellow-400 shadow-mdBlack"
      >
        {{ formatDate(blogPost.date) }}
      </p>
    </div>
    <div
      v-html="$md.render(blogPost.body)"
      class="p-12 text-left bg-gray-300 shadow-lgOrange"
    />
    <div class="flex justify-between mt-8">
      <button
        class="w-48 px-2 py-4 font-mono text-xl font-black text-center bg-yellow-400 shadow-mdBlack"
      >
        << previous
      </button>
      <button
        class="w-48 px-2 py-4 font-mono text-xl font-black text-center bg-yellow-400 shadow-mdBlack"
      >
        next >>
      </button>
    </div>
  </article>
</template>
<script>
export default {
  async asyncData({ params, payload }) {
    if (payload) return { blogPost: payload };
    else
      return {
        blogPost: await require(`~/assets/content/blog/${params.blog}.json`),
      };
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString(process.env.lang) || "";
    },
  },
  computed: {
    allPosts() {
      return this.$store.state.blogPosts;
    },
  },
};
</script>
<style lang="postcss" scoped>
p {
  @apply mb-10;
}
</style>
