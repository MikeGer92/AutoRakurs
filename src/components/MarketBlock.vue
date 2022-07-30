<template>
  <div class="market">
  <div class="market__item">
    <p class="market__item_text">ВРЕМЯ ВЫБИРАТЬ ПОДАРКИ!</p>
    <p class="market__item_text">ВРЕМЯ ВЫБИРАТЬ ПОДАРКИ!</p>
    <p class="market__item_text">ВРЕМЯ ВЫБИРАТЬ ПОДАРКИ!</p>
  </div>
  <div class="market__item">
    <p class="market__item_text">ВРЕМЯ ВЫБИРАТЬ ПОДАРКИ!</p>
    <p class="market__item_text">ВРЕМЯ ВЫБИРАТЬ ПОДАРКИ!</p>
    <p class="market__item_text">ВРЕМЯ ВЫБИРАТЬ ПОДАРКИ!</p>
  </div>
  <div class="market__item">
    <p class="market__item_text">ВРЕМЯ ВЫБИРАТЬ ПОДАРКИ!</p>
    <p class="market__item_text">ВРЕМЯ ВЫБИРАТЬ ПОДАРКИ!</p>
    <p class="market__item_text">ВРЕМЯ ВЫБИРАТЬ ПОДАРКИ!</p>
  </div>
  <div class="market__item">
    <p class="market__item_text">ВРЕМЯ ВЫБИРАТЬ ПОДАРКИ!</p>
    <p class="market__item_text">ВРЕМЯ ВЫБИРАТЬ ПОДАРКИ!</p>
    <p class="market__item_text">ВРЕМЯ ВЫБИРАТЬ ПОДАРКИ!</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'MarketBlock'
}
</script>

<style lang="scss">
.market {
  margin: 149px 0 230px 0;
  display: flex;
  flex-direction: column;
  align-self: center;
  &__item {
    display: flex;
    margin: 10px 0;
    &_text {
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
@media (min-width: 1280px) and (max-width: 1921px) {
  .market {
    margin: 10px 0 84px 0;
    &__item {
      margin: 9px 0;
      &_text {
        font-size: 30.2143px;
        line-height: 36px;
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 1281px) {
  .market {
    margin: 10px 0 84px 0;
    &__item {
      margin: 0px 0;
      &_text {
        font-size: 21px;
        line-height: 27px;
        &:nth-child(2) {
        margin: 0 15px;
      }
      }
    }
  }
}
</style>