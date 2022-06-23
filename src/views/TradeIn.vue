<template>
  <div class="tradein">
    <Loader v-if="showLoader" />
    <div class="tradein__main">
      <div class="tradein__main_wrapper">
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
                <div class="tradein__main_credit-text--small_str">СТАВКА<br>ОТ<span>8%*</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tradein__divider">
        <div class="tradein__divider_line"></div>
        <div class="tradein__divider_text">TRADE-IN</div>
        <div class="tradein__divider_line"></div>
    </div>

    <OldCarParams :blockNum="'1'" />

    <ChoiseParams :blockNum="'2'" />

    <CreditParams :blockNum="'3'" />

    <PersonParams :blockNum="'4'" />

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
  display: flex;
  flex-direction: column;
  text-align: center;
  &__main {
    display: flex;
    width: 100%;
    max-width: 2065px;
    height: 464px;
    background: url('../assets/images/tradein-banner.png') no-repeat;
    &_wrapper {
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
  }
  &__divider {
    margin-top: 27px;
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
}
@media ( max-width: 600px) {
  .select-main {
    width: 238px;
    height: 34px;
    margin-bottom: 34px;
  }
  .tradein {
    &__main {
      height: 322px;
      background: url('../assets/images/tradein-main-small2.png') no-repeat;
      background-size: cover;
      &_wrapper {
        margin: 11px 0 0 11px;
        width: 100%;
      }
      &_title {
        font-size: 42.7669px;
        line-height: 52px;
      }
      &_subtitle {
        font-size: 17.3867px;
        line-height: 21px;
        margin-bottom: 6px;
      }
      &_info {
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
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
            &_circ {
              margin-right: 6px;
              display: flex;
              justify-content: center;
              align-items: center;
              width: 78px;
              height: 78px;
              background: #12609E;
              box-shadow: 0px 5.47368px 19.1579px rgba(0, 0, 0, 0.25);
              border-radius: 50%;
              text-align: center;
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
  }
}
</style>