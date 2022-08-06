<template>
  <div class="catalog">
    <Loader v-if="showLoader" />
    <div class="catalog__main">
      <div class="catalog__main_filter"></div>
      <div class="catalog__main_wrapper">
        <div class="catalog__logo">
          <img class="catalog__logo_big" src="@/assets/images/kia-logo.png">
          <img class="catalog__logo_small" src="@/assets/images/kia-logo-small.png">
          <div class="catalog__logo_timer">
            <div class="catalog__logo_timer-title">До конца акции осталось:</div>
            <CatalogTimer :deadline="actionEnd" />
          </div>
        </div>
        <div class="catalog__image_big"><img src="@/assets/images/kia-car.png"></div>
        <div class="catalog__image_small"><img src="@/assets/images/kia-car-small.png"></div>
        <CatalogPersonForm
          class="catalog__person-form" 
        />
      </div>
      <div class="catalog__main-bottom">
        <div class="catalog__main-bottom_title">Ваше персональное предложение на покупку автомобиля уже ждет Вас!</div>
        <button type="button" class="catalog__main-bottom_btn">Получить предложение</button>
      </div>
    </div>
    <div class="catalog__divider">
      <div class="catalog__divider_line"></div>
      <div class="catalog__divider_text">МОДЕЛЬНЫЙ РЯД HUYNDAI</div>
      <div class="catalog__divider_line"></div>
    </div>
    <div class="catalog__models">
      <CatalogCar  v-for="model in modelsList" :key="model.id" :car="model" />
    </div>
    <div class="catalog__models-small">
      <CarCard v-for="model in modelsList" :key="model.id" :car="model" />
    </div>
    <div class="catalog__divider-bottom"></div>
    <div class="catalog__divider">
      <div class="catalog__divider_line"></div>
      <div class="catalog__divider_text-big">ЛИНЕЙКА АВТОМОБИЛЕЙ HUYNDAI</div>
      <div class="catalog__divider_text-small">ВРЕМЯ ВЫБИРАТЬ ПОДАРКИI</div>
      <div class="catalog__divider_line"></div>
    </div>
    <MarketBlock 
      class="catalog__market-block"
    />
    <div class="catalog__bottom">
      <div class="catalog__bottom_filter"></div>
      <div class="catalog__bottom_wrapper">
        <div class="catalog__bottom_logo">
          <img class="catalog__bottom_logo-img" src="@/assets/images/mits-logo.png">
          <div class="catalog__bottom_logo-header">
            <div class="catalog__bottom_logo-header--title">УЛУЧШИМ ЛЮБЫЕ УСЛОВИЯ КОНКУРЕНТОВ!</div>
            <div class="catalog__bottom_logo-header--descr">Оставьте заявку и получите самое выгодное предложение на рынке!</div>
            <button type="button">Получить предложение</button>
          </div>
          <div class="catalog__bottom_logo-timer">
            <div class="catalog__bottom_logo-timer--title">До конца акции осталось:</div>
            <CatalogTimer :deadline="actionEnd" />
          </div>
        </div>
        <div class="catalog__bottom_image">
          <img class="catalog__bottom_image-big" src="@/assets/images/mits-car.png">
          <img class="catalog__bottom_image-small" src="@/assets/images/mits-car-small.png"></div>
        <BestOfferForm
          class="catalog__bottom_form" 
        />
        <img class="catalog__bottom_logo-img--small" src="@/assets/images/mits-logo.png">
      </div>
    </div>
    <div class="catalog__gift">
      <div class="catalog__gift_title">ВРЕМЯ ВЫБИРАТЬ<span>&#160;ПОДАРКИ!</span></div>
    </div>
    <div class="catalog__offers">
      <BenefitCard v-for="gift in giftsList" :key="gift.title" :benefitCard="gift"/>
    </div>
  </div>
</template>


