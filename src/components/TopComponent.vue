<template>
  <div class="title"> 
    <h1 class="animate__animated animate__flipInX">I'm Fabian,</h1>   
    <h2 class="animate__animated animate__slideInLeft"
      > I'm a backend developer</h2>
  </div>
</template>

    
<script lang="ts">
import 'animate.css';
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TopComponent'
})
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
/*     font-family: 'Righteous', cursive;   */
@import url('https://fonts.googleapis.com/css2?family=Baloo+Da+2:wght@500&display=swap');
/*  font-family: 'Baloo Da 2', cursive; */
@import url('https://fonts.googleapis.com/css2?family=Iceland&display=swap');
/*    font-family: 'Iceland', cursive;  */

.title {
  text-shadow: 10px 12px 4px black;
  z-index: 20;
  color: white;
  text-align: left;
  padding: 0px 0 0 17%;
  font-size: 33px;
  font-family: 'Righteous', cursive;
}
</style>
