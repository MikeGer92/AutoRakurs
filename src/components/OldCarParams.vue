<template>
  <div class="credit-params">
    <div class="credit-params__left">
      <div class="credit-params__left_num">{{ blockNum }}</div>
      <div class="credit-params__left_border"></div>
    </div>
    <div class="credit-params__right">
      <div class="credit-params__right_title">СТАРЫЙ АВТОМОБИЛЬ</div>
      <div class="credit-params__right_main">
        <div class="credit-params__right_main-left"></div>
        <div class="credit-params__right_main-left"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OldCarParams',
  components: {},
  props: {
    blockNum: {
      type: String,
      default:() => ''
    }
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
.credit-params {
  display: flex;
  &__left {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    &_num {
      width: 104px;
      height: 104px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 81.2517px;
      line-height: 98px;
      color: #FFFFFF;
      background: linear-gradient(145.18deg, #12609E 5.86%, #10205E 93.37%);
      box-shadow: 0px 3.14081px 21.2005px rgba(0, 0, 0, 0.25);
      border-radius: 52px;
    }
    &_border {
      width: 3px;
      height: 408px;
      background: linear-gradient(to top,  #FFF 0%, #FFA724  80%);
    }
  }
  &__right {
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    &_title {
      display: flex;
      margin-left: 100px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 45.9755px;
      line-height: 56px;
      color: #000000;
    }
    &_main {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: flex-start;
      margin: 88px 121px 0 100px;
      &-left, &-right {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        &--title {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 700;
          font-size: 30.6865px;
          line-height: 37px;
          color: #000000;
        }
        &--display {
          margin: 15px 0 46px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 755px;
          height: 70px;
          background: #F0F0F0;
          border-radius: 115.921px;
          &_num, &_text {
            margin: 0 36px 0 30px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 700;
            font-size: 30.6865px;
            line-height: 37px;
            color: #000000;

          }
        }
        &--time, &--payment {
          input[type='range'] {
            width: 740px;
            -webkit-appearance: none !important;
            background:linear-gradient(to right, #12609E, #348AD2, #FFF);
            height:7px;
            &::-webkit-slider-thumb {
              -webkit-appearance: none !important;
              width: 18px;
              height: 18px;
              border-radius: 100%;
              background: #12609E;
              border: 6px solid #F0F0F0;
              cursor: pointer;
              &:active {
                width: 24px;
                height: 24px;
              }
            }
          }
        }
        &--scale {
          margin-top: 44px;
          width: 740px;
          display: flex;
          justify-content: space-between;
          &_item {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 700;
            font-size: 30.6865px;
            line-height: 37px;
            color: #C5C5C5;
            &-active {
              color: #000000;
            }
          }
        }
      }
    }
  }
}

</style>