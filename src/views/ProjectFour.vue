<script>
import MediaScroller1 from '@/components/MediaScroller.vue'
import ProjectThumber from '@/components/ProjectThumber.vue'


export default {
  components: {
    ProjectThumber,
  },
}
</script>

<template>   
<div class=" mt-20 ml-1">
    <h1 class="flex elite font-bold text-blå text-9xl">COLOR OBSERVATION</h1>
    <h1 class="flex elite text-blå row-start-2 p-2"> FORM, COLOR THEORY, TYPOGRAPHY, DRAWING, CREATIVITY
    </h1>
</div>

<!--BORDER-->
<div class=" border-b border-blå mt-20"> </div>

<!--Beskrivelse-->
<div class=" grid grid-cols-2">
     <p class="col-start-1  elite text-blå">   
        For this project, we had to seek out real-world objects that showcase a diverse palette of colors, tones, and shades. It could have been items that were photographed or physically collected, offering a tangible exploration of color interaction and variety. 
    <br><br>
        Based on your palette, you will create a composition or pattern using geometric shapes, where you can play with swapping colors to achieve various results. This method allows for an exploration of how different color combinations can alter the visual impact of the design.
    </p>
        <img src="../../images/Makrel.jpg" alt="Project 1" class=" justify-self-end col-start-2">
</div>

<!--BORDER-->
<div class=" border-b border-blå "> </div>

<!--Illustrationer-->
<div>
        <img src="../../images/ColorObs.jpg" alt="ColorObs" class="h-100% w-100% justify-self-stretch">
</div>

</template>