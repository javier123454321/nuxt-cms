<template>
  <div class="py-8">
    <Header />
    <!-- <ColorModePicker /> -->
    <nuxt />
  </div>
</template>

<script>
import Header from "~/components/general/Header.vue";
// import ColorModePicker from "~/components/general/ColorModePicker.vue";

export default {
  components: {
    Header,
    // ColorModePicker,
  },
};
</script>
<style lang="postcss">
body {
  margin: 0;
}
#__layout {
  margin: 0;
}
.container {
  min-height: 100vh;
  padding-top: 56px; /* header height */
}
</style>
