<template>
  <div class="carousel-main">
    <div class="carousel-main__title">ВЫБЕРИТЕ ВАШ ПОДАРОК</div>
    <div class="slider-wrapper">
      <button class="prev-btn" @click="showPrev"></button>
        <vue-slick-carousel
          @afterChange="afterPageChange"
          ref="carousel"
          :centerMode="true"
          :arrows="true"
          :infinite="true"
          :slides-to-show="4"
          :dots="false"
          class="carousel"
          :style="{ 'width': '1500px', 'align-items': 'center'}"
        >
          <div class="slider__item"
            :class="{'slider_item-active': currentPage===0 }"
          >
            <img v-if="currentPage===0" :src="require('@/assets/images/card-active.png')">
            <img v-else :src="require('@/assets/images/card.png')">
          </div>
          <div class="slider__item"
            :class="{'slider_item-active': currentPage===1 }"
          >
            <img v-if="currentPage===1" :src="require('@/assets/images/umbrella-active.png')">
            <img v-else :src="require('@/assets/images/umbrella.png')">
          </div>
          <div class="slider__item"
            :class="{'slider_item-active': currentPage===2 }"
          >
            <img v-if="currentPage===2" :src="require('@/assets/images/setting-active.png')">
            <img v-else :src="require('@/assets/images/setting.png')">
          </div>
          <div class="slider__item"
            :class="{'slider_item-active': currentPage===3 }"
          >
            <img v-if="currentPage===3" :src="require('@/assets/images/payment-active.png')">
            <img v-else :src="require('@/assets/images/payment.png')">
          </div>
          <div class="slider__item"
            :class="{'slider_item-active': currentPage===4 }"
          >
            <img v-if="currentPage===4" :src="require('@/assets/images/card-active.png')">
            <img v-else :src="require('@/assets/images/card.png')">
          </div>
          <div class="slider__item"
            :class="{'slider_item-active': currentPage===5 }"
          >
            <img v-if="currentPage===5" :src="require('@/assets/images/umbrella-active.png')">
            <img v-else :src="require('@/assets/images/umbrella.png')">
          </div>
          <div class="slider__item"
            :class="{'slider_item-active': currentPage===6 }"
          >
            <img v-if="currentPage===6" :src="require('@/assets/images/setting-active.png')">
            <img v-else :src="require('@/assets/images/setting.png')">
          </div>
          <div class="slider__item"
            :class="{'slider_item-active': currentPage===7 }"
          >
            <img v-if="currentPage===7" :src="require('@/assets/images/payment-active.png')">
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
  data() {
    return {
      active: true,
      activeImage: 'paySystems',
      sliderPageIndex: 0
    }
  },
  computed: {
  currentPage() {
      return this.sliderPageIndex 
    }
  // },
},
  methods: {
    showNext() {
      this.$refs.carousel.next()
      console.log(this.currentPage)
    },
    showPrev() {
      this.$refs.carousel.prev()
      console.log(this.currentPage)
    },
    afterPageChange(page) {
      this.sliderPageIndex = page;
  }
  }
}
</script>

<style lang="scss">
.carousel-main {
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  &__title {
    margin-left: 80px;
    display: flex;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 45.9755px;
    line-height: 56px;
    color: #000000;
  }
}
.slider__item {
  display: flex;
  align-items: center;
  max-width: 300px;
  height: 300px;
  & img {
      width: 280px;
      height: auto;
    }
  }
.slider_item-active {
  display: flex;
    max-width: 350px;
    height: 300px;
    background: #FFFFFF;
    box-shadow: 0px 5.92582px 16.296px rgba(0, 0, 0, 0.25);
    border-radius: 66.6654px;
    cursor: pointer;
    & img {
    max-width: 320px;
    height: auto;
    -webkit-transform:scale(1.35); /* Safari and Chrome */
    -moz-transform:scale(1.35); /* Firefox */
    -ms-transform:scale(1.35); /* IE 9 */
    -o-transform:scale(1.35); /* Opera */
     transform:scale(1.35);
  }
}
.slider-wrapper {
  margin: 45px 0 0 60px;
  display: flex;
  align-items: center;
}
.slick-initialized .slick-slide[data-v-e4caeaf8] {
  display: flex;
  justify-content: space-around;
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
  cursor: pointer;
}
.prev-btn {
  display: flex;
  width: 104px;
  height: 104px;
  border-radius: 100%;
  border: none;
  background: url('../assets/images/prev-btn.png');
  background-size: contain;
  cursor: pointer;
}
</style>