<script>
import CatalogCar from '@/components/catalog/CatalogCar.vue'
import CarCard from '@/components/CarCard.vue'
import MarketBlock from '@/components/MarketBlock.vue'
import BenefitCard from '@/components/BenefitCard.vue'
import CatalogPersonForm from '@/components/catalog/CatalogPersonForm.vue'
import BestOfferForm from '@/components/catalog/BestOfferForm.vue'
import CatalogTimer from '@/components/catalog/CatalogTimer.vue'
import Loader from '@/components/app/Loader.vue'
export default {
  name: 'Catalog',
  components: { Loader, CatalogCar, CarCard, MarketBlock, BenefitCard, CatalogPersonForm, BestOfferForm, CatalogTimer },
  data() {
    return {
      fullSize: true,
      actionEnd: ['2022', '08', '31', '23', '59', '59'],
      showLoader: false,
      modelsList: [
        {
          id: 0,
          brand: 'HUINDAI',
          model: 'Santa Fe - 1',
          image: require('@/assets/images/home-car.png'),
          price: '1 546 050',
          discount: '50 000',
          payment: '15 845'
        },
        {
          id: 1,
          brand: 'HUINDAI',
          model: 'Santa Fe - 2',
          image: require('@/assets/images/home-car.png'),
          price: '1 546 050',
          discount: '50 000',
          payment: '15 845'
        },
        {
          id: 2,
          brand: 'HUINDAI',
          model: 'Santa Fe - 3',
          image: require('@/assets/images/home-car.png'),
          price: '1 546 050',
          discount: '50 000',
          payment: '15 845'
        },
        {
          id: 3,
          brand: 'HUINDAI',
          model: 'Santa Fe - 4',
          image: require('@/assets/images/home-car.png'),
          price: '1 546 050',
          discount: '50 000',
          payment: '15 845'
        },
        {
          id: 4,
          brand: 'HUINDAI',
          model: 'Santa Fe - 5',
          image: require('@/assets/images/home-car.png'),
          price: '1 546 050',
          discount: '50 000',
          payment: '15 845'
        },
        {
          id: 5,
          brand: 'HUINDAI',
          model: 'Santa Fe - 6',
          image: require('@/assets/images/home-car.png'),
          price: '1 546 050',
          discount: '50 000',
          payment: '15 845'
        },
                {
          id: 6,
          brand: 'HUINDAI',
          model: 'Santa Fe - 1',
          image: require('@/assets/images/home-car.png'),
          price: '1 546 050',
          discount: '50 000',
          payment: '15 845'
        },
        {
          id: 7,
          brand: 'HUINDAI',
          model: 'Santa Fe - 2',
          image: require('@/assets/images/home-car.png'),
          price: '1 546 050',
          discount: '50 000',
          payment: '15 845'
        },
        {
          id: 8,
          brand: 'HUINDAI',
          model: 'Santa Fe - 3',
          image: require('@/assets/images/home-car.png'),
          price: '1 546 050',
          discount: '50 000',
          payment: '15 845'
        },
        {
          id: 9,
          brand: 'HUINDAI',
          model: 'Santa Fe - 4',
          image: require('@/assets/images/home-car.png'),
          price: '1 546 050',
          discount: '50 000',
          payment: '15 845'
        },
        {
          id: 10,
          brand: 'HUINDAI',
          model: 'Santa Fe - 5',
          image: require('@/assets/images/home-car.png'),
          price: '1 546 050',
          discount: '50 000',
          payment: '15 845'
        },
        {
          id: 11,
          brand: 'HUINDAI',
          model: 'Santa Fe - 6',
          image: require('@/assets/images/home-car.png'),
          price: '1 546 050',
          discount: '50 000',
          payment: '15 845'
        },
      ],
      giftsList: [
        {
          title: 'КАСКО',
          event: 'При покупке',
          descr: 'автомобиля в кредит',
          image: require('../assets/images/kasko.png'),
          image_small: require('../assets/images/kasko-small.png'),
          button: 'Получить подарок'
        },
        {
          title: 'З ТО',
          event: 'При покупке',
          descr: 'автомобиля в кредит',
          image: require('../assets/images/three-to.png'),
          image_small: require('../assets/images/three-to-small.png'),
          button: 'Получить подарок'
        },
        {
          title: 'З ПЛАТЕЖА ПО КРЕДИТУ',
          event: 'При покупке',
          descr: 'автомобиля в кредит',
          image: require('../assets/images/three-payments.png'),
          image_small: require('../assets/images/three-payments-small.png'),
          button: 'Получить подарок'
        },
      ],
    }
  },
  created() {
    window.addEventListener('resize', this.updateWidth);
  },
  mounted() {
    console.log(window.innerWidth)
  },
  computed: {
    scale() {
      return window.innerWidth > 600
    }
  },
  methods: {
    updateWidth() {
      if (window.innerWidth < 600) {
        this.fullSize = false
      }
      console.log(window.innerWidth)
    },
  }

}
</script>
<style lang="scss">
.catalog {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 2065px;
  align-items: center;
  &__main {
    position: relative;
    display: flex;
    width: 100%;
    height: 450px;
    background: url('../assets/images/catalog-main.png') no-repeat;
    &_filter {
      position: absolute;
      width: 735px;
      height: 100%;
      display: flex;
      flex-direction: column;
      background: url('../assets/images/catalog-add-filter.png') 0px 0px/ contain no-repeat;
      z-index: 1;
    }
    &_wrapper {
      display: flex;
      width: 100%;
      z-index: 2;
    }
  }
  &__logo {
    margin: 45px 0 0 83px;
    display: flex;
    flex-direction: column;
    width: 284px;
    max-height: 114px;
    &_small {
      display: none;
    }
    & img {
      width: 100%;
      height: auto;
    }
    &_timer {
      margin: 92px 0 0 0;
      &-title {
        margin-bottom: 50px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 900;
        font-size: 20px;
        line-height: 24px;
        color: #10205E;
      }
    }
  }
  &__image {
    margin-left: 160px;
    &_small {
      display: none;
    }
  }
  &__person {
    &-form {
      margin: 32px 111px 32px 0;
    }
  }
  &__main-bottom {
    display: none;
  }
  &__divider {
    display: flex;
    flex-direction: column;
    margin-top: 99px;
    width: 100%;
    max-width: 1891px;
    align-items: center;
    &_line {
      width: 100%;
      height: 3px;
      background: linear-gradient(to right, #FFF 0%, #10205E 20%, #10205E 80%,#FFF 100%);
    }
    &_text, &_text-big, &_text-small {
      margin: 19px 0 21px 0;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 44.7037px;
      line-height: 54px;
      color: #10205E;
    }
    &_text-small {
      display: none;
    }
  }
  &__models {
    margin-top: 43px;
    display: flex;
    width: 100%;
    max-width: 1880px;
    justify-content: space-between;
    flex-wrap: wrap;
    &_item {
      display: flex;
      max-width: 437px;
      max-height: 672px;
    }
  }
  &__models-small {
    margin-top: 43px;
    display: flex;
    width: 100%;
    max-width: 600px;
    justify-content: space-between;
    flex-wrap: wrap;
    display: none;
    &_item {
      display: flex;
      max-width: 336px;
      max-height: 516px;
    }
  }
  &__divider-bottom {
    display: none;
  }
  &__market-block {
    margin: 61px 0 191px 0;
  }
  &__bottom {
    display: flex;
    width: 100%;
    max-width: 2065px;
    height: 450px;
    background: url('../assets/images/catalog-bottom-main.png') no-repeat;
    background-size: cover;
    &_wrapper {
      display: flex;
      width: 100%;
    }
    &_logo {
      display: flex;
      flex-direction: column;
      &-img {
        width: 622px;
        margin-left: 30px;
        &--small {
          display: none;
        }
      }
      &-timer {
        display: flex;
        flex-direction: column;
        margin: 0 0 14px 22px;
        &--title {
          margin: 19px 0 30px 0;
          font-family: 'Inter';
          font-style: normal;
          font-weight: 900;
          font-size: 20px;
          line-height: 24px;
          color: #FFFFFF;
        }
      }
      &-header {
        display: none;
      }
    }
    &_image {
      &-big {
        margin-left: -225px;
        display: flex;
        & img {
          width: 100%;
          height: auto;
        }
      }
      &-small {
        display: none;
      }

    }
  }
  &__gift {
    margin-top: 49px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 2065px;
    height: 123px;
   background: url('../assets/images/catalog-gift.png') center 0px/contain no-repeat ;
    &_title {
      display: flex;
      font-family: 'Abhaya Libre SemiBold', sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 41.9643px;
      line-height: 50px;
      color: #FFFFFF;
    }
  }
  &__offers {
    padding: 125px 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    max-width: 2065px;
    background: #D9D9D9;
  }
}
@media (min-width: 1281px) and (max-width: 1920px) {
  .catalog {
    max-width: 1920px;
    &__main {
      max-width: 1920px;
      height: 420px;
      background-size: cover;
      &_wrapper {
        max-width: 1534px;
        margin: 0 auto;
        justify-content: space-between;
      }
    }
    &__logo {
      margin: 48px 0 0 22px;
      width: 17.25%;
      max-width: 284px;
      max-height: 5.53%;
      &_timer {
        width: 276px;
        &--title {
          font-size: 18.5956px;
          line-height: 23px;
        }
      }
    }
    &__image {
      &_big {
        display: flex;
        width: 800px;
        height: auto;
        margin-left: 0px;
      }
    }
    &__person {
      &-form {
        margin: 0;
        align-self: center;
      }
    }
    &__divider {
      margin: 50px 0 20px 0;
    }
    &__models {
      max-width: 1490px;
      margin-top: 0px;
    }
    &__market-block {
      max-width: 1490px;
      margin: 41px auto 84px auto;
    }
    &__bottom {
      position: relative;
      max-width: 1920px;
      height: 420px;
      &_wrapper {
        max-width: 1534px;
        margin: 0 auto;
        z-index: 2;
      }
      &_filter {
        position: absolute;
        width: 700px;
        height: 100%;
        background: url('../assets/images/catalog-bpttom-add-shad.png') no-repeat;
        z-index: 1;
      }
      &_logo {
        display: flex;
        width: 34%;
        object-fit: contain;
        height: 51.6%;
        & img {
          width: 100%;
          height: auto;
          margin-left: -30px;
        }
      }
      &_image {
        &-big {
          margin-left: -90px;
          display: flex;
          width: 800px;
          height: auto;
        }
      }
    }
    &__gift {
      margin-top: 53px;
      &_title {
        font-size: 38.9973px;
        line-height: 46px;
        margin-left: 110px;
      }
    }
    &__offers {
      padding: 0;
      background: #D7E8F6;
      justify-content: center;
      flex-wrap: wrap;
    }
  }
}
@media (min-width: 769px) and (max-width: 1280px) {
  .catalog {
    max-width: 1280px;
    &__main {
      max-width: 1280px;
      height: 280px;
      background-size: cover;
      &_filter {
        width: 490px;
      }
      &_wrapper {
        max-width: 1023px;
        margin: 0 auto;
        justify-content: space-between;
      }
    }
    &__logo {
      margin: 32px 0 0 15px;
      width: 17.2%;
      max-width: 284px;
      max-height: 5.53%;
      &_timer {
        width: 293px;
        margin: 57px 0 0 0;
        &-title {
          font-size: 12.4104px;
          line-height: 15px;
          margin-bottom: 21px;
        }
      }
    }
    &__image {
      &_big {
        display: flex;
        width: 600px;
        height: auto;
        margin-left: 0px;
      }
    }
    &__person {
      &-form {
        margin: 0;
        align-self: center;
      }
    }
    &__divider {
      margin: 32px 0 19px 0;
      &_line {
        height: 2px;
      }
      &_text {
        font-size: 29.8346px;
        line-height: 36px;
        margin: 12px 0 14px 0;
      }
    }
    &__models {
      max-width: 994px;
      margin-top: 28px;
    }
    &__divider {
      &_text {
        &-big {
          margin: 10px 0;
          font-size: 22.1935px;
          line-height: 27px;
        }
      }
    }
    &__market-block {
      max-width: 1490px;
      margin: 30px auto 67px auto;
    }
    &__bottom {
      position: relative;
      max-width: 1280px;
      height: 279px;
      &_wrapper {
        max-width: 1023px;
        margin: 0 auto;
        z-index: 2;
      }
      &_filter {
        position: absolute;
        width: 505px;
        height: 60%;
        background: url('../assets/images/catalog-bpttom-add-shad.png') center no-repeat;
        z-index: 1;
      }
      &_logo {
        display: flex;
        width: 30.212%;
        object-fit: contain;
        height: 49.6%;
        & img {
          width: 100%;
          height: auto;
          margin-left: -30px;
        }
        &-timer {
          margin: 0;
          &--title {
            margin: 18px 0 10px 0 ;
            font-size: 12.404px;
            line-height: 15px;
          }
        }
      }
      &_image {
        &-big {
          margin-left: -46px;
          display: flex;
          width: 552px;
          height: auto;
        }
      }
      &_form {
        margin-left: 20px;
      }
    }
    &__gift {
      margin-top: 35px;
      width: 100%;
      height: 75px;
      &_title {
        font-size: 26.0262px;
        line-height: 31px;
        margin-left: 50px;
      }
    }
    &__offers {
      padding: 0;
      background: #D7E8F6;
      justify-content: center;
      flex-wrap: wrap;
    }
  }
}
@media (min-width: 606px) and (max-width: 768px) {
  .catalog {
    max-width: 768px;
    &__main {
      max-width: 768px;
      height: 169px;
      background-size: cover;
      &_filter {
        width: 372px;
        height: 70%;
      }
      &_wrapper {
        max-width: 620px;
        margin: 0 auto;
        justify-content: space-between;
      }
    }
    &__logo {
      margin: 32px 0 0 15px;
      width: 17.2%;
      max-width: 284px;
      max-height: 5.53%;
      &_timer {
        width: 179px;
        height: 30px;
        margin: 30px 0 0 0;
        &-title {
          font-size: 7.4992px;
          line-height: 9px;
          margin-bottom: 12px;
        }
      }
    }
    &__image {
      &_big {
        display: flex;
        width: 363px;
        height: auto;
        margin-left: 0px;
      }
    }
    &__person {
      &-form {
        margin: 0;
        align-self: center;
      }
    }
    &__divider {
      margin: 20px 0 19px 0;
      &_line {
        height: 1.5px;
      }
      &_text {
        font-size: 17.9915px;
        line-height: 22px;
        margin: 8px 0;
      }
    }
    &__models {
      max-width: 620px;
      margin-top: 7px;
    }
    &__divider {
      margin-top: -5px;
      &-line {
        height: 1.5px;
      }
      &_text {
        &-big {
          margin: 8px 0;
          font-size: 13.3836px;
          line-height: 16px;
        }
      }
    }
    &__market-block {
      max-width: 620px;
      margin: 5px auto 46px auto;
    }
    &__bottom {
      position: relative;
      max-width: 768px;
      height: 168px;
      &_wrapper {
        max-width: 620px;
        margin: 0 auto;
        z-index: 2;
      }
      &_filter {
        position: absolute;
        width: 322px;
        height: 50%;
        background: url('../assets/images/catalog-bpttom-add-shad.png') center 0px/ cover no-repeat;
        z-index: 1;
      }
      &_logo {
        display: flex;
        width: 30.212%;
        object-fit: contain;
        height: 49.6%;
        & img {
          width: 100%;
          height: auto;
          margin-left: -30px;
        }
        &-timer {
          margin: 0;
          &--title {
            margin: 18px 0 10px 0 ;
            font-size: 12.404px;
            line-height: 15px;
          }
        }
      }
      &_image {
        &-big {
          margin-left: -46px;
          display: flex;
          width: 295px;
          height: auto;
        }
      }
      &_form {
        margin-left: 20px;
      }
    }
    &__gift {
      margin-top: 21px;
      width: 100%;
      height: 45px;
      &_title {
        font-size: 15.6949px;
        line-height: 19px;
        margin-left: 50px;
      }
    }
    &__offers {
      padding: 0;
      background: #D7E8F6;
      justify-content: center;
      flex-wrap: wrap;
    }
  }
}
@media (max-width: 605px) {
  .catalog {
    max-width: 600px;
    &__main {
      height: 360px;
      background: url('../assets/images/catalog-main-small.png') no-repeat;
      background-size: cover;
      flex-wrap: wrap;
      &_filter {
        width: 155px;
        height: 70%;
        background: url('../assets/images/catalog-filter-small.png') 0px 0px/ contain no-repeat;
      }
      &_wrapper {
        max-width: 620px;
        margin: 0 auto;
        justify-content: space-between;
      }   
    }
    &__logo {
      flex-direction: row;
      margin: 21px 0 0 21px;
      width: 22.25%;
      max-width: 142px;
      max-height: 12.9%;
      &_big {
        display: none;
      }
      &_small {
        display: flex;
      }
      &_timer {
        width: 218px;
        height: 74px;
        margin: -8px 24px 0 40px;
        &-title {
          width: 100%;
          font-size: 13.3231px;
          line-height: 16px;
          color: #FFFFFF;
          margin: 0 0 0 25px;
          padding-bottom: 18px;
        }
      }
    }
    &__image {
      &_big {
        display: none;
      }
      &_small {
        display: flex;
        width: 366px;
        height: 213px;
        margin: 60px 0 0 -150px;
        background-image: no-repeat;
      }
    }
    &__person-form {
      display: none;
    }
    &__main-bottom {
      display: flex;
      flex-direction: column;
      margin: -25px 0 0 13px;
      &_title {
        display: flex;
        max-width: 304px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 15.2759px;
        line-height: 18px;
        color: #FFFFFF;
      }
      &_btn {
        margin: 12px 19px 29px 0px;
        width: 338px;
        height: 33px;
        background: linear-gradient(90.43deg, #12609E 17.95%, #10205E 83.93%);
        box-shadow: 0px 1.76795px 1.76795px rgba(0, 0, 0, 0.25);
        border: none;
        border-radius: 16.3535px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 17.9542px;
        line-height: 106.52%;
        color: #FFFFFF;
      }
    }
    &__divider {
      margin-top: 7px;
      max-width: 600px;
      justify-content: center;
      &_line {
        height: 1px;
      }
      &_text, &_text-small {
        margin: 4px 0;
        font-size: 15px;
        line-height: 18px;
      }
      &_text-big {
        display: none;
      }
      &_text-small {
        display: flex;
      }
    }
    &__models {
      display: none;
    }
    &__models-small {
      display: flex;
      margin-top: 9px;
      justify-content: center;
    }
    &__divider-bottom {
      margin-bottom: 18px;
      display: flex;
      width: 338px;
      height: 15px;
      background: url('../assets/images/cars-bottom-divider.png') no-repeat;
    background-size: contain;
    }
    &__market-block {
      display: none;
    }
    &__bottom {
      position: relative;
      margin-top: 36px;
      max-width: 604px;
      height: 360px;
      background: url('../assets/images/catalog-bottom-small.png') no-repeat;
      background-size: cover;
      &_wrapper {
        max-width: 620px;
        margin: 0 auto;
        z-index: 2;
      }
      &_filter {
        position: absolute;
        // width: 212px;
        height: 50%;
        background: url('../assets/images/catalog-bpttom-add-shad.png') center 0px/ cover no-repeat;
        z-index: 1;
      }
      &_logo {
        display: flex;
        width: 30.212%;
        object-fit: contain;
        height: 49.6%;
        &-img {
          display: none;
          &--small {
            display: flex;
            width: 30%;
            height: 12.6%;
            margin: 315px 0px 0 -70px;
          }
        }
        &-header {
          display: flex;
          flex-direction: column;
          margin: 7px 0 0 17px;
          &--title {
            display: flex;
            width: 243px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 900;
            font-size: 17.9852px;
            line-height: 22px;
            color: #12609E;
          }
          &--descr {
            width: 240px;
            margin-top: 5px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 600;
            font-size: 11.5638px;
            line-height: 14px;
            color: #FFA724;
          }
          & button {
            margin-top: 8px;
            width: 200px;
            height: 31px;
            border: none;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 700;
            font-size: 11.2884px;
            line-height: 106.52%;
            color: #FFFFFF;
            border: none;
            background: linear-gradient(90.43deg, #12609E 17.95%, #10205E 83.93%);
            box-shadow: 0px 2.81769px 2.81769px rgba(0, 0, 0, 0.25);
            border-radius: 26.0636px;
          }
        }
        &-timer {
          margin: 162px 0 14px 22px;
          &--title {
            width: 115px;
            margin: 0 0 13px 0;
            font-size: 8.40337px;
            line-height: 10px;
          }
        }
      }
      &_image {
        width: 373px;
        height: 229px;
        &-big {
          display: none;
        }
        &-small {
          // width: 100%;
          display: flex;
          margin: 110px 0 0 -100px;
          // width: 310px;
          background-image: no-repeat;
        }
      }
      &_form {
        display: none;
      }
    }
    &__gift {
      margin-top: 19px;
      max-width: 600px;
      background: url('../assets/images/catalog-gift-small.png') no-repeat;
      background-size: cover;
      justify-content: flex-start;
      &_title {
        max-width: 173px;
        font-size: 18px;
        line-height: 17px;
        flex-wrap: wrap;
        margin: 35px 0 35px 28px;
        & span {
          font-size: 32px;
          line-height: 30px;
        }
      }
    }
    &__offers {
      max-width: 600px;
      padding: 0 0 36px 0;
      justify-content: center;
      flex-wrap: wrap;
      background: url('../assets/images/catalog-offers-small.png') no-repeat;
      background-size: cover;
    }
  }

}
</style>