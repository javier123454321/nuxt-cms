<template>
  <article
    v-if="blogPost"
    class="container max-w-screen-md py-12 mx-auto main article"
  >
    <div class="pt-12 pb-8">
      <div class="mb-12">
        <StyledHighlightedTitle headingTag="h1" fontsize="text-6xl">
          {{ blogPost.title }}
        </StyledHighlightedTitle>
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
      class="p-12 text-left bg-gray-300 shadow-lgOrange markdownArea"
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
import StyledHighlightedTitle from "~/components/style/StyledHighlightedTitle.vue";
export default {
  components: { StyledHighlightedTitle },
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
<style lang="postcss">
.markdownArea > p {
  @apply mb-10 leading-6;
}
</style>
