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

<template>
  <div className="mt-20 ml-1 flex items-center">
      <h1 className="text-blå text-6xl md:text-7xl lg:text-8xl tracking-widest">
        About - background
      </h1>
      <img
        src="../../images/Smil.svg"
        alt="Smiley"
        className="h-8 w-8 ml-2 mb-14 hover:animate-spin"
      />
    </div>
    <!-- Education Section
    <div class="t-6 md:mt-11 p-2 max-w-4xl" >
    <p className="text-2xl md:text-4xl tracking-widest text-blå">My educational path took off at KEA in the field of design and entrepreneurship, and now I'm exploring the digital world at <b>DMJX</b>, diving into <b>Coded Design</b> since 2023. My passion lies in crafting designs that are as functional as they are appealing, bridging the gap between aesthetics and utility. 
    </p>
    </div> -->

    <!-- Education Section -->
   
<div className="mt-16 ml-1">
  <h1 className="text-blå text-5xl md:text-6xl lg:text-7xl tracking-widest">
    Education
  </h1>
</div>

<div class="mt-6 p-2 max-w-4xl">
  <div class="mb-8">
    <h2 className="text-blå text-3xl md:text-4xl tracking-wide font-bold">2023-2026</h2>
    <h3 className="text-blå text-2xl md:text-3xl tracking-wide font-bold">BA in Coded Design - DMJX</h3>
    <p className="text-xl md:text-2xl tracking-wide text-blå mt-2">
      In my pursuit of Coded Design at DMJX, I'm cultivating a unique blend of visual communication and digital expertise. This program enables me to push creative boundaries while developing technical proficiencies in various design and coding disciplines, preparing me to create innovative digital experiences that communicate effectively in today's dynamic media landscape.
    </p>
  </div>
  
  <div class="mb-8">
    <h2 className="text-blå text-3xl md:text-4xl tracking-wide font-bold">2020-2022</h2>
    <h3 className="text-blå text-2xl md:text-3xl tracking-wide font-bold">Entrepreneurship & Design - Københavns Erhvervsakademi (KEA)</h3>
    <p className="text-xl md:text-2xl tracking-wide text-blå mt-2">
      My journey at KEA equipped me with a strong foundation in design thinking and entrepreneurial mindset. This program fostered my ability to identify opportunities, develop innovative concepts, and bring designs to life with a business-oriented approach. The hands-on projects and collaborative environment shaped my understanding of how design can drive business value and social impact.
    </p>
  </div>
  
  <div class="mb-8">
    <h2 className="text-blå text-3xl md:text-4xl tracking-wide font-bold">2021</h2>
    <h3 className="text-blå text-2xl md:text-3xl tracking-wide font-bold">Communication - University of Applied Science (Rotterdam, Exchange)</h3>
    <p className="text-xl md:text-2xl tracking-wide text-blå mt-2">
      During my exchange semester in Rotterdam, I immersed myself in communication studies within an international context. This experience broadened my perspective on cross-cultural design approaches and communication strategies. The program enhanced my ability to craft messages that resonate across diverse audiences while introducing me to European design practices and methodologies.
    </p>
  </div>
</div>

    <!-- Press Section 
    <div className="mt-16 ml-1">
      <h1 className="text-blå text-5xl md:text-6xl lg:text-7xl tracking-widest">
        Press
      </h1>
    </div>
    
    <div class="mt-6 p-2 max-w-4xl">
      <div class="mb-8">
        <h2 className="text-blå text-3xl md:text-4xl tracking-wide font-bold">2024</h2>
        <h3 className="text-blå text-2xl md:text-3xl tracking-wide font-bold">Teaching Designers to use Generative AI as a Material</h3>
        <p className="text-xl md:text-2xl tracking-wide text-blå mt-2">
          I was mentioned in Kevin Nørby Andersen's article 'Teaching Designers to use Generative AI as a Material' for my drawing app using pose classification to attach drawings to the body. The project was part of the Intelligent Design course at DMJX, exploring generative AI as a creative material.
        </p>
      </div>
    </div>
-->
    <!-- Work Section -->
    <!-- Work Section -->
<div className="mt-16 ml-1">
  <h1 className="text-blå text-5xl md:text-6xl lg:text-7xl tracking-widest">
    Work
  </h1>
</div>

