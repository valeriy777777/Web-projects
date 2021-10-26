<template>
  <div class="home">
    <h1 class="h1">{{ counter }}</h1>
    <input v-model.number="operand1" type="number" />
    <input v-model.number="operand2" type="number" />
    = {{ result }}
    <br />
    <button @click="result = operand1 + operand2">+</button>
    <button @click="minus(operand1, operand2)">-</button>
    <button @click="division(operand1, operand2)">/</button>
    <button @click="multiplication(operand1, operand2)">*</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      operand1: 0,
      operand2: 0,
      result: 0,
    };
  },
  methods: {
    changeInput(event) {
      this.inputProp = event.target.value;
      console.log(event.target.value);
    },
    minus(op1, op2) {
      this.result = op1 - op2;
    },
    division(op1, op2) {
      this.result = op1 / op2;
    },
    multiplication(op1, op2) {
      this.result = op1 * op2;
    },
  },
};
</script>
