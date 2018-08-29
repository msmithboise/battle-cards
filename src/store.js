import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let gameApi = axios.create({
    baseURL: 'https://inspire-server.herokuapp.com/cards',
    timeout: 3000,


})

export default new Vuex.Store({
    state: {
        cards: []
    },
    mutations: {
        setCards(state, payload) {
            state.cards = payload.data
        }
    },
    actions: {
        getCards({ commit, dispatch }, payload) {
        
            gameApi.get('')
                .then(res => {
                    console.log(res)
                    commit('setCards', payload)
                })

        }
    }
})