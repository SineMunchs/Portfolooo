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
        jewellery: "I created a project integrating various disciplines from my studies. I applied form principles for balanced compositions and color theory for a harmonious, emotionally responsive palette. Typography selection balanced readability and personality through testing multiple font families.My drawing combined digital and traditional techniques in Procreate and Illustrator, supported by brainstorming and mood boards. For 3D elements, I used Blender to model and texture objects with attention to lighting. Programming with JavaScript and CSS brought interactive elements to life while maintaining visual integrity.",
        creativeCoding: "Experiments with Processing to create generative art and interactive visualizations.",
        visualLanguage: "An exploration of form, color theory, typography and drawing techniques.",
        colorObservation: "<< Sea to Shape >> From silvery makrel on ice, I distilled a palette of blues, grays, and cool neutrals. These colors—borrowed from the Bornholm deli, the Mackrel, turned into flowing geometric abstractions. Each curved composition breathes differently despite sharing the same oceanic palette, revealing how arrangement alone shifts visual harmony."
      },
      // Gallery images for each project
      projectGalleries: {
        interactiveDesign: [
          "/video/neo.mp4",
          "/images/neoIdentitet.png",
          "/images/neoComponents.png",
          "/images/neo.png",
          "/images/neoApp.png",
          "/video/Interactive.mp4",
          "/images/neoStretch.png"

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
        "/video/KusamaYayoi_Processing.mp4",      
        "/video/Molnar.mp4",
        "/video/ccHello.mp4",   

          
   
          
        "/images/processing3.jpg",
          "/images/processing4.jpg"
        ],
        visualLanguage: [
          "/images/face.svg",
          "/images/vin.jpg",
          "/images/visual4.jpg"
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
  
  <!-- Top border -->
  <div class="border-b border-blå p-1"></div>
  
  <!-- First Project - Interactive Design -->
  <ProjectDropdown
    title="Interactive Design" 
    date="21/06/2024"
    category="Identity and visualization"
    tags="UI design, UX, visual identity, prototyping, research, figma, interaction design"
    thumbnail="/images/neoThumbnail.png"
    :description="projectDetails.interactiveDesign"
    :galleryItems="projectGalleries.interactiveDesign"
  />
  
  <!-- Second Project - Jewellery Generator -->
  <ProjectDropdown
    title="Jewellery Generator"
    date="15/04/2024"
    category="Branding"
    tags="Form, Color Theory Typography, Drawing, Creativity, 3D Modelling, Programming, Processing"
    thumbnail="/images/logo.png"
    :description="projectDetails.jewellery"
    :galleryItems="projectGalleries.jewellery"
  />
  
  <!-- Third Project - Creative Coding -->
  <ProjectDropdown
    title="Creative Coding"
    date="17/02/2025"
    category="Fun projects"
    tags="Drawing with Processing"
    thumbnail="/images/creativeThumbnail.png"
    :description="projectDetails.creativeCoding"
    :galleryItems="projectGalleries.creativeCoding"
  />
  
  <!-- Fourth Project - Visual Language -->
  <ProjectDropdown
    title="Visual Language"
    date="10/09/2023"
    category="Fun project"
    tags="Form, color theory, typography, drawing, creativity"
    thumbnail="/images/face.svg"
    :description="projectDetails.visualLanguage"
    :galleryItems="projectGalleries.visualLanguage"
  />
  
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