<template>
  <div id="app">
    <top-header></top-header>
    <home></home>
  </div>
</template>

<script>
  import TopHeader from './components/TopHeader.vue'
  import Home from './components/Home.vue'
  import Player from './components/player/Player.vue'
  import SimplePodcast from './components/podcasts/PodcastSimple.vue'

  export default {
    name: 'app',
    components: {
      TopHeader, Home, Player, SimplePodcast
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
