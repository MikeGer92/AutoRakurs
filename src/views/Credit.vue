<template>
  <div class="credit-main">
    <Loader v-if="showLoader" />
    <div class="credit">
      <div class="credit__header">
        <div class="credit__header_title">АВТОКРЕДИТ</div>
        <div class="credit__header_subtitle">ДОСТУПНЫЙ КАЖДОМУ</div>
        <div class="credit__header_options">
          <div class="credit__header_options-bank">
            <div class="credit__header_options-bank--image"><img src="../assets/images/bank.png"></div>
            <div class="credit__header_options-bank--text">Более 40 банков-партнеров</div>
          </div>
          <div class="credit__header_options-perc">
            <div class="credit__header_options-perc--image"><img src="../assets/images/perc.png"></div>
            <div class="credit__header_options-perc--text">Ставка 8%*</div>
          </div>
          <div class="credit__header_options-gift">
            <div class="credit__header_options-gift--image"><img src="../assets/images/gift.png"></div>
            <div class="credit__header_options-gift--text">КАСКО* или 3 платежа<br>по кредиту* в ПОДАРОК</div>
          </div>
        </div>
      </div>
      <div class="credit__main">
        <div class="credit__divider">
          <div class="credit__divider_line"></div>
          <div class="credit__divider_text">ОФОРМИТЕ ВЫГОДНЫЙ АВТОКРЕДИТ</div>
          <div class="credit__divider_line"></div>
        </div>
        <div class="credit__options">
          <div class="credit__options_choise">
            <div class="credit__options_choise-left">
              <div class="credit__options_choise-left--num">1</div>
              <div class="credit__options_choise-left--border"></div>
            </div>
            <div class="credit__options_choise-right">
              <div class="credit__options_choise-right--title">ВЫБЕРИТЕ СВОЙ АВТОМОБИЛЬ</div>
              <div class="credit__options_choise-right--main">
                <div class="credit__options_choise-right--main_left">
                  <CustomSelect 
                    :options="carsList" 
                    @select="carSelect" 
                    :selected="selectedCar" 
                    :defSelected="defSelectCar" 
                    :style="`margin-bottom: 76px`"
                    :disable="false"
                  />
                  <CustomSelect 
                    :options="modelsList" 
                    @select="modelSelect" 
                    :selected="selectedModel"
                    :defSelected="defSelectModel" 
                    :style="`margin-bottom: 76px`"
                    :disable="disableModel"
                  />
                  <CustomSelect 
                    :options="complsList" 
                    @select="complSelect" 
                    :selected="selectedCompl" 
                    :defSelected="defSelectCompl"
                    :disable="disableCompl"
                  />
                </div>
                <div class="credit__options_choise-right--main_right">
                  <div class="credit__options_choise-right--main_right-image"><img src="../assets/images/credit-car.png"></div>
                  <div class="credit__options_choise-right--main_right-compl">
                    <div class="credit__options_choise-right--main_right-compl--drive"><img src="../assets/images/credit-drive.png"></div>
                    <div class="credit__options_choise-right--main_right-compl--power"><img src="../assets/images/credit-power.png"></div>
                    <div class="credit__options_choise-right--main_right-compl--eng"><img src="../assets/images/credit-eng.png"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="credit__options_choise">
            <div class="credit__options_choise-left">
              <div class="credit__options_choise-left--num">2</div>
              <div class="credit__options_choise-left--border"></div>
            </div>
            <div class="credit__options_choise-right">
              <div class="credit__options_choise-right--title">УСТАНОВИТЕ СВОИ КРЕДИТНЫЕ УСЛОВИЯ</div>
              <div class="credit__options_choise-right--main">
                <div class="credit__options_choise-right--main_left">
   
                </div>
                <div class="credit__options_choise-right--main_right">

                </div>
              </div>
            </div>
          </div>
          <div class="credit__options_choise">
            <div class="credit__options_choise-left">
              <div class="credit__options_choise-left--num">3</div>
              <div class="credit__options_choise-left--border"></div>
            </div>
            <div class="credit__options_choise-right">
              <div class="credit__options_choise-right--title">ЗАПОЛНИТЕ ПЕРСОНАЛЬНЫЕ ДАННЫЕ</div>
              <div class="credit__options_choise-right--main">
                <div class="credit__options_choise-right--main_left">
   
                </div>
                <div class="credit__options_choise-right--main_right">

                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="credit__params">
          <div class="credit__params_time">
            <div class="credit__params_time-display"></div>
            <input 
              type="range" 
              min="0" 
              max="7" 
              step="0.5"
              v-model="years"
            >
          </div>
          <div class="credit__params_payment">
            <div class="credit__params_payment-display"></div>
            <input 
              type="range" 
              min="0" 
              max="2000000" 
              step="50000"
              v-model="summ"
            >

            <h1>{{ value }}</h1>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>


