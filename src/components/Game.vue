<template>
    <div class="game">
        <div>

        </div>
game


    </div>
</template>

<script>
export default {
    name: "Game",
    data(){
        return{

        }
    },
    computed:{
        currentGame(){
      return this.$store.state.newGame
      
    }
    }
    
}
</script>

<style>

</style>

