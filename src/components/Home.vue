<template>
  <div class="container main">
    <div class=" col-md-6 col-md-offset-3">

      <h3 class="text-center">Podcasts List</h3>
      <transition-group name="fade">
        <podcast-simple :key="podcast.id" v-for="podcast in podcasts" :podcast="podcast" @getPodcast="getPodcast($event)"></podcast-simple>
      </transition-group>

      <button class="btn btn-primary btn-block podcasts-more"
              v-if="page.hasMore()"
              @click.prevent="getMorePodcasts"
      >More Podcasts</button>
    </div>
  </div>
</template>

<script>
  import PodcastSimple from './podcasts/PodcastSimple'
  import { mapActions, mapGetters } from 'vuex'
  export default {
    components: {PodcastSimple},
    name: 'home',
    data: () => {
      return {

      }
    },
    methods: {
      ...mapActions({
        getPoddcasts: 'Podcasts/getPodcasts',
        getMorePodcasts: 'Podcasts/getMorePodcasts',
        getPodcast: 'Podcasts/getPodcast'
      }),
      show: function () {
        this.podcasts.push([])
      }
    },
    computed: {
      ...mapGetters({
        podcasts: 'Podcasts/getPodcasts',
        page: 'Podcasts/getPage'
      })
    },
    mounted () {
      this.getPoddcasts()
    }
  }

</script>

<style scoped>
  .main {
    background-color: lightgray;
    margin-top: 40px;
    padding-bottom: 50px;
  }

  .podcasts-more {
    margin-top: 50px;
  }

  .fade-enter-active, .fade-enter-leave {
    transition: opacity 500ms ease-in-out;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

</style>
