<script>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>

  <!-- Hovedmenu -->
  <nav class="flex ml-20 top-2 relative gap-10 w-[96vw] justify-items-left elite font-bold text-blå">
  

  <RouterLink to="/" class="scale-y-[-1] eltie font-bold text-2xl hover:text-blue-600 tracking-widest ">HELLO WORLD</RouterLink>
  <RouterLink to="/projects" class="elite font-bold tracking-widest hover:text-blue-600 text-2xl ">WORK</RouterLink>
  <RouterLink to="/about" class="elite font-bold tracking-widest hover:text-blue-600 text-2xl">ABOUT</RouterLink>
  
  </nav>

  <!-- Project view  -->
  <RouterView/>


</template>

<style>



</style>