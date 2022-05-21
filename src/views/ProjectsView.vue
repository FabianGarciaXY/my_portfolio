<template>
  <div class="projects-page">
    <projects-component />
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import ProjectsComponent from '@/components/ProjectsComponent.vue'

export default defineComponent({
  components: {
    ProjectsComponent
  }
})
</script>


<style>
.projects-page{
  width: 100vw;
  height: 100vh;
  background-color: rgb(255, 244, 244);
}
</style>
