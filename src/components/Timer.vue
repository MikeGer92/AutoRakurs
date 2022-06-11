<template>
  <div class="count">
  <div class="count__item">
    <div class="count__item_num">-1</div>
    <div class="count__item_descr">ДНЕЙ</div>
  </div>
  <div class="count__item">
    <div class="count__item_num">-8</div>
    <div class="count__item_descr">ЧАСОВ</div>
  </div>
  <div class="count__item">
    <div class="count__item_num">-22</div>
    <div class="count__item_descr">МИНУТ</div>
  </div>
  <div class="count__item">
    <div class="count__item_num">-32</div>
    <div class="count__item_descr">СЕКУНД</div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Timer'

}
</script>

<style lang="scss">
.count {
  display: flex;
  width: 375px;
  height: 121px;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(90.43deg, #12609E 17.95%, #10205E 83.93%);
  box-shadow: 0px 6.20628px 6.20628px rgba(0, 0, 0, 0.25);
  border-radius: 37.1592px;
  &__item {
    padding: 0 17px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1.28135px solid #FFFFFF;
    &:last-child {
      border-right: none;
    }
    &_num {
      font-style: normal;
      font-weight: 900;
      font-size: 43.0495px;
      line-height: 52px;
      color: #FFFFFF;
    }
    &_descr {
      font-style: normal;
      font-weight: 700;
      font-size: 14.4963px;
      line-height: 18px;
      color: #FFFFFF;
    }
  }
}

</style>