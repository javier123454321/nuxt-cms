<template>
  <div>
    <StyledSectionWidth class="z-30 relative pt-12 overflow-visible mt-48">
      <div class="overflow-x-hidden min-w-1000 absolute z-0 top-0 transform -translate-y-56">
      <img
        src="/img/bg-blue-splat.png"
        class="h-800 xl:h-1000 object-cover object-center"
        alt=""
      />
      </div>
      <div class="flex flex-row items-center justify-end">
        <img
          src="/img/me.png"
          class="hidden absolute md:block h-600 ml-24 z-10 transform md:-translate-x-32 md:-translate-x-40 md+:-translate-x-24 left-0 lg:h-600 lg+:h-800 xl:translate-x-0 xl:ml-96 xl:min-w-xs"
          alt="me with a dog"
        />
        <img
          src="/img/Chicago.png"
          class="absolute h-600 md+:h-800 ml-24 transform -translate-y-24 object-cover object-center "
          alt="me with a dog"
        />
        <div class="w-full z-0">
          <div
            class="flex flex-wrap items-center justify-center md:justify-end py-12 px-12 mb-5 md:mb-20 bg-yellow-400 xl:pl-40 2xl:pl-32 w-12/12 dark:bg-yellow-800 shadow-lgBlack md:order-1 lg:mt-0"
          >
            <h1
              class="text-center md:text-left font-mono text-4xl lg:text-5xl font-black 2xl:text-6xl 2xl:ml-64"
            >
              Javier Gonzalez <br />
              Software Developer
            </h1>
          </div>
          <div class="z-10 flex justify-center md:justify-end font-mono">
            <StyledButton href="https://github.com/javier123454321/"
              class="mr-5 md+:mr-10"
              element="a">
              <span class="hidden sm:block">
              Github
              </span>
              <img alt="github" src="/img/github.svg" class="sm:hidden">
            </StyledButton>
            <StyledButton href="https://linkedin.com/in/javier123454321"
              class="mr-5 md+:mr-10"
              element="a">
              <span class="hidden sm:block">
              Linkedin
              </span>
              <img alt="linkedin" src="/img/linkedin.svg" class="sm:hidden">
            </StyledButton>
            <StyledButton href="https://twitter.com/javier123454321"
              element="a">
              <span class="hidden sm:block">
              Twitter
              </span>
              <img alt="twitter" src="/img/twitter.svg" class="sm:hidden">
            </StyledButton>
          </div>
        </div>
      </div>
    </StyledSectionWidth>
    <img
      id="brush-splash"
      src="/img/bg-brush-red.png"
      class="absolute right-0 z-0 min-w-1000 md:w-11/12 overflow-visible transform translate-y-10 lg:-translate-y-20 pointer-events-none"
    />
    <StyledSectionWidth
      id="about"
	  class="mt-24 lg:mt-48"
    >
      <div
        class="w-10/12 lg:px-0 py-12 mx-auto mt-0 md:mt-16 relative transform -rotate-12"
      >
        <h2 class="font-mono text-6xl font-black">Hi There,</h2>
        <p
          class="font-mono text-2xl md:text-3xl lg:text-4xl font-black text-right"
        >
          I am an ex architecural desiger turned software developer interested
          in the medium of the web and it’s ability to express old ideas in a
          new way.
        </p>
        <br />
        <p
          class="font-mono text-2xl md:text-3xl lg:text-4xl font-black text-right"
        >
          I love learning and making things, both physical and virtual.
        </p>
      </div>
    </StyledSectionWidth>
    <StyledSectionWidth
      id="featured-post"
      class="relative z-10"
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
    </StyledSectionWidth>
    <StyledSectionWidth
      id="projects"
    >
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
      <div class="relative flex flex-wrap justify-between">
        <div
          v-for="(project, index) in projectPosts"
          :key="index"
          class="items-center justify-between w-1/4 px-6 py-4 mb-20 text-left bg-yellow-400 dark:bg-yellow-800 shadow-lgBlack"
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
    </StyledSectionWidth>
  </div>
</template>

<script>
import StyledSectionWidth from "~/components/style/StyledSectionWidth.vue"
import StyledButton from "~/components/style/StyledButton.vue"
export default {
  components: { StyledSectionWidth, StyledButton },
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
  padding-bottom: 100px;
  margin-bottom: -100px;
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
</style>
