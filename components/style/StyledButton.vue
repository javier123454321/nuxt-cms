<template>
  <component
    :is="element"
    class="px-8 lg:px-12 py-4 text-xl font-black bg-gray-300 md+:w-42 shadow-mdOrange"
  >
      <slot></slot>
  </component>
</template>

<script>
export default {
  name: "StyledButton",
  props: {
	element: {
      type: String,
	    default: "button"
    },
  }
};
</script>

