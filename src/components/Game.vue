<template>
    <div class="game container-fluid">
        <div class="text-white" v-if="currentGame.winner">
            <h1 v-if="currentGame.winner.name == setPlayer.name">Winner!</h1>
            <h1 v-else>Loser!</h1>
        </div>
        <div v-if="currentGame.id">
            <div class="row">
                    <div class="col-sm-2 card opponent" v-for="card in currentGame.players[1].hand" :key="card.id">
                        <div v-if="card.visible" @click="selectCpuCard(currentGame.players[1].id, card.id)">
                                <h2>{{card.name}}</h2>
                                <p>Health: {{card.health}}</p>
                                <p>Attack: {{card.attack}}</p>
                                <p>Defense: {{card.defense}}</p>
                                <img :src="card.img" alt="">
                            
                        </div>
                        <div v-else>
                            <img class="cardback" src="../assets/cardback.jpg" @click="selectCpuCard(currentGame.players[1].id, card.id)" alt="">
                        </div>




                </div>

            </div>

            <div class="row fight">
                <div class="col">

                    <button @click="fight">Fight!</button>
                </div>
            </div>

            <div class="row">
                <div class="col-sm-2 card hero" v-for="card in currentGame.players[0].hand" :key="card.id">
                    <div class="hero-card" @click="selectPlayerCard(currentGame.players[0].id, card.id)">
                        <h2>{{card.name}}</h2>

                        <p>Health: {{card.health}}</p>
                        <p>Attack: {{card.attack}}</p>
                        <p>Defense: {{card.defense}}</p>
                        <img :src="card.img" alt="">
                    </div>
                </div>

            </div>
        </div>



    </div>
</template>

<script>

    export default {
        name: "Game",
        props: ['id'],
        mounted() {
            if (!this.$store.state.newGame.id) {
                this.$store.dispatch('getGame', this.id)
            }
        },
        data() {
            return {
                attack: {
                    playerId: "",
                    playerCardId: "",
                    opponentId: "",
                    opponentCardId: ""
                },
                isActive: ""



            }
        },
        computed: {
            currentGame() {
                return this.$store.state.newGame

            },

            setPlayer() {
                return this.$store.state.activePlayer
            }

        },
        methods: {
            selectPlayer() {
                this.$store.dispatch("selectPlayer", player)
            },
            selectPlayerCard(pId, pcId) {
                this.attack.playerId = pId
                this.attack.playerCardId = pcId

            },
            selectCpuCard(cId, ccId) {
                this.attack.opponentId = cId
                this.attack.opponentCardId = ccId
                // this.visible = true
            },
            fight() {
                this.$store.dispatch("attack", this.attack)
            },
            revealCard() {

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

    .card:hover {
        border: 3px solid #f9f9f9;
        background-color: #f9f9f938;
    }

    .opponent {
        border: 5px solid crimson;
    }

    .hero {
        border: 5px solid skyblue;
    }

    /* .opponents-card{
        border: 3px solid #f9f9f9;
        background-color: #f9f9f938;
    } */

    p {
        font-family: 'Freckle Face', cursive;
    }

    h2 {
        font-family: 'Freckle Face', cursive;
    }

    .isActive {
        border: 5px solid blue;
    }

    .cardback {
        width: 200px;
        height: 300px;
    }
</style>