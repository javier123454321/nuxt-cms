<template>
  <main v-if="blogPosts" class="main">
    <StyledSectionWidth id="featured-post" class="relative z-10">
      <div class="mt-24 mb-12">
        <h1 class="text-left font-black absolute z-10 mb-0 font-mono text-4xl">
          Blog Posts
        </h1>
        <div
          class="
            w-64
            h-8
            px-4
            transform
            translate-x-4 translate-y-4
            bg-blue-400
            -rotate-3
          "
        ></div>
      </div>
      <ul
        v-for="(blogPost, index) in blogPosts"
        :key="index"
        class="
          items-center
          px-12
          py-8
          mb-12
          text-xl
          font-black
          text-left
          bg-gray-200
          shadow-lgOrange
        "
      >
        <nuxt-link :to="`blog/${blogPost.slug}`">
          <div class="flex justify-between">
            <div>
              <h3 class="font-black text-2xl">{{ blogPost.title }}</h3>
              <div class="mt-4 mb-2">
                <p class="inline">{{ blogPost.description }}</p>
              </div>
            </div>
            <div>
              <h6
                v-if="blogPost.date"
                class="
                  inline-block
                  px-2
                  py-1
                  font-medium
                  text-white
                  whitespace-no-wrap
                  rounded-sm
                  bg-accent
                  dark:bg-accent
                "
              >
                {{ formatDate(blogPost.date) }}
              </h6>
            </div>
          </div>
        </nuxt-link>
      </ul>
      <div v-for="post in featuredPosts" :key="post.slug">
        <article>
          <h4
            v-text="post.title"
            class="font-mono font-black mb-4 text-3xl"
          ></h4>
          <div
            class="my-8 font-mono text-xl font-black"
            v-html="post.description"
          ></div>
          <nuxt-link :to="`blog/${post.slug}`">
            <div
              class="
                px-8
                py-4
                font-mono
                text-xl
                font-black
                bg-yellow-400
                w-48
                text-center
                shadow-mdBlack
              "
            >
              Full Post
            </div>
          </nuxt-link>
        </article>
      </div>
    </StyledSectionWidth>
  </main>
</template>
<script>
import StyledSectionWidth from "~/components/style/StyledSectionWidth.vue";
export default {
  components: { StyledSectionWidth },
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
