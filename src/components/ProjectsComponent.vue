<template>

    <div>
        <h1>This Is A Page About My Projects</h1>
        <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet consequuntur obcaecati, illo quo nostrum quisquam, quaerat similique incidunt assumenda optio eaque, pariatur non aliquam repellendus iste. Quos accusantium asperiores minus!
        </div>
        <div id="cards-cointainer">
            <div class="cards-elements" 
                v-for="project in displayProjects()" 
                :key="project">

                    {{project}}
                    
            </div>
        </div>
    </div>
    
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'ProjectsComponent',
    data() {
        return {
            listOfProjects: this.displayProjects(),
            x: 'awdwad'
        }
    },
    computed: {
        getData() {
            return this.$store.getters.getProjects;
        }
    },
    methods: {
        displayProjects() {
            return this.getData;
        }
    }
})
</script>

<style scoped>
#cards-cointainer{
    border: 2px burlywood solid;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    padding: 20px;
    margin: 10%;
}
.cards-elements{
    display: grid;
    padding: 10px;
    border: 2px solid rgb(49, 43, 43);
}
</style>