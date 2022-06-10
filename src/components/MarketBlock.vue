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

</style>