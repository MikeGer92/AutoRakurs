<template>
  <div class="choise">
    <div class="choise__left">
      <div class="choise__left_num">{{ blockNum }}</div>
      <div class="choise__left_border-y"></div>
    </div>
    <div class="choise__right">
      <div class="choise__right_title">ВЫБЕРИТЕ СВОЙ АВТОМОБИЛЬ</div>
      <div class="oldcar-params__left_border-x"></div>
      <div class="choise__right_main">
        <div class="choise__right_main-left">
          <CustomSelect 
            :options="carsList" 
            @select="carSelect" 
            :selected="selectedCar" 
            :defSelected="defSelectCar" 
            :disable="false"
          />
          <CustomSelect 
            :options="modelsList" 
            @select="modelSelect" 
            :selected="selectedModel"
            :defSelected="defSelectModel" 
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
        <div class="choise__right_main-right">
          <div class="choise__right_main-right--image"><img src="@/assets/images/credit-car.png"></div>
          <div class="choise__right_main-right--compl">
            <div class="choise__right_main-right--compl_drive">
              <div class="choise__right_main-right--compl_drive-icon">
                <img src="@/assets/images/credit-drive.png">
              </div>
              <div class="choise__right_main-right--compl_drive-descr">ПРИВОД</div>
            </div>
            <div class="choise__right_main-right--compl_power">
              <div class="choise__right_main-right--compl_power-icon">
                <img src="@/assets/images/credit-power.png">
              </div>
              <div class="choise__right_main-right--compl_power-descr">МОЩНОСТЬ Л.С.</div>
            </div>
            <div class="choise__right_main-right--compl_eng">
              <div class="choise__right_main-right--compl_eng-icon">
                <img src="@/assets/images/credit-eng.png">
              </div>
              <div class="choise__right_main-right--compl_eng-descr">ТРАНСМИССИЯ</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomSelect from '@/components/CustomSelect.vue'
export default {
  name: 'ChoiseParams',
  components: { CustomSelect },
  props: {
    blockNum: {
      type: String,
      default:() => ''
    }
  },
  data() {
    return {
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
.choise {
  display: flex;
  &__left {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    &_num {
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
    &_border-y {
      width: 7px;
      height: 408px;
      background: linear-gradient(to top,  #FFF 0%, #FFA724  80%);
    }
    &_border-x {
      display: none;
      width: 408px;
      height: 2px;
      background: linear-gradient(to left,  #FFF 0%, #FFA724  80%);
      margin-left: -12px;
    }
  }
  &__right {
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    &_title {
      display: flex;
      margin-left: 100px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 45.9755px;
      line-height: 56px;
      color: #000000;
    }
    &_main {
      display: flex;
      &-left {
        display: flex;
        flex-direction: column;
        margin: 88px 0 0 100px;
      }
      &-right {
        display: flex;
        flex-direction: column;
        margin: -115px 0 0 232px;
        &--image {
          display: flex;
          width: 862px;
          height: 484px;
          img {
            width: auto;
            height: 100%;
          }
        }
        &--compl {
          display: flex;
          justify-content: space-around;
          &_drive, &_power, &_eng {
            display: flex;
            flex-direction: column;
            align-items: center;
            &-icon {
              width: 94px;
              height: 94px;
              & img {
                width: 100%;
                height: auto;
              }
            }
            &-descr {
              margin: 23px 0 0 0;
              font-family: 'Inter';
              font-style: normal;
              font-weight: 400;
              font-size: 20.7454px;
              line-height: 25px;
              text-align: center;
              color: #000000;
            }
          }
        }
      }
    }
  }
}
@media ( max-width: 600px) {
  .choise {
    &__left {
      margin: 8px 0 0 17px;
      &_num {
        width: 38px;
        height: 38px;
        border-radius: 50%;
        font-size: 29.5654px;
        line-height: 36px;
      }
      &_border-y {
        display: none;
      }
      &_border-x {
        display: flex;
        width: 290px;
        margin: 4px 0 0 -2px;
      }
    }
    &__right {
      margin-top: 18px;
      &_title {
        margin-left: 6px;
        font-size: 11.9048px;
        line-height: 14px;
      }
      &_main {
        flex-wrap: wrap;
        justify-content: center;
        &-left {
          width: 100%;
          margin: 25px 0 0 10px;
        }
        &-right {
          margin-left: 0;
          width: 100%;
          &--image {
            width: 373px;
            height: 211px;
            margin: 60px 0 0 -60px;
          }
          &--compl {
            margin-left: -60px;
            &_drive, &_power, &_eng {
              &-icon {
                width: 51px;
                height: 51px;
                & img {
                  width: 100%;
                  height: auto;
                }
              }
              &-descr {
                margin: 17px 0 34px 0;
                font-size: 11.4929px;
                line-height: 14px;
              }
            }
          }
        }
      }
    }
  } 

}
</style>