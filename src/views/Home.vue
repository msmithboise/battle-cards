<template>
<div >
<h1>hello</h1>
<button @click="getGames()">Test</button>
<div v-if="games">
<p v-for="game in games">
  {{game._id}}
</p>
<!-- the  -->
</div>
</div>
</template>


<script>


export default {
  name: 'home',
   data() {
     return {
      // gameConfig object goes here
     };
   },
   computed: {
     // computed watches for this change in the state.
     games() {
       return this.$store.state.allGames
     }

   },
   methods: {
     // dispatches to an action.  starting a method and handing it some type of information
     getGames() {
       this.$store.dispatch("getGames")
     }
   }
   
  }
// start in store, handle your data.  figure out how you're gonna change the state, 
// create where i put it in the state
// create mutation
// create an action that will call the mutation, this is where u make api calls
// now there needs to be some method will call an action (dispatch) to start the process
//
</script>

