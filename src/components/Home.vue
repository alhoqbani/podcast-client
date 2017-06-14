<template>
  <header>
    <h1>Home</h1>
    <podcast-simple></podcast-simple>
    <podcast-simple></podcast-simple>
    <podcast-simple></podcast-simple>
    <podcast-simple></podcast-simple>

  </header>

</template>

<script>
  import PodcastSimple from './podcasts/PodcastSimple'
  export default {
    components: {PodcastSimple},
    name: 'home',
    data () {
      return {}
    }
  }
</script>

<style scoped>


</style>
