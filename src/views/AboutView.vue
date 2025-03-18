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
        Sine Munch
      </h1>
      <img
        src="../../images/Smil.svg"
        alt="Smiley"
        className="h-8 w-8 ml-2 mb-14 hover:animate-spin"
      />
    </div>
    
    <div class=" t-6 md:mt-11 p-2 max-w-4xl" >
    <p className="text-2xl md:text-4xl tracking-widest text-blå">My educational path took off at KEA in the field of design and entrepreneurship, and now I’m exploring the digital world at <b>DMJX</b>, diving into <b>Coded Design</b> since 2023. My passion lies in crafting designs that are as functional as they are appealing, bridging the gap between aesthetics and utility. 
    </p>
    </div>

    <div class="p-2 space-y-2 md:space-y-4 md:absolute md:bottom-22 md:right-0">

   <!-- LINKEDIN -->
      <a href="https://www.linkedin.com/in/sine-munch-b992461b8/"
         target="_blank"
         class="flex items-center hover:animate-pulse">
        <img src="../../images/arrow.svg"
             alt="LinkedIn Arrow"
             class="h-6 w-8 md:h-8 md:w-12 lg:h-10 lg:w-16" />
        <span class="text-3xl md:text-5xl lg:text-7xl xl:text-8xl tracking-widest underline text-blå">LinkedIn</span>
      </a>

  <!-- EMAIL -->
  <div @click="copyEmailToClipboard" class="flex items-center hover:animate-pulse cursor-pointer relative">
        <img src="../../images/arrow.svg"
             alt="Email Arrow"
             class="h-6 w-8 md:h-8 md:w-12 lg:h-10 lg:w-16" />
        <span class="text-3xl md:text-5xl lg:text-7xl xl:text-8xl tracking-widest underline text-blå">Email</span>
        <span v-if="copySuccess" class="absolute top-full left-16 text-sm md:text-base lg:text-lg text-blå mt-1">Email copied!</span>
      </div>

 <!-- INSTAGRAM -->
 <a href="https://www.instagram.com/codedstuff/"
         target="_blank"
         class="flex items-center hover:animate-pulse">
        <img src="../../images/arrow.svg"
             alt="Instagram Arrow"
             class="h-6 w-8 md:h-8 md:w-12 lg:h-10 lg:w-16" />
        <span class="text-3xl md:text-5xl lg:text-7xl xl:text-8xl tracking-widest underline text-blå">Instagram</span>
      </a>
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

