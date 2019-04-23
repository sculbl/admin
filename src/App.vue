<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  mounted() {
    this.setScrollH();
    window.onresize = () => {
      this.setScrollH();
    };
  },
  methods: {
    ...mapActions(["setScrollY"]),
    setScrollH() {
      this.$store.dispatch('global/setScrollY', this.$setContainerHeight())
    }
  }
};
</script>
<style>
body {
  background: #f4f4f4;
}
</style>