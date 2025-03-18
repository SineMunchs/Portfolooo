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
      default: 'For this semester project, I tackled rising neck pain among youth by creating NEO—a gamified solution where users draw with their nose to improve mobility. My research informed a design balancing medical credibility with playful engagement through achievements, social challenges, and a symptom-tracking slider. The minimalist blue interface with a custom mascot maintains connection to Danish Physiotherapists while appealing to teens. This project showcased my ability to transform health education into interactive experiences that feel engaging rather than clinical.'
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
      isOpen: false,
      lightboxOpen: false,
      currentLightboxIndex: 0
    }
  },
  computed: {
    // Separate videos and images from gallery items
    videoItems() {
      return this.galleryItems.filter(item => this.isVideo(item));
    },
    imageItems() {
      return this.galleryItems.filter(item => !this.isVideo(item));
    },
    currentLightboxItem() {
      return this.galleryItems[this.currentLightboxIndex];
    },
    // Add a computed property for dropdown header styling
    dropdownHeaderClass() {
      return {
        'border-b': true,
        'border-blå': true,
        'bg-blå': this.isOpen,
        'py-2': true,
        'grid': true,
        'grid-cols-2': true,
        'md:grid-cols-4': true,
        'cursor-pointer': true,
        'items-center': true,
        'transition-colors': true,
        'duration-300': true
      }
    },
    // Add a computed property for text color
    textColorClass() {
      return this.isOpen ? 'text-white' : 'text-blå'
    }
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen
    },
    isVideo(path) {
      return path && (path.endsWith('.mp4') || path.endsWith('.webm') || path.endsWith('.ogg'))
    },
    openLightbox(index) {
      this.currentLightboxIndex = index;
      this.lightboxOpen = true;
      document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
    },
    closeLightbox() {
      this.lightboxOpen = false;
      document.body.style.overflow = ''; // Restore scrolling
      // Keep the clicked item highlighted even after closing lightbox
    },
    nextItem() {
      this.currentLightboxIndex = (this.currentLightboxIndex + 1) % this.galleryItems.length;
    },
    prevItem() {
      this.currentLightboxIndex = (this.currentLightboxIndex - 1 + this.galleryItems.length) % this.galleryItems.length;
    },
    handleKeyDown(e) {
      if (!this.lightboxOpen) return;
      
      if (e.key === 'Escape') {
        this.closeLightbox();
      } else if (e.key === 'ArrowRight') {
        this.nextItem();
      } else if (e.key === 'ArrowLeft') {
        this.prevItem();
      }
    },
    // Removed highlight checking method as it's no longer needed
  },
  mounted() {
    // Add keyboard navigation for lightbox
    window.addEventListener('keydown', this.handleKeyDown);
  },
  beforeUnmount() {
    // Clean up event listener
    window.removeEventListener('keydown', this.handleKeyDown);
  }
}
</script>

<template>
  <div>
    <!-- Project Header Row - Always visible -->
    <div :class="dropdownHeaderClass" @click="toggleDropdown">
      <!-- Date Column - Hidden on mobile -->
      <div class="hidden md:flex md:items-center elite" :class="textColorClass">{{ date }}</div>
      
      <!-- Category Column - Hidden on mobile -->
      <div class="hidden md:flex md:items-center elite" :class="textColorClass">{{ category }}</div>
      
      <!-- Title Column - Takes full width on mobile -->
      <div class="flex items-center elite col-span-1 md:col-span-1" :class="textColorClass">{{ title }}</div>
      
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
              <div class="flex flex-row flex-wrap gap-4">
                <!-- Videos and images mixed together -->
                <div 
                  v-for="(item, index) in galleryItems" 
                  :key="`item-${index}`"
                  class="gallery-item mb-4 cursor-pointer"
                  @click="openLightbox(index)"
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
    
    <!-- Lightbox overlay -->
    <div v-if="lightboxOpen" class="lightbox fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center" @click="closeLightbox">
      <!-- Lightbox content -->
      <div class="lightbox-content p-4 max-w-screen-lg max-h-screen overflow-auto" @click.stop>
        <!-- Video -->
        <video 
          v-if="isVideo(currentLightboxItem)" 
          controls 
          autoplay
          class="max-h-screen max-w-full mx-auto"
        >
          <source :src="currentLightboxItem" type="video/mp4">
        </video>
        
        <!-- Image -->
        <img 
          v-else 
          :src="currentLightboxItem" 
          :alt="`${title} enlarged view`"
          class="max-h-screen max-w-full mx-auto object-contain"
        >
      </div>
      
      <!-- Navigation controls -->
      <button 
        v-if="galleryItems.length > 1" 
        @click.stop="prevItem" 
        class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 transition"
        aria-label="Previous item"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        v-if="galleryItems.length > 1" 
        @click.stop="nextItem" 
        class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 transition"
        aria-label="Next item"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      <!-- Close button -->
      <button 
        @click.stop="closeLightbox" 
        class="absolute top-4 right-4 bg-white bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 transition"
        aria-label="Close lightbox"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
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
  width: calc(14% - 1.125rem);  /* Smaller items per row with reduced padding */
  padding: 2px;
  border-radius: 4px;
  transition: transform 0.2s ease, border 0.2s ease;
  position: relative;
  border: 2px solid transparent;
}

.gallery-item:hover {
  transform: translateY(-3px);
}

/* Removed blue border styling for highlighted items */

.gallery-item::after {
  content: '🔍';
  position: absolute;
  bottom: 8px;
  right: 8px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.gallery-item:hover::after {
  opacity: 1;
}

/* Lightbox animations */
.lightbox {
  animation: fadeIn 0.3s ease;
}

.lightbox-content {
  animation: zoomIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes zoomIn {
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
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