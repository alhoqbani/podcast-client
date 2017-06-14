import Vuex from 'vuex'
import Vue from 'vue'

import Player from './modules/player/index.js'
import Podcasts from './modules/podcasts/index.js'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    Player,
    Podcasts
  }
})
