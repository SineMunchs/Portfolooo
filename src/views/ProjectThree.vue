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
    <h1 class="flex elite text-blå text-9xl">Visual Language</h1>
    <h1 class="flex elite text-blå row-start-2 p-2"> Form, color theory, typography, drawing, creativity
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
        <LI>Illustrator</LI>
        <li>Interaction of Color <br>By Jose ALbers</li>
      
    
    </ul>
    <img src="../../images/Vin.jpg" alt="Project 2" class=" justify-self-end col-start-1">
    </p>
        <img src="../../images/face.svg" alt="illustration 1" class=" justify-self-end col-start-2 h-3/4">
  
</div>

<!--BORDER-->
<div class=" border-b border-blå"> </div>

<!--Beskrivelse-->
<div class=" grid grid-cols-2 ">
     <p class="col-start-1  elite text-blå p-2 tracking-widest">   
        <u>SPACE ILLUSION </u> The interaction of color can create powerful illusions of space and depth within a visual composition. By strategically using contrasting colors, designers can manipulate how an object or shape is perceived in relation to its environment. For example, warm colors such as red and orange tend to advance towards the viewer, making an object appear closer, while cool colors like blue and green recede, giving a sense of greater distance. 
<br><br>
Additionally, the use of light and dark colors can enhance the perception of space, where lighter colors seem to expand a space and darker colors compress it. This dynamic can be particularly effective in graphic design, art, and architectural spaces, where color is used to influence visual and spatial experiences.
<img src="../../images/blue-space.png" alt="Project 2" class=" justify-self-end col-start-1">
    </p>
        <img src="../../images/illusion.png" alt="illustration 1" class=" justify-self-center col-start-2 p-2">
  
</div>

<div class=" border-b border-blå"> </div>


</template>