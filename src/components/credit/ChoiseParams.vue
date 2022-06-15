<template>
  <div class="choise">
    <div class="choise__left">
      <div class="choise__left_num">{{ blockNum }}</div>
      <div class="choise__left_border"></div>
    </div>
    <div class="choise__right">
      <div class="choise__right_title">ВЫБЕРИТЕ СВОЙ АВТОМОБИЛЬ</div>
      <div class="choise__right_main">
        <div class="choise__right_main-left">
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
        <div class="choise__right_main-right">
          <div class="choise__right_main-right--image"><img src="@/assets/images/credit-car.png"></div>
          <div class="choise__right_main-right--compl">
            <div class="choise__right_main-right--compl_drive"><img src="@/assets/images/credit-drive.png"></div>
            <div class="choise__right_main-right--compl_power"><img src="@/assets/images/credit-power.png"></div>
            <div class="choise__right_main-right--compl_eng"><img src="@/assets/images/credit-eng.png"></div>
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
    &_border {
      width: 3px;
      height: 408px;
      background: linear-gradient(to top,  #FFF 0%, #FFA724  80%);
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
            width: 94px;
            height: 94px;
          }
        }
      }
    }
  }
}

</style>