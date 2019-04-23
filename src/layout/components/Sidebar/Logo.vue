<template>
  <div class="sidebar-logo-container" :class="{'collapse':collapse}">
    <transition name="sidebarLogoFade">
      <router-link v-if="collapse" key="collapse" class="sidebar-logo-link" to="/">
        <img :src="logo" class="sidebar-logo">
      </router-link>
      <router-link v-else key="expand" class="sidebar-logo-link" to="/">
        <img v-if="logo" :src="logo" class="sidebar-logo">
        <div class="sidebar-title">
          <h1>{{ title }} </h1>
          <h6>{{ title2 }} </h6>
        </div>
      </router-link>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'SidebarLogo',
  props: {
    collapse: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      title: '智慧校园大数据分析平台',
      title2: '数据中心平台',
      logo: require('@/assets/header/logo.png')
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.sidebar-logo-container {
  padding: 0 10px;
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background: #2b2f3a;
  text-align: center;
  overflow: hidden;

  & .sidebar-logo-link {
    display: flex !important;
    align-items: center;
    height: 100%;
    width: 100%;

    & .sidebar-logo {
      width: 32px;
      height: 32px;
      margin-right: 12px;
    }
    .sidebar-title {
      text-align: left;
      h1 {
        margin: 0;
        color: #fff;
        font-weight: 600;
        line-height: 100%;
        font-size: 13px;
      }
      h6 {
        margin: 0;
        padding-top: 5px;
        line-height: 100%;
        font-size: 12px;
        color: #fff;
      }
    }
  }

  &.collapse {
    .sidebar-logo {
      margin-right: 0px;
    }
  }
}
</style>
