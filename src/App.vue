<template>
  <nav>
    <router-link to="/">Home</router-link> 
    <router-link to="/projects">Projects</router-link>
  </nav>

  <router-view/>
</template>

<style>
* {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
nav {
  display: flex;
  gap: 10px;
  list-style: none;
  justify-content: flex-end;
  padding: 20px 50px 10px 0;
  background-image: linear-gradient(to right, rgb(11, 11, 12), rgb(11, 30, 45));
}
nav > * {
  text-decoration-line: none;
  color: rgb(255, 255, 255);
}
</style>
