<template>
  <div className="mt-20 ml-1 flex items-center">
      <h1 className="text-blå text-7xl md:text-8xl lg:text-9xl tracking-widest">
        SINE MUNCH
      </h1>
      <img
        src="../../images/Smil.svg"
        alt="Smiley"
        className="h-8 w-8 ml-2 mb-14 hover:animate-spin"
      />
    </div>
     
    
    
    <div class=" t-6 md:mt-11 p-2 max-w-4xl" >
    <p className="text-2xl md:text-4xl tracking-widest hyphens-manual text-blå">My educational path took off at KEA in the field of design and entrepreneurship, and now I’m exploring the digital world at <b>DMJX</b>, diving into <b>Coded Design</b> since 2023. My passion lies in crafting designs that are as functional as they are appealing, bridging the gap between aesthetics and utility. 
    </p>
    </div>

    <div class="mt-12 p-2 space-y-2 md:space-y-4 md:absolute md:bottom-0 md:right-0">
    <!-- LINKEDIN -->
    <a href="https://www.linkedin.com/in/sine-munch-b992461b8/" 
       target="_blank" 
       class="flex items-center hover:animate-pulse">
        <img src="../../images/arrow.svg" 
             alt="LinkedIn Arrow" 
             class="h-8 w-12 md:h-12 md:w-16" />
        <span class="text-3xl md:text-9xl tracking-widest underline text-blå">LinkedIn</span>
    </a>

    <!-- BEHANCE -->
    <a href="https://www.behance.net/sinemunch1" 
       target="_blank" 
       class="flex items-center hover:animate-pulse">
        <img src="../../images/arrow.svg" 
             alt="Arrow" 
             class="h-8 w-12 md:h-12 md:w-16" />
        <span class="text-3xl md:text-9xl tracking-widest underline text-blå">Behance</span>
    </a>

    <!-- INSTAGRAM -->
    <a href="https://www.instagram.com/codedstuff/" 
       target="_blank" 
       class="flex items-center hover:animate-pulse">
        <img src="../../images/arrow.svg" 
             alt="Instagram Arrow" 
             class="h-8 w-12 md:h-12 md:w-16" />
        <span class="text-3xl md:text-9xl tracking-widest underline text-blå">Instagram</span>
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