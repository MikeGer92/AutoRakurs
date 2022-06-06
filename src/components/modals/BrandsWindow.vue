<template>
  <div class="brands-window">
    <div class="brands-window__main">
      <div class="brands-window__button">ВСЕ МАШИНЫ</div>
      <div class="brands-window__main_left">
        <div class="brands-window__main_left-carstypes">
            <div class="brands-window__main_left-carstypes--item" v-for="(type, idx) in carsTypes" :key="idx">{{ type }}</div>
        </div>
        <div class="brands-window__main_left-divider"></div>
      </div>
      <div class="brands-window__main_right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BrandsWindow',
  data() {
    return {
      carsTypes: [
        'СЕДАНЫ', 'ХЭТЧБЕКИ', 'ПИКАПЫ', 'ВНЕДОРОЖНИКИ', 'УНИВЕРСАЛЫ', 'МИНИВЕНЫ', 'МИКРОАВТОБУСЫ',
      ]

    }
  }
}
</script>

<style lang="scss">
.brands-window {
  width: 100%;
  max-width: 2065px;
  height: 482px;
  display: flex;
  z-index: 2;
  &__main {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 482px;
    background: #FFF;
    &_left {
      width: 350px;
      display: flex;
      &-carstypes {
        display: flex;
        flex-direction: column;
        margin: 31px 0 49px 91px;
      }
      &-divider {
        width: 3px;
        height: 390px;
        background: linear-gradient(to top,  #FFF 0%, #10205E  20%, #FFF 100%);
      }
    }
  }

}

</style>