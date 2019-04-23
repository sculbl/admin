import * as type from '../types'
import Cookies from 'js-cookie'

const state = {
  sidebar: {
    opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
    withoutAnimation: false
  },
  device: 'desktop',
  size: Cookies.get('size') || 'small'
}

const mutations = {
  [type.TOGGLE_SIDEBAR] (state) {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    if (state.sidebar.opened) {
      Cookies.set('sidebarStatus', 1)
    } else {
      Cookies.set('sidebarStatus', 0)
    }
  },
  [type.CLOSE_SIDEBAR] (state, withoutAnimation) {
    Cookies.set('sidebarStatus', 0)
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
  [type.TOGGLE_DEVICE] (state, device) {
    state.device = device
  },
  [type.SET_SIZE] (state, size) {
    state.size = size
    Cookies.set('size', size)
  }
}

const actions = {
  toggleSideBar({ commit }) {
    commit(type.TOGGLE_SIDEBAR)
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit(type.CLOSE_SIDEBAR, withoutAnimation)
  },
  toggleDevice({ commit }, device) {
    commit(type.TOGGLE_DEVICE, device)
  },
  setSize({ commit }, size) {
    commit(type.SET_SIZE, size)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
