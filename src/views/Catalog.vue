<template>
  <div class="catalog">
    <Loader v-if="showLoader" />
    <div class="catalog__main">
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
        :style="{'margin': '32px 111px 32px 0'}"
      />
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
      :style="{'margin': '61px 0 191px 0'}"
    />
    <div class="catalog__bottom">
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
        :style="{'margin': '31px 0 33px 130px'}"
      />
      <img class="catalog__bottom_logo-img--small" src="@/assets/images/mits-logo.png">
    </div>
    <div class="catalog__gift">
      <div class="catalog__gift_title">ВРЕМЯ ВЫБИРАТЬ <span>ПОДАРКИ!</span></div>
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
      actionEnd: ['2022', '07', '31', '23', '59', '59'],
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
    display: flex;
    width: 100%;
    height: 450px;
    background: url('../assets/images/catalog-banner.png');
  }
  &__logo {
    margin: 45px 0 0 83px;
    display: flex;
    flex-direction: column;
    width: 284px;
    height: 114px;
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
  &__bottom {
    display: flex;
    width: 100%;
    max-width: 2065px;
    height: 450px;
    background: url('../assets/images/catalog-bottom-banner.png');
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
    background: url('../assets/images/catalog-gift.png');
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
@media (max-width: 605px) {
  .catalog {
    max-width: 600px;
    &__main {
      height: 360px;
      background: url('../assets/images/catalog-main-small.png') no-repeat;
      background-size: cover;
      flex-wrap: wrap;
    }
    &__logo {
      flex-direction: row;
      margin: 21px 0 0 21px;
      width: 80px;
      height: 32px;
      &_big {
        display: none;
      }
      &_small {
        display: flex;
      }
      &_timer {
        width: 218px;
        height: 74px;
        margin: -8px 24px 0 46px;
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
        margin: 10px 0 0 15px;
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
        width: 358px;
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
      margin-top: 36px;
      max-width: 600px;
      height: 360px;
      background: url('../assets/images/catalog-bottom-small.png') no-repeat;
      background-size: cover;
      &_logo {
        &-img {
          display: none;
          &--small {
            display: flex;
            width: 130px;
            height: 52px;
            margin: 315px 0 0 -90px;
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
            margin: 0 0 13px 0;
            font-size: 8.40337px;
            line-height: 10px;
          }
        }
      }
      &_image {
        width: 310px;
        height: 229px;
        &-big {
          display: none;
        }
        &-small {
          display: flex;
          margin: 120px 0 0 -200px;
          width: 310px;
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