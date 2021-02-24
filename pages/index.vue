<template>
  <div>
    <section>
      <div id="hero" class="flex items-center justify-between -mb-64">
        <img src="/img/me.png" class="z-10" alt="" srcset="" />
        <div>
          <div
            class="flex items-center py-8 pl-48 mb-20 -ml-64 text-left bg-yellow-400 dark:bg-yellow-800 shadow-lgBlack"
          >
            <h1 class="font-mono text-6xl font-black">
              Javier Gonzalez <br />
              Software Developer
            </h1>
          </div>
          <div class="flex justify-between pl-48 -ml-64 font-mono">
            <button
              class="px-12 py-4 mr-10 text-xl font-black bg-gray-300 shadow-mdOrange"
            >
              Github
            </button>
            <button
              class="px-12 py-4 mr-10 text-xl font-black bg-gray-300 shadow-mdOrange"
            >
              Linkedin
            </button>
            <button
              class="px-12 py-4 text-xl font-black bg-gray-300 shadow-mdOrange"
            >
              Twitter
            </button>
          </div>
        </div>
      </div>
    </section>
    <section
      id="about"
      class="relative min-h-screen -mb-48 pointer-events-none"
    >
      <img
        id="brush-splash"
        src="/img/bg-brush-red.png"
        class="absolute top-0 w-screen"
      />
      <div
        class="absolute px-32 mt-64 -mb-32 transform translate-y-32 top-16 -rotate-12"
      >
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
    <section id="featured-post" class="-mt-64">
      <h3 class="my-12 font-mono text-4xl font-black text-left">
        Featured Post
      </h3>
      <div
        v-for="post in featuredPosts"
        :key="post.slug"
        class="flex items-center px-12 py-8 mr-10 text-xl font-black text-left bg-gray-300 dark:bg-yellow-800 shadow-mdOrange"
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
    <section id="projects">
      <h3 class="my-12 font-mono text-4xl font-black text-left">Projects</h3>
      <div class="flex flex-wrap">
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
  // components: {
  //   Logo
  // },
  mounted() {},
  computed: {
    featuredPosts() {
      let posts = this.$store.state.blogPosts.filter((post) => {
        console.log(post);
        return post.featured;
      });
      console.log(posts);
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
#brush-splash {
  pointer-events: nonev;
}
.blog__imageContainer {
  width: 30em;
  height: 16em;
}
</style>
