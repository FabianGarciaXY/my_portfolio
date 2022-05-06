<template>
  <div class="home">
    <Top msg="Hi, this will be my portfolio"/>
  </div>
</template>



<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Top from '@/components/Top.vue'; // @ is an alias to /src

@Options({
  components: {
    Top,
  },
})
export default class HomeView extends Vue {}
</script>

<style> 
* {
  background-color: rgb(31, 31, 30);
  color: rgb(235, 235, 211);
}

</style>
