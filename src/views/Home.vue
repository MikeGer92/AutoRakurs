<template>
  <div class="home">
    <Loader v-if="showLoader" />
    <div class="home__wrapper">
      <div class="home__header" :style="{'background-image':'url(../assets/images/home-mask.png)'}"></div>
    <!-- <h1>ГЛАВНАЯ</h1> -->
    </div>
  </div>
</template>


<script>
import Loader from '@/components/app/Loader.vue'
export default {
  name: 'Home',
  components: { Loader },
  data() {
    return {
      showLoader: false
    }
  }

}
</script>
<style lang="scss">
.home {
  width: 100%;
  display: flex;
  &__wrapper {
    display: flex;
    flex-direction: column;
  }
  &__header {
    background-image: require('../assets/images/home-mask.png') no-repeat;
  }
}
</style>