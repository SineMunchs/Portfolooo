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
        thirdSemester: "A comprehensive UI design project exploring visual identity concepts and interactive prototyping.",
        jewellery: "An experimental generator for creating unique jewellery designs using algorithmic processes.",
        creativeCoding: "Experiments with Processing to create generative art and interactive visualizations.",
        visualLanguage: "An exploration of form, color theory, typography and drawing techniques.",
        colorObservation: "A study of color relationships and their application in visual design."
      },
      // Gallery images for each project
      projectGalleries: {
        thirdSemester: [
          "/images/battle1.jpg",
          "/images/battle2.jpg",
          "/images/battle3.jpg",
          "/images/battle4.jpg"
        ],
        jewellery: [
          "/video/hands.mp4",
          "/images/jewellery2.jpg",
          "/images/jewellery3.jpg",
          "/images/jewellery4.jpg"
        ],
        creativeCoding: [
          "/images/processing1.jpg",
          "/images/processing2.jpg",
          "/images/processing3.jpg",
          "/images/processing4.jpg"
        ],
        visualLanguage: [
          "/images/visual1.jpg",
          "/images/visual2.jpg",
          "/images/visual3.jpg",
          "/images/visual4.jpg"
        ],
        colorObservation: [
          "/images/color1.jpg",
          "/images/color2.jpg",
          "/images/color3.jpg",
          "/images/color4.jpg"
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
  
  <!-- First Project - Keeping original text and adding gallery -->
  <ProjectDropdown 
    title="Interactive Design"  
    date="21/06/2024"
    category="Identity and visualization"
    tags="UI design, UX, visual identity, prototyping, research, figma, interaction design" 
    thumbnail="/images/face.svg"
    :description="projectDetails.thirdSemester"
    :galleryImages="projectGalleries.thirdSemester"
  />
  
  <ProjectDropdown 
  title="Jewellery Generator" 
  date="15/04/2024"
  category="Branding"
  tags="Form, Color Theory Typography, Drawing, Creativity, 3D Modelling, Programming, Processing" 
  thumbnail="/images/face.svg"
  :description="projectDetails.jewellery"
  :galleryItems="projectGalleries.jewellery"
/>
  
  <!-- Third Project -->
  <ProjectDropdown 
    title="Creative Coding" 
    date="17/02/2025"
    category="Fun projects"
    tags="Drawing with Processing" 
    thumbnail="/images/face.svg"
    :description="projectDetails.creativeCoding"
    :galleryImages="projectGalleries.creativeCoding"
  />
  
  <!-- Fourth Project -->
  <ProjectDropdown 
    title="VISUAL LANGUAGE" 
    date="10/09/2023"
    category="Fun project"
    tags="FORM, COLOR THEORY, TYPOGRAPHY, DRAWING, CREATIVITY" 
    image="../../images/Figur_color.png"
    thumbnail="/images/face.svg"
    :description="projectDetails.visualLanguage"
    :galleryImages="projectGalleries.visualLanguage"
  />
  
  <!-- Fifth Project -->
  <ProjectDropdown 
    title="COLOR OBSERVATION" 
    date="10/09/2023"
    category="Fun project"
    tags="FORM, COLOR THEORY, TYPOGRAPHY, DRAWING, CREATIVITY" 
    image="../../images/Makrel1.jpg"
    thumbnail="/images/face.svg"
    :description="projectDetails.colorObservation"
    :galleryImages="projectGalleries.colorObservation"
  />
  
</template>