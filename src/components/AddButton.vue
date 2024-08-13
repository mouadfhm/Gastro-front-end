<template>
    <v-btn color="teal" dark class="mt-5" @click="addGeste">Ajouter un geste</v-btn>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  
  const addGeste = () => {
    router.push('/GesteFormPage')  // Use the correct path or route name
  }
  </script>
  
