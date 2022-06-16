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
  }
}
</script>

<style lang="scss">
.catalogcar-main {
  width: 438px;
  height: 672px;
  display: flex;
  flex-direction: column;
  margin: 64px 0 64px 0;
}
.catalogcar {
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

</style>