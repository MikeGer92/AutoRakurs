<template>
  <div class="brandpage">
    <Loader v-if="showLoader" />
    <!-- <h1>BRAND</h1> -->
    <div class="brandpage__main">
      <div class="brandpage__main_left">
        <div class="brandpage__main_left-head">
          <div class="brandpage__main_left-head--info">
            <div class="brandpage__main_left-head--info_hot">ГОРЯЧЕЕ ПРЕДЛОЖЕНИЕ</div>
            <div class="brandpage__main_left-head--info_title">HYUNDAI CRETA</div>
            <div class="brandpage__main_left-head--info_border"></div>
            <div class="brandpage__main_left-head--info_price">от 724 150 руб.</div>
            <div class="brandpage__main_left-head--info_colors">
              <div v-for="color in colors" :key="color.id"
                :class="{'brandpage__main_left-head--info_colors-item': true,
                'brandpage__main_left-head--info_colors-item--active': activeColor===`${color.name}`}"
                @click="activateColor(color.name)"
              >
                <div 
                  :class="{'brandpage__main_left-head--info_colors-item--black':true,
                  'brandpage__main_left-head--info_colors-item--black_active': activeColor===`${color.name}`}"
                  :style="{'background': `${color.color}`}"
                >
                </div>
              </div>
            </div>
          </div>
          <div class="brandpage__main_left-head--image"></div>
        </div>
        <div class="brandpage__main_left-gifts">
          <div class="brandpage__main_left-gifts--item" v-for="gift in gifts" :key="gift.id">
            <div class="brandpage__main_left-gifts--item_wrapper">
              <img class="brandpage__main_left-gifts--item_img" :src="`${gift.image}`">
              <div class="brandpage__main_left-gifts--item_text">{{ gift.title }}</div>
            </div>
            <div 
              v-if="gift.id!==gifts.length-1"
              class="brandpage__main_left-gifts--item_border"
            >
            </div>
          </div>
        </div>
      </div>
      <div class="brandpage__main_right">
        <div class="brandpage__main_right-action">
          <div class="brandpage__main_right-action--title">ДО КОНЦА АКЦИИ ОСТАЛОСЬ:</div>
          <Timer />
          <CustomSelect 
            :options="carsList" 
            @select="carSelect" 
            :selected="selectedCar" 
            :defSelected="defSelectCar" 
            :style="`margin-bottom: 76px`"
            :disable="false"
          />
          <CustomSelect 
            :options="carsList" 
            @select="carSelect" 
            :selected="selectedCar" 
            :defSelected="defSelectCar" 
            :style="`margin-bottom: 76px`"
            :disable="false"
          />
          <input type="text" class="brandpage__main_right-action--name" placeholder="ИМЯ">
          <input type="phone" class="brandpage__main_right-action--phone" placeholder="ТЕЛЕФОН">
          <button type="button">ПОЛУЧИТЬ СПЕЦ ЦЕНУ</button>
        </div>
      </div>
    </div>
    <div class="brandpage__choise">
      <router-link
        v-for="link in modelLinks"
        :key="link.title"
        tag="div"
        active-class="brandpage__choise_link-active"
        :to="link.url"
        :exact="link.exact"
        >
        <a href="#"
          class="brandpage__choise_link"
          :class="{'brandpage__choise_link-active': $route.path === `${link.url}`}"
        >
          <img v-if="link.title==='ВЫБРАТЬ ДРУГУЮ МОДЕЛЬ'" src="@/assets/images/brand-prev.png"  class="brandpage__choise_prev">
          {{ link.title }}
          <img v-if="link.title!=='ВЫБРАТЬ ДРУГУЮ МОДЕЛЬ'" src="@/assets/images/page-icon.png"  class="brandpage__choise_icon">
        </a>
      </router-link>
    </div>
    <div class="brandpage__divider">
      <div class="brandpage__divider_line"></div>
      <div class="brandpage__divider_text">КОМПЛЕКТАЦИИ И ЦЕНЫ HYUNDAI CRETA</div>
      <div class="brandpage__divider_line"></div>
    </div>
    <div class="brandpage__complectations">
      <Complectation v-for="item in complList" :key="item.id" :compl="item" />
    </div>
    <div class="brandpage__divider">
      <div class="brandpage__divider_line"></div>
      <div class="brandpage__divider_text">ЦЕНА HYUNDAI С УЧЕТОМ СПЕЦИАЛЬНЫХ ПРЕДЛОЖЕНИЙ</div>
      <div class="brandpage__divider_line"></div>
    </div>
    <div class="brandpage__special">
      <div class="brandpage__special_left">
        <div class="brandpage__special_left-item">
          <BrandRadioOrange :offer="tradeinBenef" />
        </div>
        <div class="brandpage__special_left-item">
          <BrandRadioGray :offer="creditBenef" />
        </div>
        <div class="brandpage__special_left-item">
          <BrandRadioOrange :offer="modelBenef" />
        </div>
      </div>
      <div class="brandpage__special_line"></div>
      <div class="brandpage__special_right">
        <div class="brandpage__special_right-item">
          <BrandRadioOrange :offer="cashBenef" />
        </div>
        <div class="brandpage__special_right-item">
          <BrandRadioGray :offer="utilBenef" />
        </div>
        <div class="brandpage__special_right-item">
          <BrandRadioOrange :offer="govBenef" />
        </div>
      </div>
    </div>
    <div class="brandpage__divider_line"></div>
    <div class="brandpage__benefit">
      <div class="brandpage__benefit_title">ВАША ВЫГОДА:</div>
      <div class="brandpage__benefit_total">
        <div class="brandpage__benefit_total-sum">180 000 ₽</div>
        <button type="button">ЗАФИКСИРОВАТЬ ЦЕНУ</button>
      </div>
    </div>
    <div class="brandpage__tradein">
      <div class="brandpage__tradein_form">
        <div class="brandpage__tradein_form-wrapper">
          <input type="text" class="brandpage__tradein_form-model" placeholder="МАРКА И МОДЕЛЬ АВТО">
          <div class="brandpage__tradein_form-params">
            <input class="brandpage__tradein_form-params--way" placeholder="ПРОБЕГ">
            <input class="brandpage__tradein_form-params--type" placeholder="КУЗОВ">
            <input class="brandpage__tradein_form-params--year" placeholder="ГОД ВЫПУСКА">
          </div>
          <input class="brandpage__tradein_form-yourprice" placeholder="ВАША ЦЕНА">
          <div class="brandpage__tradein_form-person">
            <input type="text" class="brandpage__tradein_form-person--name" placeholder="ИМЯ">
            <input type="phone" class="brandpage__tradein_form-person--phone" placeholder="ТЕЛЕФОН">
          </div>
          <button type="button">РАССЧИТАТЬ ВЫГОДУ</button>
        </div>
      </div>
    </div>
    <div class="brandpage__divider">
      <div class="brandpage__divider_line"></div>
      <div class="brandpage__divider_text">ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ HYUNDAI CRETA</div>
      <div class="brandpage__divider_line"></div>
    </div>
    <div class="brandpage__technical">
      <div class="brandpage__technical_left">
        <div class="brandpage__technical_left-size">ГАБАРИТЫ</div>
        <div class="brandpage__technical_left-eng">ДВИГАТЕЛЬ</div>
      </div>
      <div class="brandpage__technical_right">
        <div class="brandpage__technical_right-chas">ХОДОВАЯ ЧАСТЬ</div>
        <div class="brandpage__technical_right-petr">ТОПЛИВО</div>
      </div>
    </div>
    <div class="brandpage__divider">
      <div class="brandpage__divider_line"></div>
      <div class="brandpage__divider_text">ФОТО HYUNDAI CRETA</div>
      <div class="brandpage__divider_line"></div>
    </div>
    <div class="brandpage__image"></div>
    <MarketBlock :style="{'margin': '85px 0 0 0'}" />
    <div class="brandpage__divider">
      <div class="brandpage__divider_line"></div>
      <div class="brandpage__divider_text">МАШИНЫ В ЭТУ СТОИМОСТЬ</div>
      <div class="brandpage__divider_line"></div>
    </div>
    <div class="brandpage__similar">
      <CarCard v-for="car in thisPriceList" :key="car.id" :car="car" />
    </div>
  </div>
