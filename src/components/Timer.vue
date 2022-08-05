<template>
  <div class="count">
  <div class="count__item">
    <div class="count__item_num">{{ days }}</div>
    <div class="count__item_descr">ДНЕЙ</div>
  </div>
  <div class="count__item">
    <div class="count__item_num">{{ hours }}</div>
    <div class="count__item_descr">ЧАСОВ</div>
  </div>
  <div class="count__item">
    <div class="count__item_num">{{ minutes }}</div>
    <div class="count__item_descr">МИНУТ</div>
  </div>
  <div class="count__item">
    <div class="count__item_num">{{ second }}</div>
    <div class="count__item_descr">СЕКУНД</div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Timer',
  props: {
    deadline: {
      type: Array,
      default:() => []
    }
  },
  data() {
    return {
      days: 2,
      hours: 3,
      minutes: 4,
      second: 10,
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
      this.second = Math.floor((this.total/1000) % 60)
      if (this.second < 10) {
        this.second = '0'+ this.second
      }
      this.minutes = Math.floor((this.total/1000/60) % 60)
      if (this.minutes < 10) {
        this.minutes = '0'+ this.minutes
      }
      this.hours = Math.floor((this.total/(1000*60*60)%24))
      if (this.hours < 10) {
        this.hours = '0'+ this.hours
      }
      this.days = Math.floor((this.total/(1000*60*60*24)))
      if (this.days < 10) {
        this.days = '0'+ this.days
      }
    },
    updateClock(endtime) {
      this.total = this.getTimeRemaining(endtime);
    },
  }

}
</script>

<style lang="scss">
.count {
  display: flex;
  max-width: 375px;
  height: 121px;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(90.43deg, #12609E 17.95%, #10205E 83.93%);
  box-shadow: 0px 6.20628px 6.20628px rgba(0, 0, 0, 0.25);
  border-radius: 37.1592px;
  &__item {
    padding: 0 17px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1.28135px solid #FFFFFF;
    &:last-child {
      border-right: none;
    }
    &_num {
      font-style: normal;
      font-weight: 900;
      font-size: 43.0495px;
      line-height: 52px;
      color: #FFFFFF;
    }
    &_descr {
      font-style: normal;
      font-weight: 700;
      font-size: 14.4963px;
      line-height: 18px;
      color: #FFFFFF;
    }
  }
}
@media (min-width: 1281px) and (max-width: 1920px) {
  .count {
    max-width: 348px;
    height: 113px;
    background: linear-gradient(90.43deg, #12609E 17.95%, #10205E 83.93%);
    box-shadow: 0px 5.77049px 5.77049px rgba(0, 0, 0, 0.25);
    border-radius: 34.55px;
    margin-bottom: 15px;
    &__item {
      border-right: 1.19px solid #FFF;
      &_num {
        font-size: 40.0266px;
        line-height: 48px;
      }
      &_descr {
        font-size: 13.4784px;
        line-height: 16px;
      }
    }
  }
}
@media (min-width: 769px) and (max-width: 1280px) {
  .count {
    max-width: 232px;
    height: 75px;
    margin-bottom: 15px;
    background: linear-gradient(90.43deg, #12609E 17.95%, #10205E 83.93%);
    box-shadow: 0px 3.84658px 3.84658px rgba(0, 0, 0, 0.25);
    border-radius: 23.0308px;
    &__item {
      padding: 0 10px;
      border-right: 1px solid #FFF;
      &_num {
        font-size: 26.6815px;
        line-height: 32px;
      }
      &_descr {
        font-size: 8.9846px;
        line-height: 11px;
      }
    }
  }
}
@media (min-width: 606px) and (max-width: 768px) {
  .count {
    max-width: 141px;
    height: 46px;
    margin-bottom: 9px;
    background: linear-gradient(90.43deg, #12609E 17.95%, #10205E 83.93%);
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    &__item {
      padding: 0 7px;
      border-right: 1px solid #FFF;
      &_num {
        font-size: 16.1541px;
        line-height: 20px;
      }
      &_descr {
        font-size: 5.43965px;
        line-height: 7px;
      }
    }
  }

}
@media (max-width: 605px) {
  .count {
    max-width: 80px;
    max-height: 26px;
    &__item {
      padding: 0 4px;
      &_num {
        font-size: 9.18703px;
        line-height: 11px;
      }
      &_descr {
        font-size: 3.09359px;
        line-height: 4px;
      }
    }
  }
}
</style>