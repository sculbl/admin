<template>
  <div class="drawer__wrap">
    <transition name="fade">
      <div class="model" v-if="visible" @click="cancel"></div>
    </transition>
    <transition name="slide-fade">
      <div class="drawer" v-if="visible" :style="`${locationPos}: 0; width: ${width};`">
        <h4>{{ title }}</h4>
        <div class="content" :class="{ active: !paddingNone  }">
          <slot />
        </div>
        <div class="btn-bottom">
          <slot name="btny" />
          <el-button type="primary" @click="determine">确定</el-button>
          <el-button @click="cancel">取消</el-button>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: "新建"
    },
    width: {
      type: String,
      default: "25%"
    },
    locationPos: {
      type: String,
      default: "right"
    },
    paddingNone: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    cancel() {
			this.visible = false;
		},
    determine() {
      this.$emit("on-click-ok");
    }
  },
  computed: {
    visible: {
      get() {
        return this.value;
      },
      set() {
        this.$emit("input", false);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import '@/styles/mixin.scss';
.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(50px);
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.drawer__wrap {
  position: relative;
  z-index: 999;
  .drawer {
    position: fixed;
    top: 0;

    z-index: 99;

    height: 100%;
    background: #fff;
    z-index: 11;

    display: flex;
    flex-direction: column;
    h4 {
      height: 50px;
      line-height: 50px;
      padding: 0 20px;
      font-size: 18px;
      font-weight: 400;
      border-bottom: 1px solid #e7e7e7;
    }
    .content {
      @include scrollBar;
      overflow-y: auto;
      box-sizing: border-box;
      height: calc(100vh - 80px);
      &.active {
        padding: 20px;
      }
    }
    .btn-bottom {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      height: 50px;
      padding: 0 20px;
      border-top: 1px solid #e7e7e7;
    }
  }
  .model {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
  }
}
</style>