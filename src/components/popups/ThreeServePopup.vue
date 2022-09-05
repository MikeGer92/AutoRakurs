<template>
  <div class="three-serve">
    <div class="three-serve__main">
      <ClosePopup :style="{'align-self': 'flex-end', 'margin': '12px 12px 0 0'}"/>
      <div class="three-serve__main_wrap">
        <div class="three-serve__main_info">
          <div class="three-serve__main_info-title">З ТО <span>в подарок!</span></div> 
          <div class="three-serve__main_info-subtitle">При покупке автомобиля в кредит</div> 
          <div class="three-serve__main_info-form">
            <FormPopup/>
          </div> 
        </div>
      </div>
    </div>
    <div class="three-serve__small">
      <ClosePopup :style="{'margin': '12px 12px 0 0'}"/>
      <div class="three-serve__small_wrap">
        <div class="three-serve__small_info">
          <div class="three-serve__small_info-title">З ТО<br><span>в&#8194;подарок!</span></div>
          <div class="three-serve__small_info-subtitle">При покупке<br>
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
  name: 'ThreeServePopup',
  components: { FormPopup, ClosePopup, FormPopupMob }
}
</script>

<style lang="scss">
.three-serve {
  width: 100%;
  display: flex;
  justify-content: space-around;
  &__main {
    display: flex;
    flex-direction: column;
    width: 743px;
    height: 306px;
    background: url('../../assets/images/pop-up_3_to_back.png') 0px 0px/cover no-repeat;
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
      margin: -12px 35px 0 0;
      &-title {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 28px;
        color: #000000;
        & span {
          font-family: 'Raleway';
          font-style: normal;
          font-weight: 700;
          font-size: 24px;
          line-height: 89.9%;
          color: #FFA724;
        }
      }
      &-subtitle {
        margin: 15px 0 35px 0;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        color: #000000;
      }
      &_form {
        display: flex;
        flex-direction: column;
      }
    }
  }
  &__small {
    width: 376px;
    height: 323px;
    display: flex;
    flex-direction: column;
    background: url('../../assets/images/popup_serve-small.png') 0px 0px/cover no-repeat;
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