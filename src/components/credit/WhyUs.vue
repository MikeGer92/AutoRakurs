<template>
  <div class="whyus">
    <div class="whyus__divider">
      <div class="whyus__divider_line"></div>
      <div class="whyus__divider_text">ПОЧЕМУ ВЫБИРАЮТ ИМЕННО НАС</div>
      <div class="whyus__divider_line"></div>
    </div>
    <div class="whyus__subtitle">Преимущества дилерского центра</div>
    <div class="whyus__title">АВТОРАКУРС</div>
    <div class="whyus__advants">
      <div class="whyus__advants_clients">
        <div class="whyus__advants_clients-image"><img src="../../assets/images/whyus-cients.png"></div>
        <div class="whyus__advants_clients-title">БОЛЕЕ 8638</div>
        <div class="whyus__advants_clients-descr">клиентов стали счастливыми обладателями новых<br>автомобилей</div>
      </div>
      <div class="whyus__advants_banks">
        <div class="whyus__advants_banks-image"><img src="../../assets/images/whyus-banks.png"></div>
        <div class="whyus__advants_banks-title">30 БАНКОВ</div>
        <div class="whyus__advants_banks-descr">30 банков партнеров с самыми выгодными программами кредитования</div>
      </div>
      <div class="whyus__advants_time">
        <div class="whyus__advants_time-image"><img src="../../assets/images/whyus-time.png"></div>
        <div class="whyus__advants_time-title">БОЛЕЕ 15 ЛЕТ</div>
        <div class="whyus__advants_time-descr">успешной работы в области продажи и кредитования автомобилей</div>
      </div>
    </div>
      <div class="whyus__divider">
        <div class="whyus__divider_line"></div>
        <div class="whyus__divider_text">ПОЧЕМУ ВЫБИРАЮТ ИМЕННО НАС</div>
        <div class="whyus__divider_line"></div>
    </div>
    <div class="whyus__market">
      <div class="whyus__market_item">
        <p class="whyus__market_item-text">ВРЕМЯ ВЫБИРАТЬ ПОДАРКИ!</p>
        <p class="whyus__market_item-text">ВРЕМЯ ВЫБИРАТЬ ПОДАРКИ!</p>
        <p class="whyus__market_item-text">ВРЕМЯ ВЫБИРАТЬ ПОДАРКИ!</p>
      </div>
        <div class="whyus__market_item">
        <p class="whyus__market_item-text">ВРЕМЯ ВЫБИРАТЬ ПОДАРКИ!</p>
        <p class="whyus__market_item-text">ВРЕМЯ ВЫБИРАТЬ ПОДАРКИ!</p>
        <p class="whyus__market_item-text">ВРЕМЯ ВЫБИРАТЬ ПОДАРКИ!</p>
      </div>
        <div class="whyus__market_item">
        <p class="whyus__market_item-text">ВРЕМЯ ВЫБИРАТЬ ПОДАРКИ!</p>
        <p class="whyus__market_item-text">ВРЕМЯ ВЫБИРАТЬ ПОДАРКИ!</p>
        <p class="whyus__market_item-text">ВРЕМЯ ВЫБИРАТЬ ПОДАРКИ!</p>
      </div>
        <div class="whyus__market_item">
        <p class="whyus__market_item-text">ВРЕМЯ ВЫБИРАТЬ ПОДАРКИ!</p>
        <p class="whyus__market_item-text">ВРЕМЯ ВЫБИРАТЬ ПОДАРКИ!</p>
        <p class="whyus__market_item-text">ВРЕМЯ ВЫБИРАТЬ ПОДАРКИ!</p>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'WhyUs'
  
}
</script>

<style lang="scss">
.whyus {
  display: flex;
  flex-direction: column;
    &__divider {
    display: block;
    flex-direction: column;
    text-align: center;
    width: 1892px;
    height: 94px;
    &_line {
      display: flex;
      width: 100%;
      height: 3px;
      background: linear-gradient(to right,  #FFF 0%, #10205E 20%,  #FFF 100%);
    }
    &_text {
      margin: 19px 0 21px 0;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 44.7037px;
      line-height: 54px;
      color: #000000;
    }
  }
  &__subtitle {
    margin-top: 92px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 25.8009px;
    line-height: 31px;
    text-align: center;
    color: #000000;
  }
  &__title {
    margin-top: 3px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 69.1389px;
    line-height: 84px;
    text-align: center;
    color: #12609E;
  }
  &__advants {
    margin: 66px 65px 75px 65px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &_clients, &_banks, &_time {
      display: flex;
      flex-direction: column;
      align-items: center;
      &-image {
        display: flex;
        width: 300px;
        height: 300px;
        & img {
          width: 100%;
          height: auto;
        }
      }
      &-title {
        margin-top: 36px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 44.5387px;
        line-height: 54px;
        text-align: center;
        color: #000000;
      }
      &-descr {
        display: flex;
        max-width: 461px;
        margin: 29px 0 35px 0;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 25.8009px;
        line-height: 31px;
        text-align: center;
        color: #000000;
      }
    }
  }
  &__market {
    margin: 149px 0 230px 0;
    display: flex;
    flex-direction: column;
    align-self: center;
    &_item {
      display: flex;
      margin: 10px 0;
      &-text {
        margin: 0;
        font-family: 'Abhaya Libre SemiBold', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 34.3344px;
        line-height: 41px;
        color: #000000;
        &:nth-child(2) {
          margin: 0 20px;
        }
      }
    }
  }
}

</style>