<template>
  <nav>
    <router-link to="/">Home</router-link> 
    <router-link to="/projects">Projects</router-link>
  </nav>

  <router-view/>
</template>


<style>
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
  padding: 10px 50px 0 0;
}
nav > * {
  text-decoration-line: none;
  color: rgb(210, 202, 120);
}
</style>
