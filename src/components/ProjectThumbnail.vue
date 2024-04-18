<script>

export default {
    props: {
        title: String,
        image: String,
        url: String,
        },
    }
</script>


<template>
    <!-- Thumbnail -->
    <div class="elite">
        <img :src="image" alt="Project thumbnail">
    <h2 class="elite font-bold mt-30">{{ title }}</h2>


    <a :href="url" class="text-blau"></a>
<RouterLink :to="url">Link to projects</RouterLink>
   

    </div>
    
</template>