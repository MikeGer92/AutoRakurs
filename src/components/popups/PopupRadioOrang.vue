<template>
  <div class="popup-radio-orange">
    <label class="popup-radio-orange__radio">
      <input class="popup-radio-orange__radio_btn" id="radio" type="radio" name="radio" value="1">
      <span></span>
      <div class="popup-radio-orange__radio_text">
        Нажимая кнопку <strong>“Получить одобрение”</strong>, Вы соглашаетесь
        с<router-link to="" class="radio-link">политикой конфиденциальности</router-link> и<router-link to="" class="radio-link">правилами обработки
        персональных данных.</router-link> 
      </div>
    </label>
  </div>
</template>

<script>
export default {
  name: 'PopupRadioOrange'
}
</script>

<style lang="scss">
.popup-radio-orange {
  display: flex;
  flex-direction: column;
  &__radio {
    display: flex;
    width: 250px;
    // height: 29px;
    align-items: center;
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
      width: 228px;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 8px;
      line-height: 9px;
      color: #000000;
      & strong {
        font-weight: 700px;
        // color: #12609E;
        // text-decoration: underline;
      }
      .radio-link {
          margin-left: 6px;
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 400;
          font-size: 8px;
          line-height: 9px;
          color: #12609E;
          text-decoration: underline;
        }
    }
  }
}
@media (max-width: 605px) {
  .popup-radio-orange {
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
        width: 187px;
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
}
</style>