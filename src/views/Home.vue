<template>
  <div>
    <h1>hello</h1>
    <button @click="getGames()">get game</button>
    <button @click="createGame()">new game</button>
    <div>
      <p>
        {{gameConfig}}
      </p>
    </div>
    <!-- if there are "games" currently in the state []... -->
    <div v-if="games">
<!-- loop through all games located in the state [] and return all game id's -->
      <p v-for="game in games">
        <!-- "game is our new variable we made up after loop" -->
        {{game._id}}
      </p>
      <!-- the  -->
    </div>
    <div>
      <!-- <game/> -->
    </div>
  </div>
</template>


<script>

// import Game from '../components/Game.vue'
  
export default {
  // by exporting this, other componenents have access to it's contents
    name: 'home',
    data() {
      return {
        "gameConfig": {
          "playerName": "",
          "opponents": 1,
          "set": 2
        }
      }
      // gameConfig object goes here
    
  },
  computed: {
    // computed watches for this change in the STATE.
    games() {                   
      return this.$store.state.allGames
    },
    currentGame(){
      return this.$store.state.newGame
    }

  },
  methods: {
    // dispatches to an ACTION.  starting a method and handing it some type of information
    getGames() {
      this.$store.dispatch("getGames")
    },

    createGame() {
      this.$store.dispatch('createGame')
    }



  },
  components:{
    // this gives access of other components to the current component i'm in.
    // Game
  }
   
  }
// start in store, handle your data.  figure out how you're gonna change the state, 
// create where i put it in the state
// create mutation
// create an action that will call the mutation, this is where u make api calls
// now there needs to be some method will call an action (dispatch) to start the process
//
</script>