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
        <div class="whyus__advants_clients-image"><img src="@/assets/images/whyus-cients.png"></div>
        <div class="whyus__advants_clients-title">БОЛЕЕ 8638</div>
        <div class="whyus__advants_clients-descr">клиентов стали счастливыми обладателями новых<br>автомобилей</div>
      </div>
      <div class="whyus__advants_banks">
        <div class="whyus__advants_banks-image"><img src="@/assets/images/whyus-banks.png"></div>
        <div class="whyus__advants_banks-title">30 БАНКОВ</div>
        <div class="whyus__advants_banks-descr">30 банков партнеров с самыми выгодными программами кредитования</div>
      </div>
      <div class="whyus__advants_time">
        <div class="whyus__advants_time-image"><img src="@/assets/images/whyus-time.png"></div>
        <div class="whyus__advants_time-title">БОЛЕЕ 15 ЛЕТ</div>
        <div class="whyus__advants_time-descr">успешной работы в области продажи и кредитования автомобилей</div>
      </div>
    </div>
      <div class="whyus__divider">
        <div class="whyus__divider_line"></div>
        <div class="whyus__divider_text">ПОЧЕМУ ВЫБИРАЮТ ИМЕННО НАС</div>
        <div class="whyus__divider_line"></div>
    </div>
    <MarketBlock 
      class="whyus__market"
    />

  </div>
  
</template>

<script>
import MarketBlock from '@/components/MarketBlock.vue'
export default {
  name: 'WhyUs',
  components: { MarketBlock }
  
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
    max-width: 1892px;
    // margin: 0 auto;
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
    font-weight: 500;
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
}
@media (min-width: 1281px) and (max-width: 1920px) {
  .whyus {
    margin: 37px auto 22px auto;
    &__subtitle {
      margin-top: 80px;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 25px;
      text-align: center;
      color: #000000;
    }
    &__title {
      font-size: 46.6842px;
      line-height: 54px;
    }
    &__advants {
      width: 1280px;
      margin: 44px auto;
      &_clients, &_banks, &_time {
        width: 425px;
        &-image {
          width: 195px;
          height: 195px;
        }
        &-title {
          font-size: 28.7853px;
          line-height: 35px;    
        }
        &-descr {
          max-width: 327px;
          font-size: 16.675px;
          line-height: 20px;
        }
      }
    }
  }
}
@media (min-width: 769px) and (max-width: 1280px) {
  .whyus {
    max-width: 1023px;
    margin: 20px auto;
    &__divider {
      &_line {
        height: 2px;
      }
      &_text {
        margin: 13px 0;
        font-size: 29.8025px;
        line-height: 36px;
      }
    }
    &__subtitle {
      margin-top: 69px;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-size: 11.1167px;
      line-height: 14px;
      text-align: center;
      color: #000000;
    }
    &__title {
      font-size: 29.7895px;
      line-height: 36px;
    }
    &__advants {
      width: 750px;
      margin: 29px auto;
      &_clients, &_banks, &_time {
        width: 218px;
        &-image {
          width: 130px;
          height: 130px;
        }
        &-title {
          font-size: 19.1902px;
          line-height: 23px;    
        }
        &-descr {
          font-size: 11.1167px;
          line-height: 14px;
          line-height: 13px;
        }
      }
    }
  }
}
@media (min-width: 606px) and (max-width: 768px) {
  .whyus {
    max-width: 620px;
    margin: 20px auto 0 auto;
    &__divider {
      &_line {
        height: 1.5px;
      }
      &_text {
        margin: 8px 0;
        font-size: 17.8814px;
        line-height: 22px;
      }
    }
    &__subtitle {
      margin-top: 32px;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-size: 6.66997px;
      line-height: 8px;
      text-align: center;
      color: #000000;
    }
    &__title {
      font-size: 17.8736px;
      line-height: 22px;
    }
    &__advants {
      width: 460px;
      margin: 29px auto;
      &_clients, &_banks, &_time {
        width: 130px;
        &-image {
          width: 78px;
          height: 78px;
        }
        &-title {
          font-size: 11.514px;
          line-height: 14px;   
        }
        &-descr {
          margin: 8px 0 0 0;
          font-size: 6.66997px;
          line-height: 8px;
        }
      }
    }
  }
}
@media ( max-width: 605px) {
  .whyus {
    &__divider {
      display: none;
    }
    &__subtitle {
      margin-top: 8px;
      font-size: 10.9677px;
      line-height: 13px;
    }
    &__title {
      font-size: 14.0044px;
      line-height: 17px;
    }
    &__advants {
      margin: 14px 31px 28px 42px;
      &_clients, &_banks, &_time {
        &-image {
          width: 61px;
          height: 61px;
        }
        &-title {
          margin-top: 8px;
          font-size: 9.02154px;
          line-height: 11px;
        }
        &-descr {
          margin: 6px 0 8px 0;
          max-width: 102px;
          font-size: 5.22609px;
          line-height: 6px;
        }
      }
    }
    &__market {
      display: none;
    }
  }
}
</style>