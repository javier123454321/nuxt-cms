<template>
  <div class="w-screen overflow-hidden"
    <component
      :is="element"
      class="px-4 md:px-12 lg:px-24 xl:px-48 max-w-screen-2xl mx-auto"
    >
        <slot></slot>
    </component>
  </div>
</template>

<script>
export default {
  name: "StyledSectionWidth",
  props: {
	element: {
      type: String,
	  default: "section"
	},
  }
};
</script>

