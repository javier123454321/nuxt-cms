<template>
  <component
    :is="headingTag"
    class="relative z-10 max-w-screen-md mb-0 font-mono font-black text-left"
    :class="fontsize"
  >
    <span class="z-10 relative">
      <slot></slot>
    </span>
    <span
      class="
        absolute
        left-0
        bg-blue-400
        w-full
        h-50
        transform
        translate-y-5
        -rotate-3
      "
    ></span>
  </component>
</template>

<script>
export default {
  name: "StyledHighlightedTitle",
  props: ["headingTag", "fontsize"],
};
</script>

