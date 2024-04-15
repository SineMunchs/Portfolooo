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

<template>
    <Background class = "mt-60 mb-10">
      <TitleLink class=" m-0 p-0 scale-y-[-1] "></TitleLink>
      <TitleLink class="m-0 p-0"></TitleLink>
      <!--  <TitleLink class="scale-y-[-1]"></TitleLink>
    <TitleLink1 class = "rotate-180 mr-4 mt-61"></TitleLink1> -->

    </Background>
</template>
