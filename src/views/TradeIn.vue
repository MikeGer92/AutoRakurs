<template>
  <div class="tradein">
    <Loader v-if="showLoader" />
    <div class="tradein__main">
      <div class="tradein__main_wrapper">
        <div class="tradein__main_textwrapp">
          <div class="tradein__main_title">TRADE-IN</div>
          <div class="tradein__main_subtitle">В ВАШУ ПОЛЬЗУ</div>
            <div class="tradein__main_info">
            <div class="tradein__main_benefit">
              <div class="tradein__main_benefit-icon"><img src="../assets/images/tradein-benef.png"></div>
              <div class="tradein__main_benefit-text--big">
                <div class="tradein__main_benefit-text--big_str">ВЫГОДА&nbsp;<span>200 000₽*&nbsp;</span>НА ПОКУПКУ</div>
                <div class="tradein__main_benefit-text--big_str">НОВОГО АВТОМОБИЛЯ</div>
              </div>
              <div class="tradein__main_benefit-text--small">
                <div class="tradein__main_benefit-text--small_str">ВЫГОДА&nbsp;<span>200 000₽*&nbsp;</span></div>
                <div class="tradein__main_benefit-text--small_str">НА ПОКУПКУ НОВОГО<br>АВТОМОБИЛЯ</div>
              </div>
            </div>
            <div class="tradein__main_credit">
              <div class="tradein__main_credit-icon"><img src="../assets/images/tradein-rent.png"></div>
              <div class="tradein__main_credit-text--big">
                <div class="tradein__main_credit-text--big_str">СТАВКА ОТ<span>&nbsp;8%*</span></div>
              </div>
              <div class="tradein__main_credit-text--small">
                <div class="tradein__main_credit-text--small_circ">
                  <div class="tradein__main_credit-text--small_circ-str">СТАВКА<br>ОТ<span>8%*</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tradein__main_image"></div>
      </div>
    </div>
    <div class="tradein__divider">
        <div class="tradein__divider_line"></div>
        <div class="tradein__divider_text">TRADE-IN</div>
        <div class="tradein__divider_line"></div>
    </div>
    <div class="tradein__blocks">
      <OldCarParams :blockNum="'1'" />

      <ChoiseParams :blockNum="'2'" />

      <CreditParams :blockNum="'3'" />

      <PersonParams :blockNum="'4'" />

    </div>

    <WhyUs />
    
  </div>
</template>


