<template>
  <div class="oldcar-params">
    <div class="oldcar-params__left">
      <div class="oldcar-params__left_num">{{ blockNum }}</div>
      <div class="oldcar-params__left_border"></div>
    </div>
    <div class="oldcar-params__right">
      <div class="oldcar-params__right_title">СТАРЫЙ АВТОМОБИЛЬ</div>
      <div class="oldcar-params__right_main">
        <div class="oldcar-params__right_main-left">
          <CustomSelect 
            :options="oldCarList" 
            @select="oldSelect" 
            :selected="selectedOld" 
            :defSelected="defSelectOld"
            :style="{'margin-bottom': '70px',  'width': '638px', 'height': '75px'}" 

            :disable="false"
          />
          <CustomSelect 
            :options="yearsList" 
            @select="yearSelect" 
            :selected="selectedYear" 
            :defSelected="defSelectYear" 
            :style="{'margin-bottom': '70px',  'width': '638px', 'height': '75px'}" 
            :disable="disableYears"
          />
        </div>
        <div class="oldcar-params__right_main-right">
          <CustomSelect 
            :options="waysList" 
            @select="waySelect" 
            :selected="selectedWay" 
            :defSelected="defSelectWay"
            :style="{'margin-bottom': '70px',  'width': '638px', 'height': '75px'}" 

            :disable="false"
          />
          <CustomSelect 
            :options="transList" 
            @select="transSelect" 
            :selected="selectedTrans" 
            :defSelected="defSelectTrans" 
            :style="{'margin-bottom': '70px',  'width': '638px', 'height': '75px'}" 
            :disable="disableTrans"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomSelect from '@/components/CustomSelect.vue'
export default {
  name: 'OldCarParams',
  components: {CustomSelect},
  props: {
    blockNum: {
      type: String,
      default:() => ''
    }
  },
  data() {
    return {
      defSelectOld: 'МАРКА АВТО',
      selectedOld: '',
      oldCarList: [
        {name: 'HONDA', value: 'HONDA'},
        {name: 'HAVAL', value: 'HAVAL'},
        {name: 'MAZDA', value: 'MAZDA'},
        {name: 'CITROEN', value: 'CITROEN'},
        {name: 'LADA', value: 'LADA'},
      ],
      disableYears: true,
      defSelectYear: 'ГОД ВЫПУСКА',
      selectedYear: '',
      yearsList: [
        {name: '2010', value: '2010'},
        {name: '2011', value: '2011'},
        {name: '2012', value: '2012'},
        {name: '2013', value: '2013'},
        {name: '2014', value: '2014'},
      ],
      defSelectWay: 'ПРОБЕГ',
      selectedWay: '',
      waysList: [
        {name: 'до 100 000 км', value: 'до 100 000 км'},
        {name: '100 000 - 200 000 км', value: '100 000 - 200 000 км'},
        {name: '200 000 - 300 000 км', value: '200 000 - 300 000 км'},
        {name: 'более 300 000 км', value: 'более 300 000 км'},
      ],
      disableTrans: true,
      defSelectTrans: 'КОРОБКА ПЕРЕДАЧ',
      selectedTrans: '',
      transList: [
        {name: 'МТ', value: 'МТ'},
        {name: 'АТ', value: 'АТ'},
        {name: 'РОБОТ', value: 'РОБОТ'},
        {name: 'ВАРИАТОР', value: 'ВАРИАТОР'},
        {name: 'DSG', value: 'DSG'},
      ],
    }
  },
  methods: {
    oldSelect(option) {
      this.selectedOld = option.name
      this.disableYears = false
    },
    yearSelect(option) {
      this.selectedYear = option.name
    },
    waySelect(option) {
      this.selectedWay = option.name
      this.disableTrans = false
    },
    transSelect(option) {
      this.selectedTrans = option.name
    }
  }
}
</script>

<style lang="scss">
.oldcar-params {
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
      width: 100%;
      justify-content: space-between;
      align-items: flex-start;
      margin: 88px 121px 0 100px;
      &-left, &-right {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        &--title {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 700;
          font-size: 30.6865px;
          line-height: 37px;
          color: #000000;
        }
      }
      &-right {
        margin-left: 85px;
      }
    }
  }
}

</style>