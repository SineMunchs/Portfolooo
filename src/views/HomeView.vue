<script>
import Background from '@/components/Background.vue'
import TitleLink from '@/components/TitleLink.vue'

export default {
  data () {
    return {
      count: 0
    }
  },
  components: {
    Background,
    TitleLink,
  },
}
</script>

<!--Hello world-->
<template>
    <Background class = "mt-60 mb-10">
      <TitleLink class=" m-0 p-0 scale-y-[-1] hover:animate-spin"></TitleLink>
      <TitleLink class="m-0 p-0"></TitleLink>
    </Background>
</template>
