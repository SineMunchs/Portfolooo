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

<!--Beskrivelse-->
<div class=" grid grid-cols-2 ">
     <p class="col-start-1  elite text-blå p-2 tracking-widest">   
        The coursework includes an in-depth exploration of the fundamental elements of design—color, shape, and typography. Through studies in color theory, students learn to effectively harness the emotional and visual impacts of color. Lessons on shape help them utilize geometry and form to create balanced and compelling compositions. 
<br><br>
    Additionally, sessions on typography equip students with the skills to select and manipulate type for clarity, aesthetic appeal, and harmony in design projects. These classes are instrumental in building a solid foundation in visual communication, enabling students to apply these principles creatively across various design challenges.

    <ul class="list-disc p-7 marker:text-blå elite tracking-widest space-y-4">
        <LI>ILLUSTRATOR</LI>
        <li>INTERACTION OF COLOR <br>BY JOSE ALBERS</li>
      
    
    </ul>
    <img src="../../images/vin.jpg" alt="Project 2" class=" justify-self-end col-start-1 hover:animate-pulse">
    </p>
        <img src="../../images/face.svg" alt="illustration 1" class=" justify-self-end col-start-2 h-3/4">
  
</div>

<!--BORDER-->
<div class=" border-b border-blå t--10"> </div>
<div class=" grid grid-cols-2">
    <img src="../../images/illusion.png" alt="Project 3" class=" col-start-2 row-start-3 justify-self-end p-2 ">

</div>
</template>