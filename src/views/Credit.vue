<template>
  <div class="credit">
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
      <div class="credit__main"></div>
    </div>
    <h1>КРЕДИТ</h1>
  </div>
</template>


<script>
import Loader from '@/components/app/Loader.vue'
export default {
  name: 'Home',
  components: { Loader },
  data() {
    return {
      model: '',
      showLoader: false
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
      margin: 72px 0 105px 157px;
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
}
</style>