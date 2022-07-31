<template>
  <div class="credit-main">
    <Loader v-if="showLoader" />
    <div class="credit">
      <div class="credit__header">
        <div class="credit__header_title">АВТОКРЕДИТ</div>
        <div class="credit__header_subtitle">ДОСТУПНЫЙ КАЖДОМУ</div>
        <div class="credit__header_options">
          <div class="credit__header_options-bank">
            <div class="credit__header_options-bank--image"><img src="../assets/images/bank.png"></div>
            <div class="credit__header_options-bank--text">Более 40 банков-партнеров</div>
          </div>
          <div class="credit__header_options-perc">
            <div class="credit__header_options-perc--image"><img src="../assets/images/perc.png"></div>
            <div class="credit__header_options-perc--text">Ставка 8%*</div>
          </div>
          <div class="credit__header_options-gift">
            <div class="credit__header_options-gift--image"><img src="../assets/images/gift.png"></div>
            <div class="credit__header_options-gift--text">КАСКО* или 3 платежа<br>по кредиту* в ПОДАРОК</div>
          </div>
        </div>
      </div>
      <div class="credit__main">
        <div class="credit__divider">
          <div class="credit__divider_line"></div>
          <div class="credit__divider_text-big">ОФОРМИТЕ ВЫГОДНЫЙ АВТОКРЕДИТ</div>
          <div class="credit__divider_text-small">АВТОКРЕДИТ</div>
          <div class="credit__divider_line"></div>
        </div>
        <div class="credit__options">

          <ChoiseParams :blockNum="'1'" />

          <CreditParams :blockNum="'2'" />

          <PersonParams :blockNum="'3'" />
          
          <WhyUs />

        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Loader from '@/components/app/Loader.vue'
