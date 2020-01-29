<template>
  <div class="container mt-5">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <cardHome/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import cardHome from '@/components/cardHome'
export default {
  name: 'home',
  components: {
    HelloWorld,
    cardHome
  }
}
</script>
