<template>
  <div class="catalog-count">
  <div class="catalog-count__item">
    <div class="catalog-count__item_number">
      <div class="catalog-count__item_number-num">{{ ddays}}</div>
      <div class="catalog-count__item_number-num">{{ days}}</div>
      <div class="catalog-count__item_number-div"></div>
    </div>
    <div class="catalog-count__item_descr">ДНИ</div>
  </div>
  <div class="catalog-count__item">
    <div class="catalog-count__item_number">
      <div class="catalog-count__item_number-num">{{ dhours }}</div>
      <div class="catalog-count__item_number-num">{{ hours }}</div>
      <div class="catalog-count__item_number-div"></div>
    </div>
    <div class="catalog-count__item_descr">ЧАСЫ</div>
  </div>
  <div class="catalog-count__item">
    <div class="catalog-count__item_number">
      <div class="catalog-count__item_number-num">{{ dminutes }}</div>
      <div class="catalog-count__item_number-num">{{ minutes }}</div>
      <div class="catalog-count__item_number-div"></div>
    </div>
    <div class="catalog-count__item_descr">МИНУТЫ</div>
  </div>
  <div class="catalog-count__item">
    <div class="catalog-count__item_number">
      <div class="catalog-count__item_number-num">{{ dsecond }}</div>
      <div class="catalog-count__item_number-num">{{ second }}</div>
    </div>
    <div class="catalog-count__item_descr">СЕКУНДЫ</div>
  </div>
</div>
</template>

<script>
export default {
  name: 'CatalogTimer',
  props: {
    deadline: {
      type: String,
      default:() => ''
    }
  },
  data() {
    return {
      ddays: '1',
      days: '2',
      dhours: '1',
      hours: '3',
      dminutes: '1',
      minutes: '4',
      dsecond: '1',
      second: '',
      total: ''
    }
  },
  mounted() {
    setInterval(() => {
      this.updateClock(this.deadline)
    }, 1000)
  },
  methods: {
    getTimeRemaining(endtime) {
      this.total = new Date(+endtime[0],+endtime[1]-1,+endtime[2],+endtime[3],+endtime[4],+endtime[5],) - new Date()
      this.second = Math.floor((this.total/1000) % 60)%10
      this.dsecond = Math.floor(((this.total/1000) % 60)/10)
      this.minutes = Math.floor((this.total/1000/60) % 60)%10
      this.dminutes = Math.floor(((this.total/1000/60) % 60)/10)
      this.hours = Math.floor((this.total/(1000*60*60)%24))%10
      this.dhours = Math.floor((this.total/(1000*60*60)%24)/10);
      this.days = Math.floor((this.total/(1000*60*60*24)))%10
      this.ddays = Math.floor((this.total/(1000*60*60*24))/10)
    },
    updateClock(endtime) {
      this.total = this.getTimeRemaining(endtime);
    }
  }
}
</script>

<style lang="scss">
.catalog-count {
  display: flex;
  width: 476px;
  height: 69px;
  align-items: center;
  &__item {
    padding: 0 18px 0 0;
    display: flex;
    width: 108px;
    flex-direction: column;
    align-items: center;
    &_number {
      display: flex;
      justify-content: space-around;
      margin: 6px 0;
      // border-right: 2px solid #FFFFFF;
      &-num {
        width: 43px;
        height: 57px;
        margin-right: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 33.5969px;
        line-height: 41px;
        color: #10205E;
        background: linear-gradient(138.82deg, #FFFFFF 13.85%, #C7E2F7 90.23%);
        box-shadow: 0px 4.84354px 4.84354px rgba(0, 0, 0, 0.25);
        border-radius: 9px;
      }
      &-div {
        margin-left: 10px;
        width: 2px;
        height: 57px;
        background: #FFFFFF;
      }
    }
    &_descr {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 900;
      font-size: 13.9337px;
      line-height: 17px;
      color: #FFFFFF;
    }
  }
}
@media (min-width: 1280px) and (max-width: 1921px) {
  .catalog-count {
    max-width: 443px;
    &__item {
      padding: 0 16px 0 0;
      // &:first-child {
      //   padding: 0 16px 0 16px;
      // }
      &_number {
        &-num {
          width: 40px;
          height: 53px;
          font-size: 31.2378px;
          line-height: 38px;
          box-shadow: 0px 4.50343px 4.50343px rgba(0, 0, 0, 0.25);
          border-radius: 8.36804px;
        }
      }
      &_descr {
        font-size: 12.9553px;
        line-height: 16px;
        margin-left: -10px;
        align-self: center;
      }
    }
  }
}
@media (max-width: 605px) {
  .catalog-count {
    width: 218px;
    height: 38px;
    &__item {
      padding: 0 6px 0 0;
      width: 50px;
      &_number {
        &-num {
          width: 20px;
          height: 26px;
          margin-right: 3px;
          font-size: 15.3868px;
          line-height: 19px;
          border-radius: 4.12185px;
        }
        &-div {
          margin-left: 3px;
          width: 1px;
          height: 26px;
        }
      }
      &_descr {
        font-size: 6.38142px;
        line-height: 8px;
    }
    }
  }
}
</style>