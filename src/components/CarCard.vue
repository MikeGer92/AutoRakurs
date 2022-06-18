<template>
  <div class="homecar-main">
    <div class="car">
      <div class="car__brand">{{ car.brand }}</div>
      <div class="car__model">{{ car.model }}</div>
      <div class="car__image">
        <img class="car__image_img" :src="`${car.image}`">
      </div>
      <div class="car__offer">
        <div class="car__offer_day">
          <div class="car__offer_day-off">ПРЕДЛОЖЕНИЕ ДНЯ</div>
          <div class="car__offer_day-disc">СКИДКА {{ car.discount }} ₽</div>
        </div>
        <div class="car__offer_payment">
          <div class="car__offer_payment-sum">{{ car.payment }} ₽</div>
          <div class="car__offer_payment-period">платеж в месяц*</div>
        </div>
      </div>
      <div class="car__divider"></div>
      <div class="car__coast">от {{ car.price }} ₽*</div>
    </div>
        <div class="homecar-buttons">
        <div class="homecar-buttons_btn homecar-buttons_btn-credit">РАССЧИТАТЬ КРЕДИТ</div>
        <div class="homecar-buttons_btn homecar-buttons_btn-compl">КОМПЛЕКТАЦИЯ</div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'CarCard',
  props: {
    car: Object,
    default: () => {}
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss">
.homecar-main {
  width: 100%;
  max-width: 596px;
  display: flex;
  flex-direction: column;
  margin-top: 64px;
}
.car {
  width: 100%;
  // max-width: 596px;
  // height: 100%;
  // max-height: 914px;
  flex-direction: column;
  background: url('../assets/images/homecar-border.png') no-repeat;
  background-size: contain;
  // background-color: #fff;
  // border-radius: 23px;
  // border: double 2px transparent;
  // background-image: linear-gradient(white, white), 
  //                   // linear-gradient(to right,  #D0D0D0, #FFF, #D0D0D0),
  //                   linear-gradient(to top,  #D0D0D0, #FFF, #D0D0D0),
  //                   linear-gradient(to right,  #D0D0D0, #FFF, #D0D0D0);
  // background-origin: border-box;
  // background-clip: content-box, border-box; // вариант решения с градиентом в одном направлении
  &__brand {
    margin: 13px 32px 0 38px;
    font-style: normal;
    font-weight: 700;
    font-size: 124.85px;
    line-height: 151px;
    background: linear-gradient(180deg, #FF7120 0%, #F7B369 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  &__model {
    margin: -30px 0 0 42px;
    font-style: normal;
    font-weight: 700;
    font-size: 69.4102px;
    line-height: 84px;
    color: #10205F;
  }
  &__image {
    display: flex;
    max-width: 595px;
    // height: 414px;
    &_img {
      width: 100%;
      height: auto;
    }

  }
  &__offer {
    display: flex;
    align-items: center;
    &_day {
      margin: 20px 22px 37px 25px;
      border: 4.07879px solid #FFA724;
      border-radius: 65.2606px;
      &-off {
        padding: 16px 20px 7px 22px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 18.0621px;
        line-height: 22px;
        color: #10205F;
      }
      &-disc {
        padding: 0 20px 22px 22px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 900;
        font-size: 19.8263px;
        line-height: 24px;
        color: #10205F;
      }
    }
    &_payment {
      &-sum {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 42.0627px;
        line-height: 42px;
        text-align: right;
        color: #FFA724;
      }
      &-period {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 32px;
        text-align: right;
        color: #FFA724;
      }
    }

  }
  &__divider {
    width: 99%;
    max-width: 591px;
    height: 2px;
    margin: 0 auto;
    background: linear-gradient(to right,  #D9D9D9 0%, #10205E  20%, #D9D9D9 100%);
  }
  &__coast {
    margin: 11px 24px 14px 24px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 900;
    font-size: 67.7898px;
    line-height: 82px;
    color: #10205F;
  }
  &__buttons {
    display: flex;
  }
}
.homecar-buttons {
  display: flex;
  justify-content: space-between;
  margin: 22px 0 0 0;
  &_btn {
    width: 100%;
    max-width: 288px;
    height: 51px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(90.43deg, #10205F 17.95%, #12609E 83.93%);
    box-shadow: 0px 9.773px 9.773px rgba(0, 0, 0, 0.25);
    border-radius: 90.4002px;
    &-credit, &-compl {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 900;
      font-size: 16.1419px;
      line-height: 20px;
      color: #FFFFFF; 
      cursor: pointer;    
    }
  }
}
@media (max-width: 390px) {
  .homecar-main {
    max-width: 336px;
    margin-top: 0;
  }
  .car {
    margin-top: 45px;
    &:first-child {
      margin-top: 0;
    }
    &__brand {
      margin: 0 21px;
      font-size: 63.06px;
      line-height: 76px;
    }
    &__model {
      margin: 0 0 0 24px;
      font-size: 39.1918px;
      line-height: 47px;
    }
    &__image {
      max-width: 336px;
    }
    &__offer {
      &_day {
        margin: 15px 11px 12px 12px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 2.30305px solid #FFA724;
        border-radius: 36.8488px;
        &-off {
          // display: flex;
          padding: 12px 12px 0 12px ;
          font-size: 10.1986px;
          line-height: 12px;
        }
        &-disc {
          padding: 0 12px 12px 12px;
          font-size: 11.1947px;
          line-height: 14px;
        }
      }
      &_payment {
        &-sum {
          font-size: 23.7503px;
          line-height: 24px;
        }
        &-period {
          font-size: 18.4244px;
          line-height: 18px;
        }
      }
    }
    &__divider {
      height: 1px;
    }
    &__coast {
      font-size: 38px;
      line-height: 46px;
      margin: 6px 13px 9px 13px;
    }
  }
  .homecar-buttons {
    margin: 13px 0 45px 0;
    width: 100%;
    max-width: 330px;
    &_btn {
      max-width: 162px;
      height: 29px;
      font-size: 9.11438px;
      line-height: 11px;
    }
  }

}
</style>