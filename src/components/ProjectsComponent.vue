<template>

    <div>
        <h1>This Is A Page About My Projects</h1>
        <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet consequuntur obcaecati, illo quo nostrum quisquam, quaerat similique incidunt assumenda optio eaque, pariatur non aliquam repellendus iste. Quos accusantium asperiores minus!
        </div>
        <div id="cards-cointainer">
            <div class="cards-elements" 
                v-for="project in displayProjects()" 
                :key="project.name">
                
                <figure>
                    <img
                        :src="require(`./../assets/${project.img}.png`)"
                        class="image"
                        alt="test">
                </figure>
                <div>
                    
                    <a :href="project.link" target="_blank">
                        Link
                    </a> <br>
                    
                    <a :href="project.repository" target="_blank">
                        Code
                    </a>

                    <h3>
                        {{project.name}}
                    </h3>

                </div>    
                    
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
         title: 'My projects'
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
    border-radius: 7px;
}
.image {
    max-width: 50%;
}
.image:hover {
    transform: scale(1.06);
    cursor: pointer;
}

</style>