<template>

  <div class="title"> 
    <h1 class="animate__animated animate__flipInX">I'm Fabian,</h1>   
    <h2 class="animate__animated animate__slideInLeft"
      > I'm a backend developer</h2>
  </div>
<!-- 
  <div>
    <button @click="show"> 
      Press Here
    </button>

    <p v-if="visible">
      I'm self-tought software developer from Mexico and I am passionate about coding in languajes like JS and Python.
    </p>
  </div> -->

</template>

    
<script lang="ts">
import 'animate.css';
import { defineComponent } from 'vue'

export default defineComponent({

  data() {
    return {
      visible: false
    }
  },
  methods: {
    show(){
      this.visible = !this.visible;
    }
  }
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
  z-index: 20;
  color: wheat;
  text-align: left;
  padding: 30px 0 0 15%;
  font-size: 33px;
  font-family: 'Righteous', cursive;
}
</style>
