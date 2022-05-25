<template>

    <div class="body">
        <h1>This Is A Page About My Projects</h1>
        <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet consequuntur obcaecati, illo quo nostrum quisquam, quaerat similique incidunt assumenda optio eaque, pariatur non aliquam repellendus iste. Quos accusantium asperiores minus!
        </div>
        <div id="cards-cointainer">
            <div class="cards-elements" 
                v-for="project in displayProjects()" 
                :key="project.name">
                
                <figure>

                    <h3>
                        {{project.name}}
                    </h3>

                    <img
                        :src="require(`./../assets/${project.img}.png`)"
                        class="image"
                        alt="test">
                </figure>
                <div>
                    <div class="links">
                        <div>
                            <b>Link: </b><a :href="project.link" target="_top">
                                click
                            </a> 
                        </div>

                        <div>
                            <b>Code: </b><a :href="project.repository" target="_blank">
                                click
                            </a>
                        </div>

                    </div>
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
.body {
    color: whitesmoke;
    background-image: linear-gradient(to right, #000000, #434343);
    background-color: #262626;
}

#cards-cointainer{
    background-color: whitesmoke;
    border-radius: 4px;
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
    max-width: 60%;
}
.image:hover {
    transform: scale(1.06);
    cursor: pointer;
}
a {
    text-decoration: none;
    color:rgb(2, 10, 22);
}
.links{
    display: flex;
    justify-content: space-evenly;
}
</style>