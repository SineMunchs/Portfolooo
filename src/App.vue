<script>
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  setup() {
    const isScrolled = ref(false)
    const navBarClass = ref('text-blå')

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 50
      
 
      const elementsUnderNav = document.elementsFromPoint(
        window.innerWidth / 2, 
        80 
      )
      
      const isOverBlueText = elementsUnderNav.some(el => {
        const style = window.getComputedStyle(el)
        return style.color === 'rgb(0, 0, 255)' || style.color === '#0000ff' || el.classList.contains('text-blå')
      })
      
    
      if (isScrolled.value) {
        navBarClass.value = isOverBlueText ? 'text-red-600' : 'text-blå'
      } else {
        navBarClass.value = 'text-blå'
      }
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
      // Initial check
      handleScroll()
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      navBarClass
    }
  }
}
</script>

<template>
  <!-- Hovedmenu -->
  <nav :class="['fixed flex flex-wrap px-4 md:ml-20 top-2 w-full md:w-[96vw] gap-4 md:gap-10 elite font-bold transition-colors duration-300', navBarClass]">
    <RouterLink
      to="/"
      class="scale-y-[-1] text-lg md:text-2xl tracking-widest"
      :class="{ 'hover:text-red-800': navBarClass.includes('text-red'), 'hover:text-blå': !navBarClass.includes('text-red') }">
      HELLO WORLD
    </RouterLink>
    
    <RouterLink
      to="/projects"
      class="text-lg md:text-2xl tracking-widest"
      :class="{ 'hover:text-gray-600': navBarClass.includes('text-black'), 'hover:text-blå': !navBarClass.includes('text-black') }">
      WORK
    </RouterLink>
    
    <RouterLink
      to="/about"
      class="text-lg md:text-2xl tracking-widest"
      :class="{ 'hover:text-gray-600': navBarClass.includes('text-black'), 'hover:text-blå': !navBarClass.includes('text-black') }">
      ABOUT
    </RouterLink>
  </nav>

  <RouterView />
</template>

<style>


.text-red-600 {
  color: #acb5e0; 
}

.hover\:text-red-800:hover {
  color: #acb5e0; 
}

nav {
  transition: color 0.3s ease;
}
</style>