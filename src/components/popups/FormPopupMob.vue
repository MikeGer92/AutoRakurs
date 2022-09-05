<template>
  <div class="form-popup">
    <div class="form-popup__small">
      <input type="text" name="name" placeholder="Имя">
      <input type="phone" name="phone" placeholder="+7 (___) ___-__-__">
      <div class="form-popup__small_btn">Получить одобрение</div>
    </div>
    <PopupRadioOrangeMob />
  </div>
</template>

<script>
import PopupRadioOrangeMob from './PopupRadioOrangeMob.vue';
  export default {
    name: 'FormPopupMob',
    components: { PopupRadioOrangeMob }
    
  }
</script>

<style lang="scss">
.form-popup {
  &__small {
    display: flex;
    flex-direction: column;
    & input {
      width: 155px;
      height: 23px;
      background: linear-gradient(90.43deg, #FFFFFF 17.95%, #FFFFFF 83.93%);
      border: 1px solid #E5E5E5;
      box-shadow: inset 0px 2px 5px rgba(0, 0, 0, 0.15);
      border-radius: 17px;
      padding-left: 12px;
      margin-bottom: 8px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      color: #C4C4C4;
    }
    &_btn {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 7px;
      width: 171px;
      height: 25px;
      background: linear-gradient(90.43deg, #12609E 17.95%, #10205E 83.93%);
      border-radius: 17px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 10px;
      line-height: 12px;
      color: #FFFFFF;
    }
  }
}
</style>