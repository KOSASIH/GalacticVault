<template>
  <div>
    <Header />
    <main>
      <h1>Welcome to Galactic Vault</h1>
      <p>This is the home page of Galactic Vault, where you can explore the vastness of space and discover new worlds.</p>
      <button @click="count++">Count is: {{ count }}</button>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

// reactive state
const count = ref(0)

// functions that mutate state and trigger updates
function increment() {
  count.value++
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

button {
  font-weight: bold;
  margin-top: 20px;
}
</style>
