<template>
  <div class="catalog">
    <Loader v-if="showLoader" />
    <div class="catalog__main">
      <div class="catalog__logo">
        <img src="../assets/images/kia-logo.png">
        <div class="catalog__logo_timer">
          <div class="catalog__logo_timer-title">До конца акции осталось:</div>
          <CatalogTimer :deadline="actionEnd" />
        </div>
      </div>
      <div class="catalog__image"><img src="../assets/images/kia-car.png"></div>
      <CatalogPersonForm 
        :style="{'margin': '32px 111px 32px 0'}"
      />
    </div>
    <div class="catalog__divider">
      <div class="catalog__divider_line"></div>
      <div class="catalog__divider_text">МОДЕЛЬНЫЙ РЯД HUYNDAI</div>
      <div class="catalog__divider_line"></div>
    </div>
    <div class="catalog__models">
        <CatalogCar v-for="model in modelsList" :key="model.id" :car="model" />
    </div>
    <div class="catalog__divider">
      <div class="catalog__divider_line"></div>
      <div class="catalog__divider_text">ЛИНЕЙКА АВТОМОБИЛЕЙ HUYNDAI</div>
      <div class="catalog__divider_line"></div>
    </div>
    <MarketBlock 
      :style="{'margin': '61px 0 191px 0'}"
    />
    <div class="catalog__bottom">
      <div class="catalog__bottom_logo">
        <img src="../assets/images/mits-logo.png">
          <div class="catalog__bottom_logo-timer">
          <div class="catalog__bottom_logo-timer--title">До конца акции осталось:</div>
          <CatalogTimer :deadline="actionEnd" />
        </div>
        </div>
      <div class="catalog__bottom_image"><img src="../assets/images/mits-car.png"></div>
      <BestOfferForm 
        :style="{'margin': '31px 0 33px 130px'}"
      />
    </div>
    <div class="catalog__gift">
      <div class="catalog__gift_title">ВРЕМЯ ВЫБИРАТЬ ПОДАРКИ!</div>
    </div>
    <div class="catalog__offers">
      <BenefitCard v-for="gift in giftsList" :key="gift.title" :benefitCard="gift"/>
    </div>
  </div>
</template>


<script>
import CatalogCar from '@/components/catalog/CatalogCar.vue'
import MarketBlock from '@/components/MarketBlock.vue'
import BenefitCard from '@/components/BenefitCard.vue'
import CatalogPersonForm from '@/components/catalog/CatalogPersonForm.vue'
import BestOfferForm from '@/components/catalog/BestOfferForm.vue'
import CatalogTimer from '@/components/catalog/CatalogTimer.vue'
import Loader from '@/components/app/Loader.vue'
export default {
  name: 'Catalog',
  components: { Loader, CatalogCar, MarketBlock, BenefitCard, CatalogPersonForm, BestOfferForm, CatalogTimer },
  data() {
    return {
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
          descr: 'При покупке автомобиля в кредит',
          image: require('../assets/images/kasko.png'),
          button: 'Получить подарок'
        },
        {
          title: 'ТРИ ТО',
          descr: 'При покупке автомобиля в кредит',
          image: require('../assets/images/three-to.png'),
          button: 'Получить подарок'
        },
        {
          title: 'ТРИ ПЛАТЕЖА ПО КРЕДИТУ',
          descr: 'При покупке автомобиля в кредит',
          image: require('../assets/images/three-payments.png'),
          button: 'Получить подарок'
        },
      ],
    }
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
    max-width: 2065px;
    height: 450px;
    background: url('../assets/images/catalog-banner.png');
  }
  &__logo {
    margin: 45px 0 0 83px;
    display: flex;
    flex-direction: column;
    width: 284px;
    height: 114px;
    & img {
      width: 100%;
      height: auto;
    }
    &_timer {
      margin-top: 92px;
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
  }
  &__divider {
    margin-top: 99px;
    width: 100%;
    max-width: 1891px;
    text-align: center;
    &_line {
      width: 100%;
      height: 3px;
      background: linear-gradient(to right, #FFF 0%, #10205E 20%, #10205E 80%,#FFF 100%);
    }
    &_text {
      margin: 19px 0 21px 0;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 44.7037px;
      line-height: 54px;
      color: #10205E;
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
  &__bottom {
    display: flex;
    width: 100%;
    max-width: 2065px;
    height: 450px;
    background: url('../assets/images/catalog-bottom-banner.png');
    &_logo {
      width: 622px;
      margin-left: 30px;
      display: flex;
      flex-direction: column;
      &-timer {
        display: flex;
        flex-direction: column;
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
    }
    &_image {
          margin-left: -225px;
      display: flex;
      & img {
        width: 100%;
        height: auto;
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
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    max-width: 2065px;
    height: 680px;
    background: #D9D9D9;
  }
}
</style>