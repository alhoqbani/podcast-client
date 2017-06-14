<template>
    <div class="container header">
        <header>
            <div>
                <h1 class="text-center">Podcast</h1>
                <player v-if="playing" :podcast="playing"></player>
                <h3 v-else> Welcome, Choose something to play... </h3>
            </div>
        </header>
    </div>

</template>

<script>
  import Player from './player/Player'
  import { mapGetters } from 'vuex'
  export default {
    components: {Player},
    name: 'top-header',
    computed: {
      ...mapGetters({
        playing: 'Player/getPlaying'
      })
    }
  }
</script>

<style scoped>
    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 200px;
    }

</style>
