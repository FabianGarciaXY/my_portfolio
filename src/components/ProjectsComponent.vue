<template>

    <div class="body">
        <h1>My Projects</h1>
        <div id="cards-cointainer">
            <div class="cards-element" 
                v-for="project in displayProjects()" 
                :key="project.id_el"
                >

                <h3>
                    {{project.name}}
                </h3>
                
                <div class="data-container">

                    <div class="figure">

                        <div class="links">
                            <div>
                                <button class="button">
                                    <a :href="project.link" target="_blank">
                                        Preview
                                    </a>
                                </button>
                            </div>
                            <div>
                                <button class="button">
                                    <a :href="project.repository" target="_blank">
                                        Code
                                    </a>
                                </button>
                            </div>
                        </div>
                        <img class="image"
                            :src="require(`./../assets/${project.img}.png`)"
                            alt="test">
                    </div>

                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
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
         title: 'My projects',
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
h1{
    padding:50px 0 0 0;
}
h3 {
    padding: 10px 0 20px 0;
    text-shadow: 0px 0px 1px;
}

#cards-cointainer{
    color: black;
    background-color: whitesmoke;
    border-radius: 4px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 50px;
    margin: 8%;
    box-shadow: 5px 10px 15px 2px rgba(0,0,0,0.5);
}
.cards-element{
    border-radius: 10px;
    display: grid;
    padding: 20px;
    border-radius: 7px;

    position: relative;
    overflow: hidden;
    box-shadow: 0px 0.5px 1px rgba(0,0,0,0.3);
    transition: box-shadow 0.3s ease-out;
}
.cards-element:hover{
    box-shadow: 1px 3px 10px rgba(0,0,0,0.5);
}

.figure {
    border-radius: 5px;
    width: 35%;
    height: auto;
    position: relative;
    background-color: rgb(30, 30, 30);
    z-index: 1;
    overflow: hidden;
}

/* .figure:hover {
    cursor: pointer;
    filter: brightness(0.6);
    box-shadow: 1px 2px 10px rgb(255, 255, 255);
} */
.image {
    position: relative;
    z-index: 1;
    width: 100%;
    background-color: black;
    border-radius: 10px;
}

.data-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
}
.links{
    padding: 10px 0;
    z-index: 3;
    display: flex;
    justify-content: center;
    height: 40%;
    margin-top: 0px;
    display: flex;
    gap:  20px;
}

.button {
    opacity: 0.4;
    cursor: pointer;
    padding: 6px;
    width: 100px;
    background-color: rgba(0, 0, 0, 0.263);
    color: white;
    border-radius: 3px;
}

.button:hover {
    opacity:1;
    transition: 0.5s;
}

a {
    text-decoration: none;
    color: rgb(252, 255, 254);
}
</style>