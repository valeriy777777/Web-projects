<template>
  <div :class="[$style.wrapper]">
    {{ items }}
  </div>
</template>
 
<script>
export default {
  props: {
    items: {
      type: Array,
      default: [],
    },
  },
};
</script>
 
<style lang="scss">