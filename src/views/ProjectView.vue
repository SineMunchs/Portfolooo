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
       Webshop: "For this project, I created an experience site that conveys complex historical narratives through interactive storytelling. I added a humorous twist to the absurd concept of buying Greenland by flipping the narrative—what if Denmark sold Greenland instead? The satirical webshop explores what the country could purchase with the proceeds to improve Danish welfare. The design balances historical commentary with engaging user experience, using primary sources and fictional product listings to create both entertainment and reflection. This project demonstrates my ability to transform serious geopolitical concepts into accessible digital experiences that engage visitors through humor while prompting deeper consideration of national priorities.",
        PoseClassification: "Artificial Intelligence and How You Can Use It to Expand Your Creative Use of Code. A three-module course exploring AI for creative coding. Module 1 introduces machine learning with Teachable Machine for classifying images, sounds, and poses. Module 2 covers generative AI technologies for creating text, images, and sounds. Module 3 allows students to develop self-directed projects applying these tools to extend creative capabilities. Read more about the course through the link underneath.",
        jewellery: "I created a project integrating various disciplines from my studies. I applied form principles for balanced compositions and color theory for a harmonious, emotionally responsive palette. Typography selection balanced readability and personality through testing multiple font families.My drawing combined digital and traditional techniques in Procreate and Illustrator, supported by brainstorming and mood boards. For 3D elements, I used Blender to model and texture objects with attention to lighting. Programming with JavaScript and CSS brought interactive elements to life while maintaining visual integrity.",
        creativeCoding: "Experiments with Processing & P5.js to create generative art and interactive visualizations.",
        ProjectionMapping: "Projection Mapping installation for Thoravej 29 and Generation Hope's Snart lab. The project transformed over 3,000 letters from young people into visual art. Working with Freja, we focused on animating the doodles from these letters using AI, bringing their hopes and dreams to life. The installation remains on display at Thoravej 29.",
        
        visualLanguage: "An exploration of form, color theory, typography and drawing techniques.",
        colorObservation: ""
      },
      // Gallery images for each project
      projectGalleries: {
        interactiveDesign: [
          "/images/neoApp.png",
          "/video/neo.mp4",
          "/images/neostretch.png",
          "/images/neoImplementering.png",
          "/images/neoCardcomp.png",
          "/images/neofigma.png",
          "/video/interactive1.webm",
        ],
        Webshop: [
          "/images/webshop.png",
          "/images/webshop1.png",
          "/images/webshop2.png",
          
        ],
        PoseClassification: [
          "/video/IDHaiku.mp4",
          "/video/IDHjerte.mp4",
          "/video/IDhjerte2.mp4",
        ],
        jewellery: [
          "/video/hands.mp4",
          "/video/generator.mp4",
          "/images/hoshoIllustrationer.png", 
          "/images/hoshoIdentitet.jpg"
        ],
        creativeCoding: [
          "/video/KusamaYayoi_Processing.webm",      
          "/video/ccp5.webm",  
          "/video/ccMesh.webm",             
          "/video/Acaii.webm", 
          "/video/ccboxes.webm",
          "/video/Molnar.webm",
          "/video/ccHello.webm",  
        ],
        projectionMapping: [
        "/video/projectionMapping.webm",    
        "/images/Projection1.png",  
        ],
        visualLanguage: [
          "/images/face.svg",
          "/images/vin.jpg",
          "/images/illusion.png", 
          "/images/blue-space.png"
        ]
      },
      // Color Observation sub-projects
      colorObservationSubProjects: [
        {
          title: "Color Observation",
          description: "Sea to Shape. From silvery makrel on ice, I distilled a palette of blues, grays, and cool neutrals. These colors—borrowed from the Bornholm deli, the Mackrel, turned into flowing geometric abstractions. Each curved composition breathes differently despite sharing the same oceanic palette, revealing how arrangement alone shifts visual harmony.",
          galleryItems: [
            "/images/Makrel.jpg",
            "/images/ColorObs.jpg"
          ]
        },
        {
          title: "Still Life",
          description: "",
          galleryItems: [
            "/images/photo1.webp",
            "/images/photo2.webp",
            "/images/photo3.webp",
            "/images/photo4.webp",
            "/images/photo7.webp",
              "/images/photo5.webp",
              "/images/photo6.webp",             
              "/images/photo9.webp",             
              "/images/photo8.webp",
              "/images/photo10.webp",
              "/images/photo11.webp",
              "/images/photo12.webp",  
             
          ]
        },
     // {
     //     title: "Form Exploration",
     //     description: "<< Form Exploration >> A study of organic forms inspired by natural elements and their translation into abstract geometric compositions.",
     //     galleryItems: [
     //       "/images/Makrel.jpg",
     //       "/images/colorObs.jpg"
    //      ]
   //     }
     ]
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
      src="/images/Smil1.svg"
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
    tags="UI design, UX, visual identity, prototyping, research, figma, adobe, interactive design"
    :description="projectDetails.interactiveDesign"
    :galleryItems="projectGalleries.interactiveDesign"
    projectLink="https://neodfys.netlify.app/"
  />

  <ProjectDropdown
    title="Webshop" 
    date="21/01/2025"
    tags="UX/UI design, interactive storytelling, historical narrative, user research, HTML/CSS, javaScript, content strategy, information architecture, visual design, figma"
    :description="projectDetails.Webshop"
    :galleryItems="projectGalleries.Webshop"
    projectLink="https://welfareorgreenland.netlify.app/"
  />
  

  <ProjectDropdown
    title="Intelligent Design" 
    date="21/11/2024"
    tags="P5.js, interactive design, creative coding, AI, machine learning, generative art"
    :description="projectDetails.PoseClassification"
    :galleryItems="projectGalleries.PoseClassification"
    projectLink="https://www.superultra.dk/posts/2024/12/05/teaching-genai"
  />
  
  <!-- Second Project - Jewellery Generator -->
  <ProjectDropdown
    title="Jewellery Generator"
    date="03/01/2024"
    tags="Form, color Theory typography, drawing, creativity, 3D modelling, programming, processing, blender, javaScript, CSS"
    :description="projectDetails.jewellery"
    :galleryItems="projectGalleries.jewellery"
  />
  
  <!-- Third Project - Creative Coding -->
  <ProjectDropdown
    title="Creative Coding"
    date="17/11/2023"
    tags="Drawing with processing, p5.js"
    :description="projectDetails.creativeCoding"
    :galleryItems="projectGalleries.creativeCoding"
  />

<ProjectDropdown
    title="Projection Mapping"
    date="22/03/2025"
    tags="AI, runway, projection mapping, after effect, generative art"
    :description="projectDetails.projectionMapping"
    :galleryItems="projectGalleries.projectionMapping"
  />
  
   <!-- Multi-project Dropdown for Color Observation -->
   <ProjectDropdown
    title="Observation" 
    date="10/09/2023"
    category="Things I observe"
    tags="form, color theory, typography, drawing, creativity, observation, photo, research"
    :description="projectDetails.colorObservation"
    :subProjects="colorObservationSubProjects"
  />

    </template>