<template>
  <StyledSectionWidth
    element="article"
    v-if="blogPost"
    class="main article"
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
      v-html="renderedContent"
      class="p-12 text-left bg-gray-100 shadow-lgOrange markdownArea"
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
  </StyledSectionWidth>
</template>
<script>
  import StyledHighlightedTitle from "~/components/style/StyledHighlightedTitle.vue";
  import StyledSectionWidth from "~/components/style/StyledSectionWidth.vue";
  import Prism from "prismjs";
  import MarkdownIt from "markdown-it";
  export default {
    components: { StyledHighlightedTitle, StyledSectionWidth },
    async asyncData({ params, payload }) {
      if (payload) return { blogPost: payload };
      else{
        const blogPost = await require(`~/assets/content/blog/${params.blog}.json`);
        return {blogPost};
      };
    },
    methods: {
      formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString(process.env.lang) || "";
      },
      highlightCode(str, lang){
        if (lang && hljs.getLanguage(lang)) {
          try {
            return hljs.highlight(lang, str).value
          } catch (__) {}
          return '' // use external default escaping
        }
      }
    },
    computed: {
      allPosts() {
        return this.$store.state.blogPosts;
      },
      renderedContent(){
        let md = new MarkdownIt({
        breaks: false, 
        injected: true,
        highlight: function(str, lang){
          try {
            //return hljs.highlight(str, {language: lang}).value
            return '<pre class="line-numbers"><code>' +
                      Prism.highlight(str, Prism.languages[lang], lang) +
                   '</code></pre>';

          } catch (__) {}
            return '' // use external default escaping
          }
        })
        return md.render(this.blogPost.body)
       }
    },
  };
</script>
<style lang="css">
.markdownArea > p {
  margin-bottom: 1.5rem;
  line-height: 1.6;
}
.markdownArea blockquote {
  @apply pl-6 py-4 border-l-4 border-solid border-blue-400 bg-blue-100 mb-4;
}
.markdownArea pre{
  @apply overflow-x-auto shadow-mdPurple overflow-auto p-1 bg-bg-dark text-pink-200 mb-6;
}
.markdownArea code{
  @apply overflow-auto;
}
.markdownArea > h2,
.markdownArea > h3,
.markdownArea > h4,
.markdownArea > h5,
.markdownArea > h6 {
  @apply font-black mb-4;
}
.markdownArea h2 {
  @apply text-3xl;
}
.markdownArea h3 {
  @apply text-2xl;
}
.markdownArea h4 {
  @apply text-xl;
}
.markdownArea h5,
.markdownArea h6{
  @apply text-lg;
}
.token.string, 
.token.keyword, 
.token.params{
  @apply text-hotPink;
}
.token.keyword{
  @apply text-orange-400;
  }
.token.params{
  @apply text-blue-400;
}
.token.function{
  @apply text-yellow-200;
  }
.token.comment{
  @apply text-blue-400 bg-gray-800;
  }

</style>
