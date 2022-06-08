<template>
  <div class="carousel">
    <CarouselItem v-for="item in imagesList" :key="item.id" :item="item" />

  </div>
</template>

<script>
import CarouselItem from '@/components/CarouselItem.vue'
export default {
  name: 'Carousel',
  components: { CarouselItem },
  props: {
    imagesList: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss">
.carousel {
  display: flex;
  width: 2065px;
  height: 300px;
}
</style>