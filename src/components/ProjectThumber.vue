<script>import { RouterLink } from 'vue-router';

// Ref - Play video Pause -Thumber to video inset 

 export default {
   props: ['title', 'tags', 'video', 'link'],
   components: {
    RouterLink,
   },
   methods: {
    playVideo () {
        this.$refs.video.play()
    },
    stopVideo () {
        this.$refs.video.pause()
    }
   }
 }
</script>
<template>
    <div class="py-3 ml-1 grid grid-cols-2 row-2" @mouseenter="playVideo" @mouseleave="stopVideo">
  
        <RouterLink :to="link" class="elite text-blå font-bold text-6xl hover:text-blue-600 tracking-widest">{{ title }}</RouterLink>
        <h1 class="flex elite text-blå tracking-widest row-start-2">{{ tags }}</h1>

        <video class="justify-self-end object-cover h-60 w-96 ml-20 row-span-2 col-span-2 row-start-1 row-end-4"  loop muted ref="video">
            <source :src="video" type="video/mp4">
        </video>
</div>
</template>