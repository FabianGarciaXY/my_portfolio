<template>

  <nav>
    <a href="#">Home</a> 
  </nav>
  <router-view/>

</template>

<style>
@import url(https://fonts.googleapis.com/css?family=Anonymous+Pro);


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
  font-family: 'Anonymous Pro', monospace;  
  font-size: 20px;
  font-weight: bold;
  position: fixed;
  display: flex;
  gap: 10px;
  list-style: none;
  justify-content: flex-start;
  padding: 20px 0px 0 50px;
  background-color: #151515;
}
nav > * {
  text-decoration-line: none;
  color: rgb(255, 255, 255);
}

a:hover {
  text-shadow: 1px 5px 13px white;
}
</style>
