<template>
  <div :class="[$style.wrapper]">
    <input placeholder="Amount" v-model="amount" />
    <input placeholder="Type" v-model="type" />
    <input placeholder="Date" v-model="date" />
    <button @click="onSaveClick">Save!</button>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      amount: "",
      type: "",
      date: "",
    };
  },
  computed: {
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
  },
  methods: {
    onSaveClick() {
      const data = {
        amount: +this.amount,
        type: this.type,
        date: this.date || this.getCurrentDate,
      };
      this.$emit("addNewPayment", data);
    },
  },
};
</script>
 
<style lang="scss">