<script>
import Loader from '@/components/app/Loader.vue'
import OldCarParams from '@/components/OldCarParams.vue'
import ChoiseParams from '@/components/credit/ChoiseParams.vue'
import CreditParams from '@/components/credit/CreditParams.vue'
import PersonParams from '@/components/credit/PersonParams.vue'
import WhyUs from '@/components/WhyUs.vue'
export default {
  name: 'Tradein',
  components: { Loader, OldCarParams, ChoiseParams, CreditParams, PersonParams, WhyUs },
  data() {
    return {
      showLoader: false
    }
  }

}
</script>
<style lang="scss">
.select-main {
  width: 638px;
  height: 75px;
  margin-bottom: 71px;
}
.tradein {
  width: 100%;
  max-width: 2065px;
  display: flex;
  flex-direction: column;
  text-align: center;
  &__main {
    display: flex;
    width: 100%;
    height: 464px;
    background: url('../assets/images/trade-main-max.png') no-repeat;
    background-size: cover;
    &_wrapper {
      display: flex;
    }
    &_textwrapp {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin: 0 0 0 56px;
    }
    &_title {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 900;
      font-size: 126.844px;
      line-height: 155px;
      color: #FFA724;
    }
    &_subtitle {
      margin-bottom: 55px;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 700;
      font-size: 42.0583px;
      line-height: 51px;
      color: #FFFFFF;
    }
    &_info {
      display: flex;
      flex-direction: column;
    }
    &_benefit, &_credit {
      margin-bottom: 31px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      &-icon {
        display: flex;
        width: 50px;
        height: 50px;
      }
      &-text {
        &--big, &--small {
          margin-left: 12px;
          display: flex;
          flex-direction: column;
          max-width: 551px;
          text-align: left;
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 700;
          font-size: 28.4511px;
          line-height: 35px;
          color: #FFFFFF;
          &_str {
            display: flex;
          }
          & span {
            color: #FFA724; 
          }
        }
        &--small {
          display: none;
        }
      }
    }
    &_credit {
      &-text {
        flex-direction: row;
      }
    }
    &_image {
      display: flex;
      width: 1109px;
      height: auto;
      margin: 70px 0 0 -20px;
      background: url('../assets/images/tradein_car.png') center 0px/ contain no-repeat;
    }
  }
  &__divider {
    margin: 27px 0 0 0;
    width: 100%;
    max-width: 1891px;
    text-align: center;
    &_line {
      width: 100%;
      height: 3px;
      background: linear-gradient(to right, #FFF 0%, #10205E 20%, #10205E 80%,#FFF 100%);
    }
    &_text {
      margin: 19px 0 21px 0;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 44.7037px;
      line-height: 54px;
      color: #10205E;
    }
  }
  &__blocks {
    display: flex;
    flex-direction: column;
  }
}
@media (min-width: 1280px) and (max-width: 1921px) {
  .select-main {
    width: 498px;
    height: 58px;
    margin-bottom: 55px;
  }
  .tradein {
    &__main {
      max-width: 1920px;
      height: 342px;
      background: url('../assets/images/tradein-main.png') center 0px/ cover no-repeat;
      &_wrapper {
        width: 1534px;
        margin: 0 auto;
      }
      &_textwrapp {
        margin: 0 0 0 22px;
      }
      &_title {
        font-size: 93.4283px;
        line-height: 114px;
      }
      &_subtitle {
        font-size: 30.9785px;
        line-height: 38px;
        margin-bottom: 40px;
      }
      &_benefit, &_credit {
        margin-bottom: 22px;
        &-icon {
          width: 36px;
          height: 36px;
        }
        &-text {
          &--big {
            margin-left: 10px;
            font-size: 20.956px;
            line-height: 26px;
          }
        }
      }
      &_image {
        width: 817px;
        margin: 0px 0 0 -20px;
      }
    }
    &__divider {
      margin: 43px auto;
    }
    &__blocks {
      max-width: 1520px;
      margin: 0 auto;
    }
  }
}
@media (min-width: 769px) and (max-width: 1280px) {
  .select-main {
    width: 333px;
    height: 40px;
    margin-bottom: 37px;
    &__field {
      width: 333px;
      height: 40px;
      &_text {
        font-size: 17.0569px;
        line-height: 21px;
        margin: 0 14px;
      }
      &_icon {
        width: 29px;
        height: 15px;
      }
    }
    &__options {
      top: 42px;
      &_option {
        margin-left: 14px;
        font-size: 17.0569px;
        line-height: 21px;

      }
    }
  }
  .tradein {
    &__main {
      max-width: 1280px;
      height: 228px;
      background: url('../assets/images/tradein-main.png') center 0px/ cover no-repeat;
      &_wrapper {
        width: 1023px;
        margin: 0 auto;
      }
      &_textwrapp {
        margin: 0 0 0 15px;
      }
      &_title {
        font-size: 62.2855px;
        line-height: 76px;
      }
      &_subtitle {
        font-size: 20.6524px;
        line-height: 25px;
        margin-bottom: 27px;
      }
      &_benefit, &_credit {
        margin-bottom: 15px;
        &-icon {
          width: 24px;
          height: 24px;
        }
        &-text {
          &--big {
            margin-left: 10px;
            font-size: 13.9707px;
            line-height: 17px
          }
        }
      }
      &_image {
        width: 544px;
        margin: 0px 0 0 -20px;
      }
    }
    &__divider {
      margin: 29px auto;
      &_line {
        height: 2px;
      }
      &_text {
        font-size: 29.8px;
        line-height: 36px;
        margin: 13px 0;
      }
    }
    &__blocks {
      max-width: 1013px;
      margin: 0 auto;
    }
  }
}
@media (min-width: 606px) and (max-width: 768px) {
  .select-main {
    width: 200px;
    height: 24px;
    margin-bottom: 22px;
    &__field {
      width: 200px;
      height: 24px;
      &_text {
        font-size: 10.2341px;
        line-height: 12px;
        margin: 0 10px;
      }
      &_icon {
        width: 17px;
        height: 9px;
      }
    }
    &__options {
      top: 26px;
      &_option {
        margin-left: 10px;
        font-size: 10.2341px;
        line-height: 12px;

      }
    }
  }
  .tradein {
    &__main {
      max-width: 768px;
      height: 137px;
      background: url('../assets/images/tradein-main.png') center 0px/ cover no-repeat;
      &_wrapper {
        width: 620px;
        margin: 0 auto;
      }
      &_textwrapp {
        margin: 0 0 0 9px;
      }
      &_title {
        font-size: 37.3711px;
        line-height: 46px;
      }
      &_subtitle {
        font-size: 12.3913px;
        line-height: 15px;
        margin-bottom: 17px;
      }
      &_benefit, &_credit {
        margin-bottom: 12px;
        &-icon {
          width: 16px;
          height: 16px;
        }
        &-text {
          &--big {
            margin-left: 6px;
            font-size: 8.38236px;
            line-height: 10px;
          }
        }
      }
      &_image {
        width: 327px;
        margin: 0px 0 0 0px;
      }
    }
    &__divider {
      margin: 17px auto;
      &_line {
        height: 1.5px;
      }
      &_text {
        font-size: 17.8799px;
        line-height: 22px;
        margin: 8px 0;
      }
    }
    &__blocks {
      max-width: 610px;
      margin: 0 auto;
    }
  }
}
@media ( max-width: 605px) {
  .select-main {
    width: 248px;
    height: 34px;
    margin-bottom: 34px;
  }
  .tradein {
    &__main {
      height: 322px;
      background: url('../assets/images/tradein-small-full.png') center 0px/ contain no-repeat;
      // background-size: cover;
      &_wrapper {
        margin: 5px 0 0 5px;
        width: 100%;
      }
      &_textwrapp {
        margin: 10px 0 0 0px;
      }
      &_title {
        font-size: 42.7669px;
        line-height: 52px;
      }
      &_subtitle {
        font-size: 17.3867px;
        line-height: 21px;
        margin-bottom: 15px;
      }
      &_info {
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
      }
      &_image {
        display: none;
        width: 327px;
        margin: 0px 0 0 0px;
      }
      &_benefit, &_credit {
        margin-bottom: 0;
        &-icon {
          display: none;
        }
        &-text {
          &--big {
            display: none;
          }
          &--small {
            display: flex;
            max-width: 133px;
            margin-left: 0;
            font-weight: 900;
            font-size: 10.662px;
            line-height: 13px;
            & span {
              color: #FFA724;
              // white-space: normal;
            }
          //   // &_circ {
          //   //   display: none;
          //   //   margin-right: 6px;
          //   //   display: flex;
          //   //   justify-content: center;
          //   //   align-items: center;
          //   //   width: 78px;
          //   //   height: 78px;
          //   //   background: #12609E;
          //   //   box-shadow: 0px 5.47368px 19.1579px rgba(0, 0, 0, 0.25);
          //   //   border-radius: 50%;
          //   //   text-align: center;
          //   // }
            &_circ {
              &-str {
                display: none;
              } 
            }
          }
        }
      }
    }
    &__divider {
      margin-top: 8px;
      &_line {
        height: 1px;
      }
      &_text {
        margin: 4px 0 4px 0;
        font-size: 15px;
        line-height: 18px;
      }
    }
    &__blocks {
      max-width: 390px;
      margin: 0 auto;
    }
  }
}
</style>