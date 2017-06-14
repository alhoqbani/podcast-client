<template>
  <header>
    <h1>Header</h1>
    <player></player>

  </header>

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


</style>
