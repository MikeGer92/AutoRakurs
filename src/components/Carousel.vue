<template>
  <div class="carousel">
    <CarouselItem
      v-for="item in imagesList" 
      :key="item.id"
      :imageItem="item" 
    />
    <button type="button" @click="nextSlide">NEXT SLIDE</button>
    <button type="button" @click="prevSlide">PREV SLIDE</button>

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
  },
  data() {
    return {
      currSliderIndex: 0
    }
  },
  methods: {
    prevSlide() {
      if (this.currSliderIndex > 0) {
        this.currSliderIndex--
      }

    },
    nextSlide() {
      this.currSliderIndex++
    }
  }
}
</script>

<style lang="scss">
.carousel {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100%;
}
</style>