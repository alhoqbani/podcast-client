<template>
    <div>
        <h3> Now playing {{podcast.name}}... </h3>
        <audio controls ref="player" autoplay style="width: 100%">
            <source :src="podcast.files.mp3" type="audio/mp3">
            Your browser does not support the video tag.
        </audio>
    </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'player',
    props: ['podcast'],
    watch: {
      podcast () {
        this.$refs.player.load()
      }
    },
    methods: {
      ...mapActions({
        'setPlaying': 'Player/setPlaying'
      })
    },
    mounted () {
      this.$refs.player.addEventListener('ended', () => {
        this.setPlaying(null)
      })
    }
  }

</script>
