<template>
  <div class="catalogcar-main">
    <div class="catalogcar">
      <div class="catalogcar__brand">{{ car.brand }}</div>
      <div class="catalogcar__model">{{ car.model }}</div>
      <div class="catalogcar__image">
        <img class="catalogcar__image_img" :src="`${car.image}`">
      </div>
      <div class="catalogcar__offer">
        <div class="catalogcar__offer_day">
          <div class="catalogcar__offer_day-off">ПРЕДЛОЖЕНИЕ ДНЯ</div>
          <div class="catalogcar__offer_day-disc">СКИДКА {{ car.discount }} ₽</div>
        </div>
        <div class="catalogcar__offer_payment">
          <div class="catalogcar__offer_payment-sum">{{ car.payment }} ₽</div>
          <div class="catalogcar__offer_payment-period">платеж в месяц*</div>
        </div>
      </div>
      <div class="catalogcar__divider"></div>
      <div class="catalogcar__coast">от {{ car.price }} ₽*</div>
    </div>
    <div class="catalogcar__buttons">
      <div class="catalogcar__buttons_btn catalogcar__buttons_btn-credit">РАССЧИТАТЬ КРЕДИТ</div>
      <div class="catalogcar__buttons_btn catalogcar__buttons_btn-compl">КОМПЛЕКТАЦИЯ</div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'CatalogCar',
  props: {
    car: Object,
    default: () => {}
  },
  data() {
    return {
    }
  },
}
</script>

<style lang="scss">
.catalogcar-main {
  max-width: 438px;
  // height: 672px;
  display: flex;
  flex-direction: column;
  margin: 64px 0 64px 0;
}