import ChoiseParams from '@/components/credit/ChoiseParams.vue'
import CreditParams from '@/components/credit/CreditParams.vue'
import PersonParams from '@/components/credit/PersonParams.vue'
import WhyUs from '@/components/WhyUs.vue'
export default {
  name: 'Credit',
  components: { Loader, ChoiseParams, CreditParams, PersonParams, WhyUs},
  data() {
    return {
      showLoader: false
    }
  },
  methods: {

  }

}
</script>
<style lang="scss">
.credit {
  width: 100%;
  max-width: 2065px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__header {
    width: 100%;
    height: 717px;
    display: flex;
    flex-direction: column;
    background: url('../assets/images/credit-banner.png') center no-repeat;
    background-size: cover;
    &_title {
      margin: 35px 0 0 76px;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 900;
      font-size: 132.434px;
      line-height: 161px;
      color: #FFFFFF;
    }
    &_subtitle {
      margin:  0 0 0 76px;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 700;
      font-size: 58.4148px;
      line-height: 71px;
      color: #FFFFFF;
    }
    &_options {
      display: flex;
      flex-direction: column;
      margin: 72px 0 72px 157px;
      &-bank, &-perc, &-gift {
        margin-bottom: 44px;
        display: flex;
        align-items: center;
        &:last-child {
          margin-bottom: 0;
        }
        &--image {
          display: flex;
          width: 74px;
        }
        &--text {
          margin-left: 47px;
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 400;
          font-size: 29.9748px;
          line-height: 37px;
          color: #FFFFFF;
        }
      }
    }
  }
  &__divider {
    margin: 21px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 100%;
    max-width: 1892px;
    &_line {
      display: flex;
      width: 100%;
      height: 3px;
      background: linear-gradient(to right,  #FFF 0%, #10205E  20%, #FFF 100%);
    }
    &_text-big, &_text-small {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 44.7037px;
      line-height: 54px;
      color: #10205E;
    }
    &_text-small {
      display: none;
    }
  }
  &__options {
    display: flex;
    width: 100%;
    max-width: 2065px;
    flex-direction: column;
    &_choise {
      display: flex;
      &-left {
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        &--num {
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
        &--border {
          width: 3px;
          height: 408px;
          background: linear-gradient(to top,  #FFF 0%, #FFA724  80%);
        }
      }
      &-right {
        margin-top: 70px;
        display: flex;
        flex-direction: column;
        &--title {
          display: flex;
          margin-left: 100px;
          font-family: 'Inter';
          font-style: normal;
          font-weight: 700;
          font-size: 45.9755px;
          line-height: 56px;
          color: #000000;
        }
        &--main {
          display: flex;
          &_left {
            display: flex;
            flex-direction: column;
            margin: 88px 0 0 100px;
            &-title {
              display: flex;
              font-family: 'Inter';
              font-style: normal;
              font-weight: 700;
              font-size: 30.6865px;
              line-height: 37px;
              color: #000000;
            }
          }
          &_right {
            display: flex;
            flex-direction: column;
            margin: -115px 0 0 232px;
            &-image {
              display: flex;
              width: 862px;
              height: 484px;
              img {
                width: auto;
                height: 100%;
              }
              &-title {
                display: flex;
                font-family: 'Inter';
                font-style: normal;
                font-weight: 700;
                font-size: 30.6865px;
                line-height: 37px;
                color: #000000;
              }
            }
            &-compl {
              display: flex;
              justify-content: space-around;
              &--drive, &--power, &--eng {
                width: 94px;
                height: 94px;
              }
            }
          }
        }
      }
    }
  }
}
@media (min-width: 1280px) and (max-width: 1921px) {
  .credit {
    max-width: 1920px;
    &__header {
      height: 667px;
      &_title {
        margin: 33px 0 0 199px;
        font-size: 123.071px;
        line-height: 150px;
      }
      &_subtitle {
        font-size: 54.2848px;
        line-height: 66px;
        margin: 0 0 0 199px;
      }
      &_options {
        margin: 67px 0 0 199px;
        &-bank, &-perc, &-gift {
          margin-bottom: 30px;
          &--image {
            width: 69px;
          }
          &--text {
            font-size: 27.8556px;
            line-height: 34px;
          }
        }
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 1281px) {
  .credit {
    max-width: 1280px;
    &__header {
      height: 445px;
      &_title {
        margin: 23px 0 0 136px;
        font-size: 82.0167px;
        line-height: 100px;
      }
      &_subtitle {
        font-size: 36.1764px;
        line-height: 44px;
        margin: 0 0 0 136px;
      }
      &_options {
        margin: 44px 0 0 136px;
        &-bank, &-perc, &-gift {
          margin-bottom: 20px;
          &--image {
            width: 46px;
            & img {
              width: 100%;
              height: auto;
            }
          }
          &--text {
            margin-left: 29px;
            font-size: 18.5635px;
            line-height: 23px;
          }
        }
      }
    }
    &__divider {
      &_line {
        height: 2px;
      }
      &_text {
        &-big {
          margin: 13px 0;
          font-size: 29.7889px;
          line-height: 36px;
        }
      }
    }
  }
}
@media (max-width: 600px) {
  .credit {
    &__header {
      height: 337px;
      background: url('../assets/images/credit-main-small.png') no-repeat;
      background-size: cover;
      &_title {
        margin-left: 20px;
        font-size: 46.2161px;
        line-height: 56px;
      }
      &_subtitle {
        margin-left: 20px;
        font-size: 20.3853px;
        line-height: 25px;
      }
      &_options {
        margin: 75px 0 0 20px;
        &-bank, &-perc, &-gift {
          margin-bottom: 27px;
          &:last-child {
          margin-bottom: 29px;
        }
          &--image {
            width: 23px;
            height: 23px;
          }
          &--text {
            margin-left: 8px;
            font-weight: 700;
            font-size: 9.18676px;
            line-height: 11px;
          }
        }
      }
    }
    &__divider {
      margin-top: 8px;
      &_line {
        height: 1px;
      }
      &_text-big {
        display: none;
      }
      &_text-small {
        display: flex;
        font-size: 15px;
        line-height: 18px;
        justify-content: center;
      }
    }
    &__options {
      max-width: 390px;
    }
  }
}
</style>