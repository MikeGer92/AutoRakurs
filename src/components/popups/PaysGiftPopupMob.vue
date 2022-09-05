<template>
  <div class="pays">
    <div class="pays__popup-small">
      <ClosePopup />
      <div class="pays__popup-small_wrap">
        <div class="pays__popup-small_info">
          <div class="pays__popup-small_info-title">3 ПЛАТЕЖА<br>ПО КРЕДИТУ<br><span>в подарок!</span></div>
          <div class="pays__popup-small_info-subtitle">При покупке<br>
            автомобиля в кредит</div>
        </div>
        <FormPopupMob :style="{'width': '183px'}"/>
    </div>
    </div>
  </div>
</template>

<script>
import ClosePopup from './ClosePopup.vue';
import FormPopupMob from './FormPopupMob.vue';
  export default {
    name: "PaysGiftPopupMob",
    components: { ClosePopup, FormPopupMob }
}
</script>

<style lang="scss">
.pays {
  display: flex;
  &__popup-small {
    width: 376px;
    height: 323px;
    display: flex;
    flex-direction: column;
    background: url('../../assets/images/popup_pays-small.png') 0px 0px/cover no-repeat;
    &_wrap {
      display: flex;
      justify-content: space-between;
      margin: 145px 20px 0px 26px;
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

</style>