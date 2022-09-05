<template>
  <div class="popup-radio-orange-mob">
    <label class="popup-radio-orange-mob__radio">
      <input class="popup-radio-orange-mob__radio_btn" id="radio" type="radio" name="radio" value="1">
      <span></span>
      <div class="popup-radio-orange-mob__radio_text">
        Нажимая кнопку <strong>“Получить одобрение”</strong>, Вы соглашаетесь
        с<router-link to="" class="radio-link">политикой конфиденциальности</router-link> и<router-link to="" class="radio-link">правилами обработки
        персональных данных.</router-link> 
      </div>
    </label>
  </div>
</template>

<script>
export default {
  name: 'PopupRadioOrangeMob'
}
</script>

<style lang="scss">
.popup-radio-orange-mob {
  &__radio {
    display: flex;
    width: 220px;
    height: 29px;
    cursor: pointer;
    &_btn {
      display: flex;
      width: 12px;
      height: 12px;
      margin-left: 6px;
      display: none;
      + span {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 12px;
        height: 12px;
        background: #F0F0F0;
        border-radius: 6px;
      }
      &:checked {
        + span {
          &::before {
            content: "";
            display: block;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #FFA724;
          }
        }
      }
    }
    & span {
      width: 12px;
      height: 12px;
    }
    &_text {
      margin-left: 6px;
      width: 167px;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 6px;
      line-height: 7px;
      color: #000000;
      & span {
        font-weight: 700px;
        // color: #12609E;
        // text-decoration: underline;
      }
      & router-link {
        margin-left: 6px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 6px;
        line-height: 7px;
        color: #12609E;
        text-decoration: underline;
      }
    }
  }
}

</style>