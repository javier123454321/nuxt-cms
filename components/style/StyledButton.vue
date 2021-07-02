<template>
  <component
    :is="element"
    class="text-xl font-mono font-black bg-gray-300 shadow-mdOrange"
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