<script>
import Loader from '@/components/app/Loader.vue'
import CustomSelect from '@/components/CustomSelect.vue'
export default {
  name: 'Credit',
  components: { Loader, CustomSelect },
  data() {
    return {
      years: 7,
      summ: '200000',
      model: '',
      showLoader: false,
      defSelectCar: 'МАРКА АВТО',
      selectedCar: '',
      carsList: [
        {name: 'HONDA', value: 'HONDA'},
        {name: 'HAVAL', value: 'HAVAL'},
        {name: 'MAZDA', value: 'MAZDA'},
        {name: 'CITROEN', value: 'CITROEN'},
        {name: 'LADA', value: 'LADA'},
      ],
      disableModel: true,
      defSelectModel: 'МОДЕЛЬ АВТО',
      selectedModel: '',
      modelsList: [
        {name: 'JAZZ', value: 'JAZZ'},
        {name: 'CIVIC', value: 'CIVIC'},
        {name: 'ACCORD', value: 'ACCORD'},
        {name: 'CROSSTOUR', value: 'CROSSTOUR'},
        {name: 'PILOT', value: 'PILOT'},
      ],
      disableCompl: true,
      defSelectCompl: 'КОМПЛЕКТАЦИЯ',
      selectedCompl: '',
      complsList: [
        {name: '1.6 MT', value: '1.6 MT'},
        {name: '1.8 MT', value: '1.8 MT'},
        {name: '1.8 AT', value: '1.8 AT'},
        {name: '2.0 AT', value: '2.0 AT'},
        {name: '3.5 AT', value: '3.5 AT'},
      ],

    }
  },
  methods: {
    carSelect(option) {
      this.selectedCar = option.name
      this.disableModel = false
    },
    modelSelect(option) {
      if (this.selectedCar) {
        this.selectedModel = option.name
        this.disableCompl = false
      }
    },
    complSelect(option) {
      this.selectedCompl = option.name
    }
  }

}
</script>
<style lang="scss">
.credit {
  width: 100%;
  min-width: 2065px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__header {
    width: 100%;
    height: 717px;
    display: flex;
    flex-direction: column;
    background: url('../assets/images/credit-banner.png') no-repeat;
    background-size: contain;
    &_title {
      margin: 35px 0 0 76px;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 900;
      font-size: 132.434px;
      line-height: 161px;
      color: #FFFFFF;
    }
    &_subtitle {
      margin-left: 76px;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 700;
      font-size: 58.4148px;
      line-height: 71px;
      color: #FFFFFF;
    }
    &_options {
      display: flex;
      flex-direction: column;
      margin: 72px 0 72px 157px;
      &-bank, &-perc, &-gift {
        margin-bottom: 44px;
        display: flex;
        align-items: center;
        &:last-child {
          margin-bottom: 0;
        }
        &--image {
          display: flex;
          width: 74px;
        }
        &--text {
          margin-left: 47px;
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 400;
          font-size: 29.9748px;
          line-height: 37px;
          color: #FFFFFF;
        }
      }
    }
  }
  &__divider {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 1892px;
    height: 94px;
    margin: 0 auto;
    &_line {
      display: flex;
      width: 100%;
      height: 3px;
      background: linear-gradient(to right,  #FFF 0%, #10205E  20%, #FFF 100%);
    }
    &_text {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 44.7037px;
      line-height: 54px;
      color: #10205E;
    }
  }
  &__options {
    display: flex;
    flex-direction: column;
    &_choise {
      display: flex;
      &-left {
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        &--num {
          width: 104px;
          height: 104px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: 'Inter';
          font-style: normal;
          font-weight: 700;
          font-size: 81.2517px;
          line-height: 98px;
          color: #FFFFFF;
          background: linear-gradient(145.18deg, #12609E 5.86%, #10205E 93.37%);
          box-shadow: 0px 3.14081px 21.2005px rgba(0, 0, 0, 0.25);
          border-radius: 52px;
        }
        &--border {
          width: 3px;
          height: 408px;
          background: linear-gradient(to top,  #FFF 0%, #FFA724  80%);
        }
      }
      &-right {
        margin-top: 70px;
        display: flex;
        flex-direction: column;
        &--title {
          display: flex;
          // width: 745px;
          margin-left: 100px;
          font-family: 'Inter';
          font-style: normal;
          font-weight: 700;
          font-size: 45.9755px;
          line-height: 56px;
          color: #000000;
        }
        &--main {
          display: flex;
          &_left {
            display: flex;
            flex-direction: column;
            margin: 88px 0 0 100px;
          }
          &_right {
            display: flex;
            flex-direction: column;
            margin: -115px 0 0 232px;
            &-image {
              display: flex;
              width: 862px;
              height: 484px;
              img {
                width: auto;
                height: 100%;
              }
            }
            &-compl {
              display: flex;
              justify-content: space-around;
              &--drive, &--power, &--eng {
                width: 94px;
                height: 94px;
              }
            }
          }
        }
      }
    }
  }
}
</style>