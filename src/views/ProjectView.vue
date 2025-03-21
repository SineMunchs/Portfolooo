<script>
import ProjectThumbnail from '@/components/ProjectThumbnail.vue'
import ProjectThumber from '@/components/ProjectThumber.vue'
import ProjectDropdown from '@/components/ProjectDropdown.vue'

export default {
  components: {
    ProjectThumbnail,
    ProjectThumber,
    ProjectDropdown
  },
  data() {
    return {
      // Project descriptions (keeping original text)
      projectDetails: {
        interactiveDesign: "For this semester project, I tackled rising neck pain among youth by creating NEO—a gamified solution where users draw with their nose to improve mobility. My research informed a design balancing medical credibility with playful engagement through achievements, social challenges, and a symptom-tracking slider. The minimalist blue interface with a custom mascot maintains connection to Danish Physiotherapists while appealing to teens. This project showcased my ability to transform health education into interactive experiences that feel engaging rather than clinical.",
        PoseClassification: "Artificial Intelligence and How You Can Use It to Expand Your Creative Use of Code. A three-module course exploring AI for creative coding. Module 1 introduces machine learning with Teachable Machine for classifying images, sounds, and poses. Module 2 covers generative AI technologies for creating text, images, and sounds. Module 3 allows students to develop self-directed projects applying these tools to extend creative capabilities.Read more about the course through the klink underneath.",
        jewellery: "I created a project integrating various disciplines from my studies. I applied form principles for balanced compositions and color theory for a harmonious, emotionally responsive palette. Typography selection balanced readability and personality through testing multiple font families.My drawing combined digital and traditional techniques in Procreate and Illustrator, supported by brainstorming and mood boards. For 3D elements, I used Blender to model and texture objects with attention to lighting. Programming with JavaScript and CSS brought interactive elements to life while maintaining visual integrity.",
        creativeCoding: "Experiments with Processing & P5.js to create generative art and interactive visualizations.",
        visualLanguage: "An exploration of form, color theory, typography and drawing techniques.",
        colorObservation: "<< Sea to Shape >> From silvery makrel on ice, I distilled a palette of blues, grays, and cool neutrals. These colors—borrowed from the Bornholm deli, the Mackrel, turned into flowing geometric abstractions. Each curved composition breathes differently despite sharing the same oceanic palette, revealing how arrangement alone shifts visual harmony."
      },
      // Gallery images for each project
      projectGalleries: {
        interactiveDesign: [
          "/images/neoApp.png",
          "/video/neo.mp4",
          "/images/neoStretch.png",
          "/images/neoImplementering.png",
          "/images/neoCardcomp.png",
          "/images/neoFigma.png",
          "/video/Interactive.mp4",
          
        ],
        PoseClassification: [
          "/video/IDHaiku.mp4",
          "/video/IDHjerte.mp4",
          "/video/IDTrial.mp4",
          "/video/IDhjerte2.mp4",
    
        ],
    
        jewellery: [
          "/video/hands.mp4",
          "/video/generator.mp4",
          "/images/hoshoIllustrationer.png", 
          "/images/hoshoIdentitet.jpg"
        ],
        creativeCoding: [
        "/video/ccP5.mp4",  
        "/video/ccMesh.mp4",             
        "/video/Acaii.mp4", 
        "/video/ccboxes.mp4",
        "/video/KusamaYayoi_Processing.mp4",      
        "/video/Molnar.mp4",
        "/video/ccHello.mp4",  
        ],
        visualLanguage: [
          "/images/face.svg",
          "/images/vin.jpg",
           "/images/illusion.png", 
           "/images/blue-space.png"

        ],
        colorObservation: [
          "/images/Makrel.jpg",
          "/images/colorObs.jpg"
        ]
      }
    }
  }
}
</script>

<template>
  <div class="mt-20"></div>

<div class="flex items-center">
  <h1 class="text-blå text-7xl md:text-8xl lg:text-9xl tracking-widest">
    My Projects
  </h1>
  <img
    src="../../images/Smil.svg"
    alt="Smiley"
    class="h-8 w-8 ml-2 hover:animate-spin self-start mt-4"
  />
</div>


  
  <!-- Top border -->
  <div class="border-b border-blå p-1"></div>
  
  <!-- First Project - Interactive Design -->
  <ProjectDropdown
    title="Interactive Design" 
    date="24/01/2025"
    category="Identity and visualization"
    tags="UI design, UX, visual identity, prototyping, research, figma, Adobe, interactive design"
    thumbnail="/images/neoThumbnail.png"
    :description="projectDetails.interactiveDesign"
    :galleryItems="projectGalleries.interactiveDesign"
    projectLink="https://neodfys.netlify.app/"
  />

  <ProjectDropdown
    title="Intelligent Design" 
    date="21/11/2024"
    category="Pose Classification"
    tags="P5.js, interactive design, creative coding, AI, machine learning, generative art"
    thumbnail="/images/IDthumbnail.png"
    :description="projectDetails.PoseClassification"
    :galleryItems="projectGalleries.PoseClassification"

    projectLink ="https://www.superultra.dk/posts/2024/12/05/teaching-genai"
  />

 
  
  <!-- Second Project - Jewellery Generator -->
  <ProjectDropdown
    title="Jewellery Generator"
    date="03/01/2024"
    category="Branding"
    tags="Form, Color Theory Typography, Drawing, Creativity, 3D Modelling, Programming, Processing, Blender, JavaScript, CSS"
    thumbnail="/images/logo.png"
    :description="projectDetails.jewellery"
    :galleryItems="projectGalleries.jewellery"
  />
  
  <!-- Third Project - Creative Coding -->
  <ProjectDropdown
    title="Creative Coding"
    date="17/11/2023"
    category="Generative Art"
    tags="Drawing with Processing, p5.js"
    thumbnail="/images/creativeThumbnail.png"
    :description="projectDetails.creativeCoding"
    :galleryItems="projectGalleries.creativeCoding"
  />
  
  <!-- Fourth Project - Visual Language 
  <ProjectDropdown
    title="Visual Language"
    date="10/09/2023"
    category="Fun project"
    tags="Form, color theory, typography, drawing, creativity"
    thumbnail="/images/face.svg"
    :description="projectDetails.visualLanguage"
    :galleryItems="projectGalleries.visualLanguage"
  />-->
  
  <!-- Fifth Project - Color Observation -->
  <ProjectDropdown
    title="Color Observation"
    date="10/09/2023"
    category="Project"
    tags="Form, color theory, typography, drawing, creativity"
    thumbnail="/images/Makrel1.jpg"
    :description="projectDetails.colorObservation"
    :galleryItems="projectGalleries.colorObservation"
  />
</template>