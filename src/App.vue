<script>
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'
import { ref, onMounted, onUnmounted, watch } from 'vue'

export default {
  setup() {
    const isScrolled = ref(false)
    const navBarClass = ref('text-blå')
    const navbarElement = ref(null)
    const router = useRouter()
    const route = useRoute()

    // Function to handle WORK link click
    const handleWorkClick = (event) => {
      // If we're already on the projects page, prevent default navigation
      // and force a hard reload of the page
      if (route.path === '/projects') {
        event.preventDefault()
        
        // Use window.location.reload() to force a complete page refresh
        // This is more forceful than router navigation and will reset all components
        window.location.reload()
      }
    }

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 50
      
      if (!navbarElement.value) return

      // Get the bounding rectangle of the navbar
      const navRect = navbarElement.value.getBoundingClientRect()
      
      // Check multiple points along the navbar to better detect what's underneath
      const checkPoints = [
        { x: navRect.left + 100, y: navRect.top + navRect.height / 2 },
        { x: navRect.left + navRect.width / 2, y: navRect.top + navRect.height / 2 },
        { x: navRect.right - 100, y: navRect.top + navRect.height / 2 }
      ]
      
      // Check elements under multiple points of the navbar
      let foundBlue = false
      let foundRed = false
      let foundBlack = false
      let foundWhite = false
      
      for (const point of checkPoints) {
        const elementsUnder = document.elementsFromPoint(point.x, point.y)
        
        // Skip the navbar itself and look at elements underneath
        const elementsUnderNav = elementsUnder.filter(el => !navbarElement.value.contains(el) && el !== navbarElement.value)
        
        if (elementsUnderNav.length === 0) continue
        
        // Check the background color of the top element under the navbar
        const topElement = elementsUnderNav[0]
        const style = window.getComputedStyle(topElement)
        const backgroundColor = style.backgroundColor
        const color = style.color
        
        // Check for blue elements
        if (color === 'rgb(0, 0, 255)' || color === '#0000ff' || 
            topElement.classList.contains('text-blå') ||
            backgroundColor === 'rgb(0, 0, 255)' || backgroundColor === '#0000ff') {
          foundBlue = true
        }
        
        // Check for black backgrounds
        if (backgroundColor === 'rgb(0, 0, 0)' || backgroundColor === '#000000' ||
            backgroundColor.startsWith('rgba(0, 0, 0')) {
          foundBlack = true
        }
        
        // Check for white backgrounds
        if (backgroundColor === 'rgb(255, 255, 255)' || backgroundColor === '#ffffff' ||
            backgroundColor.startsWith('rgba(255, 255, 255')) {
          foundWhite = true
        }
        
        // Check for red elements
        if (color === 'rgb(255, 0, 0)' || color === '#ff0000' ||
            backgroundColor === 'rgb(255, 0, 0)' || backgroundColor === '#ff0000') {
          foundRed = true
        }
      }
      
      // Set the appropriate class based on what's found underneath
      if (isScrolled.value) {
        if (foundBlack || foundWhite) {
          navBarClass.value = 'text-acb5e0'
        } else if (foundBlue || foundRed) {
          navBarClass.value = 'text-blå'
        } else {
          // Default color when scrolled
          navBarClass.value = 'text-blå'
        }
      } else {
        // Default color when at top
        navBarClass.value = 'text-blå'
      }
    }
    
    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
      // Run on window resize as well
      window.addEventListener('resize', handleScroll)
      // Initial check
      setTimeout(() => {
        handleScroll()
      }, 100) // Small delay to ensure DOM is fully loaded
    })
    
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    })
    
    return {
      navBarClass,
      navbarElement,
      handleWorkClick
    }
  }
}
</script>

<template>
  <!-- Hovedmenu -->
  <nav 
    ref="navbarElement"
    :class="[
      'fixed flex flex-wrap px-4 top-2 w-full md:w-[96vw] gap-4 md:gap-10 elite font-bold transition-colors duration-300', 
      navBarClass
    ]"
  >
    <RouterLink
      to="/"
      class="scale-y-[-1] text-lg md:text-xl tracking-widest cursor-pointer"
      :class="{
        'hover:text-acb5e0': navBarClass.includes('text-blå'),
        'hover:text-blå': navBarClass.includes('text-acb5e0')
      }"
    >
      HELLO WORLD
    </RouterLink>
    
    <RouterLink
      to="/projects"
      class="text-lg md:text-xl tracking-widest cursor-pointer"
      :class="{
        'hover:text-red-800': navBarClass.includes('text-red'),
        'hover:text-blue-800': navBarClass.includes('text-blå'),
        'hover:text-gray-300': navBarClass.includes('text-white'),
        'hover:text-gray-600': navBarClass.includes('text-black')
      }"
      @click="handleWorkClick"
    >
      WORK
    </RouterLink>
    
    <RouterLink
      to="/about"
      class="text-lg md:text-xl tracking-widest cursor-pointer"
      :class="{
        'hover:text-blue-800': navBarClass.includes('text-blå'),
        'hover:text-gray-300': navBarClass.includes('text-white'),
        'hover:text-gray-600': navBarClass.includes('text-black')
      }"
    >
      ABOUT
    </RouterLink>
  </nav>

  <RouterView />
</template>

<style>
.text-acb5e0 {
  color: #acb5e0;
}

.hover\:text-acb5e0:hover {
  color: #acb5e0;
}

nav {
  transition: color 0.3s ease;
  z-index: 100;
}

/* Ensure all interactive elements show pointer cursor */
.router-link-active, .router-link-exact-active, a[href], a {
  cursor: pointer;
}
</style>