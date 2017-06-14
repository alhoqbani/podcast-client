<template>
    <div class="podcast">
        <h4><a href="#" @click.prevent="switchPodcast(podcast.id)">{{podcast.name}}</a> <span
                class="pull-right text-danger">{{podcast.created_at_human}}</span>
            <time :datetime="podcast.created_at"></time>
        </h4>
        <div class="media">
            <div class="media-left" :class="{hidden: playing && playing.id === podcast.id}">
                <a href="#" @click.prevent="switchPodcast(podcast.id)"><img src="../../assets/play-button.svg"
                                                                            class="play-button"></a>
            </div>
            <div class="media-body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis expedita impedit magni nisi. Aliquid asperiores, atque beatae deserunt enim porro quaerat quisquam voluptate! Blanditiis cumque excepturi expedita nemo odit rem.
            </div>
        </div>
    </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    name: 'podcast-simple',
    props: ['podcast'],
    methods: {
      ...mapActions({
        'getPodcast': 'Podcasts/getPodcast',
        'setPlaying': 'Player/setPlaying'
      }),
      switchPodcast (id) {
        this.getPodcast(id).then(podcast => {
          this.setPlaying(podcast)
        })
      }
    },
    computed: {
      ...mapGetters({
        playing: 'Player/getPlaying'
      })
    }
  }

</script>

<style>
    .play-button {
        height: 5%;
    }

    .podcast {
        margin-top: 20px;
        background-color: white;
        padding: 10px;
        box-shadow: lightgray;
    }
</style>
