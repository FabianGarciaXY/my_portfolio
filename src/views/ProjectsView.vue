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


<style scoped>
.projects-page{
  color: whitesmoke;
  background-image: linear-gradient(to right, #000000, #434343);
  background-color: #262626;
  position: absolute;
}
</style>
