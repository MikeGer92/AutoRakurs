<template>
  <div class="kasko">
    <div class="kasko__popup-small">
        <ClosePopup />
      <div class="kasko__popup-small_wrap">
        <div class="kasko__popup-small_info">
          <div class="kasko__popup-small_info-title">КАСКО<br><span>в подарок!</span></div>
          <div class="kasko__popup-small_info-subtitle">При покупке<br>
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
.kasko {
  display: flex;
  &__popup-small {
    width: 376px;
    height: 323px;
    display: flex;
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

</style>