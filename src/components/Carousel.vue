<template>
  <div class="carousel">
    <!-- <div class="image" v-for="image in imagesLis" :key="image.id">
      <img :src="require(image.img)">
    </div> -->
    <CarouselItem
      v-for="item in imagesList" 
      :key="item.id"
      :imageItem="item" 
    />

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
  width: 100%;
  height: 100%;
}
</style>