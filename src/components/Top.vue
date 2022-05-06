<template>

  <div class="Nav animate__animated animate__bounce"> Hi, i'm Fabian, I'm a backend developer_
  </div>

  <button @click="show"> 
  Press Here
  </button>

  <p v-if="visible">
  I'm self-tought software developer from Mexico and I am passionate about coding in languajes like JS and Python. I'm enrolled in a engineering in Computer Systems which has provided me knowledge to desing systems with an analytical approach. I'm interested also in software testing because I believe quality is one of the main properties of a product.
  </p>

</template>

    
    
<script lang="ts">

import 'animate.css';
import { Options, Vue } from 'vue-class-component';

@Options({
  methods: {
    show: function() {
      this.visible = !this.visible
    }
  }
})

export default class Top extends Vue {
  data() {
    return {
      visible: false
    }
  }
}

</script>




<style scoped>
.Nav {
  padding: 100px 0px;
  font-size: 50px;
}
</style>
