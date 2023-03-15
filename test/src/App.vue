<script setup>
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'

const msg = ref('You did it!')
const clickMsg = () => {
  // msg.value += '1'
}
</script>

<template>
  <header>
    <img
      v-window="'image'"
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
      style="margin-top: 100px"
    />

    <div v-window="'message'">{{ msg }}</div>

    <div class="wrapper" v-window="'message'">
      <HelloWorld v-window="'message'" @click="clickMsg" :msg="msg" style="padding: 50px" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

/* .logo {
  display: block;
  margin: 0 auto 2rem;
} */
</style>
