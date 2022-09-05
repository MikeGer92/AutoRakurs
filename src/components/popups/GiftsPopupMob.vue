<template>
    <div class="gifts">
      <div class="gifts__popup-small">
        <div class="gifts__popup-small_close">
          <div class="gifts__popup-small_close-item"></div>
          <div class="gifts__popup-small_close-item"></div>
        </div>
        <div class="gifts__popup-small_info">
          <div class="gifts__popup-small_info-title">Время выбирать подарки</div>
          <div class="gifts__popup-small_info-options">
            <div class="gifts__popup-small_info-options--cash">
              <div class="gifts__popup-small_info-options--cash_icon"><img src="../../assets/images/popup_options_icon.png"/></div>
              <div class="gifts__popup-small_info-options--cash_text">КАСКО</div>
            </div>
            <div class="gifts__popup-small_info-options--perc">
              <div class="gifts__popup-small_info-options--perc_icon"><img src="../../assets/images/popup_options_icon.png" /></div>
              <div class="gifts__popup-small_info-options--perc_text">3 платежа по кредиту</div>
            </div>
            <div class="gifts__popup-small_info-options--gift">
              <div class="gifts__popup-small_info-options--gift_icon"><img src="../../assets/images/popup_options_icon.png"/></div>
              <div class="gifts__popup-small_info-options--gift_text">3 ТО</div>
            </div>
          </div>
        </div>
        <FormPopup :style="{'margin-top': '19px'}" />
      </div>
  
  
    </div>
  </template>
  
  <script>
  import FormPopup from './FormPopup.vue';
    export default {
        name: 'GiftsPopupMob',
        components: { FormPopup }
        
    }
  </script>
  
  <style lang="scss">
  .gifts {
    width: 376px;
    height: 323px;
    background: url('../../assets/images/popup_gift_sall.png') 0px 0px/cover no-repeat;
    &__popup-small {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin: 12px 12px 0 22px;
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
        flex-direction: column;
        width: 222px;
        &-title {
          font-family: 'Raleway';
          font-style: normal;
          font-weight: 700;
          font-size: 24px;
          line-height: 21px;
          color: #10205E;

        }
        &-subtitle {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 400;
          font-size: 10px;
          line-height: 12px;
          color: #939393;
        }
        &-options {
          display: flex;
          flex-direction: column;
          margin: 17px 0 12px 0;
          &--cash, &--perc, &--gift {
            display: flex;
            margin-bottom: 4px;
            &_icon {
              display: flex;
              width: 12px;
              height: 12px;
              & img {
                width: 100%;
                height: auto;
              }
            }
            &_text {
              font-family: 'Inter';
              font-style: normal;
              font-weight: 400;
              font-size: 8px;
              line-height: 15px;
              color: #000000;
              & span {
                color: #FFA724;
                font-weight: 700px;
              }
            }
          }
        }
      }
    }
  
  }
  
  </style>