<template>
  <div class="oldcar-params">
    <div class="oldcar-params__left">
      <div class="oldcar-params__left_num">{{ blockNum }}</div>
      <div class="oldcar-params__left_border-y"></div>
    </div>
    <div class="oldcar-params__right">
      <div class="oldcar-params__right_title">СТАРЫЙ АВТОМОБИЛЬ</div>
      <div class="oldcar-params__left_border-x"></div>
      <div class="oldcar-params__right_main">
        <div class="oldcar-params__right_main-left">
          <CustomSelect
            :options="oldCarList" 
            @select="oldSelect" 
            :selected="selectedOld" 
            :defSelected="defSelectOld"
            :disable="false"
          />
          <CustomSelect
            :options="yearsList" 
            @select="yearSelect" 
            :selected="selectedYear" 
            :defSelected="defSelectYear"  
            :disable="disableYears"
          />
        </div>
        <div class="oldcar-params__right_main-right">
          <CustomSelect 
            :options="waysList" 
            @select="waySelect" 
            :selected="selectedWay" 
            :defSelected="defSelectWay"
            :disable="false"
          />
          <CustomSelect
            :options="transList" 
            @select="transSelect" 
            :selected="selectedTrans" 
            :defSelected="defSelectTrans" 
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
    margin: 40px 0 0 0;
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
      border-radius: 50%;
    }
    &_border-y {
      width: 3px;
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
    margin: 70px 0 0 0;
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

@media (min-width: 768px) and (max-width: 1281px) {
  .oldcar-params {
    margin: 0 0 0 15px;
    &__left {
      margin: 16px 0 0 6px;
      &_num {
        width: 53px;
        height: 53px;
        font-size: 41.2294px;
        line-height: 50px;
        box-shadow: 0px 1.59373px 10.7577px rgba(0, 0, 0, 0.25);
      }
      &_border-y {
        height: 164px;
        width: 3px;
      }
    }
    &__right {
      margin: 27px 0 0 0;
      &_title {
        font-size: 23.3292px;
        line-height: 28px;
        margin-left: 50px;
      }
      &_main {
        margin: 25px 0 0 50px;
      }
    }
  }
}
@media ( max-width: 600px) {
  .oldcar-params {
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
        margin: 25px 0 0 10px;
        flex-wrap: wrap;
        justify-content: center;
        &-left {
          width: 100%;
        }
        &-right {
          margin-left: 0;
          width: 100%;
        }
      }
    }
  } 

}
</style>