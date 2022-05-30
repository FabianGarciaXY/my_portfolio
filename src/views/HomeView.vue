<template>
  
  <div class="home">
      <TopComponent class="top"/>
      <ConsoleComponent class="console"/>

    <!--<div class="background">
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
    </div> -->

      <div id="about">
        <about-component />
      </div>

      <div class="projects-page">
        <projects-component />
      </div>
  
  </div> 

</template>



<script lang="ts">
import { defineComponent } from 'vue';
import TopComponent from '@/components/TopComponent.vue'; // @ is an alias to /src
import ConsoleComponent from '@/components/ConsoleComponent.vue'
import AboutComponent from '@/components/AboutComponent.vue';
import ProjectsComponent from '@/components/ProjectsComponent.vue'


export default defineComponent({
  name: 'HomeView',
  components: {
    TopComponent,
    ConsoleComponent,
    AboutComponent,
    ProjectsComponent
  }, 

  data() {
    return {
      colors: ["#F9F3EE", "#CCF3EE", "#F7F5F2", "#E2D784", "#FDEFF4"],
      numBalls: 20,
      balls: [],
    }
  },
  methods: {

    // Metodo para crear las esferas
    createBalls() {
      for (let i = 0; i < this.numBalls; i++) {
        let ball = document.createElement("div");
        ball.classList.add("ball");
        ball.style.background = this.colors[Math.floor(Math.random() * this.colors.length)];
        ball.style.left = `${Math.floor(Math.random() * 90)}vw`;
        ball.style.top = `${Math.floor(Math.random() * 80)}vh`;
        ball.style.transform = `scale(${Math.random()})`;
        ball.style.width = `${Math.random()}em`;
        ball.style.height = ball.style.width;
        ball.style.boxShadow = `0px 0px ${Math.random()}px ${Math.random()}px whitesmoke`
        this.balls.push(ball);
        document.querySelector('.home').append(ball);
      }
    },

    // Keyframes para animar las esferas
    animateBalls() {
      this.balls.forEach((el, i) => {
        let to = {
          x: Math.random() * (i % 2 === 0 ? -11 : 11),
          y: Math.random() * 12
        };

        el.animate(
          [
            { transform: "translate(0, 0)" },
            { transform: `translate(${to.x}rem, ${to.y}rem)` }
          ],
          {
            duration: (Math.random() + 1) * 2000, // random duration
            direction: "alternate",
            fill: "both",
            iterations: Infinity,
            easing: "ease-in-out"
          }
        );
      });
    }
  },
  mounted() {
    this.createBalls();
    this.animateBalls();
  }
});
</script>


<style>
.home, .console{
/*  background-image: linear-gradient(180deg, #232526, #414345); */
  background-color: #151515;
  width: 100vw;
  height: 100vh;
}
.ball {
  position: absolute;
  border-radius: 50%;
  opacity: 0.7;
  z-index: 1;
}

/* ABOUT  */
#about {
  
}

/* PROJECTS */
.projects-page{
  color: black;
  background-color: white;
  position: absolute;
}

/* Animated Background */
/*
.background {
  background-color: rgb(31, 31, 30);
  position: absolute;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  padding:0;
  margin:0px;
}   
.cube {
  position: absolute;
  overflow: hidden;
  top: 80vh;
  left: 45vw;
  width: 10px;
  height: 10px;
  border: solid 1px #ffffff11;
  transform-origin: top left;
  transform: scale(0) rotate(0deg) translate(-50%, -50%);
  animation: cube 12s ease-in forwards infinite;
}
.cube:nth-child(2n) {
  border-color: rgba(215, 238, 234, 0.075) ;
}
.cube:nth-child(2) {
  animation-delay: 12s;
  left: 25vw;
  top: 40vh;
}
.cube:nth-child(3) {
  animation-delay: 5s;
  left: 75vw;
  top: 50vh;
}
.cube:nth-child(4) {
  animation-delay: 3s;
  left: 90vw;
  top: 10vh;
}
.cube:nth-child(5) {
  animation-delay: 8s;
  left: 10vw;
  top: 85vh;
}
.cube:nth-child(6) {
  animation-delay: 10s;
  left: 50vw;
  top: 10vh;
}
*/
/* Animate Background
@keyframes cube {
  from {
    transform: scale(0) rotate(0deg) translate(-50%, -50%);
    opacity: 1;
  }
  to {
    transform: scale(20) rotate(960deg) translate(-50%, -50%);
    opacity: 0;
  }
}
*/
</style>
