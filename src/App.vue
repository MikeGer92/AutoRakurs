<template>
  <div id="app">
    <router-view />
      <Loader v-if="showLoader"/>
      <div class="home__title">ВЫБЕРИТЕ СВОЙ АВТОМОБИЛЬ</div>
      <div class="home__title_price">123 456 780 ₽</div>
  </div>
</template>

<script>
import Loader from '@/components/app/Loader.vue'

export default {
  name: 'App',
  components: {
    Loader
  },
  data() {
    return {
      showLoader: false
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Inter;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
