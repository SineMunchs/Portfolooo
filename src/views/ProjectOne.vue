<script>

import ProjectThumber from '@/components/ProjectThumber.vue'
 
 export default {
    components: {
        ProjectThumber,
    },
 }


</script>

<template>   
<div class=" mt-10 ml-1 grid grid-cols-2">
  
  <a href="/projects/4" class="elite text-blå font-bold text-6xl hover:text-blue-600">BLENDER</a>

  <h1 class="flex elite text-blå row-start-2">FORM, COLOR THEORY, TYPOGRAPHY, DRAWING, CREATIVITY, 3D MODELLING, PROGRAMMING
  </h1>

</div>

<video class="justify-self-end h-60 w-96 row-span-2 col-span-4 row-start-1 row-end-4" autoplay loop muted>
    <source src="../../Video/Panda.mp4" type="video/mp4">
  </video>

</template>


To apply a blue color overlay to a video that only clears upon mouse hover, you will need to use CSS for styling. Here’s how you can achieve this effect assuming you’re working within a framework that allows inline styling or you can modify the CSS directly. I’ll guide you through creating a CSS class for this purpose.

First, define a CSS class that applies the blue overlay using ::before pseudo-element. When the user hovers over the video, this overlay should become transparent. Here's the CSS code:



