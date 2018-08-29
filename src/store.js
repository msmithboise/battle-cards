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
        allGames: []
        // newGame object 
    },
    mutations: {
        setGames(state, games) {
            state.allGames = games 
        }
        // create newGame mutation
    },
    // Dispatch is how you call actions, commit is how you call mutations
    actions: {
        getGames({ commit, dispatch }) {

// accessing the api to get data, then with data, calling the setGame mutation to change the state
            gameApi.get('')
                .then(res => {
                    console.log(res)
                    commit('setGames', res.data)
                })

        },
        // here we are posting to the game server, then with our promise, we commit to call the mutation of the state of the game
        createGame({ commit, dispatch }, payload) {

            gameApi.post('')
                .then(res => {
                    commit('')
                })


        }
    }
})