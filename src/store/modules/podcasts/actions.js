import * as api from '@/api/podcasts'

export const getPodcasts = ({commit}, page = 1) => {
  api.getPodcasts(page).then(response => {
    commit('setPodcasts', response.data.data)
    commit('setPageData', {
      current: response.data.meta.pagination.current_page,
      max: response.data.meta.pagination.total_pages
    })
  })
}

export const getMoreProducts = ({commit, state}, page = 1) => {
  api.getPodcasts(state.page.current + 1).then(response => {
    commit('appendToPodcasts', response.data.data)
    commit('setPageData', {
      current: state.page.current + 1,
      max: response.data.meta.pagination.total_pages
    })
  })
}
