import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Game from './components/Game.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
        path:'/game/:id',
        name: 'Game',
        props: true,
        component: Game
        }
    ]
})