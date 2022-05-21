<template>

  <div class="title animate__animated animate__bounce"> 
    <h1>I'm Fabian, <br>   
    &lt; I'm a backend developer >_ </h1>
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
  color: wheat;
  text-align: left;
  padding: 0px 0 0 15%;
  font-size: 33px;
  font-family: 'Righteous', cursive;
}
</style>
