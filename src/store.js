import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let api = axios.create({
    baseURL: '',
    timeout: 3000,
    withCredentials: true

})

export default new Vuex.Store({
    state: {

    },
    mutations: {

    },
    actions: {
        
    }
})