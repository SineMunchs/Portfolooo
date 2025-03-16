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
  computed: {
    // Separate videos and images from gallery items
    videoItems() {
      return this.galleryItems.filter(item => this.isVideo(item));
    },
    imageItems() {
      return this.galleryItems.filter(item => !this.isVideo(item));
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
    <div class="border-b border-blå py-2 grid grid-cols-2 md:grid-cols-4 cursor-pointer items-center" @click="toggleDropdown">
      <!-- Date Column - Hidden on mobile -->
      <div class="hidden md:flex md:items-center elite text-blå pl-2">{{ date }}</div>
      
      <!-- Category Column - Hidden on mobile -->
      <div class="hidden md:flex md:items-center elite text-blå">{{ category }}</div>
      
      <!-- Title Column - Takes full width on mobile -->
      <div class="flex items-center elite text-blå col-span-1 md:col-span-1">{{ title }}</div>
      
      <!-- Thumbnail Column (right) -->
      <div class="flex items-center justify-end">
        <img 
          :src="thumbnail" 
          :alt="title" 
          class="h-14 w-14 object-contain"
        >
      </div>
    </div>

    <!-- Dropdown Content - Only visible when expanded -->
    <transition name="slide">
      <div v-if="isOpen" class="bg-white">
        <div class="p-6 md:p-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Project Header -->
            <div class="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 mb-8">
              <!-- Text -->
              <div>
                <div class="elite text-blå text-4xl md:text-6xl tracking-widest">{{ title }}</div>
                <!-- Mobile-only display for date and category -->
                <div class="flex flex-col md:hidden mt-4">
                  <span class="elite text-blå text-sm">{{ date }}</span>
                  <span class="elite text-blå text-sm mt-1">{{ category }}</span>
                </div>
              </div>
              
              <!-- Small Video/Image -->
              <div class="justify-self-start md:justify-self-end mt-6 md:mt-0">
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
              <p class="mb-8 text-base leading-relaxed">{{ description }}</p>
            </div>
            
            <!-- Project Content -->
            <div class="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <!-- Left Column - Tags -->
              <div>
                <h3 class="elite text-blå text-xl md:text-2xl mb-4">Technologies</h3>
                <div class="flex flex-wrap gap-3">
                  <span 
                    v-for="(tag, index) in tags.split(',')" 
                    :key="index" 
                    class="bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded mb-2"
                  >
                    {{ tag.trim() }}
                  </span>
                </div>
              </div>
              
              <!-- Right Column - Full Size Video/Image -->
              <div class="mt-6 md:mt-0">
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
            
            <!-- Gallery Section (items in a row) -->
            <div v-if="galleryItems && galleryItems.length > 0" class="col-span-1 md:col-span-2 mt-6">
            
              
              <div class="flex flex-row flex-wrap gap-6">
                <!-- Videos and images mixed together -->
                <div 
                  v-for="(item, index) in galleryItems" 
                  :key="`item-${index}`"
                  class="gallery-item mb-4"
                >
                  <!-- Video item -->
                  <video 
                    v-if="isVideo(item)"
                    class="object-contain w-auto h-auto max-h-64" 
                    autoplay
                    loop
                    muted
                    playsinline
                  >
                    <source :src="item" type="video/mp4">
                  </video>
                  
                  <!-- Image item -->
                  <img 
                    v-else
                    :src="item" 
                    :alt="`${title} item ${index+1}`" 
                    class="object-contain w-auto h-auto max-h-64"
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
  max-height: 1500px;
  overflow: hidden;
}

.slide-enter-from,
.slide-leave-to {
  max-height: 0;
  opacity: 0;
}

.gallery-item {
  flex: 0 0 auto;
  width: calc(25% - 1.125rem);  /* 4 items per row with larger gap considered */
  padding: 8px;
  background-color: rgba(250, 250, 250, 0.5);
  border-radius: 4px;
  transition: transform 0.2s ease;
}

.gallery-item:hover {
  transform: translateY(-3px);
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .gallery-item {
    width: calc(33.333% - 1rem);  /* 3 items per row on medium screens */
  }
}

@media (max-width: 768px) {
  .gallery-item {
    width: calc(50% - 0.75rem);  /* 2 items per row on small screens */
  }
}

@media (max-width: 480px) {
  .gallery-item {
    width: 100%;  /* 1 item per row on very small screens */
    margin-bottom: 1rem;
  }
}
</style>