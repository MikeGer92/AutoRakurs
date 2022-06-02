<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div class="home__title">ВЫБЕРИТЕ СВОЙ АВТОМОБИЛЬ</div>
    <div class="home__title_price">123 456 780 ₽</div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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
