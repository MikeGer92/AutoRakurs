<template>
  <div class="credit-params">
    <div class="credit-params__left">
      <div class="credit-params__left_num">{{ blockNum }}</div>
      <div class="credit-params__left_border-y"></div>
    </div>
    <div class="credit-params__right">
      <div class="credit-params__right_title">УСТАНОВИТЕ СВОИ КРЕДИТНЫЕ УСЛОВИЯ</div>
      <div class="credit-params__left_border-x"></div>
      <div class="credit-params__right_main">
        <div class="credit-params__right_main-left">
          <div class="credit-params__right_main-left--title">СРОК КРЕДИТА</div>
          <div class="credit-params__right_main-left--display">
            <input 
              type="number"
              class="credit-params__right_main-left--display_num" 
              v-model="years"
              @change="checkYears"
            >
            <div class="credit-params__right_main-left--display_err" v-if="!yearsValid">ВВЕДИТЕ ЧИСЛО!!!</div>
            <div class="credit-params__right_main-left--display_num">{{ word }}</div>
          </div>
          <div class="credit-params__right_main-left--time">
            <input 
              type="range" 
              min="0" 
              max="7" 
              step="0.5"
              v-model="years"
              @change="checkYears"
            >
            <div class="credit-params__right_main-left--scale">
              <div 
                class="credit-params__right_main-left--scale_item"
                :class="{'credit-params__right_main-left--scale_item-active': years >= 0.5}"
              >
              6 МЕСЯЦЕВ
            </div>
              <div 
                class="credit-params__right_main-left--scale_item"
                :class="{'credit-params__right_main-left--scale_item-active': years >= 2}"
              >
                2 ГОДА
              </div>
              <div 
                class="credit-params__right_main-left--scale_item"
                :class="{'credit-params__right_main-left--scale_item-active': years >= 5}"
              >
                5 ЛЕТ
              </div>
              <div 
                class="credit-params__right_main-left--scale_item"
                :class="{'credit-params__right_main-left--scale_item-active': years >= 7}"
              >
                7 ЛЕТ
              </div>
          </div>
          </div>
        </div>
        <div class="credit-params__right_main-right">
          <div class="credit-params__right_main-right--title">ПЕРВОНЧАЛЬНЫЙ ВЗНОС</div>
          <div class="credit-params__right_main-right--display">
            <input 
              type="number"
              class="credit-params__right_main-left--display_num" 
              v-model="summ"
            >
            <div class="credit-params__right_main-left--display_err" v-if="!summValid">ВВЕДИТЕ ЧИСЛО!!!</div>
            <div class="credit-params__right_main-left--display_num">₽</div>
          </div>
          <div class="credit-params__right_main-right--payment">
            <input 
              class="credit-params__right_main-left--time"
              type="range" 
              min="0" 
              max="2000000" 
              step="50000"
              v-model="summ"
            >
          </div>
        </div>
      </div>
      <Carousel />
    </div>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
export default {
  name: 'CreditParams',
  components: { Carousel},
  props: {
    blockNum: {
      type: String,
      default:() => ''
    }
  },
  data() {
    return {
      years: 7,
      summ: '200000',
      showLoader: false,
      word: 'ЛЕТ',
    }
  },
    computed: {
      yearsValid() {
        return /^[\d/.]+$/.test(this.years);
      },
      summValid() {
        return /^[\d/.]+$/.test(this.summ);
    }
  },
  methods: {
    checkYears() {
      this.word = (this.years == 1) ?  'ГОД' : (this.years == 0 || this.years >= 5) ? 'ЛЕТ' : 'ГОДА'
    },
    getIndex(index) {
      console.log(index)
    },
    clickPrev(){
      alert('Это я!!!')
    },
  }
}
</script>

