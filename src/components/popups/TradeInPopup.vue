<template>
  <div class="tradein-popup">
    <div class="tradein-popup__main">
      <div class="tradein-popup__main_close">
        <div class="tradein-popup__main_close-item"></div>
        <div class="tradein-popup__main_close-item"></div>
      </div>
      <div class="tradein-popup__main_wrap">
          <div class="tradein-popup__main_info">
              <div class="tradein-popup__main_info-title">TRADE-IN</div> 

              <div class="tradein-popup__main_info-options">
              <div class="tradein-popup__main_info-options--cash">
                  <div class="tradein-popup__main_info-options--cash_icon"><img src="../../assets/images/popup_option_icon_big.png" />
                  </div>
                  <div class="tradein-popup__main_info-options--cash_text"><span>+10% к оценке авто</span> при приезде в день обращения </div>
              </div>
              </div>
              <div class="tradein-popup__main_info-form">
                  <FormPopupMob />
              </div> 
          </div>
      </div>
    </div>
    <div class="tradein-popup__small">
      <div class="tradein-popup__small_close">
        <div class="tradein-popup__small_close-item"></div>
        <div class="tradein-popup__small_close-item"></div>
      </div>
      <div class="tradein-popup__small_info">
        <div class="tradein-popup__small_info-text">
          <div class="tradein-popup__small_info-text--title">TRADE-IN</div>
          <div class="tradein-popup__small_info-text--subtitle">Получите скидку до 200 000 рублей!</div>
        </div>
        <div class="tradein-popup__small_info-options">
          <div class="tradein-popup__small_info-options--disc">
            <div class="tradein-popup__small_info-options--disc_icon"><img src="../../assets/images/popup_options_icon.png"/></div>
            <div class="tradein-popup__small_info-options--disc_text">
              <div class="tradein-popup__small_info-options--disc_text-bold">+10% к оценке авто</div>
              <div class="tradein-popup__small_info-options--disc_text-normal">при приезде в день<br>обращения</div>
            </div>
          </div>
        </div>
      </div>
      <FormPopupMob :style="{'margin': '15px 0 0 30px'}" />
    </div>
  </div>
</template>

<script>
import FormPopupMob from './FormPopupMob.vue';
    export default {
        name: 'TradeInPopup',
        components: { FormPopupMob }
        
    }
</script>

<style lang="scss">
.tradein-popup {
  width: 100%;
  display: flex;
  justify-content: space-around;
  &__main {
    display: flex;
    flex-direction: column;
    width: 743px;
    height: 306px;
    background: url('../../assets/images/pop-up\ Trade-in\ back.png') 0px 0px/cover no-repeat;
    &_wrap {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      width: 743px;
    }
    &_close {
      margin: 12px 10px 0 0;
      width: 12px;
      height: 12px;
      display: flex;
      align-self: flex-end;
      &-item {
        background: #FFF;
        border: 2px solid #FFF;
        transform: rotate(45deg);
        margin: -2px -4px -4px 0;
        &:last-child {
          transform: rotate(-45deg);
          margin: -2px 2px -4px 0px;
        }
      }
    }
    &_info {
      display: flex;
      width: 246px;
      flex-direction: column;
      margin: 0px 15px 0 0;
      &-title {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 47px;
        color: #12609E;
      }
      &-options {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        &--cash {
          display: flex;
          margin-bottom: 7px;
          &_icon {
            display: flex;
            width: 27px;
            height: 27px;
            & img {
              margin-top: 5px;
              width: 100%;
              height: 100%;
            }
          }
          &_text {
            width: 135px;
            height: 38px;
            margin:0px 5px 9px 5px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-size: 12px;
            line-height: 13px;
            color: #FFFFFF;
            & span {
              font-family: 'Inter';
              font-style: normal;
              font-weight: 900;
              font-size: 12px;
              line-height: 13px;
              color: #FFFFFF;
            }
          }
        }
      }
      &-form {
        display: flex;
        flex-direction: column;
      }
    }
  }
  &__small {
    width: 376px;
    height: 323px;
    background: url('../../assets/images/popup_tradein-small.png') 0px 0px/cover no-repeat;
    display: none;
    flex-direction: column;
      // align-items: flex-start;
      // margin: 12px 12px 0 18px;
    &_close {
      width: 12px;
      height: 12px;
      display: flex;
      margin: 12px 12px 0 18px;
      align-self: flex-end;
      justify-content: center;
      &-item {
        background: #FFF;
        border: 2px solid #FFF;
        transform: rotate(45deg);
        margin: -2px -4px -4px 0;
        &:last-child {
          transform: rotate(-45deg);
          margin: -2px 2px -4px 0px;
        }
      }
    }
    &_info {
      display: flex;
      align-items: baseline;
      margin: 80px 0 0 30px;
      &-text {
        display: flex;
        flex-direction: column;
        &--title {
          font-family: 'Raleway';
          font-style: normal;
          font-weight: 700;
          font-size: 24px;
          line-height: 28px;
          color: #12609E;
        }
        &--subtitle {
          margin-top: 2px;
          font-family: 'Inter';
          font-style: normal;
          font-weight: 400;
          font-size: 10px;
          line-height: 12px;
          color: #939393;
        }
      }
      &-options {
        display: flex;
        flex-direction: column;
        margin: 27px 0 8px 0;
        &--disc {
          display: flex;
          margin-left: 25px;
          align-items: center;
          &_icon {
            display: flex;
            width: 16px;
            height: 16px;
            & img {
              width: 100%;
              height: auto;
            }
          }
          &_text {
            display: flex;
            flex-direction: column;
            margin-left: 5px;
            &-bold {
              font-weight: 900;
              font-family: 'Inter';
              font-style: normal;
              font-size: 10px;
              line-height: 11px;
              color: #FFFFFF;
            }
            &-normal {
              font-family: 'Inter';
              font-style: normal;
              font-weight: 400;
              font-size: 10px;
              line-height: 11px;
              color: #FFFFFF;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 605px) {
  .tradein-popup {
    &__main {
      display: none;
    }
    &__small {
      display: flex;
    }
  }
}
</style>