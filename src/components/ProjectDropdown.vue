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
    },
    projectLink: {
      type: String,
      default: null
    },
    // New prop for sub-projects
    subProjects: {
      type: Array,
      default: () => []
      // Each sub-project should have: title, description, galleryItems
    }
  },
  data() {
    return {
      isOpen: false,
      lightboxOpen: false,
      currentLightboxIndex: 0,
      currentGallerySource: null, // 'main' or index of subProject
      isMobile: false,
      videosToLoad: {}
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
      if (this.currentGallerySource === 'main') {
        return this.galleryItems[this.currentLightboxIndex];
      } else if (typeof this.currentGallerySource === 'number' && this.subProjects[this.currentGallerySource]) {
        return this.subProjects[this.currentGallerySource].galleryItems[this.currentLightboxIndex];
      }
      return null;
    },
    // Has sub-projects
    hasSubProjects() {
      return this.subProjects && this.subProjects.length > 0;
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
      this.isOpen = !this.isOpen;
      
      if (this.isOpen) {
        // Initialize lazy loading when dropdown opens
        this.$nextTick(() => {
          this.initLazyLoading();
        });
      }
    },
    
    isVideo(path) {
      return path && (path.endsWith('.mp4') || path.endsWith('.webm') || path.endsWith('.ogg'));
    },
    
    // Get mobile-optimized video source if available
    getMobileVideoSource(src) {
      if (!src || !this.isMobile) return src;
      
      // Create path for mobile-optimized version
      const ext = src.split('.').pop();
      const mobileSrc = src.replace(`.${ext}`, `-mobile.${ext}`);
      
      return mobileSrc;
    },
    
    // Get poster image for video (first frame thumbnail)
    getVideoPoster(src) {
      if (!src) return '';
      
      // Create path for thumbnail image
      const ext = src.split('.').pop();
      return src.replace(`.${ext}`, '-thumb.jpg');
    },
    
    // Initialize lazy loading for videos
    initLazyLoading() {
      if (!('IntersectionObserver' in window)) return;
      
      const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const video = entry.target;
            const videoId = video.dataset.videoId;
            
            if (videoId && !this.videosToLoad[videoId]) {
              this.loadVideo(video);
              this.videosToLoad[videoId] = true;
            }
            
            videoObserver.unobserve(video);
          }
        });
      }, { 
        rootMargin: '100px 0px', 
        threshold: 0.1 
      });
      
      // Observe all videos
      this.$nextTick(() => {
        document.querySelectorAll('.lazy-video').forEach(video => {
          videoObserver.observe(video);
        });
      });
    },
    
    // Load video based on device type
    loadVideo(videoElement) {
      if (!videoElement) return;
      
      const videoSrc = videoElement.dataset.src;
      if (!videoSrc) return;
      
      // Handle mobile vs desktop differently
      if (this.isMobile) {
        // For mobile: use poster image, add controls, don't autoplay
        videoElement.poster = this.getVideoPoster(videoSrc);
        videoElement.controls = true;
        videoElement.autoplay = false;
        videoElement.loop = false;
        videoElement.preload = 'metadata';
        
        // Set mobile-optimized source
        const sourcesElements = videoElement.querySelectorAll('source');
        if (sourcesElements.length > 0) {
          sourcesElements[0].src = this.getMobileVideoSource(videoSrc);
        }
      } else {
        // For desktop: autoplay on hover, no controls, loop
        videoElement.autoplay = false;
        videoElement.muted = true;
        videoElement.loop = true;
        videoElement.controls = false;
        
        // Add hover behavior
        videoElement.addEventListener('mouseenter', () => {
          videoElement.play().catch(() => {});
        });
        
        videoElement.addEventListener('mouseleave', () => {
          videoElement.pause();
        });
        
        // Set original high-quality source
        const sourcesElements = videoElement.querySelectorAll('source');
        if (sourcesElements.length > 0) {
          sourcesElements[0].src = videoSrc;
        }
      }
      
      // Force reload of video after source change
      videoElement.load();
    },
    
    openLightbox(index, source = 'main') {
      this.currentLightboxIndex = index;
      this.currentGallerySource = source;
      this.lightboxOpen = true;
      document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
      
      // Add a global click handler to ensure event capture works properly
      this.$nextTick(() => {
        document.addEventListener('keydown', this.handleKeyDown);
        
        // Setup lightbox video if current item is a video
        const lightboxVideo = document.querySelector('.lightbox-video');
        if (lightboxVideo && this.isVideo(this.currentLightboxItem)) {
          this.setupLightboxVideo(lightboxVideo);
        }
      });
    },
    
    setupLightboxVideo(videoElement) {
      if (!videoElement) return;
      
      // Always use controls in lightbox
      videoElement.controls = true;
      
      // Handle mobile differently
      if (this.isMobile) {
        videoElement.autoplay = false;
        videoElement.loop = false;
        videoElement.preload = 'metadata';
        videoElement.poster = this.getVideoPoster(this.currentLightboxItem);
        
        // Set mobile source as primary, with original as fallback
        const sourcesElements = videoElement.querySelectorAll('source');
        if (sourcesElements.length >= 2) {
          sourcesElements[0].src = this.getMobileVideoSource(this.currentLightboxItem);
          sourcesElements[1].src = this.currentLightboxItem;
        }
      } else {
        videoElement.autoplay = true;
        videoElement.loop = true;
        
        // Set original high-quality source
        const sourcesElements = videoElement.querySelectorAll('source');
        if (sourcesElements.length > 0) {
          sourcesElements[0].src = this.currentLightboxItem;
        }
      }
      
      // Force reload of video after source change
      videoElement.load();
    },
    
    closeLightbox() {
      // Pause any playing videos
      const lightboxVideo = document.querySelector('.lightbox-video');
      if (lightboxVideo && !lightboxVideo.paused) {
        lightboxVideo.pause();
      }
      
      this.lightboxOpen = false;
      document.body.style.overflow = ''; // Restore scrolling
      
      // Remove the global handlers when closing
      document.removeEventListener('keydown', this.handleKeyDown);
    },
    
    nextItem(e) {
      if (e) {
        e.stopPropagation();
        e.preventDefault();
      }
      
      // Pause any current video
      this.pauseLightboxVideo();
      
      // Get the current gallery items based on source
      const currentGallery = this.getCurrentGalleryItems();
      
      // Move to next item
      if (currentGallery.length > 1) {
        this.currentLightboxIndex = (this.currentLightboxIndex + 1) % currentGallery.length;
      }
      
      // Update video if needed
      this.$nextTick(() => {
        const lightboxVideo = document.querySelector('.lightbox-video');
        if (lightboxVideo && this.isVideo(this.currentLightboxItem)) {
          this.setupLightboxVideo(lightboxVideo);
        }
      });
    },
    
    prevItem(e) {
      if (e) {
        e.stopPropagation();
        e.preventDefault();
      }
      
      // Pause any current video
      this.pauseLightboxVideo();
      
      // Get the current gallery items based on source
      const currentGallery = this.getCurrentGalleryItems();
      
      // Move to previous item
      if (currentGallery.length > 1) {
        this.currentLightboxIndex = (this.currentLightboxIndex - 1 + currentGallery.length) % currentGallery.length;
      }
      
      // Update video if needed
      this.$nextTick(() => {
        const lightboxVideo = document.querySelector('.lightbox-video');
        if (lightboxVideo && this.isVideo(this.currentLightboxItem)) {
          this.setupLightboxVideo(lightboxVideo);
        }
      });
    },
    
    pauseLightboxVideo() {
      const video = document.querySelector('.lightbox-video');
      if (video && !video.paused) {
        video.pause();
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
      
      // Prevent default browser behavior for these keys when lightbox is open
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
    
    // Check if we're on a mobile device
    checkMobile() {
      this.isMobile = window.innerWidth < 768;
    }
  },
  mounted() {
    // Check if we're on a mobile device
    this.checkMobile();
    
    // Add resize listener to update device type on orientation change
    window.addEventListener('resize', this.checkMobile);
  },
  beforeUnmount() {
    // Clean up event listeners
    window.removeEventListener('resize', this.checkMobile);
    
    // Make sure to clean up listeners if the component is destroyed while lightbox is open
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
          :src="thumbnail" 
          :alt="title" 
          class="h-14 w-14 object-contain"
        >
      </div>
    </div>

    <!-- Dropdown Content - Only visible when expanded -->
    <transition name="slide">
      <div v-if="isOpen" class="bg-white">
        <div class="p-7 md:p-8">
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
                  class="lazy-video object-cover h-32 w-full md:h-40 md:w-60" 
                  :data-src="video"
                  :data-video-id="'header-' + title"
                  muted
                  playsinline
                >
                  <source type="video/mp4">
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
                  class="lazy-video w-full object-cover border border-gray-200" 
                  :data-src="video"
                  :data-video-id="'main-' + title"
                  playsinline
                >
                  <source type="video/mp4">
                </video>
                <img 
                  v-else-if="image" 
                  :src="image" 
                  :alt="title" 
                  class="w-full object-cover border border-gray-200"
                >
              </div>
            </div>
            
            <!-- Main Gallery Section (if not using sub-projects) -->
            <div v-if="!hasSubProjects && galleryItems && galleryItems.length > 0" class="col-span-1 md:col-span-2 mt-6">
              <div class="flex flex-row flex-wrap gap-4">
                <!-- Videos -->
                <div 
                  v-for="(item, index) in galleryItems" 
                  :key="`item-${index}`"
                  class="gallery-item mb-4 cursor-pointer"
                  @click="openLightbox(index, 'main')"
                >
                  <!-- Video item -->
                  <video 
                    v-if="isVideo(item)"
                    class="lazy-video object-contain w-auto h-auto max-h-64" 
                    :data-src="item"
                    :data-video-id="title + '-gallery-' + index"
                    playsinline
                    muted
                  >
                    <source type="video/mp4">
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
                        class="lazy-video object-contain w-auto h-auto max-h-64" 
                        :data-src="item"
                        :data-video-id="subProject.title + '-gallery-' + itemIndex"
                        playsinline
                        muted
                      >
                        <source type="video/mp4">
                      </video>
                      
                      <!-- Image item -->
                      <img 
                        v-else
                        :src="item" 
                        :alt="`${subProject.title} item ${itemIndex+1}`" 
                        class="object-contain w-auto h-auto max-h-64"
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
              class="lightbox-video max-h-screen max-w-full mx-auto"
              playsinline
              @click.stop
            >
              <source type="video/mp4">
              <source type="video/mp4">
            </video>
            
            <!-- Image -->
            <img 
              v-else-if="currentLightboxItem"
              :src="currentLightboxItem" 
              :alt="`${title} enlarged view`"
              class="max-h-screen max-w-full mx-auto object-contain"
              @click.stop
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
          
          <!-- Background overlay that closes the lightbox when clicked -->
          <div class="absolute inset-0 z-10" @click="closeLightbox"></div>
          
          <!-- Mobile video controls (better touch targets) -->
          <div v-if="isMobile && currentLightboxItem && isVideo(currentLightboxItem)" class="absolute bottom-4 left-0 right-0 z-20 flex justify-center space-x-4">
            <button 
              class="bg-white bg-opacity-70 rounded-full w-12 h-12 flex items-center justify-center"
              @click.stop="document.querySelector('.lightbox-video').play()"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              </svg>
            </button>
            <button
              class="bg-white bg-opacity-70 rounded-full w-12 h-12 flex items-center justify-center"
              @click.stop="document.querySelector('.lightbox-video').pause()"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
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

.gallery-item {
  flex: 0 0 auto;
  width: calc(33.33% - 1rem);
  padding: 2px;
  border-radius: 4px;
  transition: transform 0.2s ease, border 0.2s ease;
  position: relative;
  border: 2px solid transparent;
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

/* Mobile video optimizations */
@media (max-width: 768px) {
  .lazy-video {
    aspect-ratio: 16/9;
    background-color: rgba(0, 0, 0, 0.05);
  }
  
  .gallery-item {
    width: calc(50% - 0.5rem);
  }
  
  .gallery-item video {
    max-height: none;
    width: 100%;
  }
  
  /* Show play button on videos that aren't autoplaying */
  .lazy-video:not([autoplay])::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ffffff'%3E%3Cpath d='M8 5v14l11-7z'/%3E%3C/svg%3E");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    pointer-events: none;
    z-index: 2;
    opacity: 0.8;
  }
  
  /* Larger touch targets for video controls */
  .lazy-video::-webkit-media-controls-play-button,
  .lazy-video::-webkit-media-controls-pause-button {
    width: 44px;
    height: 44px;
  }
}

@media (max-width: 480px) {
  .gallery-item {
    width: 100%;
  }
}
</style>