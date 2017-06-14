<template>
    <div>
        <h3> Now playing {{podcast.name}}... </h3>
        <audio controls ref="player" autoplay>
            <source :src="podcast.files.mp3" type="audio/mp3">
            Your browser does not support the video tag.
        </audio>
    </div>
</template>

<script>
  export default {
    name: 'player',
    props: ['podcast'],
    watch: {
      podcast () {
        this.$refs.player.load()
      }
    }

  }

</script>
