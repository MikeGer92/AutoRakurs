<template>
  <div class="home">
    <Loader v-if="showLoader" />
    <div class="home__wrapper">
      <div class="home__header">
        <div class="home__header_block">
          <h1 class="home__header_title">НОВЫЕ АВТО <br />ПО СТАРЫМ ЦЕНАМ</h1>
          <div class="home__header_timer">
            <p class="home__header_timer-title">ДО КОНЦА АКЦИИ:</p>

            <Timer :deadline="actionFinish" />

          </div>
        </div>
      </div>
      <div class="home__main">
        <div class="home__main_rakurs">
          <div class="home__main_filter">
            <div class="home__main_text">
              <h2 class="home__main_title">ВРЕМЯ <span class="home__main_title-orange">ВКЛАДЫВАТЬСЯ</span><br><span class="home__main_title-blue">В АВТОМОБИЛЬ</span></h2>
              <p class="home__main_oldprice">
              <span class="home__main_oldprice-black">Успейте забрать по старой цене и получите<br></span>
              <span class="home__main_oldprice-orange">ДОПОЛНИТЕЛЬНОЕ<br>ОБОРУДОВАНИЕ</span>        
              <span class="home__main_oldprice-blue">ДОПОЛНИТЕЛЬНОЕ<br>ОБОРУДОВАНИЕ</span></p>
              <p class="home__main_gift">НА <span class="home__main_gift-blue">50 000</span><br>В ПОДАРОК<span class="home__main_gift-black">*</span></p>
            </div>
          </div>
        </div>
        <div class="home__main_car"></div>
      </div>
      <div class="home__divider">
        <div class="home__divider_line"></div>
        <div class="home__divider_text">НОВЫЕ ПОПУЛЯРНЫЕ АВТО В АВТОСАЛОНЕ</div>
        <div class="home__divider_line"></div>
      </div>
      <div class="home__cars">
        <CarCard v-for="(item, idx) in carsList" :key="idx" :car="item" />
      </div>
      <div class="home__bottom-divider"></div>
      <div class="home__divider_add">
        <div class="home__divider_add-line"></div>
        <div class="home__divider_add-text">ВРЕМЯ ВЫБИРАТЬ ПОДАРКИ</div>
      <div class="home__divider_add-line"></div>
      </div>
      <div class="home__benefit">
        <div class="home__benefit_wrapper">
          <div class="home__benefit_block">
            <BenefitCard v-for="benefit in benefitsList" :key="benefit.title" :benefitCard="benefit"  />
          </div>
          <div class="home__benefit_divider">
            <div class="home__benefit_divider-line home__divider_line"></div>
            <div class="home__benefit_divider-text">ПРОДАЖА АВТОМОБИЛЕЙ С ОЧЕВИДНОЙ ВЫГОДНОЙ ДЛЯ ПОКУПАТЕЛЯ</div>
            <div class="home__benefit_divider-line home__divider_line"></div>
          </div>
          <div class="home__benefit_options">
            <BenefitCard v-for="option in optionsList" :key="option.title" :benefitCard="option" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Loader from '@/components/app/Loader.vue'
