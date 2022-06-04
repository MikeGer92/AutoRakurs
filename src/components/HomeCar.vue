<template>
  <div class="car">
    <div class="car__brand"></div>
    <div class="car__model"></div>
    <div class="car__img"></div>
    <div class="car__offer">
      <div class="car__offer_discount"></div>
      <div class="car__offer_payment">
        <div class="car__offer_payment-price"></div>
        <div class="car__offer_payment-period"></div>
      </div>
    </div>
    <div class="car__coast"></div>
    <div class="car__buttons">
      <div class="car__buttons_credit"></div>
      <div class="car__buttons_credit-comple"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeCar',
  // props: {
  //   car: Object,
  //   default: () => {}
  // },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss">
.car {
  width: 596px;
  height: 914px;
  display: flex;
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
  // background-clip: content-box, border-box;
}
  
</style>