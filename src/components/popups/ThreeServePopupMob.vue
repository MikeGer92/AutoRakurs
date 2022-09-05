<template>
  <div class="serve">
    <div class="serve__popup-small">
        <ClosePopup />
      <div class="serve__popup-small_wrap">
        <div class="serve__popup-small_info">
          <div class="serve__popup-small_info-title">З ТО<br><span>в&#8194;подарок!</span></div>
          <div class="serve__popup-small_info-subtitle">При покупке<br>
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
    name: "KaskoPopupMob",
    components: { ClosePopup, FormPopupMob }
}
</script>

<style lang="scss">
.serve {
  display: flex;
  &__popup-small {
    width: 376px;
    height: 323px;
    display: flex;
    flex-direction: column;
    background: url('../../assets/images/popup_serve-small.png') 0px 0px/cover no-repeat;
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
        font-size: 36px;
        line-height: 30px;
        letter-spacing: -0.1em;
        color: #000000;
        & span {
          color: #FFA724;
          font-family: 'Inter';
          font-style: normal;
          font-weight: 700;
          font-size: 26px;
          letter-spacing: -0.05em;
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

</style>