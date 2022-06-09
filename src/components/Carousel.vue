<template>
  <div class="carousel">
    <div class="slider-wrapper">
      <button class="prev-btn" @click="showPrev()"></button>
        <vue-slick-carousel
          ref="carousel"
          :centerMode="true"
          :arrows="true"
          :infinite="true"
          :slides-to-show="4"
          :dots="false"
          class="carousel"
          :style="{'display': flex, 'width': '1500px', 'align-items': 'center'}"
        >
          <div class="slider__item">
            <img v-if="!active" :src="require('@/assets/images/card.png')">
            <img v-else :src="require('@/assets/images/card-active.png')">
          </div>
          <div class="slider__item">
            <img v-if="!active" :src="require('@/assets/images/umbrella.png')">
            <img v-else :src="require('@/assets/images/umbrella-active.png')">
          </div>
          <div class="slider__item">
            <img v-if="!active" :src="require('@/assets/images/setting.png')">
            <img v-else :src="require('@/assets/images/setting-active.png')">
          </div>
          <div class="slider__item">
            <img v-if="!active" :src="require('@/assets/images/payment.png')">
            <img v-else :src="require('@/assets/images/payment.png')">
          </div>
          <div class="slider__item">
            <img v-if="!active" :src="require('@/assets/images/card.png')">
            <img v-else :src="require('@/assets/images/card-active.png')">
          </div>
          <div class="slider__item">
            <img v-if="!active" :src="require('@/assets/images/umbrella.png')">
            <img v-else :src="require('@/assets/images/umbrella-active.png')">
          </div>
          <div class="slider__item">
            <img v-if="!active" :src="require('@/assets/images/setting.png')">
            <img v-else :src="require('@/assets/images/setting-active.png')">
          </div>
          <div class="slider__item">
            <img v-if="!active" :src="require('@/assets/images/payment.png')">
            <img v-else :src="require('@/assets/images/payment.png')">
          </div>
        </vue-slick-carousel>
        <button class="next-btn" @click="showNext"></button>
      </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
export default {
  name: 'Carousel',
  components: { VueSlickCarousel },
  // props: {
  //   imagesList: {
  //     type: Array,
  //     default: () => []
  //   }
  // },
  data() {
    return {
      currSliderIndex: 0
    }
  },
  methods: {
    showNext() {
      this.$refs.carousel.next()
    },
    showPrev() {
      this.$refs.carousel.prev()
    },
  }
}
</script>

<style lang="scss">
.carousel {
  display: flex;
}
.slider__item {
  display: flex;
  max-width: 300px;
  height: 250px;
  object-fit: contain;
  overflow: hidden;
  & img {
    width: auto;
    height: 100%;
  }
}
.slider-wrapper {
  display: flex;
  align-items: center;
}
.slick-slide {
  display: flex;
}
.carousel {
  margin: auto 0;
  width: 1400px;
}
.slick-slider[data-v-3d1a4f76] {
  position: relative;
  display: flex;
  box-sizing: border-box;
}
.slick-list[data-v-3d1a4f76] {
  position: relative;
  display: block;
  overflow: hidden;
  margin: 0;
  padding: 0;
  transform: translateZ(0);
}
.carousel-sorce {
  display: block;
  justify-content: center;
  align-items: center;
}
.slick-prev {
  display: none;
  border: none;
  font-size: 0;
}
.slick-next {
  display: none;
  border: none;
  font-size: 0;
}
.slick-dots {
  li[class="slick-active"] {
    button {
      background-color: green;
    }
  }
}
.next-btn {
  width: 104px;
  height: 104px;
  border-radius: 100%;
  border: none;
  background: url('../assets/images/next-btn.png');
  background-size: contain;
}
.prev-btn {
  display: flex;
  width: 104px;
  height: 104px;
  border-radius: 100%;
  border: none;
  background: url('../assets/images/prev-btn.png');
  background-size: contain;
}
</style>