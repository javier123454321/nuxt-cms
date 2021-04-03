<template>
  <component
    :is="element"
    class="md:px-12 lg:px-24 xl:px-48 max-w-screen-2xl mx-auto"
    :class="[classList]"
  >
      <slot></slot>
  </component>
</template>

<script>
export default {
  name: "SectionWidth",
  props: {
	element: {
      type: String,
	  default: "section"
	},
  }
};
</script>

