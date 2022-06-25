<template>
<div class="complect">
  <div class="complect__main">
    <div class="complect__main_title">{{ compl.title }}</div>
    <div class="complect__main_divider">
      <div class="complect__main_divider-line"></div>
      <div class="complect__main_divider-block">
        <div class="complect__main_divider-block--item">{{ compl.trans }}</div>
        <div class="complect__main_divider-block--border"></div>
        <div class="complect__main_divider-block--item">{{ compl.petr }}</div>
        <div class="complect__main_divider-block--border"></div>
        <div class="complect__main_divider-block--item">{{ compl.drive }}</div>
        <div class="complect__main_divider-block--border"></div>
        <div class="complect__main_divider-block--item">{{ compl.pow }}</div>
      </div>
      <div class="complect__main_divider-line"></div>
    </div>
    <div class="complect__main_about">
      <div class="complect__main_about-image"><img src="../assets/images/compl-detail.png"></div>
      <div class="complect__main_about-text" @click="showDetail">О КОМПЛЕКТАЦИИ</div>
    </div>
    <div class="complect__main_detail" v-if="showDetailBlock">
      <div class="complect__main_detail-item">СИСТЕМЫ БЕЗОПАСНОСТИ</div>
      <div class="complect__main_detail-item">ВНЕШНИЙ ВИД</div>
      <div class="complect__main_detail-item">&nbsp;&nbsp;&nbsp;ОБОРУДОВАНИЕ<br>САЛОНА / ИНТЕРЬЕР</div>
    </div>
    <div class="complect__main_divider-line"></div>
    <div class="complect__main_price">{{ compl.price }}</div>
  </div>
  <div class="complect__buttons">
    <div class="complect__buttons_getspecial">ПОЛУЧИТЬ СПЕЦ ЦЕНУ</div>
    <div class="complect__buttons_divider"></div>
    <div class="complect__buttons_getcredit">РАССЧИТАТЬ КРЕДИТ</div>
  </div>
</div>
  
</template>

<script>
export default {
  name: 'Complectation',
  props: {
    compl: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      showDetailBlock: false,
    }
  },
  methods: {
    showDetail() {
      this.showDetailBlock = !this.showDetailBlock
    }
  }
}
</script>

<style lang="scss">
.complect {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 29px;
  &__main {
    margin-bottom: 22px;
    width: 425px;
    height: 334px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: #fff;
    border-radius: 23px;
    border: double 2px transparent;
    background-image: linear-gradient(white, white), 
                      // linear-gradient(to right,  #D0D0D0, #FFF, #D0D0D0),
                      linear-gradient(to top,  #D0D0D0, #FFF, #D0D0D0),
                      linear-gradient(to right,  #D0D0D0, #FFF, #D0D0D0);
    background-origin: border-box;
    background-clip: content-box, border-box; // вариант решения с градиентом в одном направлении
    &_title {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 42.3494px;
      line-height: 51px;
      color: #000000;
      margin: 17px 0 12px 0;
      align-self: center;
    }
    &_divider {
      display: flex;
      flex-direction: column;
      align-items: center;
      &-line {
        width: 369px;
        height: 3px;
        background: linear-gradient(to right, #FFF 0%, #348AD2 20%, #12609E 60%, #348AD2 80%, #FFF 100%);
        align-self: center;
      }
      &-block {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        &--item {
          margin: 19px 0 21px 0;
          display: flex;
          align-items: center;
          font-family: 'Inter';
          font-style: normal;
          font-weight: 400;
          font-size: 11.368px;
          line-height: 14px;
          color: #000000;
        }
        &--border {
          width: 1px;
          height: 21px;
          background: linear-gradient(to top, #FFF 0%, #7D8A98 20%, #7D8A98 80%,#FFF 100%);
        }
      }
    }
    &_about {
      display: flex;
      margin: 17px 0 12px 0;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      &-image {
        width: 31px;
        height: 31px;
        display: flex;
        margin-right: 21px;
        transform: rotate(270deg);
      }
      &-text {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 21.2514px;
        line-height: 26px;
        color: #000000;
      }
    }
    &_detail {
      display: flex;
      width: 100%;
      justify-content: space-around;
      margin-bottom: 18px;
      &-item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 117px;
        height: 32px;
        background: #F0F0F0;
        border-radius: 88.6582px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 7.84694px;
        line-height: 9px;
        color: #000000;
      }
    }
    &_price {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 62.2653px;
      line-height: 75px;
      color: #12609E;
      align-self: center;
    }
  }
  &__buttons {
    width: 425px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 86px;
    background: linear-gradient(90.43deg, #12609E 17.96%, #10205E 83.93%);
    box-shadow: 0px 6.72639px 6.72639px rgba(0, 0, 0, 0.25);
    border-radius: 62.2191px;
    &_getspecial, &_getcredit {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 900;
      font-size: 11.1099px;
      line-height: 13px;
      color: #FFFFFF;
    }
    &_divider {
      width: 1.3px;
      height: 48px;
      background: linear-gradient(to top, transparent 0%, #FFF 25%, #FFF 75%, transparent 100%);

    }
  }
}
@media (max-width: 605px) {
  .complect {
    &__main {
      width: 295px;
      height: 200px;
      &_title {
        font-size: 28px;
        line-height: 34px;
        margin: 8px 0 8px 0;
      }
      &_divider {
        align-items: center;
        justify-content: center;
        &-line {
          width: 256px;
          height: 1px;
        }
        &-block {
          &--item {
            margin: 10px 0 10px 0;
            font-size: 7.88277px;
            line-height: 10px;
          }
        }
      }
      &_about {
        margin: 10px 0;
        &-image {
          width: 13px;
          height: 13px;
          margin-right: 13px;
        }
        &-text {
          font-size: 15.0701px;
          line-height: 18px;
        }

      }
      &_detail {
        margin-bottom: 10px;
        &-item {
          width: 85px;
          height: 24px;
          background: #D9D9D9;
          border-radius: 80px;
          font-size: 5.23129px;
          line-height: 6px;
        }
      }
      &_price {
        margin: 2px 0 2px 0;
        font-size: 36px;
        line-height: 40px;
      }
    }
    &__buttons {
      width: 295px;
      height: 35px;
      border-radius: 43.1437px;
      margin-bottom: 40px;
      &_getspecial, &_getcredit {
        font-size: 7.70376px;
        line-height: 9px;
        text-align: center;
      }
    }
  }
}

</style>