<style lang="scss">
.credit-params {
  display: flex;
  &__left {
    margin: 40px 0 0 0;
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
    &_border-y {
      width: 7px;
      height: 408px;
      background: linear-gradient(to top,  #FFF 0%, #FFA724  80%);
    }
    &_border-x {
      display: none;
      width: 408px;
      height: 2px;
      background: linear-gradient(to left,  #FFF 0%, #FFA724  80%);
      margin-left: -12px;
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
            border: none;
            background: #F0F0F0;
            &:hover {
              outline:none;
            }
            &:focus {
              outline:none;
            }
            &:active {
              outline:none;
            }
          }
          &_err {
            display: flex;
            font-size: 25px;
            color: red;
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
          margin: 44px 0 0 0;
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
@media (min-width: 1281px) and (max-width: 1920px) {
  .credit-params {
    margin: 0 0 0 22px;
    &__left {
      margin: 33px 0 0 10px;
            &_num {
        width: 80px;
        height: 80px;
        font-size: 61.844px;
        line-height: 75px;
        box-shadow: 0px 2.3906px 16.1366px rgba(0, 0, 0, 0.25);
      }
      &_border-y {
        width: 3px;
        height: 310px;
      }
    }
    &__right {
      margin-top: 56px;
      &_title {
        margin-left: 76px;
        font-size: 34.9938px;
        line-height: 42px;
      }
      &_main {
        margin: 42px 0 0 76px;
        &-left, &-right {
          &--title {
            font-size: 23.3567px;
            line-height: 28px;
          }
          &--display {
            margin: 12px 0 34px 0;
            width: 575px;
            height: 53px;
            border-radius: 88.2321px;
            &_num, &_text {
              font-size: 23.3567px;
              line-height: 28px;
            }
          }
          &--time, &--payment {
            width: 563px;
            input[type='range'] {
              width: 563px;
              height: 5.56px;
            }
          }
          &--scale {
            margin: 34px 0 0 0;
            width: 575px;
            &_item {
              font-size: 23.3567px;
              line-height: 28px;
            }
          }
        }
      }  
    }
  }
}
@media (min-width: 769px) and (max-width: 1280px) {
  .credit-params {
    margin: 0 0 0 15px;
    &__left {
      margin: 25px 0 0 6px;
      &_num {
        width: 53px;
        height: 53px;
        font-size: 41.2294px;
        line-height: 50px;
        box-shadow: 0px 2.3906px 16.1366px rgba(0, 0, 0, 0.25);
      }
      &_border-y {
        width: 3px;
        height: 207px;
      }
    }
    &__right {
      max-width: 905px;
      margin-top: 37px;
      &_title {
        margin-left: 50px;
        font-size: 23.3292px;
        line-height: 28px;
      }
      &_main {
        margin: 27px 0 0 50px;
        &-left, &-right {
          &--title {
            font-size: 15.5712px;
            line-height: 19px;
          }
          &--display {
            margin: 8px 0 23px 0;
            width: 384px;
            height: 36px;
            border-radius: 58.8214px;
            &_num, &_text {
              font-size: 15.5712px;
              line-height: 19px;
            }
          }
          &--time, &--payment {
            width: 384px;
            input[type='range'] {
              width: 384px;
              height: 5.56px;
            }
          }
          &--scale {
            margin: 23px 0 0 0;
            width: 384px;
            &_item {
              font-size: 15.5712px;
              line-height: 19px;
            }
          }
        }
      }  
    }
  }
}
@media (min-width: 606px) and (max-width: 768px) {
  .credit-params {
    margin: 0 0 0 9px;
    &__left {
      margin: 10px 0 0 4px;
      &_num {
        width: 32px;
        height: 32px;
        font-size: 24.7375px;
        line-height: 30px;
        box-shadow: 0px 0.956236px 6.45459px rgba(0, 0, 0, 0.25);
      }
      &_border-y {
        height: 124px;
        width: 2.23px;
      }
    }
    &__right {
      max-width: 610px;
      margin-top: 17px;
      &_title {
        margin-left: 30px;
        font-size: 13.9975px;
        line-height: 17px;
      }
      &_main {
        margin: 17px 0 0 30px;
        &-left, &-right {
          &--title {
            font-size: 9.34265px;
            line-height: 11px;
          }
          &--display {
            margin: 5px 0 14px 0;
            width: 230px;
            height: 21px;
            border-radius: 35.2927px;
            &_num, &_text {
              margin: 0px 10px 0 12px;
              font-size: 9.34265px;
              line-height: 11px;
            }
          }
          &--time, &--payment {
            width: 230px;
            input[type='range'] {
              width: 230px;
              height: 4px;
            }
          }
          &--scale {
            margin: 14px 0 0 0;
            width: 230px;
            &_item {
              font-size: 9.34265px;
              line-height: 11px
            }
          }
        }
      }  
    }
  }
}
@media ( max-width: 605px) {
  .credit-params {
    &__left {
      margin: 8px 0 0 17px;
      &_num {
        width: 38px;
        height: 38px;
        border-radius: 50%;
        font-size: 29.5654px;
        line-height: 36px;
      }
      &_border-y {
        display: none;
      }
      &_border-x {
        display: flex;
        width: 290px;
        margin: 4px 0 0 -2px;
      }
    }
    &__right {
      margin-top: 18px;
      &_title {
        margin-left: 6px;
        font-size: 11.9048px;
        line-height: 14px;
      }
      &_main {
        margin: 25px 0 0 10px;
        flex-wrap: wrap;
        justify-content: center;
        &-left, &-right {
          width: 100%;
          &--title {
            font-size: 12.3203px;
            line-height: 15px;
          }
          &--display {
            width: 303px;
            height: 28px;
            margin: 6px 0 18px;
            &_num, &_text {
              font-size: 12.3203px;
              line-height: 15px;
              margin: 0 12px;
            }
            &_err {
              display: flex;
              font-size: 10px;
              color: red;
            }
          }
          &--time, &--payment {
            display: flex;
            flex-direction: column;
            justify-content: center;
            input[type='range'] {
              width: 297px;
              -webkit-appearance: none !important;
              background:linear-gradient(to right, #12609E, #348AD2, #FFF);
              height:4px;
              &::-webkit-slider-thumb {
                -webkit-appearance: none !important;
                width: 9px;
                height: 9px;
                border-radius: 100%;
                background: #12609E;
                border: 3px solid #F0F0F0;
                cursor: pointer;
                &:active {
                  width: 14px;
                  height: 14px;
                }
              }
            }
          }
          &--scale {
            margin: 18px 0 34px 0;
            width: 297px;
            &_item {
              font-size: 12.3203px;
              line-height: 15px;
            }
          }
        }
      }
    }
  } 

}
</style>