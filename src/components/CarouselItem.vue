<template>
  <div class="carousel-item">
    <img :src="require('../assets/images/'+imageItem.img)">
  </div>
</template>

<script>
export default {
  name: 'CarouselItem',
  props: {
    imageItem: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss">
.carousel-item {
  display: flex;
  width: 300px;
  height: 100%;
  & img {
    width: auto;
    height: 100%;
  }
}
</style>