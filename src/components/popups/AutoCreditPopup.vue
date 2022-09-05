<template>
  <div class="credit-popup">
    <div class="credit-popup__main">
      <ClosePopup :style="{'align-self': 'flex-end'}"/>
      <div class="credit-popup__main_wrap">
        <div class="credit-popup__main_info">
          <div class="credit-popup__main_info-title">АВТОКРЕДИТ</div> 
          <div class="credit-popup__main_info-subtitle">Получите одобрение за 15 минут!</div> 
          <div class="credit-popup__main_info-options">
          <div class="credit-popup__main_info-options--cash">
              <div class="credit-popup__main_info-options--cash_icon"><img src="../../assets/images/popup_options_icon.png" />
              </div>
              <div class="credit-popup__main_info-options--cash_text">Первый взнос от <span> 10% = 99%</span> одобрения </div>
          </div>
          <div class="credit-popup__main_info-options--perc">                
              <div class="credit-popup__main_info-options--perc_icon"><img src="../../assets/images/popup_options_icon.png" />
              </div>
              <div class="credit-popup__main_info-options--perc_text">Ставка от <span>8%</span></div>
          </div>
          <div class="credit-popup__main_info-options--gift">
              <div class="credit-popup__main_info-options--gift_icon"><img src="../../assets/images/popup_options_icon.png" />
              </div>
              <div class="credit-popup__main_info-options--gift_text"><span> КАСКО</span> в Подарок!</div>
          </div>
          </div>
          <FormPopup />
        </div>
      </div>
    </div>
    <div class="credit-popup__small">
      <ClosePopup :style="{'align-self': 'flex-end'}"/>
      <div class="credit-popup__small_info">
        <div class="credit-popup__small_info-title">АВТОКРЕДИТ</div>
        <div class="credit-popup__small_info-subtitle">Получите одобрение за 15 минут!</div>
        <div class="credit-popup__small_info-options">
          <div class="credit-popup__small_info-options--cash">
            <div class="credit-popup__small_info-options--cash_icon"><img src="../../assets/images/popup_options_icon.png"/></div>
            <div class="credit-popup__small_info-options--cash_text">Первый взнос от <span>10% = 99%</span>одобрения</div>
          </div>
          <div class="credit-popup__small_info-options--perc">
            <div class="credit-popup__small_info-options--perc_icon"><img src="../../assets/images/popup_options_icon.png" /></div>
            <div class="credit-popup__small_info-options--perc_text">Ставка от <span>8%</span></div>
          </div>
          <div class="credit-popup__small_info-options--gift">
            <div class="credit-popup__small_info-options--gift_icon"><img src="../../assets/images/popup_options_icon.png"/></div>
            <div class="credit-popup__small_info-options--gift_text"><span>КАСКО</span> в Подарок!</div>
          </div>
        </div>
        <FormPopupMob :style="{'margin-top': '19px'}" />
      </div>
    </div>
  </div>
</template>

<script>
    import FormPopup from './FormPopup.vue';
import ClosePopup from './ClosePopup.vue';
import FormPopupMob from './FormPopupMob.vue';
export default {
  name: 'AutoCreditPopup',
  components: { FormPopup, ClosePopup, FormPopupMob }
}
</script>

<style lang="scss">
.credit-popup {
  display: flex;
  width: 100%;
  justify-content: space-around;
  &__main {
    display: flex;
    flex-direction: column;
    width: 743px;
    height: 306px;
    background: url('../../assets/images/pop-up\ credit\ back.png') 0px 0px/cover no-repeat;
    &_wrap {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        width: 743px;
    }
    &_info {
      display: flex;
      width: 246px;
      flex-direction: column;
      margin: -24px 35px 0 0;
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
        font-size: 12px;
        line-height: 15px;
        color: #939393;
      }
      &-options {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        &--cash, &--perc, &--gift {
          display: flex;
          margin-bottom: 7px;
          &_icon {
            display: flex;
            width: 15px;
            height: 15px;
            & img {
              width: 100%;
              height: auto;
            }
          }
          &_text {
            margin-left: 5px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 10px;
            line-height: 19px;
            color: #000000;
            & span {
              font-family: 'Inter';
              font-style: normal;
              font-weight: 700;
              font-size: 10px;
              line-height: 190.52%;
              color: #FFA724;
            }
          }
        }
      }
      &_form {
        display: flex;
        flex-direction: column;
        & input {
          width: 214px;
          height: 31px;
          background: #FFFFFF;
          border: 1px solid #E5E5E5;
          box-shadow: inset 0px 3px 6px rgba(147, 147, 147, 0.25);
          border-radius: 17px;
          border: none;
          padding-left: 12px;
          font-family: 'Inter';
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 15px;
          color: #C4C4C4;
          margin-bottom: 12px;
        }
        &-button {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 226px;
          height: 34px;
          background: linear-gradient(90.43deg, #12609E 17.95%, #10205E 83.93%);
          border-radius: 17px;
          font-family: 'Inter';
          font-style: normal;
          font-weight: 700;
          font-size: 12px;
          line-height: 15px;
          color: #FFFFFF;
        }
      }
    }
  }
  &__small {
    display: none;
    width: 376px;
    height: 323px;
    flex-direction: column;
    background: url('../../assets/images/pop-up_credit-small.png') 0px 0px/cover no-repeat;
    &_info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin: -24px 12px 0 22px;
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
@media (max-width: 605px) {
  .credit-popup {
    &__main {
      display: none;
    }
    &__small {
      display: flex;
    }
  }
}
</style>