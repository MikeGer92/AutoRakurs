<template>
  <div class="carousel-item">
    <img :src="require(`${item.img}`)">
  </div>
</template>

<script>
export default {
  name: 'CarouselItem',
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss">
.carousel-item {
  display: flex;
}
</style>