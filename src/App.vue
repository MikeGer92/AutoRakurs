<template>
  <div id="app">
    <MainLayout />
      <!-- <router-view/> -->
  </div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue'

export default {
  name: 'App',
  components: {
    MainLayout
  },
  data() {
    return {
      showLoader: true
    }
  },
}

</script>

<style lang="scss">
// @import 'assets/index';
#app {
  font-family: Inter;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  max-width: 2065px;
  margin: 0 auto;
  color: #2c3e50;
}
.home__title {
  font-style: normal;
  font-weight: 700;
  font-size: 45.9755px;
  line-height: 56px;
  &_price {
    font-style: normal;
    font-weight: 700;
    font-size: 62.2653px;
    line-height: 75px;
    color: #12609E;
  }
}
</style>
