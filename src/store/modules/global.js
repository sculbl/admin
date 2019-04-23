import * as type from '../types'

const state = {
    scrollY: 0
}

const mutations = {
    [type.SCROLLY] (state, scrollY) {
        state.scrollY = scrollY;
    }
}

const actions = {
    setScrollY({ commit }, scrollY) {
        commit(type.SCROLLY, scrollY)
    }
}



export default {
    namespaced: true,
    state,
    mutations,
    actions
}