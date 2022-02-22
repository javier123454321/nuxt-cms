<template>
  <div class="bg-yellow-300 -my-8 p-4 min-h-screen min-w-screen">
    <div class="border-black border-4 border-solid pb-4 min-h-screen">
      <StyledSectionWidth id="project-detail" class="relative pt-24 z-10">
        <div class="w-100">
          <h1 class="font-mono font-black text-6xl">
            {{ projectPost.title }}
          </h1>
        </div>
      <div
        v-html="renderedContent"
        class="mt-20 relative z-10 text-left markdownArea"
      />
      <div v-for="gallery in projectPost.gallery">
        <img :src="gallery">
      </div>
      </StyledSectionWidth>
    </div>
  </div>
</template>
<script>
import StyledSectionWidth from "~/components/style/StyledSectionWidth.vue";
import StyledHighlightedTitle from "~/components/style/StyledHighlightedTitle.vue";
import Prism from "prismjs";
import MarkdownIt from "markdown-it";
export default {
  components: { StyledHighlightedTitle, StyledSectionWidth },
  async asyncData({ params, payload }) {
    if (payload) return { projectPost: payload }
    else
      return {
        projectPost: await require(`~/assets/content/projects/${params.project}.json`)
      }
  },
  computed: {
    renderedContent() {
      let md = new MarkdownIt({
        breaks: false,
        injected: true,
        highlight: function (str, lang) {
          try {
            //return hljs.highlight(str, {language: lang}).value
            return (
              '<pre class="line-numbers"><code>' +
              Prism.highlight(str, Prism.languages[lang], lang) +
              "</code></pre>"
            );
          } catch (__) {}
          return ""; // use external default escaping
        },
      });
      return md.render(this.projectPost.body);
    },
  }
}
</script>
<style lang="css">
.markdownArea > p {
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-size: 1.2rem;
}
.markdownArea blockquote {
  @apply pl-6 py-4 border-l-4 border-solid border-blue-400 bg-blue-100 mb-4;
}
.markdownArea pre {
  @apply overflow-x-auto shadow-mdPurple overflow-auto p-1 bg-bg-dark text-pink-200 mb-6;
}
.markdownArea code {
  @apply overflow-auto;
}
.markdownArea > h2,
.markdownArea > h3,
.markdownArea > h4,
.markdownArea > h5,
.markdownArea > h6 {
  @apply font-black mb-4;
}
.markdownArea h1 {
  @apply text-4xl;
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
.markdownArea h6 {
  @apply text-lg;
}
.token.string,
.token.keyword,
.token.params {
  @apply text-hotPink;
}
.token.keyword {
  @apply text-orange-400;
}
.token.params {
  @apply text-blue-400;
}
.token.function {
  @apply text-yellow-200;
}
.token.comment {
  @apply text-blue-400 bg-gray-800;
}
