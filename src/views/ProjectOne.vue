
<script>
import MediaScroller from '@/components/MediaScroller.vue'
import ProjectThumber from '@/components/ProjectThumber.vue'


export default {
  components: {
    MediaScroller,
    ProjectThumber,
  },
}

</script>

<template>   
<div class=" mt-20 ml-1">
  <h1 class="flex elite font-bold text-blå text-9xl">JEWELLERY GENERATOR</h1>

  <h1 class="flex elite text-blå row-start-2 p-2">FORM, COLOR THEORY, TYPOGRAPHY, DRAWING, CREATIVITY, 3D MODELLING, PROGRAMMING
  </h1>
</div>

<!--BORDER-->
<div class=" border-b border-blå mt-10"> </div>
<div class=" grid grid-cols-2 row-2">
 <p class="col-start-1 elite text-blå p-2">   
  First semester project in the course "The Language of Visuals," I created a comprehensive piece that integrated various disciplines studied throughout the term, including form, color theory, typography, drawing, creativity, 3D modeling, and programming. This project serves as a practical culmination of my learning and skills developed during the semester.

    <ul class="list-disc p-4 marker:text-blå elite tracking-widest space-y-4">
        <LI>PROCESSING</LI>
        <li>BLENDER</li>
        <li>ILLUSTRATOR</li>
    </ul>
  </p>

  <video class="h-25% w-25% col-start-2" autoplay loop muted>
  <source src="../../Video/assetgenerator.mp4" type="video/mp4">
  </video>

</div>

<!--BORDER-->
<div class=" border-b border-blå"> </div>

  <MediaScroller class="p2"> </MediaScroller>

<!--BORDER-->
<div class=" border-b border-blå"> </div>
  
</template>









  