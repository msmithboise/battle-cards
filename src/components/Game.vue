<template>
    <div class="game container-fluid">

        <div class="row">
            <div class="col-sm-2 card" v-for="card in currentGame.players[0].hand" :key="card">

                <h3>{{card.name}}</h3>
                <p>Health: {{card.health}}</p>
                <p>Attack: {{card.attack}}</p>
                <p>Defense: {{card.defense}}</p>
                <img :src="card.img" alt="">
            </div>

        </div>

        <div class="row fight"></div>
        <button>Fight!</button>

        <div class="row">
            <div class="col-sm-2 card" v-for="card in currentGame.players[1].hand" :key="card">

                <h3>{{card.name}}</h3>
                <p>Health: {{card.health}}</p>
                <p>Attack: {{card.attack}}</p>
                <p>Defense: {{card.defense}}</p>
                <img :src="card.img" alt="">
            </div>

        </div>



    </div>
</template>

<script>

    export default {
        name: "Game",
        data() {
            return {


            }
        },
        computed: {
            currentGame() {
                return this.$store.state.newGame

            }

        }

    }
</script>

<style>
    .card {
        display: flex;
        align-items: center;
        background: rgba(0, 0, 0, 0.199);
        padding: 10px;
        box-shadow: 1px 1px 2px #e7e7e7;
        border-radius: 4px;
        margin: 20px 20px;
        color: #f9f9f9;

    }

    img {
        width: 100px;
        height: 100px;
    }

    .game {
        background-color: #3b3b3b;
    }
</style>