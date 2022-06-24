<template>
  <div class="radio-main">
    <label class="radio-main__radio">
      <input class="radio-main__radio_btn" id="radio" type="radio" name="radio" value="1">
      <span></span>
      <div class="radio-main__radio_text">
        Я соглашаюсь с <span>условиями обработки<br>и использования моих персональных данных.</span>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  name: 'CustomRadio'
}
</script>

<style lang="scss">
.radio-main {
  display: flex;
  flex-direction: column;
  &__radio {
    margin-top: 36px;
    display: flex;
    width: 565px;
    height: 46px;
    cursor: pointer;
    &_btn {
      display: flex;
      width: 44px;
      height: 44px;
      margin-left: 50px;
      display: none;
      + span {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 44px;
        height: 44px;
        background: #F0F0F0;
        border-radius: 50%;
        margin-left: 50px;
      }
      &:checked {
        + span {
          &::before {
            content: "";
            display: block;
            width: 26px;
            height: 26px;
            border-radius: 50%;
            background: #FFA724;
          }
        }
      }
    }
    & span {
      width: 44px;
      height: 44px;
    }
    &_text {
      margin-left: 24px;
      text-align: left;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 300;
      font-size: 18.4658px;
      line-height: 106.52%;
      color: #000000;
      & span {
        color: #12609E;
        text-decoration: underline;
      }
    }
  }
}
@media (max-width: 605px) { 
  .radio-main {
    &__radio {
      margin-top: 15px;
      width: 254px;
      height: 25px;
      &_btn {
        width: 20px;
        height: 20px;
        margin-left: 22px;
        +span {
          width: 20px;
          height: 20px;
          margin-left: 22px;
        }
        &:checked {
          +span {
            &::before {
              content: "";
              width: 12px;
              height: 12px;
              background: #12609E;
            }
          }
        }
      }
      & span {
        width: 20px;
        height: 20px;
      }
      &_text {
        margin-left: 15px;
        font-size: 8.16217px;
        line-height: 106.52%;
        
      }
    }
  }
}
</style>