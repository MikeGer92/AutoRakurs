<template>
  <div class="catalog-count">
  <div class="catalog-count__item">
    <div class="catalog-count__item_number">
      <div class="catalog-count__item_number-num">0</div>
      <div class="catalog-count__item_number-num">4</div>
      <div class="catalog-count__item_number-div"></div>
    </div>
    <div class="catalog-count__item_descr">ДНИ</div>
  </div>
  <div class="catalog-count__item">
    <div class="catalog-count__item_number">
      <div class="catalog-count__item_number-num">0</div>
      <div class="catalog-count__item_number-num">4</div>
      <div class="catalog-count__item_number-div"></div>
    </div>
    <div class="catalog-count__item_descr">ЧАСЫ</div>
  </div>
  <div class="catalog-count__item">
    <div class="catalog-count__item_number">
      <div class="catalog-count__item_number-num">0</div>
      <div class="catalog-count__item_number-num">4</div>
      <div class="catalog-count__item_number-div"></div>
    </div>
    <div class="catalog-count__item_descr">МИНУТЫ</div>
  </div>
  <div class="catalog-count__item">
    <div class="catalog-count__item_number">
      <div class="catalog-count__item_number-num">0</div>
      <div class="catalog-count__item_number-num">4</div>
    </div>
    <div class="catalog-count__item_descr">СЕКУНДЫ</div>
  </div>
</div>
</template>

<script>
export default {
  name: 'CatalogTimer'

}
</script>

<style lang="scss">
.catalog-count {
  display: flex;
  width: 476px;
  height: 69px;
  align-items: center;
  &__item {
    padding: 0 18px 0 0;
    display: flex;
    width: 114px;
    flex-direction: column;
    align-items: center;
    &_number {
      display: flex;
      justify-content: space-around;
      margin: 6px 0;
      // border-right: 2px solid #FFFFFF;
      &-num {
        width: 43px;
        height: 57px;
        margin-right: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 33.5969px;
        line-height: 41px;
        color: #10205E;
        background: linear-gradient(138.82deg, #FFFFFF 13.85%, #C7E2F7 90.23%);
        box-shadow: 0px 4.84354px 4.84354px rgba(0, 0, 0, 0.25);
        border-radius: 9px;
      }
      &-div {
        margin-left: 10px;
        width: 2px;
        height: 57px;
        background: #FFFFFF;
      }
    }
    &_descr {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 900;
      font-size: 13.9337px;
      line-height: 17px;
      color: #FFFFFF;
    }
  }
}

</style>