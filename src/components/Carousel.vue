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
          :style="[scale ? { 'width': '1400px', 'align-items': 'center'}: { 'width': '300px', 'align-items': 'center', 'overflow': 'hidden','padding': '0 15px'}]"
        >
          <div class="slider__item"
            v-for="item in giftsList" :key="item.id"
            @click="changeActiveSlide(item.id, item.name)"
            :class="{'slider__item-active': currentPage===item.id}"
          >
            <div v-if="currentPage===item.id" @click="getGiftName(item.id, item.name)">
              <img :src="item.active_img">
              <div 
                class="slider__item-active--text"
              >
                {{ item.name }}
              </div>
            </div>
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
      screenWidth: true,
      active: true,
      activeImage: 'paySystems',
      sliderPageIndex: 7,
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
    return this.sliderPageIndex>=0 ? this.sliderPageIndex: 7
  },
  scale() {
    return window.innerWidth > 600
  }
},
  created() {
    window.addEventListener('resize', this.updateWidth);
  },
  methods: {
    changeActiveSlide(id, name) {
      this.sliderPageIndex = id
      this.choosedGift = name
    },
    // customGift(id, name, function: name(params) {
      
    // }) {

    // },
    showNext() {
      this.$refs.carousel.next()
      console.log(this.currentPage)
    },
    showPrev() {
      this.$refs.carousel.prev()
      console.log(this.currentPage)
    },
    afterPageChange(page) {
      this.sliderPageIndex = page-1;
    }, 
    getGiftName(id, name) {
      this.sliderPageIndex = id
      this.choosedGift = name
      alert(`ПОЗДРАВЛЯЕМ ВЫ ВЫБРАЛИ ПОДАРОК - ${name}!!!`)
    },
    updateWidth() {
      if (window.innerWidth < 600) {
        this.screenWidth = false
      }
    },
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
  flex-direction: column;
  align-items: center;
  align-self: center;
  max-width: 300px;
  height: 300px;
  & img {
    width: 300px;
    height: auto;
  }
}
.slider__item-active {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: space-around;
  width: 360px;
  height: 380px;
  background: #FFFFFF;
  box-shadow: 0px 5.92582px 16.296px rgba(0, 0, 0, 0.25);
  border-radius: 66.6654px;
  cursor: pointer;
  & img {
    width: 260px;
    height: auto;
    margin: 0 20px;
    -webkit-transform:scale(1.35); /* Safari and Chrome */
    -moz-transform:scale(1.35); /* Firefox */
    -ms-transform:scale(1.35); /* IE 9 */
    -o-transform:scale(1.35); /* Opera */
    transform:scale(1.35);
  }
  &--text {
    display: flex;
    justify-content: center;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 50px;
    color: #000000;
    margin: 20px 0;
  }
}
.slider-wrapper {
  margin: 45px 0 0 60px;
  display: flex;
  align-items: center;
  height: 250px;
}
.slick-initialized .slick-slide[data-v-e4caeaf8] {
  display: flex;
  justify-content: space-around;
}
.slick-slide {
  display: flex;
}
.slick-slider[data-v-3d1a4f76] {
  position: relative;
  display: flex;
  box-sizing: border-box;
  padding: 0;
}
.slick-prev {
  display: none;
  border: none;
  background: transparent;
  font-size: 0;
}
.slick-next {
  display: none;
  border: none;
  background: transparent;
  font-size: 0;
}
.slick-dots {
  li[class="slick-active"] {
    button {
      background-color: green;
    }
  }
}
.slick-track.slick-center[data-v-e4caeaf8] {
  display: flex;
  align-items: center;
}
.next-btn {
  width: 208px;
  height: 104px;
  border-radius: 50%;
  border: none;
  background: url('../assets/images/Group182.png') center 0px/ contain no-repeat;
  cursor: pointer;
}
.prev-btn {
  display: flex;
  width: 208px;
  height: 104px;
  border-radius: 50%;
  border: none;
  background: url('../assets/images/Group183.png') center 0px/ contain no-repeat;
  cursor: pointer;
}
@media (min-width: 1280px) and (max-width: 1921px) {
  .carousel-main {
    margin-top: 69px;
    max-width: 1700px;
    &__title {
      font-size: 34.9938px;
      line-height: 42px;
    }
  }
  .slick-list[data-v-3d1a4f76] {
    max-width: 1000px;
  }
  .slider__item {
    max-width: 250px;
    height: 205px;
    & img {
      width: 205px;
    }
  }
  .slider__item-active {
    margin: 15px 0;
    width: 270px;
    height: 250px;
    box-shadow: 0px 4.51039px 12.4036px rgba(0, 0, 0, 0.25);
    border-radius: 50.7418px;
    & img {
      width: 200px;
      margin: 0 15px;
    }
    &--text {
      font-size: 30px;
      line-height: 36px;
      margin: 5px 0;
    }
  }
  .slider-wrapper {
    margin: 30px 0 0 40px;
    max-width: 1275px;
    height: 330px;
  }
  .next-btn {
    width: 160px;
    height: 80px;
  }
  .prev-btn {
    width: 160px;
    height: 80px;
  }
}
@media (min-width: 768px) and (max-width: 1281px) {
  .slick-initialized .slick-slide[data-v-e4caeaf8] {
    width: 1000px;
    justify-content: space-around;
  }
  .carousel-main {
    margin-top: 45px;
    max-width: 1100px;
    &__title {
      font-size: 23.3292px;
      line-height: 28px;
    }
  }
  .slider-wrapper {
    margin: 23px 0 0 0px;
    width: 100%;
    height: 200px;
  }
  .slick-list[data-v-3d1a4f76] {
    width: 690px;
    padding: 0px 30px;
  }
  .slider__item {
    max-width: 160px;
    height: 130px;
    margin: 0 20px;
    & img {
      width: 110px;
    }
  }
  .slider__item-active {
    margin: 15px 0;
    width: 180px;
    height: 165px;
    box-shadow: 0px 3.00692px 8.26904px rgba(0, 0, 0, 0.25);
    border-radius: 33.8279px;
    & img {
      width: 120px;
      margin: 0 10px;
    }
    &--text {
      font-size: 14px;
      line-height: 18px;
      margin: 5px 0;
    }
  }
  .next-btn {
    width: 106px;
    height: 53px;
  }
  .prev-btn {
    width: 106px;
    height: 53px;
  }
}
@media (min-width: 606px) and (max-width: 768px) {
  div[data-v-3d1a4f76] {
    padding: 0 40px;
  }
  .slick-initialized .slick-slide[data-v-e4caeaf8] {
    width: 510px;
    justify-content: space-around;
  }
  .carousel-main {
    margin-top: 10px;
    max-width: 510px;
    &__title {
      font-size: 13.9975px;
      line-height: 17px;
    }
  }
  .slider-wrapper {
    margin: 10px 0 0 0px;
    width: 500px;
    height: 150px;
  }
  .slick-list[data-v-3d1a4f76] {
    width: 320px;
   padding: 0px 20px;
  }
  .slider__item {
    max-width: 130px;
    height: 80px;
    margin: 0 0px;
    & img {
      width: 70px;
    }
  }
  .slider__item-active {
    margin: 15px 0;
    width: 130px;
    height: 110px;
    box-shadow: 0px 1.80415px 4.9614px rgba(0, 0, 0, 0.25);
    border-radius: 20.2966px;
    & img {
      width: 90px;
      margin: 0 10px;
    }
    &--text {
      font-size: 13px;
      line-height: 16px;
      margin: 5px 0;
    }
  }
  .next-btn {
    width: 64px;
    height: 32px;
  }
  .prev-btn {
    width: 64px;
    height: 32px;
  }
}
@media ( max-width: 600px) {
  div[data-v-3d1a4f76] {
    padding: 0;
  }
  .slick-initialized .slick-slide[data-v-e4caeaf8] {
    width: 300px;
    justify-content: space-around;
  }
  .slick-list {
    width: 285px;
    padding: 0 5px;
  }
  .slick-list[data-v-3d1a4f76] {
    padding: 0 5px;
  }
  .slick-slider[data-v-3d1a4f76] {
    display: block;
    padding: 0 5px;
  }
  .slider__item {
    display: flex;
    flex-direction:column;
    align-items: center;
    height: 46px;
    & img {
      width: 46px;
      height: 46px;
      padding: 0 5px;
    }
  }
  .slider__item-active {
    width: 100px;
    height: 84px;
    background: #FFFFFF;
    box-shadow: 0px 1.20138px 3.30379px rgba(0, 0, 0, 0.25);
    border-radius: 13.5155px;
    & img {
      width: 60px;
      height: auto;
      margin: 0 5px;
    }
    &--text {
      display: flex;
      font-size: 9.32089px;
      line-height: 11px;
      margin: 10px 0;
      text-align: center;
    }
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
  .carousel-main {
    margin-top: 26px;
    width: 1200px;
    &__title {
      margin-left: 10px;
      font-size: 12.3203px;
      line-height: 15px;
    }
  }
  .slider-wrapper {
    margin: 15px 0 0 -40px;
    height: 105px;
  }
  .carousel {
    width: 326px;
  }
  .next-btn {
    width: 32px;
    height: 32px;
  }
  .prev-btn {
    width: 32px;
    height: 32px;
  }
}
</style>