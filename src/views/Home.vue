<template>
  <div class="home">
    <Loader v-if="showLoader" />
    <div class="home__wrapper">
      <div class="home__header" :style="`background: url(${require('../assets/images/home-mask.png')}) no-repeat`">
        <div class="home__header_block">
          <h1 class="home__header_title">НОВЫЕ АВТО <br />ПО СТАРЫМ ЦЕНАМ</h1>
          <div class="home__header_timer">
            <p class="home__header_timer-title">ДО КОНЦА АКЦИИ:</p>

            <!-- <Timer :deadline="actionFinish" /> -->

          </div>
        </div>
      </div>
      <div class="home__main">
        <h2 class="home__main_title">ВРЕМЯ <span class="home__main_title-orange">ВКЛАДЫВАТЬСЯ</span><br><span class="home__main_title-blue">В АВТОМОБИЛЬ</span></h2>
        <p class="home__main_oldprice">Успейте забрать по старой цене и получите<br>
        <span class="home__main_oldprice-orange">ДОПОЛНИТЕЛЬНОЕ<br>ОБОРУДОВАНИЕ</span></p>
        <p class="home__main_gift">НА <span class="home__main_gift-blue">50 000</span><br>В ПОДАРОК<span class="home__main_gift-black">*</span></p>
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
      <div class="home__benefit">
        <div class="home__benefit_wrapper">
          <div class="home__benefit_block">
            <BenefitCard v-for="(benefit) in benefitsList" :key="benefit.title" :benefitCard="benefit"/>
          </div>
          <div class="home__benefit_divider">
            <div class="home__benefit_divider-line home__divider_line"></div>
            <div class="home__benefit_divider-text">ПРОДАЖА АВТОМОБИЛЕЙ С ОЧЕВИДНОЙ ВЫГОДНОЙ ДЛЯ ПОКУПАТЕЛЯ</div>
            <div class="home__benefit_divider-line home__divider_line"></div>
          </div>
          <div class="home__benefit_options">
            <BenefitCard v-for="option in optionsList" :key="option.title" :benefitCard="option"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Loader from '@/components/app/Loader.vue'
// import Timer from '@/components/Timer.vue'
import CarCard from '@/components/CarCard.vue'
import BenefitCard from '@/components/BenefitCard.vue'
export default {
  name: 'Home',
  components: { Loader, CarCard, BenefitCard },
  data() {
    return {
      actionFinish: '2022-09-20 23:59:59',
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
      optionsList: [
        {
          title: 'ЭКСПРЕСС-КРЕДИТ',
          descr: 'Решение по кредиту за 15 минут',
          image: require('../assets/images/express-credit.png'),
          button: 'Получить условия'
        },
        {
          title: 'ТЕСТ-ДРАЙВ',
          descr: 'Попробуйте новый автомобиль в реальных условиях',
          image: require('../assets/images/test-drive.png'),
          button: 'Запись на тест-драйв'
        },
        {
          title: 'TRADE-IN',
          descr: 'Выгода до 200 000 рублей на покупку нового авто',
          image: require('../assets/images/trade-in.png'),
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
      margin: 0 0 6px 0;
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
    background: url('../assets/images/home-banner.png') no-repeat;
    background-size: cover;
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
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 23.6547px;
      line-height: 141.9%;
      color: #000000;
      &-orange {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 900;
        font-size: 32px;
        line-height: 34px;
        color: #FFA724;

      }
    }
    &_gift {
      margin: 54px 0 0 60px;
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
    height: 94px;
    margin: 0 auto;
    &_line {
      display: flex;
      width: 100%;
      height: 3px;
      background: linear-gradient(to right,  #FFF 0%, #10205E  20%, #FFF 100%);
    }
    &_text {
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
</style>