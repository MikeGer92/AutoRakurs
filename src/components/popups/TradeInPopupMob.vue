<template>
    <div class="Tradein">
      <div class="Tradein__popup-small">
        <div class="Tradein__popup-small_close">
          <div class="Tradein__popup-small_close-item"></div>
          <div class="Tradein__popup-small_close-item"></div>
        </div>
        <div class="Tradein__popup-small_info">
          <div class="Tradein__popup-small_info-text">
            <div class="Tradein__popup-small_info-text--title">TRADE-IN</div>
            <div class="Tradein__popup-small_info-text--subtitle">Получите скидку до 200 000 рублей!</div>
          </div>
          <div class="Tradein__popup-small_info-options">
            <div class="Tradein__popup-small_info-options--disc">
              <div class="Tradein__popup-small_info-options--disc_icon"><img src="../../assets/images/popup_options_icon.png"/></div>
              <div class="Tradein__popup-small_info-options--disc_text">
                <div class="Tradein__popup-small_info-options--disc_text-bold">+10% к оценке авто</div>
                <div class="Tradein__popup-small_info-options--disc_text-normal">при приезде в день<br>обращения</div>
              </div>
            </div>
          </div>
        </div>
        <FormPopupMob :style="{'margin-top': '15px'}" />
      </div>
  
  
    </div>
  </template>
  
  <script>
import FormPopupMob from './FormPopupMob.vue';
  export default {
      name: 'TradeInPopupMob',
      components: { FormPopupMob }
      
  }
  </script>
  
  <style lang="scss">
  .Tradein {
    width: 376px;
    height: 323px;
    background: url('../../assets/images/popup_tradein-small.png') 0px 0px/cover no-repeat;
    &__popup-small {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin: 12px 12px 0 18px;
      &_close {
        width: 12px;
        height: 12px;
        display: flex;
        margin-left: 10px;
        align-self: flex-end;
        justify-content: center;
        &-item {
          border: 2px solid #12609E;
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
        margin-top: 80px;
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
            margin-left: 40px;
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
  
  </style>