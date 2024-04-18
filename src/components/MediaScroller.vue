<template>
  <section class="media-scroller">
    <div class="media-element" v-for="(image, index) in images" :key="index">
      <img :src="image.src" :alt="image.alt" class="snap-center" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'MediaScroller',
  data() {
    return {
      // Array of images
      images: [
        { src: "/picture/projekt1.jpg", alt: "hosho" },
        { src: "/picture/projekt2.jpg", alt: "visuel identitet" },
        { src: "/picture/projekt4.png", alt: "Illustrationer" },
        { src: "/picture/projekt3.jpg", alt: "Billedestil" }
      ]
    };
  }
}
</script>

<style scoped>
.media-scroller {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  background-color: #f5f5f5;
  height: 100%;
}

.media-element {
  flex: 0 0 auto;
  scroll-snap-align: center;
  width: 80%; /* Adjust w if needed */
}

img {
  width: 100%;
  height: auto;
}
</style>
