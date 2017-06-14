<template>
  <div class="container">
    <header>
      <div>
        <h1 class="text-center">Podcast</h1>
        <player></player>

      </div>
    </header>
  </div>

</template>

<script>
  import Player from './player/Player'
  export default {
    components: {Player},
    name: 'top-header',
    data () {
      return {}
    }
  }
</script>

<style scoped>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

</style>
