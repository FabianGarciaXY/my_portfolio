<template>
  <div class="home">
    <TopComponent msg="Hi, this will be my portfolio"/>
  </div>
</template>



<script lang="ts">
import TopComponent from '@/components/TopComponent.vue'; // @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    TopComponent
  }
}

</script>

<style> 
* {
  background-color: rgb(31, 31, 30);
  color: rgb(235, 235, 211);
}

</style>
