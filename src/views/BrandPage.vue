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
        <div class="brandpage__main_left-gifts"></div>
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
    <div class="brandpage__choise"></div>
    <div class="brandpage__divider">
      <div class="brandpage__divider_line"></div>
      <div class="brandpage__divider_text">КОМПЛЕКТАЦИИ И ЦЕНЫ HYUNDAI CRETA</div>
      <div class="brandpage__divider_line"></div>
    </div>
    <Complectation />
    <div class="brandpage__divider">
      <div class="brandpage__divider_line"></div>
      <div class="brandpage__divider_text">ЦЕНА HYUNDAI С УЧЕТОМ СПЕЦИАЛЬНЫХ ПРЕДЛОЖЕНИЙ</div>
      <div class="brandpage__divider_line"></div>
    </div>
    <div class="brandpage__special">
      <div class="brandpage__special_left">
        <div class="brandpage__special_left-item"></div>
        <div class="brandpage__special_left-item"></div>
        <div class="brandpage__special_left-item"></div>
      </div>
      <div class="brandpage__special_line"></div>
      <div class="brandpage__special_right">
        <div class="brandpage__special_right-item"></div>
        <div class="brandpage__special_right-item"></div>
        <div class="brandpage__special_right-item"></div>
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
        <input type="text" class="brandpage__tradein_form-model" placeholder="МАРКА И МОДЕЛЬ АВТО">
        <div class="brandpage__tradein_form-params">
          <input class="brandpage__tradein_form-params--ways" placeholder="ПРОБЕГ">
          <input class="brandpage__tradein_form-params--type" placeholder="КУЗОВ">
          <input class="brandpage__tradein_form-params--years" placeholder="ГОД ВЫПУСКА">
        </div>
        <input class="brandpage__tradein_form-yourprice" placeholder="ВАША ЦЕНА">
        <div class="brandpage__tradein_form-person">
          <input type="text" class="brandpage__tradein_form-person--name" placeholder="ИМЯ">
          <input type="phone" class="brandpage__tradein_form-person--phone" placeholder="ТЕЛЕФОН">
        </div>
        <button type="button">РАССЧИТАТЬ ВЫГОДУ</button>
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
    <MarketBlock />
    <div class="brandpage__divider">
      <div class="brandpage__divider_line"></div>
      <div class="brandpage__divider_text">МАШИНЫ В ЭТУ СТОИМОСТЬ</div>
      <div class="brandpage__divider_line"></div>
    </div>
    <CarCard />
  </div>
</template>


<script>
import Loader from '@/components/app/Loader.vue'
import Complectation from '@/components/Complectation.vue'
import Timer from '@/components/Timer.vue'
import CustomSelect from '@/components/CustomSelect.vue'
import MarketBlock from '@/components/MarketBlock.vue'
import CarCard from '@/components/CarCard.vue'
export default {
  name: 'BrandPage',
  components: { Loader, Timer, Complectation, CustomSelect, MarketBlock, CarCard },
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
      ]
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
      margin: 0 45px 0 102px;
      justify-content: space-between;
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
}
</style>