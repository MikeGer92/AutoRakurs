<template>
  <div class="autocredit">
    <div class="autocredit__popup-small">
      <div class="autocredit__popup-small_close">
        <div class="autocredit__popup-small_close-item"></div>
        <div class="autocredit__popup-small_close-item"></div>
      </div>
      <div class="autocredit__popup-small_info">
        <div class="autocredit__popup-small_info-title">АВТОКРЕДИТ</div>
        <div class="autocredit__popup-small_info-subtitle">Получите одобрение за 15 минут!</div>
        <div class="autocredit__popup-small_info-options">
          <div class="autocredit__popup-small_info-options--cash">
            <div class="credit__popup-small_info-options--cash_icon"><img src="../../assets/images/popup_options_icon.png"/></div>
            <div class="credit__popup-small_info-options--cash_text">Первый взнос от <span>10% = 99%</span>одобрения</div>
          </div>
          <div class="autocredit__popup-small_info-options--perc">
            <div class="autocredit__popup-small_info-options--perc_icon"><img src="../../assets/images/popup_options_icon.png" /></div>
            <div class="autocredit__popup-small_info-options--perc_text">Ставка от <span>8%</span></div>
          </div>
          <div class="autocredit__popup-small_info-options--gift">
            <div class="autocredit__popup-small_info-options--gift_icon"><img src="../../assets/images/popup_options_icon.png"/></div>
            <div class="autocredit__popup-small_info-options--gift_text"><span>КАСКО</span> в Подарок!</div>
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
    name : 'CreditPopupMob',
    components: { FormPopup }
}
</script>

<style lang="scss">
.autocredit {
  width: 376px;
  height: 323px;
  background: url('../../assets/images/pop-up_credit-small.png') 0px 0px/cover no-repeat;
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
      width: 185px;
      &-title {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        color: #000000;
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
        margin: 27px 0 8px 0;
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