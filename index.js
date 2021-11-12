import Vue from 'vue'
import Vuex from 'vuex'
import { mapMutations } from 'vuex'
import store from '/store'

Vue.use(Vuex)

export default new Vuex.Store({
  const state = {
    paymentsList: [],
  }

  const mutations = {
    setPaymentsListData(state, payload) {
      state.paymentsList = payload
    },
  }
   {},
  getters: {},
  actions: {},
  methods: {
  ...mapMutations([
    'setPaymentsListData',
    updatePayments: 'setPaymentsListData'

  ])
},
  created() {
  this.setPaymentsListData(this.fetchData())
}
}

})


new Vue({
  el: 'main',
  template: '<App />',
  components: {
    App,
  },
  store,
})






