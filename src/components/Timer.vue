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
  max-height: 121px;
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