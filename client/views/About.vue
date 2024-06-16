<template>
  <div>
    <Header />
    <main>
      <h1>About Galactic Vault</h1>
      <p>Galactic Vault is a platform that allows users to explore the vastness of space and discover new worlds.</p>
      <ul>
        <li>Robotic Process Automation (RPA) for automating repetitive tasks</li>
        <li>Document Data Extraction for extracting relevant information from documents</li>
        <li>Workflow Tools for streamlining processes and improving collaboration</li>
        <li>AI Assistants for providing personalized support to users</li>
        <li>Low-Code Applications for rapidly developing and deploying applications</li>
      </ul>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

// reactive state
const features = ref([
  'Robotic Process Automation (RPA) for automating repetitive tasks',
  'Document Data Extraction for extracting relevant information from documents',
  'Workflow Tools for streamlining processes and improving collaboration',
  'AI Assistants for providing personalized support to users',
  'Low-Code Applications for rapidly developing and deploying applications',
])

// lifecycle hooks
onMounted(() => {
  console.log(`The features of Galactic Vault are: ${features.value}.`)
})
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  margin-bottom: 10px;
}
</style>
