

<template>
  <div class="relative min-h-screen">
    <!-- Content sections -->
    <div class="content-container">
      <!-- About Section -->
      <div class="mt-20 ml-1 flex items-center">
        <h1 class="text-blå text-6xl md:text-7xl lg:text-8xl tracking-widest font-normal">
          About - Contact
        </h1>
        <img
          src="/images/Smil1.svg"
          alt="Smiley"
          class="h-8 w-8 ml-2 mb-14 hover:animate-spin"
        />
      </div>

      <!-- Education Section -->
      <div class="mt-16 ml-1">
        <h1 class="text-blå text-5xl md:text-6xl lg:text-7xl tracking-widest font-normal">
          Education
        </h1>
      </div>

      <div class="mt-6 p-2 max-w-4xl">
        <!-- Education Entries -->
        <div class="mb-8" v-for="(edu, index) in education" :key="index">
          <h2 class="text-blå text-3xl md:text-4xl tracking-wide font-normal">{{ edu.years }}</h2>
          <h3 class="text-blå text-2xl md:text-3xl tracking-wide font-normal">{{ edu.title }}</h3>
          <p class="text-base md:text-lg tracking-wide text-blå mt-2">{{ edu.description }}</p>
        </div>
      </div>

      <!-- Work Section -->
      <div class="mt-16 ml-1">
        <h1 class="text-blå text-5xl md:text-6xl lg:text-7xl tracking-widest">
          Work
        </h1>
      </div>

      <div class="mt-6 p-2 max-w-4xl">
        <!-- Work Entries -->
        <div
          v-for="(work, index) in workExperience"
          :key="index"
          class="mb-8 relative group mouse-track-container"
        >
          <div class="work-section-content">
            <h2 class="text-blå text-3xl md:text-4xl tracking-wide font-normal">{{ work.years }}</h2>
            <h3 class="text-blå text-2xl md:text-3xl tracking-wide font-normal">{{ work.title }}</h3>
            <p class="text-base md:text-lg tracking-wide text-blå mt-2">{{ work.description }}</p>
          </div>
          <div class="mouse-follow-image opacity-0 group-hover:opacity-100">
            <img
              :src="work.image"
              :alt="work.alt"
              class="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 object-contain"
            />
          </div>
        </div>
      </div>

      <!-- Mobile Contact Section -->
      <div class="md:hidden mt-16 mb-20 p-2">
        <div class="space-y-6">
          <a
            v-for="link in links"
            :key="link.name"
            :href="link.url"
            target="_blank"
            class="block"
          >
            <div class="flex items-center">
              <img src="/images/arrow.svg" alt="Arrow" class="h-6 w-8 mr-3" />
              <span class="text-3xl text-blå">{{ link.name }}</span>
            </div>
          </a>
          <div @click="copyEmailToClipboard" class="cursor-pointer">
            <div class="flex items-center">
              <img src="/images/arrow.svg" alt="Email Arrow" class="h-6 w-8 mr-3" />
              <span class="text-3xl text-blå">Email</span>
            </div>
            <div v-if="copySuccess" class="mt-1 ml-11 text-sm text-blå">Email copied!</div>
          </div>
        </div>
      </div>
      
      <!-- Extra bottom padding -->
      <div class="hidden md:block pb-[45rem]"></div>
    </div>

    <!-- Desktop Overlay Links (Desktop only) -->
    <div class="fixed right-0 bottom-0 w-full h-3/4 z-10 hidden md:block">
      <div class="flex flex-col justify-end items-end p-8">
        <!-- Links from data array -->
        <a 
          v-for="link in links" 
          :key="link.name"
          :href="link.url"
          target="_blank"
          class="mb-6 group transition-opacity duration-300 opacity-30 hover:opacity-100"
        >
          <div class="flex items-center">
            <img 
              src="/images/arrow.svg"
              :alt="`${link.name} Arrow`"
              class="h-8 w-10 md:h-10 md:w-12 lg:h-12 lg:w-16" 
            />
            <span class="text-7xl md:text-8xl lg:text-9xl tracking-widest text-blå group-hover:underline font-normal">
              {{ link.name }}
            </span>
          </div>
        </a>

        <!-- Email (special case for copy functionality) -->
        <div 
          @click="copyEmailToClipboard" 
          class="mb-6 group transition-opacity duration-300 opacity-30 hover:opacity-100 cursor-pointer relative"
        >
          <div class="flex items-center">
            <img 
              src="/images/arrow.svg"
              alt="Email Arrow"
              class="h-8 w-10 md:h-10 md:w-12 lg:h-12 lg:w-16" 
            />
            <span class="text-7xl md:text-8xl lg:text-9xl tracking-widest text-blå group-hover:underline">
              Email
            </span>
          </div>
          <span v-if="copySuccess" class="absolute top-full right-0 text-lg md:text-xl text-blå mt-1">
            Email copied!
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      copySuccess: false,
      emailAddress: 'munchsine@gmail.com',
      education: [
        {
          years: '2023-2026',
          title: 'BA in Coded Design - DMJX',
          tags: 'Coded Design, Visual Communication, Digital Media',
          description:
            "In my pursuit of Coded Design at DMJX, I'm learning a unique blend of visual communication and digital expertise. This program enables me to push creative boundaries while developing technical proficiencies in various design and coding disciplines, preparing me to create innovative digital experiences that communicate effectively in today's dynamic media landscape."
            
        },
        {
          years: '2020-2022',
          title: 'Entrepreneurship & Design - Københavns Erhvervsakademi',
          description:
            "My journey at KEA equipped me with a strong foundation in design thinking and entrepreneurial mindset. This program fostered my ability to identify opportunities, develop innovative concepts, and bring designs to life with a business-oriented approach. The hands-on projects and collaborative environment shaped my understanding of how design can drive business value and social impact."
        },
        {
          years: '2021',
          title: 'Communication - University of Applied Science (Rotterdam, Exchange)',
          description:
            "During my exchange semester in Rotterdam, I studied communication within an international context. This experience broadened my perspective on cross-cultural design approaches and communication strategies. The program enhanced my ability to craft messages that resonate across diverse audiences while introducing me to European design practices and methodologies."
        }
      ],
      workExperience: [
        {
          years: '2023 -',
          title: 'E-commerce & SoMe Specialist - Architectmade',
          description: 'At Architectmade, I manage their Shopify e-commerce platform and social media presence. My responsibilities include optimizing the online shopping experience, implementing digital marketing strategies, creating engaging content that showcases their products, and analyzing performance metrics to drive growth in their digital channels.',
          image: '/images/architectmade.png',
          alt: 'Architectmade Work'
        },
        {
          years: '2022 -',
          title: 'Social Media & Content Creator - Picnic Glyptoteket',
          description: 'While working with Picnic at Glyptoteket, I crafted compelling visual narratives and social media content that bridged the gap between classical art and contemporary audiences. My role involved developing creative concepts, producing photography and video content, managing social media campaigns, and helping to elevate the unique cultural experience of picnicking among ancient sculptures.',
          image: '/images/Some.png',
          alt: 'Picnic Glyptoteket Work'
        },
        {
          years: '2022 -',
          title: 'SoMe Assistant & Graphic Designer - Bertung PR',
          description: 'At Bertung PR, I provided direct social media support to the CEO while handling various graphic design projects. My responsibilities included creating visual assets for client campaigns, designing marketing materials, managing social media content calendars, and ensuring consistent brand representation across different platforms and media.',
          image: '/images/elle.png',
          alt: 'Bertung PR Work'
        },
        {
          years: '2014-2021',
          title: 'All arounder, Waitress, SoMe, & Events - Kadeau',
          description: 'As a versatile team member at Kadeau restaurants across both Copenhagen and Bornholm locations, I served as an all-arounder handling waitressing duties, social media management, and event coordination. I delivered exceptional dining experiences while capturing and sharing Kadeau\'s Nordic culinary vision through compelling digital content. My responsibilities included managing reservations, orchestrating special events, creating engaging social media posts, and ensuring every guest interaction reflected the restaurant\'s distinctive philosophy and acclaimed standards.',
          image: '/images/kadeau1.png',
          alt: 'Kadeau Work'
        }
      ],
      links: [
        { name: 'GitHub', url: 'https://github.com/SineMunchs' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/sine-munch-b992461b8/' },
        { name: 'Instagram', url: 'https://www.instagram.com/codedstuff/' }
      ]
    };
  },
  mounted() {
    // Add mouse move event listeners to each container
    const containers = document.querySelectorAll('.mouse-track-container');
    containers.forEach(container => {
      container.addEventListener('mousemove', this.handleMouseMove);
    });
    
    // Add content blur effect when hovering over desktop overlay links
    this.setupDesktopLinkHoverEffect();
  },
  beforeUnmount() {
    // Clean up event listeners when component is destroyed
    const containers = document.querySelectorAll('.mouse-track-container');
    containers.forEach(container => {
      container.removeEventListener('mousemove', this.handleMouseMove);
    });
  },
  methods: {
    setupDesktopLinkHoverEffect() {
      // Only setup on desktop
      if (window.innerWidth >= 768) {
        const contentContainer = document.querySelector('.content-container');
        const desktopLinks = document.querySelectorAll('.fixed a, .fixed div.cursor-pointer');
        
        if (contentContainer && desktopLinks.length > 0) {
          desktopLinks.forEach(link => {
            link.addEventListener('mouseenter', () => {
              contentContainer.classList.add('content-blur');
            });
            
            link.addEventListener('mouseleave', () => {
              contentContainer.classList.remove('content-blur');
            });
          });
        }
      }
    },
    handleMouseMove(event) {
      // Get the container
      const container = event.currentTarget;
      // Find the image element within this container
      const imageElement = container.querySelector('.mouse-follow-image');
      
      if (imageElement) {
        // Get container bounds
        const containerRect = container.getBoundingClientRect();
        
        // Calculate mouse position relative to the container
        const x = event.clientX - containerRect.left;
        const y = event.clientY - containerRect.top;
        
        // Get dimensions to ensure image stays within bounds
        const offsetX = 75;
        const offsetY = 75;
        
        // Apply the position to the image with bounds checking
        const maxX = container.offsetWidth - imageElement.offsetWidth;
        const maxY = container.offsetHeight - imageElement.offsetHeight;
        
        let imgX = Math.min(Math.max(x - offsetX, 0), maxX);
        let imgY = Math.min(Math.max(y - offsetY, 0), maxY);
        
        // Apply position with smooth transition
        imageElement.style.transform = `translate(${imgX}px, ${imgY}px)`;
      }
    },
    copyEmailToClipboard() {
      navigator.clipboard.writeText(this.emailAddress)
        .then(() => {
          this.copySuccess = true;
          setTimeout(() => {
            this.copySuccess = false;
          }, 2000);
        })
        .catch(err => {
          console.error('Could not copy email: ', err);
          this.fallbackCopyEmail();
        });
    },
    fallbackCopyEmail() {
      const el = document.createElement('textarea');
      el.value = this.emailAddress;
      el.setAttribute('readonly', '');
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      document.body.appendChild(el);
      
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      
      this.copySuccess = true;
      setTimeout(() => {
        this.copySuccess = false;
      }, 2000);
    }
  }
};
</script>

<style>
/* Custom color for text */
.text-blå {

}

/* Desktop-only blur effect when hovering over links */
.content-blur {
  filter: blur(1px);
  transition: filter 0.3s ease;
}

/* Mouse follow animation for work items */
.mouse-follow-image {
  position: absolute;
  pointer-events: none;
  z-index: 10;
  transition: opacity 0.3s ease, transform 0.1s ease;
}

/* Make sure the container has a relative position for the mouse tracking */
.mouse-track-container {
  position: relative;
  overflow: visible;
}

/* Subtle content shift effect when hovering over work items */
.group:hover .work-section-content {
  transform: translateX(-10px);
  transition: transform 0.3s ease;
}

/* Media query for mobile adjustments */
@media (max-width: 768px) {
  .group:hover .work-section-content {
    transform: translateX(-5px);
  }
  
  .mouse-follow-image {
    transition: opacity 0.3s ease, transform 0.2s ease;
  }
}
</style>