<div class="mt-6 p-2 max-w-4xl">
  <div class="mb-8">
    <h2 className="text-blå text-3xl md:text-4xl tracking-wide font-bold">Jan 2023 - Present</h2>
    <h3 className="text-blå text-2xl md:text-3xl tracking-wide font-bold">E-commerce & SoMe Specialist - Architectmade</h3>
    <p className="text-xl md:text-2xl tracking-wide text-blå mt-2">
      At Architectmade, I manage their Shopify e-commerce platform and social media presence. My responsibilities include optimizing the online shopping experience, implementing digital marketing strategies, creating engaging content that showcases their architectural design products, and analyzing performance metrics to drive growth in their digital channels.
    </p>
  </div>
  
  <div class="mb-8">
    <h2 className="text-blå text-3xl md:text-4xl tracking-wide font-bold">Jul 2022 - Dec 2022</h2>
    <h3 className="text-blå text-2xl md:text-3xl tracking-wide font-bold">Social Media & Content Creator - Picnic Glyptoteket</h3>
    <p className="text-xl md:text-2xl tracking-wide text-blå mt-2">
      While working with Picnic at Glyptoteket, I crafted compelling visual narratives and social media content that bridged the gap between classical art and contemporary audiences. My role involved developing creative concepts, producing photography and video content, managing social media campaigns, and helping to elevate the unique cultural experience of picnicking among ancient sculptures.
    </p>
  </div>
  
  <div class="mb-8">
    <h2 className="text-blå text-3xl md:text-4xl tracking-wide font-bold">Apr 2022 - Jun 2022</h2>
    <h3 className="text-blå text-2xl md:text-3xl tracking-wide font-bold">SoMe Assistant & Graphic Designer - Bertung PR</h3>
    <p className="text-xl md:text-2xl tracking-wide text-blå mt-2">
      At Bertung PR, I provided direct social media support to the CEO while handling various graphic design projects. My responsibilities included creating visual assets for client campaigns, designing marketing materials, managing social media content calendars, and ensuring consistent brand representation across different platforms and media.
    </p>
  </div>
  
  <div class="mb-8">
    <h2 className="text-blå text-3xl md:text-4xl tracking-wide font-bold">2014-2021</h2>
    <h3 className="text-blå text-2xl md:text-3xl tracking-wide font-bold">Server, SoMe & Event Planner - Kadeau (Copenhagen/Bornholm)</h3>
    <p className="text-xl md:text-2xl tracking-wide text-blå mt-2">
      During my long-term position at Kadeau restaurants in both Copenhagen and Bornholm, I wore multiple hats as a server, social media coordinator, and event planner. This role allowed me to develop strong hospitality skills while helping to build the digital presence of these acclaimed restaurants. I managed bookings, coordinated special events, created compelling content for their social channels, and ensured exceptional guest experiences that aligned with their Nordic culinary philosophy.
    </p>
  </div>
</div>
<div class="pb-64 md:pb-80 lg:pb-96">
</div>
  

    <!-- Social Links Section -->
<div class="fixed bottom-8 right-8 p-2 flex flex-col space-y-4 z-10">
  <div class="flex flex-col space-y-4">
    <!-- GIT -->
    <a href="https://github.com/SineMunchs"
       target="_blank"
       class="flex items-center hover:animate-pulse">
      <img src="../../images/arrow.svg"
           alt="GitHub Arrow"
           class="h-6 w-8 md:h-8 md:w-12 lg:h-10 lg:w-16" />
      <span class="text-3xl md:text-5xl lg:text-6xl tracking-widest underline text-blå">GitHub</span>
    </a>

    <!-- LINKEDIN -->
    <a href="https://www.linkedin.com/in/sine-munch-b992461b8/"
       target="_blank"
       class="flex items-center hover:animate-pulse">
      <img src="../../images/arrow.svg"
           alt="LinkedIn Arrow"
           class="h-6 w-8 md:h-8 md:w-12 lg:h-10 lg:w-16" />
      <span class="text-3xl md:text-5xl lg:text-6xl tracking-widest underline text-blå">LinkedIn</span>
    </a>
  </div>
  
  <div class="flex flex-col space-y-4 mt-4">
    <!-- EMAIL -->
    <div @click="copyEmailToClipboard" class="flex items-center hover:animate-pulse cursor-pointer relative">
      <img src="../../images/arrow.svg"
           alt="Email Arrow"
           class="h-6 w-8 md:h-8 md:w-12 lg:h-10 lg:w-16" />
      <span class="text-3xl md:text-5xl lg:text-6xl tracking-widest underline text-blå">Email</span>
      <span v-if="copySuccess" class="absolute top-full left-16 text-sm md:text-base lg:text-lg text-blå mt-1">Email copied!</span>
    </div>

    <!-- INSTAGRAM -->
    <a href="https://www.instagram.com/codedstuff/"
       target="_blank"
       class="flex items-center hover:animate-pulse">
      <img src="../../images/arrow.svg"
           alt="Instagram Arrow"
           class="h-6 w-8 md:h-8 md:w-12 lg:h-10 lg:w-16" />
      <span class="text-3xl md:text-5xl lg:text-6xl tracking-widest underline text-blå">Instagram</span>
    </a>
  </div>
</div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>