<template>
  <div class="home">
    <TopComponent/>
    <ConsoleComponent/>
  </div>
</template>



<script lang="ts">
import TopComponent from '@/components/TopComponent.vue'; // @ is an alias to /src
import ConsoleComponent from '@/components/ConsoleComponent.vue'

export default {
  name: 'HomeView',
  components: {
    TopComponent,
    ConsoleComponent
  }
}

</script>

<style> 
* {
  background-color: rgb(31, 31, 30);
  color: rgb(235, 235, 211);
}

</style>
