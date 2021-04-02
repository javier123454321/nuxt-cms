<template>
  <div class="w-full flex justify-end xl:justify-center">
    <nav
      class="fixed sm:top-auto z-50 flex justify-end px-0 md:w-screen font-mono md:px-12 lg:px-24 xl:px-48 max-w-screen-2xl mx-auto"
    >
      <ul class="flex flex-col sm:flex-row justify-end">
        <li class="sm:hidden mr-2">
          <button
            @click="expanded = !expanded"
            class="bg-gray-300 shadow-mdOrange w-40"
          >
            <transition>
              <div v-if="!expanded" class="flex items-center">
                <svg
                  class="w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <span class="text-2xl font-black ml-4"> Menu </span>
              </div>
              <svg
                class="w-10 h-10"
                v-else
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </transition>
          </button>
        </li>
        <div class="sm:flex" v-show="expanded || isDesktop">
          <li class="flex-1 mr-2">
            <nuxt-link to="/">
              <div
                class="sm:w-40 text-center py-4 md:mr-10 text-xl font-black bg-gray-300 shadow-mdOrange"
              >
                Home
              </div>
            </nuxt-link>
          </li>
          <li class="flex-1 mr-2">
            <nuxt-link to="/blog">
              <div
                class="w-40 text-center py-4 md:mr-10 text-xl font-black bg-gray-300 shadow-mdOrange hover:bg-yellow-400"
              >
                Blog
              </div>
            </nuxt-link>
          </li>
          <li class="flex-1">
            <nuxt-link to="/projects">
              <div
                class="w-40 py-4 text-xl text-center font-black bg-gray-300 shadow-mdOrange hover:bg-yellow-400"
              >
                Projects
              </div></nuxt-link
            >
          </li>
        </div>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      expanded: false,
      isDesktop: false,
    };
  },
  methods: {
    setWindowSize() {
      console.log(document.documentElement.clientWidth);
      this.isDesktop = window.document.documentElement.clientWidth > 625;
    },
  },
  mounted() {
    this.setWindowSize();
    window.addEventListener("resize", this.setWindowSize);
  },
};
</script>

<style lang="css" scoped>
:root {
  --icon-width: 18px;
}
#nav-icon {
  width: 60px;
  height: 45px;
  position: relative;
  margin: 10px auto;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
}
#nav-icon span {
  display: block;
  position: absolute;
  height: 4px;
  width: 50%;
  background: #0b0b0a;
  border-radius: 4px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}
#nav-icon span:nth-child(1) {
  top: 0px;
}

#nav-icon span:nth-child(2),
#nav-icon span:nth-child(3) {
  top: var(--icon-width);
}

#nav-icon span:nth-child(4) {
  top: calc(var(--icon-width) * 2);
}

#nav-icon.open span:nth-child(1) {
  top: var(--icon-width);
  width: 0%;
  left: 50%;
}

#nav-icon.open span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

#nav-icon.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

#nav-icon.open span:nth-child(4) {
  top: var(--icon-width);
  width: 0%;
  left: 50%;
}
</style>
