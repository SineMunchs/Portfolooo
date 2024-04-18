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
  <h1 class="flex elite font-bold text-blå text-9xl">VISUAL LANGUAGE</h1>

  <h1 class="flex elite text-blå row-start-2 p-2"> FORM, COLOR THEORY, TYPOGRAPHY, DRAWING, CREATIVITY
  </h1>
</div>

<!--BORDER-->
<div class=" border-b border-blå mt-10"> </div>
<div class=" grid grid-cols-2 row-2">
 <p class="col-start-1 elite text-blå p-2">   
    This course included an in-depth exploration of the fundamental elements of design—color, shape, and typography. Through studies in color theory, we leared to effectively harness the emotional and visual impacts of color. Lessons on shape help them utilize geometry and form to create balanced and compelling compositions. Additionally, sessions on typography equip students with the skills to select and manipulate type for clarity, aesthetic appeal, and harmony in design projects. These classes are instrumental in building a solid foundation in visual communication, enabling students to apply these principles creatively across various design challenges.


    <ul class="list-disc p-4 marker:text-blå elite tracking-widest space-y-4">
        <LI>INDESIGN</LI>
        <li>ILLUSTRATOR</li>
     
    </ul>
  </p>

  <video class="h-25% w-25% col-start-2" autoplay loop muted>
  <source src="../../Video/molnar.mp4" type="video/mp4">
  </video>

</div>
<!--BORDER-->
<div class=" border-b border-blå "> </div>

<div class=" grid grid-cols-2 row-2">
 <p class="col-start-1 elite text-blå p-2">   
    <u>COLOR OBSERVATION </u>
    For this project, seek out real-world objects that showcase a diverse palette of colors, tones, and shades. These can be items that are photographed or physically collected, offering a tangible exploration of color interaction and variety.
  </p>

  <video class="h-25% w-25% col-start-2" autoplay loop muted>
  <source src="../../Video/molnar.mp4" type="video/mp4">
  </video>

</div>

</template>