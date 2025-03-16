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
        colorObservation: "<< Sea to Shape >> From silvery makrel on ice, I distilled a palette of blues, grays, and cool neutrals. These colors—borrowed from the Bornholm deli, the Mackrel, turned into flowing geometric abstractions. Each curved composition breathes differently despite sharing the same oceanic palette, revealing how arrangement alone shifts visual harmony."
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
          "/video/generator.mp4",
          "/video/generator.mp4",
          "/video/generator.mp4"
        ],
        creativeCoding: [
          "/images/processing1.jpg",
          "/images/processing2.jpg",
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
          "/images/colorObs.jpg",        ]
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
    :galleryItems="projectGalleries.thirdSemester"
  />
  
  <ProjectDropdown
    title="Jewellery Generator"
    date="15/04/2024"
    category="Branding"
    tags="Form, Color Theory Typography, Drawing, Creativity, 3D Modelling, Programming, Processing"
    thumbnail="/images/hands.png"
    :description="projectDetails.jewellery"
    :galleryItems="projectGalleries.jewellery"
  />
  
  <!-- Third Project -->
  <ProjectDropdown
    title="Creative Coding"
    date="17/02/2025"
    category="Fun projects"
    tags="Drawing with Processing"
    thumbnail="/images/colorObs.jpg"
    :description="projectDetails.creativeCoding"
    :galleryItems="projectGalleries.creativeCoding"
  />
  
  <!-- Fourth Project -->
  <ProjectDropdown
    title="Visual Language"
    date="10/09/2023"
    category="Fun project"
    tags="FORM, COLOR THEORY, TYPOGRAPHY, DRAWING, CREATIVITY"
    thumbnail="/images/face.svg"
    :description="projectDetails.visualLanguage"
    :galleryItems="projectGalleries.visualLanguage"
  />
  
  <!-- Fifth Project -->
  <ProjectDropdown
    title="Color Observation"
    date="10/09/2023"
    category="Project"
    tags="FORM, COLOR THEORY, TYPOGRAPHY, DRAWING, CREATIVITY"
    thumbnail="/images/Makrel1.jpg"
    :description="projectDetails.colorObservation"
    :galleryItems="projectGalleries.colorObservation"
  />
</template>