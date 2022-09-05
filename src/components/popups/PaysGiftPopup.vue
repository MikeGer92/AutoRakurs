<template>
  <div class="pays-popup">
    <div class="pays-popup__main">
      <ClosePopup :style="{'margin': '12px 12px 0 0'}"/>
      <div class="pays-popup__main_wrap">
        <div class="pays-popup__main_info">
          <div class="pays-popup__main_info-title">З ПЛАТЕЖА ПО КРЕДИТУ <span>в подарок!</span></div> 
          <div class="pays-popup__main_info-subtitle">При покупке автомобиля в кредит</div> 
          <div class="pays-popup__main_info-form">
              <FormPopup/>
          </div> 
        </div>
      </div>
    </div>
    <div class="pays-popup__small">
      <ClosePopup :style="{'margin': '12px 12px 0 0'}"/>
      <div class="pays-popup__small_wrap">
        <div class="pays-popup__small_info">
          <div class="pays-popup__small_info-title">3 ПЛАТЕЖА<br>ПО КРЕДИТУ<br><span>в подарок!</span></div>
          <div class="pays-popup__small_info-subtitle">При покупке<br>
            автомобиля в кредит</div>
        </div>
        <FormPopupMob :style="{'width': '183px'}"/>
    </div>
    </div>
  </div>
</template>

<script>  import FormPopup from './FormPopup.vue';
import ClosePopup from './ClosePopup.vue';
import FormPopupMob from './FormPopupMob.vue';
export default {
  name: 'PaysGiftPopup',
  components: { FormPopup, ClosePopup, FormPopupMob }
}
</script>

<style lang="scss">
.pays-popup {
  width: 100%;
  display: flex;
  justify-content: space-around;
  &__main {
    display: flex;
    flex-direction: column;
    width: 743px;
    height: 306px;
    background: url('../../assets/images/pop-up_3_back.png') 0px 0px/cover no-repeat;
    &_wrap {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      width: 743px;
    }
    &_info {
      display: flex;
      width: 222px;
      flex-direction: column;
      margin: -24px 35px 0 0;
      &-title {
        margin: 0 0 20px 0;
        width: 167px;
        height: 66px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 26px;
        color: #000000;
        & span {
          font-family: 'Raleway';
          font-style: normal;
          font-weight: 700;
          font-size: 24px;
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
        margin-bottom: 10px;
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
    display: none;
    flex-direction: column;
    background: url('../../assets/images/popup_pays-small.png') 0px 0px/cover no-repeat;
    &_wrap {
      display: flex;
      justify-content: space-between;
      margin: 121px 20px 0px 26px;
    }
    &_info {
      display: flex;
      flex-direction: column;
      &-title {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 20.093px;
        line-height: 106.4%;
        color: #000000;
        & span {
          color: #12609E;
        }
      }
      &-subtitle {
        margin-top: 12px;
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
  .pays-popup {
    &__main {
      display: none;
    }
    &__small {
      display: flex;
    }
  }
}
</style>