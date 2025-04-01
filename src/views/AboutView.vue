<template>
  <div class="relative min-h-screen">
    <!-- Content sections -->
    <div class="content-container">
      <div className="mt-20 ml-1 flex items-center">
        <h1 className="text-blå text-6xl md:text-7xl lg:text-8xl tracking-widest font-normal">
          About - Contact
        </h1>
        <img
          src="/images/Smil.svg"
          alt="Smiley"
          className="h-8 w-8 ml-2 mb-14 hover:animate-spin"
        />
      </div>

      <!-- Education Section -->
      <div className="mt-16 ml-1">
        <h1 className="text-blå text-5xl md:text-6xl lg:text-7xl tracking-widest font-normal">
          Education
        </h1>
      </div>

      <div class="mt-6 p-2 max-w-4xl">
        <div class="mb-8">
          <h2 className="text-blå text-3xl md:text-4xl tracking-wide font-normal">2023-2026</h2>
          <h3 className="text-blå text-2xl md:text-3xl tracking-wide font-normal">BA in Coded Design - DMJX</h3>
          <p className="text-base md:text-lg tracking-wide text-blå mt-2">
            In my pursuit of Coded Design at DMJX, I'm cultivating a unique blend of visual communication and digital expertise. This program enables me to push creative boundaries while developing technical proficiencies in various design and coding disciplines, preparing me to create innovative digital experiences that communicate effectively in today's dynamic media landscape.
          </p>
        </div>
        
        <div class="mb-8">
          <h2 className="text-blå text-3xl md:text-4xl tracking-wide font-normal">2020-2022</h2>
          <h3 className="text-blå text-2xl md:text-3xl tracking-wide font-normal">Entrepreneurship & Design - Københavns Erhvervsakademi </h3>
          <p className="text-base md:text-lg tracking-wide text-blå mt-2">
            My journey at KEA equipped me with a strong foundation in design thinking and entrepreneurial mindset. This program fostered my ability to identify opportunities, develop innovative concepts, and bring designs to life with a business-oriented approach. The hands-on projects and collaborative environment shaped my understanding of how design can drive business value and social impact.
          </p>
        </div>
        
        <div class="mb-8">
          <h2 className="text-blå text-3xl md:text-4xl tracking-wide font-normal">2021</h2>
          <h3 className="text-blå text-2xl md:text-3xl tracking-wide font-normal">Communication - University of Applied Science (Rotterdam, Exchange)</h3>
          <p className="text-base md:text-lg tracking-wide text-blå mt-2">
            During my exchange semester in Rotterdam, I immersed myself in communication studies within an international context. This experience broadened my perspective on cross-cultural design approaches and communication strategies. The program enhanced my ability to craft messages that resonate across diverse audiences while introducing me to European design practices and methodologies.
          </p>
        </div>
      </div>

      <!-- Work Section -->
      <div className="mt-16 ml-1">
        <h1 className="text-blå text-5xl md:text-6xl lg:text-7xl tracking-widest">
          Work
        </h1>
      </div>

      <div class="mt-6 p-2 max-w-4xl">
        <div class="mb-8">
          <h2 className="text-blå text-3xl md:text-4xl tracking-wide font-normal">Jan 2023 - Present</h2>
          <h3 className="text-blå text-2xl md:text-3xl tracking-wide font-normal">E-commerce & SoMe Specialist - Architectmade</h3>
          <p className="text-base md:text-lg tracking-wide text-blå mt-2">
            At Architectmade, I manage their Shopify e-commerce platform and social media presence. My responsibilities include optimizing the online shopping experience, implementing digital marketing strategies, creating engaging content that showcases their architectural design products, and analyzing performance metrics to drive growth in their digital channels.
          </p>
        </div>
        
        <div class="mb-8">
          <h2 className="text-blå text-3xl md:text-4xl tracking-wide font-normal">Jul 2022 - Dec 2022</h2>
          <h3 className="text-blå text-2xl md:text-3xl tracking-wide font-normal">Social Media & Content Creator - Picnic Glyptoteket</h3>
          <p className="text-base md:text-lg tracking-wide text-blå mt-2">
            While working with Picnic at Glyptoteket, I crafted compelling visual narratives and social media content that bridged the gap between classical art and contemporary audiences. My role involved developing creative concepts, producing photography and video content, managing social media campaigns, and helping to elevate the unique cultural experience of picnicking among ancient sculptures.
          </p>
        </div>
        
        <div class="mb-8">
          <h2 className="text-blå text-3xl md:text-4xl tracking-wide font-normal">Apr 2022 - Jun 2022</h2>
          <h3 className="text-blå text-2xl md:text-3xl tracking-wide font-normal">SoMe Assistant & Graphic Designer - Bertung PR</h3>
          <p className="text-base md:text-lg tracking-wide text-blå mt-2">
            At Bertung PR, I provided direct social media support to the CEO while handling various graphic design projects. My responsibilities included creating visual assets for client campaigns, designing marketing materials, managing social media content calendars, and ensuring consistent brand representation across different platforms and media.
          </p>
        </div>
        
        <div class="mb-8">
          <h2 className="text-blå text-3xl md:text-4xl tracking-wide font-normal">2014-2021</h2>
          <h3 className="text-blå text-2xl md:text-3xl tracking-wide font-normal">Server, SoMe & Event Planner - Kadeau (Copenhagen/Bornholm)</h3>
          <p className="text-base md:text-lg tracking-wide text-blå mt-2">
            During my long-term position at Kadeau restaurants in both Copenhagen and Bornholm, I wore multiple hats as a server, social media coordinator, and event planner. This role allowed me to develop strong hospitality skills while helping to build the digital presence of these acclaimed restaurants. I managed bookings, coordinated special events, created compelling content for their social channels, and ensured exceptional guest experiences that aligned with their Nordic culinary philosophy.
          </p>
        </div>
      </div>

      <div class="pb-64 md:pb-80 lg:pb-96"></div>
    </div>

    <!-- Overlay Links in Bottom Right -->
    <div class="fixed right-0 bottom-0 w-full h-3/4 z-10 flex flex-col justify-end items-end p-8">
      <!-- GIT -->
      <a href="https://github.com/SineMunchs"
         target="_blank"
         class="mb-6 group transition-opacity duration-300 opacity-30 hover:opacity-100">
        <div class="flex items-center">
          <img src="/images/arrow.svg"
               alt="GitHub Arrow"
               class="h-8 w-10 md:h-10 md:w-12 lg:h-12 lg:w-16" />
          <span class="text-7xl md:text-8xl lg:text-9xl tracking-widest text-blå group-hover:underline font-normal">GitHub</span>
        </div>
      </a>

      <!-- LINKEDIN -->
      <a href="https://www.linkedin.com/in/sine-munch-b992461b8/"
         target="_blank"
         class="mb-6 group transition-opacity duration-300 opacity-30 hover:opacity-100">
        <div class="flex items-center">
          <img src="/images/arrow.svg"
               alt="LinkedIn Arrow"
               class="h-8 w-10 md:h-10 md:w-12 lg:h-12 lg:w-16" />
          <span class="text-7xl md:text-8xl lg:text-9xl tracking-widest text-blå group-hover:underline">LinkedIn</span>
        </div>
      </a>

      <!-- EMAIL -->
      <div @click="copyEmailToClipboard" 
           class="mb-6 group transition-opacity duration-300 opacity-30 hover:opacity-100 cursor-pointer relative">
        <div class="flex items-center">
          <img src="/images/arrow.svg"
               alt="Email Arrow"
               class="h-8 w-10 md:h-10 md:w-12 lg:h-12 lg:w-16" />
          <span class="text-7xl md:text-8xl lg:text-9xl tracking-widest text-blå group-hover:underline">Email</span>
        </div>
        <span v-if="copySuccess" class="absolute top-full right-0 text-lg md:text-xl text-blå mt-1">Email copied!</span>
      </div>

      <!-- INSTAGRAM -->
      <a href="https://www.instagram.com/codedstuff/"
         target="_blank"
         class="group transition-opacity duration-300 opacity-30 hover:opacity-100">
        <div class="flex items-center">
          <img src="/images/arrow.svg"
               alt="Instagram Arrow"
               class="h-8 w-10 md:h-10 md:w-12 lg:h-12 lg:w-16" />
          <span class="text-7xl md:text-8xl lg:text-9xl tracking-widest text-blå group-hover:underline">Instagram</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      debug: false,
      copySuccess: false,
      emailAddress: 'munchsine@gmail.com'
    }
  },
  methods: {
    copyEmailToClipboard() {
      navigator.clipboard.writeText(this.emailAddress)
        .then(() => {
          this.copySuccess = true;
          // Hide the success message after 2 seconds
          setTimeout(() => {
            this.copySuccess = false;
          }, 2000);
        })
        .catch(err => {
          console.error('Could not copy email: ', err);
          // Fallback for older browsers
          this.fallbackCopyEmail();
        });
    },
    fallbackCopyEmail() {
      // Create temporary element
      const el = document.createElement('textarea');
      el.value = this.emailAddress;
      el.setAttribute('readonly', '');
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      document.body.appendChild(el);
      
      // Select and copy the text
      el.select();
      document.execCommand('copy');
      
      // Remove the element
      document.body.removeChild(el);
      
      // Show success message
      this.copySuccess = true;
      setTimeout(() => {
        this.copySuccess = false;
      }, 2000);
    }
  }
}
</script>

<style>
.text-blå {
  /* Assuming this is your custom color, keep it as is */
}

/* Optional: Add a subtle transition when hovering over links */
.content-container {
  transition: filter 0.3s ease;
}

.content-container:has(+ div a:hover) {
  filter: blur(1px);
}
</style>