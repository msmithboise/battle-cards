import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router';

Vue.use(Vuex)

var production = !window.location.host.includes('https://inspire-server.herokuapp.com');
var baseUrl = production ? 'battle-catz.herokuapp.com/' : '//inspire-server.herokuapp.com';


let gameApi = axios.create({
    baseURL: baseUrl + 'https://inspire-server.herokuapp.com/cards/',
    timeout: 3000,


})

// start in store, handle your data.  figure out how you're gonna change the state, 
// create where i put it in the state
// create mutation
// create an action that will call the mutation, this is where u make api calls
// now there needs to be some method will call an action (dispatch) to start the process
//

export default new Vuex.Store({
    state: {
        allGames: [],
        newGame: {},
        activePlayer: {}
        // newGame object 
    },
    mutations: {
        setGames(state, games) {
            // this is where we looped over "game in games"
            state.allGames = games
        },
        currentGame(state, game ){
        state.newGame = game
        console.log(game)
       
        },

        selectPlayer(state, activePlayer){
            state.activePlayer = activePlayer
        }
        // create newGame mutation
    },
    // Dispatch is how you call actions, commit is how you call mutations
    actions: {
        getGames({ commit, dispatch }) {

// accessing the api to get data, then with data, calling the setGame mutation to change the state
            gameApi.get('')
                .then(res => {
                commit('setGames', res.data)
                })

        },
        getGame({commit, dispatch}, id){
            gameApi.get(id)
                .then(res=>{
                    commit('currentGame', res.data.data)
                })
        },
        // here we are posting to the game server, then with our promise, we commit to call the mutation of the state of the game
        createGame({ commit, dispatch },gameConfig) {

            gameApi.post('',{
                "gameConfig":{
                    "playerName": "", 
                    "opponents": 1, 
                    "set": 4 }})

                .then(res => {
                    commit('currentGame', res.data)
                    router.push({name: "Game", params: { id: res.data.id}})
                    console.log(res.data)
                })


        },

        selectPlayer({commit,dispatch},player){

            commit('selectPlayer', player)


        },

        attack({commit,dispatch, state}, payload){
            gameApi.put(state.newGame.id, payload)
            .then(res => {
                dispatch("getGame", state.newGame.id)
            })
        }
    }
})