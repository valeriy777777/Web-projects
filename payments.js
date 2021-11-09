const getters = {

    getPaymentsList: state => state.paymentsList,


    getFullPaymentValue: state => {
        return state.paymentsList
            .reduce((res, cur) => res + cur.value, 0)
    },
}

const mutations = {

    addDataToPaymentsList(state, payload) {
        state.paymentsList.push(payload)
    }
}

const actions = {
    fetchData({ commit }) {
        return new Promise((resolve) => {
            // имитируем работу с сетью, ставим задержку получения данных в 1 секунду
            setTimeout(() => {
                resolve([
                    {
                        date: '28.03.2020',
                        category: 'Food',
                        value: 169,
                    },
                    {
                        date: '24.03.2020',
                        category: 'Transport',
                        value: 360,
                    },
                    {
                        date: '24.03.2020',
                        category: 'Food',
                        value: 532,
                    },
                ])
            }, 1000)
        })
            .then(res => {
                // запускаем изменение состояния через commit
                commit('setPaymentsListData', res)
            })
    },
}


