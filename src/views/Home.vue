<template>
  <div class="home">
    <img alt="Cat logo" src="../assets/cat.jpg" id="cat-logo">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Cats/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Cats from '@/components/Cats.vue'

export default {
  name: 'home',
  components: {
    Cats
  }
}
</script>

<style scoped>
#cat-logo {
  max-width: 300px;
}
</style>