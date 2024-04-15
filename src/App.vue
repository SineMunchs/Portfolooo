<script>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>

  <!-- Hovedmenu -->
  <nav class="flex ml-20 top-2 relative gap-10 w-[96vw] justify-items-left elite font-bold text-blå">
  

  <RouterLink to="/" class="scale-y-[-1] eltie font-bold text-2xl hover:text-blue-600 ">HELLO WORLD</RouterLink>
  <RouterLink to="/about" class="elite font-bold hover:text-blue-600 text-2xl">ABOUT</RouterLink>
  <RouterLink to="/project" class="elite font-bold hover:text-blue-600 text-2xl ">WORK</RouterLink>  
  </nav>

  <!-- Project view  -->
  <RouterView/>


</template>

<style>



</style>