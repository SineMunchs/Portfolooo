<script>
import ProjectThumbnail from '@/components/ProjectThumbnail.vue'
import ProjectThumber from '@/components/ProjectThumber.vue'
 
 export default {
    components: {
        ProjectThumbnail,
        ProjectThumber,
    },
 }
</script>

<template>
  <div class="mt-20"></div>
  
  <!--BORDER-->
  <div class=" border-b border-blå p-1"> </div>
  
  <ProjectThumber title="FIRST SEMESTER PROJECT" tags="FORM, COLOR THEORY, TYPOGRAPHY, DRAWING, CREATIVITY, 3D MODELLING, PROGRAMMING" video="../../Video/hands.mp4" link="/projects/1"></ProjectThumber>

  <!--BORDER-->
    <div class=" border-b border-blå p-1"> </div>

<!-- Creative Coding Thumbnail-->
     <ProjectThumber title="CREATIVE CODING" tags="DRAWING WITH PROCISSING" video="../../Video/Processing copy.mp4" link="/projects/2"></ProjectThumber>

    <div class=" border-b border-blå p-1"> </div>



  <!-- FIGUR OG FARVE (BILLEDER)-->
  <!--Border-->
  <div class=" mt-1 ml-1 grid grid-cols-2">
  <!--Text-->
  <a href="/projects/3" class="elite text-blå font-bold text-6xl     hover:text-blue-600"> VISUAL LANGUAGE</a>
  <h1 class="flex elite text-blå row-start-2">FORM, COLOR THEORY, TYPOGRAPHY, DRAWING, CREATIVITY
  </h1>
  <!--Media-->
  <img src="../../images/Figur_color.png" alt="Project 1" class="justify-self-end object-cover h-60 w-96 row-span-2 col-span-2 row-start-1 row-end-4">
</div>

<!--BORDER-->
<div class=" border-b border-blå p-1"> </div>

<!--PHOTO
  <div class=" mt-1 ml-1 grid grid-cols-2">
    <a href="/projects/4" class="elite text-blå font-bold text-6xl     hover:text-blue-600">PHOTO</a>
  <h1 class="flex elite text-blå row-start-2">HI AI
  </h1>
  <img src="../../images/AI.png" alt="Project 1" class="justify-self-end object-cover h-60 w-96 row-span-2 col-span-2 row-start-1 row-end-4">
</div> 

<div class=" border-b border-blå p-1"> </div>


CODING Kode som sprog 
<ProjectThumber title="CODING" tags="FORM, COLOR THEORY, TYPOGRAPHY, DRAWING, CREATIVITY" video="../../Video/Panda.mp4" link="/projects/6"></ProjectThumber>

BORDER
<div class=" border-b border-blå p-1"> </div>
  
BLENDER 
<ProjectThumber title="BLENDER" tags="FORM, COLOR THEORY, TYPOGRAPHY, DRAWING, CREATIVITY, 3D MODELLING, PROGRAMMING" video="../../Video/Mike.mp4" link="/projects/5"></ProjectThumber>

<div class=" border-b border-blå p-1"> </div>
-->

</template>
