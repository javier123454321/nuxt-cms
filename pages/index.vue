<template>
  <div>
    <section
      id="hero"
      class="z-30 px-48 py-48 pt-12 mt-48 lg:px-48 xl:px-96 xl:border"
    >
      <div class="flex flex-col items-center justify-end lg:flex-row">
        <img
          src="/img/me.png"
          class="absolute left-0 z-10 ml-24 xl:ml-96 xl:h-800"
          alt=""
          srcset=""
        />
        <div class="w-full">
          <div
            class="flex flex-wrap items-center justify-end py-8 pr-12 mb-20 text-left bg-yellow-400 w-100 xl:pl-32 w-12/12 dark:bg-yellow-800 shadow-lgBlack md:order-1 lg:mt-0"
          >
            <h1 class="max-w-xl font-mono text-5xl font-black xl:text-6xl">
              Javier Gonzalez <br />
              Software Developer
            </h1>
          </div>
          <div class="z-10 flex justify-end font-mono">
            <button
              class="px-12 py-4 mr-10 text-xl font-black bg-gray-300 w-42 shadow-mdOrange"
            >
              Github
            </button>
            <button
              class="px-12 py-4 mr-10 text-xl font-black bg-gray-300 w-42 shadow-mdOrange"
            >
              Linkedin
            </button>
            <button
              class="px-12 py-4 text-xl font-black bg-gray-300 w-42 shadow-mdOrange"
            >
              Twitter
            </button>
          </div>
        </div>
      </div>
    </section>
    <img
      id="brush-splash"
      src="/img/bg-brush-red.png"
      class="absolute right-0 z-0 w-11/12 overflow-visible transform -translate-y-48 pointer-events-none"
    />
    <section id="about" class="px-0 md:px-12 lg:px-24 xl:px-48">
      <div class="w-10/12 px-32 py-12 mx-auto mt-64 transform -rotate-12">
        <h2 class="font-mono text-6xl font-black">Hi There,</h2>
        <p class="font-mono text-4xl font-black text-right">
          I am an ex architecural desiger turned software developer interested
          in the medium of the web and it’s ability to express old ideas in a
          new way.
        </p>
        <br />
        <p class="font-mono text-4xl font-black text-right">
          I love learning and making things, both physical and virtual.
        </p>
      </div>
    </section>
    <section
      id="featured-post"
      class="relative z-10 px-0 md:px-12 lg:px-24 xl:px-48"
    >
      <div class="mt-24 mb-12">
        <h3 class="absolute z-10 mb-0 font-mono text-4xl font-black text-left">
          <span>Featured Posts</span>
        </h3>
        <div
          class="w-64 h-8 px-4 transform translate-x-4 translate-y-4 bg-blue-400 -rotate-3"
        ></div>
      </div>
      <div
        v-for="post in featuredPosts"
        :key="post.slug"
        class="flex items-center px-12 py-8 mx-2 text-xl font-black text-left bg-gray-300 dark:bg-yellow-800 shadow-lgOrange"
      >
        <div class="mr-10 bg-green-100 blog__imageContainer"></div>
        <article>
          <div
            class="mb-12 font-mono text-xl font-black"
            v-html="post.description"
          >
            <br />
          </div>
          <nuxt-link
            :to="`blog/${post.slug}`"
            class="box-content px-12 py-4 my-24 font-mono text-xl font-black bg-gray-200 content-border shadow-mdOrange"
            >Full Post</nuxt-link
          >
        </article>
      </div>
      <div class="mt-12">
        <nuxt-link
          :to="`blog`"
          class="px-12 py-4 font-mono text-xl font-black bg-gray-300 shadow-mdOrange"
          >All Posts</nuxt-link
        >
      </div>
    </section>
    <section id="projects" class="px-0 md:px-12 lg:px-24 xl:px-48">
      <img
        id="brush-splash"
        aria-hidden="true"
        alt=""
        src="/img/bg-purp-splat.png"
        class="absolute left-0 z-0 w-7/12 overflow-visible transform -translate-x-48 -translate-y-48 pointer-events-none"
      />
      <div class="relative mt-24 mb-12">
        <h3 class="absolute z-10 mb-0 font-mono text-4xl font-black text-left">
          <span>My Projects</span>
        </h3>
        <div
          class="w-64 h-8 px-4 transform translate-x-4 translate-y-4 bg-blue-400 -rotate-3"
        ></div>
      </div>
      <div class="relative flex flex-wrap">
        <div
          v-for="(project, index) in projectPosts"
          :key="index"
          class="items-center w-1/4 px-6 py-4 mx-12 mb-20 text-left bg-yellow-400 dark:bg-yellow-800 shadow-lgBlack"
        >
          <div
            class="mb-2 font-mono text-2xl font-black"
            v-html="project.title"
          ></div>
          <img :src="project.gallery[0]" alt="" srcset="" />
          <div class="my-8 mb-4 text-center">
            <nuxt-link
              class="px-4 py-2 text-xl font-black bg-gray-300 shadow-mdOrange"
              :to="`projects/${project.slug}`"
              >See Project
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  mounted() {},
  computed: {
    featuredPosts() {
      let posts = this.$store.state.blogPosts.filter((post) => {
        return post.featured;
      });
      return posts;
    },
    projectPosts() {
      return this.$store.state.projectPosts;
    },
  },
  head() {
    return {
      script: [
        { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
      ],
    };
  },
};
</script>
<style lang="css" scoped>
#hero {
  background-image: url("/img/bg-blue-splat.png");
  background-repeat: no-repeat;
}
#aboutContainer {
  background-image: url("/img/bg-brush-red.png");
  background-repeat: no-repeat;
  min-height: 80vh;
  overflow: show;
}
.blog__imageContainer {
  width: 30em;
  height: 16em;
}
/* .h-800 {
  height: 800px;
} */
</style>