</template>


<script>
import Loader from '@/components/app/Loader.vue'
import Complectation from '@/components/Complectation.vue'
import Timer from '@/components/Timer.vue'
import CustomSelect from '@/components/CustomSelect.vue'
import BrandRadioOrange from '@/components/BrandRadioOrange.vue'
import BrandRadioGray from '@/components/BrandRadioGray.vue'
import MarketBlock from '@/components/MarketBlock.vue'
import CarCard from '@/components/CarCard.vue'
export default {
  name: 'BrandPage',
  components: { Loader, Timer, Complectation, CustomSelect, MarketBlock, CarCard, BrandRadioOrange, BrandRadioGray },
  data() {
    return {
      showLoader: false,
      activeColor: 'black',
      colors: [
        {id: 1, name: 'black', color: '#000'},
        {id: 2, name: 'beige', color: '#95807B'},
        {id: 3, name: 'blue', color: '#12609E'},
        {id: 4, name: 'gray', color: '#7D8A98'},
        {id: 5, name: 'brown', color: '#422E27'},
        {id: 6, name: 'darkRed', color: '#B63D00'},
        {id: 7, name: 'red', color: '#F9192B'},
        {id: 8, name: 'darkBlue', color: '#10205E'},
        {id: 9, name: 'silver', color: '#CDCDCD'}
      ], 
      gifts: [
        {id: 0, image: require('@/assets/images/brand-list.png'), title: '3 ТО в подарок'},
        {id: 1, image: require('@/assets/images/brand-car.png'), title: 'Каско в подарок'},
        {id: 2, image: require('@/assets/images/brand-percent.png'), title: 'Выгодный кредит от 8%'},
        {id: 3, image: require('@/assets/images/brand-setting.png'), title: 'Комплект доп. оборудования'},
        {id: 4, image: require('@/assets/images/brand-cash.png'), title: '3 платежа по кредиту в подарок'},
      ],
      modelLinks: [
        {title: 'ВЫБРАТЬ ДРУГУЮ МОДЕЛЬ', url: '/brand', exact: true},
        {title: 'КОМПЛЕКТАЦИИ', url: '/complect'},
        {title: 'ГАЛЕРЕЯ', url: 'galary'},
        {title: 'ОПИСАНИЕ', url: '/about'},
        {title: 'АВТО В ЭТУ СТОИМОСТЬ', url: 'other'},
      ], 
      complList: [
        {id: 0, title: '1.6 MT SMART', trans: 'МКПП 6', petr: 'БЕНЗИН АИ-92', drive: 'ПЕРЕДНИЙ', pow: '123 (90)/6300 Л.С.', price: '733 000 ₽'},
        {id: 0, title: '1.6 MT SMART', trans: 'МКПП 6', petr: 'БЕНЗИН АИ-92', drive: 'ПЕРЕДНИЙ', pow: '123 (90)/6300 Л.С.', price: '733 000 ₽'},
        {id: 0, title: '1.6 MT SMART', trans: 'МКПП 6', petr: 'БЕНЗИН АИ-92', drive: 'ПЕРЕДНИЙ', pow: '123 (90)/6300 Л.С.', price: '733 000 ₽'},
        {id: 0, title: '1.6 MT SMART', trans: 'МКПП 6', petr: 'БЕНЗИН АИ-92', drive: 'ПЕРЕДНИЙ', pow: '123 (90)/6300 Л.С.', price: '733 000 ₽'},
        {id: 0, title: '1.6 MT SMART', trans: 'МКПП 6', petr: 'БЕНЗИН АИ-92', drive: 'ПЕРЕДНИЙ', pow: '123 (90)/6300 Л.С.', price: '733 000 ₽'},
        {id: 0, title: '1.6 MT SMART', trans: 'МКПП 6', petr: 'БЕНЗИН АИ-92', drive: 'ПЕРЕДНИЙ', pow: '123 (90)/6300 Л.С.', price: '733 000 ₽'},
        {id: 0, title: '1.6 MT SMART', trans: 'МКПП 6', petr: 'БЕНЗИН АИ-92', drive: 'ПЕРЕДНИЙ', pow: '123 (90)/6300 Л.С.', price: '733 000 ₽'},
        {id: 0, title: '1.6 MT SMART', trans: 'МКПП 6', petr: 'БЕНЗИН АИ-92', drive: 'ПЕРЕДНИЙ', pow: '123 (90)/6300 Л.С.', price: '733 000 ₽'},
      ],
      tradeinBenef: { title: 'ВЫГОДА ЗА TRADE-IN', benef: '200 000 ₽'},
      creditBenef: { title: 'СКИДКА ПРИОФОРММЛЕНИИ АВТО КРЕДИТ', benef: '70 000 ₽'},
      modelBenef: { title: 'СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ НА HYUNDAI CRETA', benef: '60 000 ₽'},
      cashBenef: { title: 'СКИДКА ЗА НАЛИЧНЫЕ', benef: '60 000 ₽'},
      utilBenef: { title: 'ВЫГОДА ЗА УТИЛИЗАЦИЮ', benef: '60 000 ₽'},
      govBenef: { title: 'СКИДКА ПО ГОС-ПРОГРАММЕ', benef: '-10% ОТ ЦЕНЫ АВТО'},
      thisPriceList: [
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
        }
      ],
    }
  },
  methods: {
    activateColor(color) {
      this.activeColor = color
      console.log(color)
    }
  }
}
</script>
<style lang="scss">
.brandpage {
  width: 100%;
  max-width: 2065px;
  margin: 0 0 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__main {
    width: 100%;
    height: 721px;
    margin: 45px 0 60px 0;
    display: flex;
    &_left {
      display: flex;
      flex-direction: column;
      margin: 0 45px 0 102px;
      // justify-content: space-between;
      &-head {
        display: flex;
        justify-content: space-between;
        width: 1365px;
        height: 553px;
        background: url('../assets/images/brand-main-back.png') no-repeat;
        background-size: contain;
        &--info {
          display: flex;
          flex-direction: column;
          margin: 54px 0 0 43px;
          &_hot {
            margin-left: -15px;
            width: 318px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: url('../assets/images/brand-hot.svg') no-repeat;
            background-size: contain;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 700;
            font-size: 19.1921px;
            line-height: 23px;
            text-align: center;
            color: #FFFFFF;
          }
          &_title {
            margin-top: 22px;
            display: flex;
            width: 452px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 700;
            font-size: 52.0992px;
            line-height: 72px;
            color: #FFFFFF;
          }
          &_border {
            width: 95%;
            height: 2px;
            background: #FFFFFF;
          }
          &_price {
            margin-top: 13px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-size: 31.2595px;
            line-height: 38px;
            color: #FFFFFF;
          }
          &_colors {
            margin: 60px 0 0 -20px;
            padding: 0 11px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            width: 457px;
            height: 71px;
            background: #FFFFFF;
            backdrop-filter: blur(28.6546px);
            border-radius: 79.4513px;
            &-item {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 50px;
              height: 50px;
              border-radius: 50%;
              &--active {
                border: 2px solid #12609E;
              }
              &--black {
                display: flex;
                width: 24px;
                height: 24px;
                border: 13px solid #FFFFFF;
                border-radius: 50%;
                background: #000;
                &_active {
                  width: 35px;
                  height: 35px;
                  border: 7px solid #FFFFFF;
                  border-radius: 50%;
                }
              }
            }
          }
        }
        &--image {
          margin: 30px 0px 0 -50px;
          width: 941px;
          height: 547px;
          display: flex;
          background: url('../assets/images/creta.png');
        }
      }
      &-gifts {
        margin-top: 25px;
        width: 100%;
        display: flex;
        justify-content: space-around;

        &--item {
          display: flex;
          &_wrapper {
            margin: 0 40px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          &_text {
            margin-top: 35px;
            display: flex;
            justify-content: center;
            text-align: center;
            width: 185px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 300;
            font-size: 20.3096px;
            line-height: 25px;
            color: #000000;
          }
          &_border {
            width: 1px;
            height: 155px;
            background: linear-gradient(to top, #FFF 0%, #7D8A98 20%, #7D8A98 80%,#FFF 100%);
            &:nth-last-child(4) {
              background: transparent;
            }
          }
        }
      }
    }
    &_right {
      display: flex;
      width: 417px;
      margin: 0 90px 0 45px;
      background: url('../assets/images/homecar-border.png') no-repeat;
      background-size: contain;

      &-action {
        display: flex;
        flex-direction: column;
      }
    }
  }
  &__choise {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    max-width: 2065px;
    margin: 0 185px 0 103px;
    &_link {
      display: flex;
      align-items: center;
      height: 57px;
      margin: 0 40px;
      text-decoration: none;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 300;
      font-size: 20.3096px;
      line-height: 25px;
      text-align: center;
      color: #000000;
      &-active {
        background: linear-gradient(108.07deg, #10205E -83.42%, #12609E 175.95%);
        border-radius: 72.775px;
        color: #FFF;
      }
    }
    &_prev {
      display: flex;
      width: 15px;
      height: 31px;
      margin-right: 40px;
    }
    &_icon {
      width: 15px;
      height: 8px;
      display: flex;
      margin-left: 16px;
      }

  }
  &__divider {
    margin-top: 80px;
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
  &__complectations {
    margin: 40px 68px 0 63px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 2065px;
    flex-wrap: wrap;
  }
  &__special {
    margin: 0px 0 85px 0;
    display: flex;
    width: 100%;
    max-width: 2065px;
    &_left, &_right {
      width: 50%;
      display: flex;
      flex-direction: column;
      margin-left: 165px;
      &-item {
        display: flex;
        width: 100%;
        align-items: center;
      }
    }
    &_line {
      display: flex;
      margin-top: 65px;
      width: 1px;
      height: 459px;
      align-self: center;
      background: linear-gradient(to top, #FFF 0%, #7D8A98 20%, #7D8A98 80%, #FFF 100%);
    }
  }
  &__benefit {
    width: 100%;
    max-width: 2065px;
    margin: 41px 246px 0 289px;
    display: flex;
    flex-direction: column;
    &_title {
      margin-left: 260px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 20.9478px;
      line-height: 25px;
      color: #000000;
    }
    &_total {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      &-sum {
        margin-right: 300px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 900;
        font-size: 121.163px;
        line-height: 147px;
        color: #10205E;
      }
      & button {
        width: 612.71px;
        height: 71.42px;
        left: 1180.95px;
        top: 598.55px;
        background: linear-gradient(90.43deg, #12609E 17.95%, #10205E 83.93%);
        box-shadow: 0px 9.68919px 9.68919px rgba(0, 0, 0, 0.25);
        border-radius: 89.625px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 900;
        font-size: 24.882px;
        line-height: 30px;
        color: #FFFFFF;
      }
    }
  }
  &__tradein {
    margin: 94px 63px 0 50px;
    width: 100%;
    max-width: 1952px;
    height: 660px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background: url('../assets/images/brand-tradein.png') no-repeat;
    background-size: contain;
    &_form {
      margin-right: 76px;
      display: flex;
      width: 610px;
      height: 344px;
      background: #FFFFFF;
      box-shadow: 0px 4px 58px rgba(0, 0, 0, 0.25);
      border-radius: 41px;
      &-wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        margin: 36px 34px 8px 34px;
      }
      &-model {
        display: flex;
        align-items: center;
        padding-left: 13px;
        width: 271px;
        height: 38px;
        background: #F0F0F0;
        border-radius: 63.4355px;
        border: none;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 12.9984px;
        line-height: 16px;
        color: #6C6C6C;
      }
      &-params {
        display: flex;
        justify-content: space-between;
        margin-top: 24px;
        &--way, &--type, &--year {
          display: flex;
          align-items: center;
          padding-left: 13px;
          width: 163.25px;
          height: 35px;
          background: #F0F0F0;
          border-radius: 63.4355px;
          border: none;
          font-family: 'Inter';
          font-style: normal;
          font-weight: 500;
          font-size: 12.9984px;
          line-height: 16px;
          color: #A8A8A8;
        }
      }
      &-yourprice {
        margin-top: 24px;
        display: flex;
        align-items: center;
        padding-left: 13px;
        width: 271.47px;
        height: 38px;
        background: #F0F0F0;
        border-radius: 63.4355px;
        border: none;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 12.9984px;
        line-height: 16px;
        color: #6C6C6C;
      }
      &-person {
        display: flex;
        justify-content: space-between;
        &--name, &--phone {
          margin-top: 34px;
          display: flex;
          align-items: center;
          padding-left: 13px;
          width: 250.94px;
          height: 35px;
          background: #F0F0F0;
          border-radius: 63.4355px;
          border: none;
          font-family: 'Inter';
          font-style: normal;
          font-weight: 500;
          font-size: 12.9984px;
          line-height: 16px;
          color: #A8A8A8;
        }
      }
      & button {
        margin-top: 30px;
        display: flex;
        align-self: center;
        align-items: center;
        justify-content: center;
        width: 250.94px;
        height: 35px;
        background: linear-gradient(90.43deg, #12609E 17.95%, #10205E 83.93%);
        box-shadow: 0px 4.51841px 4.51841px rgba(0, 0, 0, 0.25);
        border-radius: 41.7953px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 900;
        font-size: 12.9984px;
        line-height: 16px;
        color: #FFFFFF;
      }
    }
  }
  &__technical {
    display: flex;
    &_left, &_right {
      display: flex;
      flex-direction: column;
    }
  }
  &__image {
    width: 100%;
    max-width: 2065px;
    height: 853px;
    background: url('../assets/images/brand-footer-banner.png') no-repeat;
  }
  &__similar {
    width: 100%;
    max-width: 2065px;
    display: flex;
    justify-content: space-around;
  }
}
</style>