<template>
  <div class="kasko-popup">
    <div class="kasko-popup__main">
      <ClosePopup :style="{'align-self': 'flex-end', 'margin': '12px 12px 0 0'}" @closePopup="closePopup" />
      <div class="kasko-popup__main_wrap">
        <div class="kasko-popup__main_info">
          <div class="kasko-popup__main_info-title">КАСКО <span> в подарок! </span></div> 
          <div class="kasko-popup__main_info-subtitle">При покупке автомобиля в кредит</div> 
          <div class="kasko-popup__main_info-form">
            <FormPopup/>
          </div> 
        </div>
      </div>
    </div>
    <div class="kasko-popup__small">
      <ClosePopup @closePopup="closePopup" />
      <div class="kasko-popup__small_wrap">
        <div class="kasko-popup__small_info">
          <div class="kasko-popup__small_info-title">КАСКО<br><span>в подарок!</span></div>
          <div class="kasko-popup__small_info-subtitle">При покупке<br>
            автомобиля в кредит</div>
        </div>
        <FormPopupMob :style="{'width': '183px'}"/>
      </div>
    </div>
  </div>
</template>

<script>
import FormPopup from './FormPopup.vue';
import ClosePopup from './ClosePopup.vue';
import FormPopupMob from './FormPopupMob.vue';
export default {
  name: 'KaskoPopup',
  components: { FormPopup, ClosePopup, FormPopupMob },
  methods: {
    closePopup() {
      console.log('CLOSE')
      this.$emit('closeKasko')
    }
  }
}
</script>

<style lang="scss">
.kasko-popup {
  width: 100%;
  display: flex;
  justify-content: space-around;
  &__main {
    display: flex;
    flex-direction: column;
    width: 743px;
    height: 306px;
    background: url('../../assets/images/pop-up_casko_back.png') 0px 0px/cover no-repeat;
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
        width: 176px;
        height: 66px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 28px;
        color: #000000;
        & span {
          font-family: 'Raleway';
          font-style: normal;
          font-weight: 700;
          font-size: 32px;
          line-height: 89.9%;
          color: #12609E;
        }
      }
      &-subtitle {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        color: #000000;
        margin: 0px 0px 27px 0;
      }
      &_options {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        &-cash, &-perc, &-gift {
          display: flex;
          margin-bottom: 7px;
          &--icon {
            display: flex;
            width: 15px;
            height: 15px;
            & img {
              width: 100%;
              height: auto;
            }
          }
          &--text {
            margin-left: 5px;
            width: 176px;
            height: 66px;
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 700;
            font-size: 32px;
            line-height: 89.9%;
            color: #12609E;
            & span {
              font-family: 'Inter';
              font-style: normal;
              font-weight: 700;
              font-size: 32px;
              line-height: 190.52%;
              color: #000000;
            }
          }
        }
      }
      &-form {
        display: flex;
      }
    }
  }
  &__small {
    width: 376px;
    height: 323px;
    display: none;
    flex-direction: column;
    background: url('../../assets/images/popup_casko-small.png') 0px 0px/cover no-repeat;
    &_wrap {
      display: flex;
      justify-content: space-between;
      margin: 145px 20px 0px 26px;
    }
    &_info {
      display: flex;
      flex-direction: column;
      &-title {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 26.1392px;
        line-height: 89.9%;
        color: #000000;
        & span {
          color: #12609E;
        }
      }
      &-subtitle {
        margin-top: 21px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 9.8022px;
        line-height: 12px;
        color: #000000;
      }
    }
  }
}
@media (max-width: 605px) {
  .kasko-popup{
    &__main {
      display: none;
    }
    &__small {
      display: flex;
    }
  }
}
</style>