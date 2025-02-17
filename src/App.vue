<script>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>

  <!-- Hovedmenu -->
  <nav class="fixed flex flex-wrap px-4 md:ml-20 top-2 w-full md:w-[96vw] gap-4 md:gap-10 elite font-bold text-blå">
    <RouterLink 
        to="/" 
        class="scale-y-[-1] text-lg md:text-2xl hover:text-blå tracking-widest">
        HELLO WORLD
    </RouterLink>
    
    <RouterLink 
        to="/projects" 
        class="text-lg md:text-2xl tracking-widest hover:text-blå">
        WORK
    </RouterLink>
    
    <RouterLink 
        to="/about" 
        class="text-lg md:text-2xl tracking-widest hover:text-blå">
        ABOUT
    </RouterLink>
</nav>
  <RouterView/>


</template>

<style>



</style>