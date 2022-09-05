<template>
  <div class="form-popup">
    <div class="form-popup__main">
      <input type="text" name="name" placeholder="Имя">
      <input type="phone" name="phone" placeholder="+7 (___) ___-__-__">
      <div class="form-popup__main_btn">Получить одобрение</div>
    </div>
    <PopupRadioOrang />
  </div>
</template>

<script>
  import PopupRadioOrang from './PopupRadioOrang.vue';
  export default {
    name: 'FormPopup',
    components: { PopupRadioOrang }
    
  }
</script>

<style lang="scss">
.form-popup {
  &__main {
    display: flex;
    flex-direction: column;
    & input {
      width: 226px;
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
      margin-bottom: 8px;
    }
    &_btn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 240px;
      height: 34px;
      background: linear-gradient(90.43deg, #12609E 17.95%, #10205E 83.93%);
      border-radius: 17px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 15px;
      color: #FFFFFF;
      margin-bottom: 8px;
    }
  }
}
</style>