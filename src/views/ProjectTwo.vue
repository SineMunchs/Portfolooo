
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
  <h1 class="flex elite font-bold text-blå text-9xl">CREATIVE CODING</h1>

  <h1 class="flex elite text-blå row-start-2 p-2"> DRAWING WITH PROCESSING
  </h1>
</div>

<!--BORDER-->
<div class=" border-b border-blå mt-10"> </div>
<div class=" grid grid-cols-2 row-2">
 <p class="col-start-1 elite text-blå p-2">   
    Exploring the intersection of technology and art through creative coding, particularly using Processing — a flexible software sketchbook geared towards visual arts. I leverage this platform to develop intricate digital artwork and interactive visualizations. Additionally. Extends into the physical with the AxiDraw, a versatile pen plotter, which translates digital creations into precise, tangible artworks on paper. This blend of digital fluency and physical execution showcases my ability to bridge diverse mediums and bring computational designs to life.

    <ul class="list-disc p-4 marker:text-blå elite tracking-widest space-y-4">
        <LI>PROCESSING</LI>
        <li>AXIDRAWER</li>
     
    </ul>
  </p>

  <video class="h-25% w-25% col-start-2" autoplay loop muted>
  <source src="../../Video/Molnar.mp4" type="video/mp4">
  </video>

</div>
<!--BORDER-->
<div class=" border-b border-blå"> </div>

<div class=" grid grid-cols-2 p-2">

  <img src="../../images/cirkel0.jpg" alt="AxiDraw" class=" justify-self col-start-1">


  <img src="../../images/cirkel.jpg" alt="Processing" class="h-[100%] col-start-2">
</div>

<!--BORDER-->
<div class=" border-b border-blå"> </div>


<div>
<video class="h-3/4 w-25% col-start-2 p-9" controls muted>
  <source src="../../Video/HELLO_WORLD.mp4" type="video/mp4">
  </video>

</div>




<!--BORDER-->
<div class=" border-b border-blå"> </div>
  
</template>









  