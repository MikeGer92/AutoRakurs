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
@media (min-width: 1281px) and (max-width: 1920px) {
  .homecar-main {
    max-width: 444px;
    margin-top: 80px;
  }
  .car {
    &__brand {
      font-size: 84.7136px;
      line-height: 103px;
      align-self: center;
      text-align: center;
    }
    &__model {
      margin: -20px 0 0 42px;
      font-size: 51.7568px;
      line-height: 63px;
    }
    &__image {
      max-width: 443px;
    }
    &__offer {
      &_day {
        width: 242px;
        margin: 15px 5px 27px 15px;
        border: 3.04141px solid #FFA724;
        border-radius: 48.6625px; 
        &-off {
          padding: 13px 0 0 17px;
          font-size: 13.4683px;
          line-height: 16px;        
        }
        &-disc {
          padding: 5px 0 17px 17px;
          font-size: 14.7838px;
          line-height: 18px;
        }   
      }
      &_payment {
        width: 276px;
        margin-right: 27px;
        &-sum {
          font-size: 31.3647px;
          line-height: 31px;
        }
        &-period {
          font-size: 24.3313px;
          line-height: 24px;
        }
      }
    }
    &__coast {
      margin: 9px 17px 11px 18px;
      font-size: 50.5485px;
      line-height: 61px;
    }
  }
  .homecar-buttons {
    &_btn {
      max-width: 215px;
      box-shadow: 0px 7.28738px 7.28738px rgba(0, 0, 0, 0.25);
      border-radius: 67.4083px;
      height: 38px;
      &-credit, &-compl {
        font-size: 12.0365px;
        line-height: 15px;
      }
    }
  }
}
@media (min-width: 769px) and (max-width: 1280px) {
  .homecar-main {
    width: 295px;
    margin-top: 64px;
  }
  .car {
    width: 100%;
    &__brand {
      margin: 6px 17px 0 17px ;
      font-size: 56.4696px;
      line-height: 68px;
      align-self: center;
      text-align: center;
    }
    &__model {
      margin: 0px 0 0 40px;
      font-size: 34.5008px;
      line-height: 42px;
    }
    &__image {
      max-width: 443px;
    }
    &__offer {
      &_day {
        width: 115px;
        margin: 10px 5px 25px 12px;
        border: 2.02739px solid #FFA724;
        border-radius: 32.4382px;
        &-off {
          padding: 11px 0 0 12px;
          font-size: 8.9779px;
          line-height: 11px;       
        }
        &-disc {
          padding: 5px 0 11px 12px;
          font-size: 8.9779px;
          line-height: 11px;
        }   
      }
      &_payment {
        width: 139px;
        margin-right: 20px;
        &-sum {
          font-size: 20.9075px;
          line-height: 21px;
        }
        &-period {
          font-size: 16.2191px;
          line-height: 16px;
        }
      }
    }
    &__coast {
      margin: 6px 11px 7px 11px;
      font-size: 33.6953px;
      line-height: 41px;
    }
  }
  .homecar-buttons {
    margin: 12px 0 0 0;
    &_btn {
      max-width: 143px;
      height: 26px;
      box-shadow: 0px 4.85773px 4.85773px rgba(0, 0, 0, 0.25);
      border-radius: 44.934px;
      &-credit, &-compl {
        font-size: 8.02344px;
        line-height: 10px;
      }
    }
  }
}
@media (min-width: 606px) and (max-width: 768px) {
  .homecar-main {
    width: 180px;
    margin-top: 39px;
  }
  .car {
    width: 100%;
    &__brand {
      margin: 4px 10px 0 10px ;
      font-size: 34.1891px;
      line-height: 41px;
      align-self: center;
      text-align: center;
    }
    &__model {
      margin: 0px 0 0 25px;
      font-size: 20.8882px;
      line-height: 25px;
    }
    &__image {
      max-width: 443px;
    }
    &__offer {
      &_day {
        width: 70px;
        margin: 7px 4px 11px 8px;
        border: 1.22746px solid #FFA724;
        border-radius: 19.6394px;
        &-off {
          padding: 7px 0 0 8px;
          font-size: 5.4356px;
          line-height: 7px;      
        }
        &-disc {
          padding: 3px 0 7px 8px;
          font-size: 5.96649px;
          line-height: 7px;
        }   
      }
      &_payment {
        width: 84px;
        margin-right: 8px;
        &-sum {
          font-size: 12.6583px;
          line-height: 13px;
        }
        &-period {
          font-size: 9.81972px;
          line-height: 10px;
        }
      }
    }
    &__coast {
      margin: 4px 7px;
      font-size: 20.4006px;
      line-height: 25px;
    }
  }
  .homecar-buttons {
    margin: 7px 0 0 0;
    &_btn {
      max-width: 87px;
      height: 16px;
      box-shadow: 0px 2.94107px 2.94107px rgba(0, 0, 0, 0.25);
      border-radius: 27.2049px;
      &-credit, &-compl {
        font-size: 4.85773px;
        line-height: 6px;
      }
    }
  }
}
@media (max-width: 605px) {
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