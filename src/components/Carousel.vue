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
            v-for="item in giftsList" :key="item"
            :class="{'slider_item-active': currentPage===item.id }"
            @click="getGiftName(item.name)"
          >
            <img v-if="currentPage===item.id" :src="item.active_img">
            <img v-else :src="item.img">
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
      choosedGift: '',
      active: true,
      activeImage: 'paySystems',
      sliderPageIndex: 0,
      gift: '',
      giftsList: [
        {id:0, name: 'КЕШБЭК', img: require('@/assets/images/card.png'), active_img: require('@/assets/images/card-active.png')},
        {id:1, name: 'КАСКО', img: require('@/assets/images/umbrella.png'), active_img: require('@/assets/images/umbrella-active.png')},
        {id:2, name: '3 ТО', img: require('@/assets/images/setting.png'), active_img: require('@/assets/images/setting-active.png')},
        {id:3, name: '3 ПЛАТЕЖА', img: require('@/assets/images/payment.png'), active_img: require('@/assets/images/payment-active.png')},
        {id:4, name: 'КЕШБЭК', img: require('@/assets/images/card.png'), active_img: require('@/assets/images/card-active.png')},
        {id:5, name: 'КАСКО', img: require('@/assets/images/umbrella.png'), active_img: require('@/assets/images/umbrella-active.png')},
        {id:6, name: '3 ТО', img: require('@/assets/images/setting.png'), active_img: require('@/assets/images/setting-active.png')},
        {id:7, name: '3 ПЛАТЕЖА', img: require('@/assets/images/payment.png'), active_img: require('@/assets/images/payment-active.png')},
      ]
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
    }, 
    getGiftName(name) {
      this.choosedGift = name
      alert(`ПОЗДРАВЛЯЕМ ВЫ ВЫБРАЛИ ПОДАРОК - ${name}!!!`)
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