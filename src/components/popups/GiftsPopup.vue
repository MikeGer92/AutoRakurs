<template>
  <div class="gifts-popup">
    <div class="gifts-popup__main">
      <ClosePopup :style="{'align-self': 'flex-end', 'margin': '12px 12px 0 0'}" @closePopup="closePopup"/>
        <div class="gifts-popup__main_wrap">
          <div class="gifts-popup__main_info">
              <div class="gifts-popup__main_info-title">Время выбирать подарки</div> 
              <div class="gifts-popup__main_info-options">
              <div class="gifts-popup__main_info-options--cash">
                  <div class="gifts-popup__main_info-options--cash_icon"><img src="../../assets/images/popup_options_icon.png" />
                  </div>
                  <div class="gifts-popup__main_info-options--cash_text">КАСКО</div>
              </div>
              <div class="gifts-popup__main_info-options--perc">                
                  <div class="gifts-popup__main_info-options--perc_icon"><img src="../../assets/images/popup_options_icon.png" />
                  </div>
                  <div class="gifts-popup__main_info-options--perc_text">3 платежа по кредиту</div>
              </div>
              <div class="gifts-popup__main_info-options--gift">
                  <div class="gifts-popup__main_info-options--gift_icon"><img src="../../assets/images/popup_options_icon.png" />
                  </div>
                  <div class="gifts-popup__main_info-options--gift_text">3 ТО</div>
              </div>
              </div>
              <FormPopup />
          </div>
        </div>
    </div>
    <div class="gifts-popup__small">
      <ClosePopup :style="{'align-self': 'flex-end', 'margin': '12px 12px 0 0'}" @closePopup="closePopup" />
      <div class="gifts-popup__small_info">
        <div class="gifts-popup__small_info-title">Время выбирать подарки</div>
        <div class="gifts-popup__small_info-options">
          <div class="gifts-popup__small_info-options--cash">
            <div class="gifts-popup__small_info-options--cash_icon"><img src="../../assets/images/popup_options_icon.png"/></div>
            <div class="gifts-popup__small_info-options--cash_text">КАСКО</div>
          </div>
          <div class="gifts-popup__small_info-options--perc">
            <div class="gifts-popup__small_info-options--perc_icon"><img src="../../assets/images/popup_options_icon.png" /></div>
            <div class="gifts-popup__small_info-options--perc_text">3 платежа по кредиту</div>
          </div>
          <div class="gifts-popup__small_info-options--gift">
            <div class="gifts-popup__small_info-options--gift_icon"><img src="../../assets/images/popup_options_icon.png"/></div>
            <div class="gifts-popup__small_info-options--gift_text">3 ТО</div>
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
  name: "GiftsPopup",
  components: { FormPopup, ClosePopup, FormPopupMob },
  methods: {
    closePopup() {
      this.$emit('closeGifts')
    }
  }
}
</script>

<style lang="scss">
.gifts-popup {
  display: flex;
  width: 100%;
  justify-content: space-around;
  &__main {
    display: flex;
    flex-direction: column;
    width: 743px;
    height: 306px;
    background: url('../../assets/images/pop-up\ gift\ back.png') 0px 0px/cover no-repeat;
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
        width: 222px;
        height: 41px;    
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 22px;
        color: #10205E; 
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
            height: 13px;
            & img {
              width: 100%;
              height: auto;
            }
          }
          &_text {
            margin-left: 5px;
            width: 271px;
            height: 12px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-size: 10px;
            line-height: 10px;
            color: #000000;
          }
        }
      }
      &-form {
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
    width: 376px;
    height: 323px;
    background: url('../../assets/images/popup_gift_sall.png') 0px 0px/cover no-repeat;
    display: none;
    flex-direction: column;
      // align-items: flex-start;
      // margin: 12px 12px 0 22px;
    &_info {
      display: flex;
      flex-direction: column;
      width: 222px;
      margin: -24px 0 0 22px;
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

@media (max-width: 605px) {
  .gifts-popup {
    &__main {
      display: none;
    }
    &__small {
      display: flex;
    }
  }
}
</style>