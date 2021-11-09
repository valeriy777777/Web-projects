<template>
  <div :class="[$style.wrapper]">
    {{ items }}
  </div>
</template>
 
<script>
import { mapGetters } from "vuex";
export default {
  props: {
    items: {
      type: Array,
      default: [],
    },
  },
  computed: {
    getFPV() {
      return this.$store.getters.getFullPaymentValue;
    },
    ...mapGetters(["getPaymentsList"]),
  },
};
</script>
 
<style lang="scss">