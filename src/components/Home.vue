<template>
  <div class="container main">
    <div class=" col-md-6 col-md-offset-3">
      <h3 class="text-center">Podcasts List</h3>
      <transition-group name="fade">
        <podcast-simple :key="1" v-for="podcast in podcasts"></podcast-simple>
      </transition-group>

      <button class="btn btn-primary btn-block podcasts-more" @click.prevent="show">More Podcasts</button>
    </div>
  </div>
</template>

<script>
  import PodcastSimple from './podcasts/PodcastSimple'
  export default {
    components: {PodcastSimple},
    name: 'home',
    data: () => {
      return {
        podcasts: []
      }
    },
    methods: {
      show: function () {
        this.podcasts.push([])
      }
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
