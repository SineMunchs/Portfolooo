<!-- ProjectDropdown.vue -->
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    tags: {
      type: String,
      default: ""
    },
    video: {
      type: String,
      default: null
    },
    image: {
      type: String,
      default: null
    },
    thumbnail: {
      type: String,
      default: "/images/face.svg"
    },
    description: {
      type: String,
      default: 'Project description goes here.'
    },
    date: {
      type: String,
      default: '01/01/2024'
    },
    category: {
      type: String,
      default: 'Project'
    },
    galleryItems: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen
    },
    isVideo(path) {
      return path && (path.endsWith('.mp4') || path.endsWith('.webm') || path.endsWith('.ogg'))
    }
  }
}
</script>

<template>
  <div>
    <!-- Project Header Row - Always visible -->
    <div class="border-b border-blå p-1 grid grid-cols-2 md:grid-cols-4 cursor-pointer" @click="toggleDropdown">
      <!-- Date Column - Hidden on mobile -->
      <div class="hidden md:block elite text-blå pl-2">{{ date }}</div>
      
      <!-- Category Column - Hidden on mobile -->
      <div class="hidden md:block elite text-blå">{{ category }}</div>
      
      <!-- Title Column - Takes full width on mobile -->
      <div class="elite text-blå col-span-1 md:col-span-1">{{ title }}</div>
      
      <!-- Thumbnail Column (right) -->
      <div class="flex items-center justify-end">
        <img 
          :src="thumbnail" 
          :alt="title" 
          class="h-8 w-8 object-contain"
        >
      </div>
    </div>

    <!-- Dropdown Content - Only visible when expanded -->
    <transition name="slide">
      <div v-if="isOpen" class="bg-white">
        <div class="p-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Project Header -->
            <div class="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 mb-4">
              <!-- Text -->
              <div>
                <div class="elite text-blå text-4xl md:text-6xl tracking-widest">{{ title }}</div>
                <!-- Mobile-only display for date and category -->
                <div class="flex flex-col md:hidden mt-2">
                  <span class="elite text-blå text-sm">{{ date }}</span>
                  <span class="elite text-blå text-sm">{{ category }}</span>
                </div>
              </div>
              
              <!-- Small Video/Image -->
              <div class="justify-self-start md:justify-self-end mt-4 md:mt-0">
                <video 
                  v-if="video" 
                  class="object-cover h-32 w-full md:h-40 md:w-60" 
                  autoplay 
                  loop 
                  muted
                >
                  <source :src="video" type="video/mp4">
                </video>
                <img 
                  v-else-if="image" 
                  :src="image" 
                  :alt="title" 
                  class="object-cover h-32 w-full md:h-40 md:w-60"
                >
              </div>
            </div>
            
            <!-- Project Description -->
            <div class="col-span-1 md:col-span-2">
              <p class="mb-4">{{ description }}</p>
            </div>
            
            <!-- Project Content -->
            <div class="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <!-- Left Column - Tags -->
              <div>
                <h3 class="elite text-blå text-xl md:text-2xl mb-2">Technologies</h3>
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="(tag, index) in tags.split(',')" 
                    :key="index" 
                    class="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded mb-1"
                  >
                    {{ tag.trim() }}
                  </span>
                </div>
              </div>
              
              <!-- Right Column - Full Size Video/Image -->
              <div class="mt-4 md:mt-0">
                <video 
                  v-if="video" 
                  class="w-full object-cover border border-gray-200" 
                  controls
                >
                  <source :src="video" type="video/mp4">
                </video>
                <img 
                  v-else-if="image" 
                  :src="image" 
                  :alt="title" 
                  class="w-full object-cover border border-gray-200"
                >
              </div>
            </div>
            
            <!-- Gallery Section (if items exist) -->
            <div v-if="galleryItems && galleryItems.length > 0" class="col-span-1 md:col-span-2">
              <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
                <div 
                  v-for="(item, index) in galleryItems" 
                  :key="index"
                  class="w-full h-32 md:h-40"
                >
                  <!-- Video (GIF-style) -->
                  <video 
                    v-if="isVideo(item)" 
                    class="w-full h-full object-cover border border-gray-100" 
                    autoplay
                    loop
                    muted
                    playsinline
                  >
                    <source :src="item" type="video/mp4">
                  </video>
                  
                  <!-- Image -->
                  <img 
                    v-else
                    :src="item" 
                    :alt="`${title} item ${index+1}`" 
                    class="w-full h-full object-cover border border-gray-100"
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: max-height 0.5s ease, opacity 0.3s ease;
  max-height: 1000px;
  overflow: hidden;
}

.slide-enter-from,
.slide-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>