<template>
<div class="complect">
  <div class="complect__main">
    <div class="complect__main_title">1.6 MT SMART</div>
    <div class="complect__main_divider">
      <div class="complect__main_divider-line"></div>
      <div class="complect__main_divider-block">
        <div class="complect__main_divider-block--item">МКПП 6</div>
        <div class="complect__main_divider-block--border"></div>
        <div class="complect__main_divider-block--item">БЕНЗИН АИ-92</div>
        <div class="complect__main_divider-block--border"></div>
        <div class="complect__main_divider-block--item">ПЕРЕДНИЙ</div>
        <div class="complect__main_divider-block--border"></div>
        <div class="complect__main_divider-block--item">123 (90)/6300 Л.С.</div>
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
    <div class="complect__main_price">733 000 ₽</div>
  </div>
</div>
  
</template>

<script>
export default {
  name: 'Complectation',
  data() {
    return {
      showDetailBlock: true
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
        justify-content: space-around;
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
}

</style>