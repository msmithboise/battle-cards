<template>
<div >
<h1>hello</h1>
<button @click="getCards()">Test</button>
</div>
</template>


<script>


export default {
  name: 'home',
   data() {
     return {
      cardName: ''
     };
   },
   computed: {

   },
   methods: {
     
     getCards() {
       this.$store.dispatch("getCards", this.cardName)
     }
   }
   
  }

</script>