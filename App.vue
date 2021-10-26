<template>
  <div :class="[$style.wrapper]">
    <header>
      <div :class="[$style.title]">My personal costs</div>
    </header>
    <main>
      <PaymentsDisplay :items="paymentsList" />
      <AddPaymentForm @addNewPayment="addNewPayment" />
    </main>
  </div>
</template>
 
<script>
import PaymentsDisplay from "./components/PaymentsDisplay";
import AddPaymentForm from "./components/AddPaymentForm";

export default {
  components: {
    PaymentsDisplay,
  },
  data() {
    return {
      paymentsList: [],
    };
  },
  methods: {
    fetchData() {
      return [
        {
          date: "28.03.2020",
          category: "Food",
          value: 169,
        },
        {
          date: "24.03.2020",
          category: "Transport",
          value: 360,
        },
        {
          date: "24.03.2020",
          category: "Food",
          value: 532,
        },
      ];
    },
  },
  created() {
    this.paymentsList = this.fetchData();
  },
  addNewPayment(data) {
    this.paymentsList = [...this.paymentsList, data];
  },
};
</script>



<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
