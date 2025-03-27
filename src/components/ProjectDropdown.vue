// Modified version of ProjectDropdown.vue with image fixes for mobile

<script>
export default {
  props: {
    // Keep all your existing props
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
      default: 'Project description'
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
    },
    projectLink: {
      type: String,
      default: null
    },
    subProjects: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      isOpen: false,
      lightboxOpen: false,
      currentLightboxIndex: 0,
      currentGallerySource: null,
      // New: Add state to track loading errors
      imageErrors: {},
      missingImageUrl: 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"%3E%3Crect fill="%23f0f0f0" width="100" height="100"/%3E%3Cpath fill="%23cccccc" d="M36 29h4v4h-4zm8 0h4v4h-4zm8 0h4v4h-4zm8 0h4v4h-4zM36 37h4v4h-4zm8 0h4v4h-4zm8 0h4v4h-4zm8 0h4v4h-4zM36 45h4v4h-4zm8 0h4v4h-4zm8 0h4v4h-4zm8 0h4v4h-4zM36 53h4v4h-4zm8 0h4v4h-4zm8 0h4v4h-4zm8 0h4v4h-4z"/%3E%3Ctext text-anchor="middle" x="50" y="65" font-family="sans-serif" font-size="10" fill="%23333333"%3EImage Missing%3C/text%3E%3C/svg%3E'
    }
  },
  computed: {
    // Keep all your existing computed properties
    videoItems() {
      return this.galleryItems.filter(item => this.isVideo(item));
    },
    imageItems() {
      return this.galleryItems.filter(item => !this.isVideo(item));
    },
    currentLightboxItem() {
      if (this.currentGallerySource === 'main') {
        return this.galleryItems[this.currentLightboxIndex];
      } else if (typeof this.currentGallerySource === 'number' && this.subProjects[this.currentGallerySource]) {
        return this.subProjects[this.currentGallerySource].galleryItems[this.currentLightboxIndex];
      }
      return null;
    },
    hasSubProjects() {
      return this.subProjects && this.subProjects.length > 0;
    },
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
    textColorClass() {
      return this.isOpen ? 'text-white' : 'text-blå'
    }
  },
  methods: {
    // Keep existing methods
    toggleDropdown() {
      this.isOpen = !this.isOpen
    },
    isVideo(path) {
      return path && (path.endsWith('.mp4') || path.endsWith('.webm') || path.endsWith('.ogg'))
    },
    openLightbox(index, source = 'main') {
      this.currentLightboxIndex = index;
      this.currentGallerySource = source;
      this.lightboxOpen = true;
      document.body.style.overflow = 'hidden';
      
      this.$nextTick(() => {
        document.addEventListener('keydown', this.handleKeyDown);
      });
    },
    closeLightbox() {
      this.lightboxOpen = false;
      document.body.style.overflow = '';
      
      document.removeEventListener('keydown', this.handleKeyDown);
    },
    nextItem(e) {
      if (e) {
        e.stopPropagation();
        e.preventDefault();
      }
      
      const currentGallery = this.getCurrentGalleryItems();
      
      if (currentGallery.length > 1) {
        this.currentLightboxIndex = (this.currentLightboxIndex + 1) % currentGallery.length;
      }
    },
    prevItem(e) {
      if (e) {
        e.stopPropagation();
        e.preventDefault();
      }
      
      const currentGallery = this.getCurrentGalleryItems();
      
      if (currentGallery.length > 1) {
        this.currentLightboxIndex = (this.currentLightboxIndex - 1 + currentGallery.length) % currentGallery.length;
      }
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
      
      if (['Escape', 'ArrowRight', 'ArrowLeft', 'Space'].includes(e.key)) {
        e.preventDefault();
      }
    },
    getCurrentGalleryItems() {
      if (this.currentGallerySource === 'main') {
        return this.galleryItems;
      } else if (typeof this.currentGallerySource === 'number' && this.subProjects[this.currentGallerySource]) {
        return this.subProjects[this.currentGallerySource].galleryItems;
      }
      return [];
    },
    
    // New methods for handling images
    handleImageError(path) {
      console.error(`Failed to load image: ${path}`);
      this.imageErrors[path] = true;
      // Force component to update
      this.$forceUpdate();
    },
    
    getImageSrc(path) {
      // Return fallback if this image previously failed
      if (this.imageErrors[path]) {
        return this.missingImageUrl;
      }
      
      // Try to ensure path starts with leading slash if it's a relative path
      if (path && !path.startsWith('http') && !path.startsWith('data:') && !path.startsWith('/')) {
        return '/' + path;
      }
      
      return path;
    },
    
    // Function to preload images, could help with mobile display
    preloadImage(src) {
      if (this.isVideo(src) || !src) return;
      
      const img = new Image();
      img.src = this.getImageSrc(src);
      img.onerror = () => this.handleImageError(src);
    }
  },
  mounted() {
    // Preload the thumbnail
    this.preloadImage(this.thumbnail);
    
    // Preload gallery images (first 3 only to avoid excessive loading)
    if (this.galleryItems && this.galleryItems.length > 0) {
      this.galleryItems.slice(0, 3).forEach(item => {
        if (!this.isVideo(item)) {
          this.preloadImage(item);
        }
      });
    }
  },
  beforeUnmount() {
    if (this.lightboxOpen) {
      document.removeEventListener('keydown', this.handleKeyDown);
      document.body.style.overflow = '';
    }
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
          :src="getImageSrc(thumbnail)" 
          :alt="title" 
          class="h-14 w-14 object-contain"
          loading="lazy"
          @error="handleImageError(thumbnail)"
        >
      </div>
    </div>

    <!-- Dropdown Content - Only visible when expanded -->
    <transition name="slide">
      <div v-if="isOpen" class="bg-white">
        <div class="p-4 md:p-8">
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
                  playsinline
                >
                  <source :src="video" type="video/mp4">
                </video>
                <img 
                  v-else-if="image" 
                  :src="getImageSrc(image)" 
                  :alt="title" 
                  class="object-cover h-32 w-full md:h-40 md:w-60"
                  loading="lazy"
                  @error="handleImageError(image)"
                >
              </div>
            </div>
            
            <!-- Project Description -->
            <div class="col-span-1 md:col-span-2">
              <p class="mb-8 text-base leading-relaxed">{{ description }}</p>
              
              <!-- Project Link Button -->
              <a 
                v-if="projectLink" 
                :href="projectLink" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="inline-block px-6 py-3 mb-8 bg-blå text-white elite rounded hover:bg-opacity-90 transition-colors"
              >
                Visit Site
              </a>
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
                  playsinline
                >
                  <source :src="video" type="video/mp4">
                </video>
                <img 
                  v-else-if="image" 
                  :src="getImageSrc(image)" 
                  :alt="title" 
                  class="w-full object-cover border border-gray-200"
                  loading="lazy"
                  @error="handleImageError(image)"
                >
              </div>
            </div>
            
            <!-- Main Gallery Section (if not using sub-projects) -->
            <div v-if="!hasSubProjects && galleryItems && galleryItems.length > 0" class="col-span-1 md:col-span-2 mt-6">
              <div class="flex flex-row flex-wrap gap-4">
                <!-- Videos and images mixed together -->
                <div 
                  v-for="(item, index) in galleryItems" 
                  :key="`item-${index}`"
                  class="gallery-item mb-4 cursor-pointer"
                  @click="openLightbox(index, 'main')"
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
                    :src="getImageSrc(item)" 
                    :alt="`${title} item ${index+1}`" 
                    class="object-contain w-auto h-auto max-h-64"
                    loading="lazy"
                    @error="handleImageError(item)"
                  >
                </div>
              </div>
            </div>
            
            <!-- SUB-PROJECTS SECTION -->
            <div v-if="hasSubProjects" class="col-span-1 md:col-span-2 mt-10">
              <div v-for="(subProject, subIndex) in subProjects" :key="`sub-${subIndex}`" class="mb-16">
                <!-- Sub-project title -->
                <h3 class="elite text-blå text-3xl md:text-4xl tracking-wide mb-6">{{ subProject.title }}</h3>
                
                <!-- Sub-project description -->
                <p class="mb-8 text-base leading-relaxed">{{ subProject.description }}</p>
                
                <!-- Sub-project gallery -->
                <div v-if="subProject.galleryItems && subProject.galleryItems.length > 0" class="mt-6">
                  <div class="flex flex-row flex-wrap gap-4">
                    <!-- Sub-project gallery items -->
                    <div 
                      v-for="(item, itemIndex) in subProject.galleryItems" 
                      :key="`sub-${subIndex}-item-${itemIndex}`"
                      class="gallery-item mb-4 cursor-pointer"
                      @click="openLightbox(itemIndex, subIndex)"
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
                        :src="getImageSrc(item)" 
                        :alt="`${subProject.title} item ${itemIndex+1}`" 
                        class="object-contain w-auto h-auto max-h-64"
                        loading="lazy"
                        @error="handleImageError(item)"
                      >
                    </div>
                  </div>
                </div>
                
                <!-- Divider between sub-projects (except for the last one) -->
                <div v-if="subIndex < subProjects.length - 1" class="border-t border-gray-200 my-12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    
    <!-- Lightbox overlay -->
    <teleport to="body">
      <div v-if="lightboxOpen" class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
        <!-- Lightbox content container -->
        <div class="relative max-w-4xl w-full h-full flex items-center justify-center p-4 md:p-8">
          <!-- Close button -->
          <button 
            @click.stop="closeLightbox" 
            class="absolute top-4 right-4 bg-white bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 transition z-20"
            aria-label="Close lightbox"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- Content area -->
          <div class="max-h-full max-w-full overflow-auto">
            <!-- Video -->
            <video 
              v-if="currentLightboxItem && isVideo(currentLightboxItem)" 
              controls 
              autoplay
              playsinline
              class="max-h-screen max-w-full mx-auto"
              @click.stop
            >
              <source :src="currentLightboxItem" type="video/mp4">
            </video>
            
            <!-- Image -->
            <img 
              v-else-if="currentLightboxItem"
              :src="getImageSrc(currentLightboxItem)" 
              :alt="`${title} enlarged view`"
              class="max-h-screen max-w-full mx-auto object-contain"
              @click.stop
              @error="handleImageError(currentLightboxItem)"
            >
          </div>
          
          <!-- Navigation controls -->
          <button 
            v-if="getCurrentGalleryItems().length > 1" 
            @click.stop="prevItem" 
            class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 transition z-20"
            aria-label="Previous item"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            v-if="getCurrentGalleryItems().length > 1" 
            @click.stop="nextItem" 
            class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 transition z-20"
            aria-label="Next item"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          <!-- Background overlay -->
          <div class="absolute inset-0 z-10" @click="closeLightbox"></div>
        </div>
      </div>
    </teleport>
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

/* Improved mobile-responsive gallery layout */
.gallery-item {
  flex: 0 0 auto;
  width: calc(50% - 0.5rem); /* 2 items per row on mobile by default */
  padding: 2px;
  border-radius: 4px;
  transition: transform 0.2s ease, border 0.2s ease;
  position: relative;
  border: 2px solid transparent;
}

@media (min-width: 768px) {
  .gallery-item {
    width: calc(33.333% - 0.67rem); /* 3 items per row on medium screens */
  }
}

@media (min-width: 1024px) {
  .gallery-item {
    width: calc(25% - 0.75rem); /* 4 items per row on large screens */
  }
}

.gallery-item:hover {
  transform: translateY(-3px);
}

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

/* Fix for small mobile screens */
@media (max-width: 480px) {
  .gallery-item {
    width: calc(50% - 0.5rem); /* Keep 2 items per row but smaller */
  }
  
  .gallery-item img,
  .gallery-item video {
    max-height: 120px; /* Smaller items on very small screens */
  }
}
</style>