.catalogcar {
  width: 100%;
  // height: 100%;
  display: flex;
  flex-direction: column;
  background: url('../../assets/images/catalog-border.png') no-repeat;
  background-position: 10px 0px;
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
    margin: 9px 18px 0 28px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 84.21px;
    line-height: 102px;
    background: linear-gradient(180deg, #FF7120 0%, #F7B369 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  &__model {
    margin-top: -30px;
    margin-left: 31px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 51.0521px;
    line-height: 62px;
    color: #10205F;
  }
  &__image {
    display: flex;
    width: 420px;
    height: 308px;
    &_img {
      width: 100%;
      height: auto
    }
  }
  &__offer {
    display: flex;
    align-items: center;
    &_day {
      margin: 14px 18px 27px 16px;
      border: 3px solid #FFA724;
      border-radius: 48px;
      &-off {
        padding: 12px 15px 5px 16px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 13.2849px;
        line-height: 16px;
        color: #10205F;
      }
      &-disc {
        padding: 0 15px 16px 15px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 900;
        font-size: 14.5825px;
        line-height: 18px;
        color: #10205F;
      }
    }
    &_payment {
      &-sum {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 31px;
        line-height: 31px;
        text-align: right;
        color: #FFA724;
      }
      &-period {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 24px;
        text-align: right;
        color: #FFA724;
      }
    }

  }
  &__divider {
    width: 404px;
    height: 1.5px;
    margin: 0 auto;
    background: linear-gradient(to right,  #FFF 0%, #10205E  20%, #FFF 100%);
  }
  &__coast {
    display: flex;
    justify-content: center;
    max-width: 100%;
    margin: 8px 18px 11px 18px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 900;
    font-size: 46px;
    line-height: 50px;
    color: #10205F;
  }
}
.catalogcar__buttons {
  display: flex;
  max-width: 434px;
  justify-content: space-evenly;
  margin-top: 22px;
  &_btn {
    width: 200px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(90.43deg, #10205F 17.95%, #12609E 83.93%);
    box-shadow: 0px 9.773px 9.773px rgba(0, 0, 0, 0.25);
    border-radius: 67px;
    border: none;
    &-credit, &-compl {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 900;
      font-size: 12px;
      line-height: 14px;
      color: #FFFFFF; 
      cursor: pointer;    
    }
  }
}
@media (min-width: 1281px) and (max-width: 1920px) {
  .catalogcar-main {
    max-width: 347px;
    margin: 50px 0;
  }
  .catalogcar {
    background-position: 0 0;
    &__brand {
      font-size: 66.7436px;
      line-height: 81px;  
    }
    &__model {
      margin-top: -10px;
      font-size: 40.4632px;
      line-height: 49px;
    }
    &__image {
      width: 346px;
      height: auto;
    }
    &__offer {
      &_day {
        margin: 12px 8px 21px 13px;
        width: 145px;
        height: 53.1px;
        border: 2.37776px solid #FFA724;
        border-radius: 38.0441px;
        &-off {
          font-size: 10.5294px;
          line-height: 13px;
        }
        &-disc {
          font-size: 11.5579px;
          line-height: 14px;
        }
      }
      &_payment {
        margin-right: 13px;
        &-sum {
          font-size: 24.5208px;
          line-height: 24px;
        }
        &-period {
          font-size: 19.0221px;
          line-height: 19px;
        }
      }
    }
    &__divider {
      width: 340px;
    }
    &__coast {
      margin: 6px 13px 9px 13px;
      font-size: 39.5185px;
      line-height: 48px;
    }
    &__buttons {
      max-width: 346px;
      margin-top: 14px;
      &_btn {
        width: 158px;
        height: 30px;
        box-shadow: 0px 5.69723px 5.69723px rgba(0, 0, 0, 0.25);
        border-radius: 52.6994px;
        &-credit, &-compl {
          font-size: 9.41004px;
          line-height: 11px;
        }
      }
    }
  }
}
@media (min-width: 769px) and (max-width: 1280px) {
  .catalogcar-main {
    max-width: 232px;
    margin: 0 0 68px 0;
  }
  .catalogcar {
    background-position: 0 0;
    &__brand {
      font-size: 44.5437px;
      line-height: 54px; 
    }
    &__model {
      margin-top: -10px;
      font-size: 27.0045px;
      line-height: 33px;
    }
    &__image {
      width: 232px;
      height: auto;
    }
    &__offer {
      &_day {
        margin: 8px;
        width: 90px;
        height: 35.1px;
        border: 1.58688px solid #FFA724;
        border-radius: 25.3901px;
        &-off {
          padding: 6px 3px 3px 6px;
          font-size: 7.02719px;
          line-height: 9px;
        }
        &-disc {
          padding: 3px 3px 6px 6px;
          font-size: 7.71354px;
          line-height: 9px;
        }
      }
      &_payment {
        margin-right: 13px;
        &-sum {
          font-size: 16.3648px;
          line-height: 16px;
        }
        &-period {
          font-size: 12.695px;
          line-height: 13px;
        }
      }
    }
    &__divider {
      margin: 13px 0 3px 0;
      width: 230px;
      height: 1px;
    }
    &__coast {
      margin: 0px 13px 9px 13px;
      font-size: 25px;
      line-height: 32px;
    }
    &__buttons {
      max-width: 346px;
      margin-top: 14px;
      &_btn {
        width: 112px;
        height: 19px;
        box-shadow: 0px 3.80225px 3.80225px rgba(0, 0, 0, 0.25);
        border-radius: 35.1708px;
        &-credit, &-compl {
          font-size: 6.28012px;
          line-height: 8px;
        }
      }
    }
  }
}
@media (min-width: 606px) and (max-width: 768px) {
  .catalogcar-main {
    max-width: 180px;
    margin: 0 0 32px 0;
  }
  .catalogcar {
    background-position: 0 0;
    &__brand {
      font-size: 34.1891px;
      line-height: 41px;
    }
    &__model {
      margin-top: -10px;
      font-size: 20.8882px;
      line-height: 25px;
    }
    &__image {
      width: 179px;
      height: auto;
    }
    &__offer {
      &_day {
        margin: 6px;
        width: 70px;
        height: 27px;
        border: 1.22746px solid #FFA724;
        border-radius: 19.6394px;
        &-off {
          padding: 5px 2px 2px 5px;
          font-size: 5.4356px;
          line-height: 7px;
        }
        &-disc {
          padding: 2px 2px 5px 5px;
          font-size: 5.96649px;
          line-height: 7px;
        }
      }
      &_payment {
        margin-right: 11px;
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
    &__divider {
      margin: 13px 0 3px 0;
      width: 177px;
      height: 1px;
    }
    &__coast {
      margin: 0px 7px 4px 7px;
      font-size: 20.4006px;
      line-height: 25px;
    }
    &__buttons {
      max-width: 180px;
      margin-top: 8px;
      &_btn {
        width: 87px;
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
}
@media (max-width: 605px) { 
  .catalogcar-main {
    max-width: 336px;
  }
}
</style>