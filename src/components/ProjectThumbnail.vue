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
    <a :href="url">
        <div class="thumbnail">
            <img :src="image" alt="Project Thumbnail">
            <div class="thumbnail-text">{{ title }}</div>
        </div>
    </a>
</template>