import Timer from '@/components/Timer.vue'
import CarCard from '@/components/CarCard.vue'
import BenefitCard from '@/components/BenefitCard.vue'
export default {
  name: 'Home',
  components: { Loader, Timer,  CarCard, BenefitCard },
  data() {
    return {
      screenWidth: false,
      actionFinish: ['2022', '09', '20', '23', '59', '59'],
      showModal: true,
      showLoader: false,
      carsList: [
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
      ],
      benefitsList: [
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
      optionsList: [
        {
          title: 'ЭКСПРЕСС-КРЕДИТ',
          descr: 'Решение по кредиту за 15 минут',
          image: require('../assets/images/express-credit.png'),
          image_small: require('../assets/images/express-credit-small.png'),
          button: 'Получить условия'
        },
        {
          title: 'ТЕСТ-ДРАЙВ',
          descr: 'Попробуйте новый автомобиль в реальных условиях',
          image: require('../assets/images/test-drive.png'),
          image_small: require('../assets/images/test-drive-small.png'),
          button: 'Запись на тест-драйв'
        },
        {
          title: 'TRADE-IN',
          descr: 'Выгода до 200 000 рублей на покупку нового авто',
          image: require('../assets/images/trade-in.png'),
          image_small: require('../assets/images/trade-in-small.png'),
          button: 'Получить выгоду'
        }
      ],
      benefit: {
        title: 'TRADE-IN',
        descr: 'Выгода до 200 000 рублей на покупку нового авто',
        image: require('../assets/images/kasko.png'),
        button: 'Получить выгоду'
      },
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
      return window.innerWidth < 600
    }
  },
  methods: {
    updateWidth() {
      if (window.innerWidth < 600) {
        this.screenWidth = true
      }
      console.log(window.innerWidth)
    },
  }

}
</script>
<style lang="scss">
.home {
  display: flex;
  margin: 0 auto;
  padding: 0 auto;
  &__wrapper {
    width: 100%;
    max-width: 2065px;
    display: flex;
    flex-direction: column;
  }
  &__header {
    width: 100%;
    display: flex;
    max-width: 2065px;
    max-height: 180px;
    margin: 22px 0 11px 0;
    background: url('../assets/images/home-mask.png') no-repeat;
    background-size: cover;
    &_block {
      display: flex;
      width: 100%;
      align-self: center;
      justify-content: space-between;
      margin: 0 76px 0 60px;
    }
    &_title {
      display: flex;
      font-style: normal;
      font-weight: 700;
      font-size: 45.88px;
      line-height: 56px;
      color: #FFFFFF;
    }
    &_timer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &-title {
      margin: 7px 0 5px 0;
      font-style: normal;
      font-weight: 700;
      font-size: 24.4694px;
      line-height: 30px;
      color: #FFFFFF;
      }
    }
  }
  &__main {
    display: flex;
    width: 100%;
    max-width: 2065px;
    flex-direction: column;
    background: url('../assets/images/Frame_212.png') no-repeat;
    background-size: cover;
    &_rakurs, &_filter {
      width: 100%;
      height: 740px;
    }
    &_text {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
    &_title {
      margin: 84px 0 0 60px;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 900;
      font-size: 30px;
      line-height: 44px;
      color: #000000;
      &-orange {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 900;
        font-size: 54px;
        line-height: 44px;
        color: #FFA724;
      }
      &-blue {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 900;
        font-size: 54px;
        line-height: 44px;
        color: #10205F;
      }
    }
    &_oldprice {
      margin: 120px 0 0 60px;
      &-black {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 23.6547px;
        line-height: 141.9%;
        color: #000000;
      }
      &-orange {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 900;
        font-size: 32px;
        line-height: 34px;
        color: #FFA724;
      }
      &-blue {
        display: none;
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 900;
          font-size: 32px;
          line-height: 34px;
          color: #10205E;
      }
    }
    &_gift {
      margin: 54px 0 134px 60px;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 900;
      font-size: 71.5973px;
      line-height: 87px;
      color: #FFA724;
      &-blue {
        color: #10205F;
      }
      &-black {
        position: relative;
        top: -20px;
        left: 10px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 900;
        font-size: 42.3075px;
        line-height: 52px;
        color: #000000;
      }
    }
  }
  &__divider {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1892px;
    &_line {
      display: flex;
      width: 100%;
      height: 3px;
      background: linear-gradient(to right, #FFF 0%, #10205E 20%, #10205E 80%,#FFF 100%);
    }
    &_text {
      margin: 19px 0 21px 0;
      display: flex;
      justify-content: center;
      width: 100%;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 44.7037px;
      line-height: 54px;
      color: #10205E;
    }
  }
  &__cars {
    width: 100%;
    max-width: 1420px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    // margin: 42px 81px; // оригинальные отступы
  }
  &__bottom-divider {
    display: flex;
    width: 100%;
    max-width: 1952px;
    height: 60px;
    margin: 104px auto 81px auto;
    background: url('../assets/images/cars-bottom-divider.png') no-repeat;
    background-size: cover;
  }
  &__divider_add {
    display: none;
  }
  &__benefit {
    display: flex;
    width: 100%;
    max-width: 2065px;
    background: #D9D9D9;
    &_wrapper {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin: 77px auto 87px auto;
    }
    &_block, &_options {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
    }
    &_divider {
      margin: 93px 0 67px 0;
      width: 100%;
      max-width: 1891px;
      display: flex;
      flex-direction: column;
      &-line {
        display: flex;
        width: 100%;
        height: 3px;
        background: linear-gradient(to right,  #D9D9D9 0%, #10205E  20%, #D9D9D9 100%); 
      }
      &-text {
        display: flex;
        justify-content: center;
        width: 100%;
        margin: 19px 0 35px 0;
        text-align: center;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 33.3333px;
        line-height: 40px;
        color: #10205E;
      }
    }
  }
}
@media (min-width: 1280px) and (max-width: 1921px) {
  .home {
    &__wrapper {
      max-width: 1920px;
    }
    &__header {
      max-width: 1920px;
      max-height: 168px;
      margin: 0 0 6px 0;
      background-size: cover;
      background-position: 50% 100%;
      &_block {
        max-width: 1534px;
        margin: 0 auto;
      }
      &_title {
        margin-left: 22px;
        font-size: 29.3724px;
        line-height: 36px;
        align-items: center;
      }
      &_timer {
        &-title {
          font-size: 22.7512px;
          line-height: 28px;
        }
      }
    }
    &__main {
      position: relative;
      max-width: 1920px;
      height: 740px;
      // margin: calc((-50px - (1920px - 100vw)/4)) auto 0 auto;
      background: linear-gradient(180deg, rgba(52, 138, 210, 0.17) 95%, #FFFFFF 100%);
      // background-size: cover;
      &_rakurs {
        // position: absolute;
        // top: calc(25% - ((100vw - 1280px)/4));
        max-width: 1748px;
        margin: 0 auto;
        // margin: calc((0px + (1920px - 100vw)/4)) auto 0 auto;
        background: url('../assets/images/home-rakurs.png') center 60px/contain no-repeat;
      }
      &_filter {
        // background: url('../assets/images/frame333.png') no-repeat;
        background-size: cover;
      }
      &_text {
        // position: absolute;
        // margin: calc((-0px - (1920px - 100vw)/4)) auto 0 auto;
        max-width: 1548px;
        max-height: 740px;
        margin: 0 auto;
        // background: url('../assets/images/home-main-car.png') right bottom no-repeat;
        background-size: contain;
      }
      &_title {
        margin: 65px 0 0 22px;
        font-size: 33.3805px;
        line-height: 41px;
        &-orange, &-blue {
          font-size: 54.0046px;
          line-height: 66px;
        }
      }
      &_oldprice {
        margin: 118px 0 0 22px;
        &-black {
          font-size: 21.9937px;
        }
      }
      &_gift {
        margin: 27px 0 132px 22px;
        font-size: 66.5699px;
        line-height: 81px;
        &-black {
          font-size: 39.3367px;
          line-height: 48px;
        }
      }
      &_car {
        position: absolute;
        top: calc(25% - ((100vw - 1280px)/4));
        left: 190px;
        display: block;
        width: calc(100vw - 205px);
        // min-width: 1000px;
        height: 740px;
        background: url('../assets/images/home-main-car.png') right 0px no-repeat;
        background-size: contain;
      }
    }
  }
}
// @media (min-width: 1280px) and (max-width: 1670px) {
//   .home {
//     &__main {
//       background-size: contain;
//     }
//   }
// }
@media (max-width: 605px) {
  .home {
    width: 100%;
    &__header {
      margin: 12px 0 0 0;
      max-height: 38px;
      &_block {
        margin: 5px;
      }
      &_title {
        max-width: 116px;
        font-size: 11.1934px;
        line-height: 14px;
      }
      &_timer {
        max-width: 80px;
        &-title {margin: 0 0 2px 0;
          font-size: 4.48606px;
          line-height: 5px;
        }
      }
    }
    &__main {
      &_title {
        margin: 5px 0 0 8px;
        max-width: 130px;
        font-size: 17.2969px;
        line-height: 21px;
        color: #10205E;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        &-orange {
          font-size: 14px;
          line-height: 17px; 
          text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
        &-blue {
          font-weight: 600;
          font-size: 14px;
          line-height: 17px;
          text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
      }
      &_oldprice {
        margin: 15px 0 0 8px;
        &-black {
          display: none;
        }
        &-orange {
          display: none;
        }
        &-blue {
          display: flex;
          font-size: 8px;
          line-height: 10px;
        }
      }
      &_gift {
        margin: 5px 0 25px 8px;
        font-size: 14px;
        line-height: 17px;
        &-black {
          font-size: 14px;
          line-height: 17px;
          top: 0;
          left: 0;
        }
      }
    }
    &__divider {
        margin: 9px 0 15px 0;
      &_line {
        height: 1px;
      }
      &_text {
        margin: 1px 0 1px 0;
        font-size: 15px;
        line-height: 18px;
      }
    }
    &__bottom-divider {
      margin: 0 0 28px 0;
      max-width: 336px;
      height: 16px;
      background-size: contain;
      align-self: center;
    }
    &__divider_add {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 1892px;
      &-line {
        display: flex;
        width: 100%;
        height: 1px;
        background: linear-gradient(to right, #FFF 0%, #10205E 20%, #10205E 80%,#FFF 100%);
      }
      &-text {
        margin: 4px 0 4px 0;
        display: flex;
        justify-content: center;
        width: 100%;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: #10205E;
      }
    }
    &__benefit {
      margin-top: 29px;
      background: white;
      background: url('../assets/images/benefit-back.png') no-repeat;
      background-size: cover;
      &_wrapper {
        margin: 0;
      }
      &_divider {
        margin: 45px 0 0 0;
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 1892px;
        &-line {
          display: flex;
          width: 100%;
          height: 1px;
          background: linear-gradient(to right, #FFF 0%, #10205E 20%, #10205E 80%,#FFF 100%);
        }
        &-text {
          margin: 4px 0 4px 0;
          display: flex;
          justify-content: center;
          width: 100%;
          font-family: 'Inter';
          font-style: normal;
          font-weight: 700;
          font-size: 13px;
          line-height: 16px;
          color: #10205E;
        }
      }
    }
  }
}
</style>