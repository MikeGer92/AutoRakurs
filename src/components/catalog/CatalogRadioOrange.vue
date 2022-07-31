<template>
  <div class="catalog-radio-orange">
    <label class="catalog-radio-orange__radio">
      <input class="catalog-radio-orange__radio_btn" id="radio" type="radio" name="radio" value="1">
      <span></span>
      <div class="catalog-radio-orange__radio_text">
        Я соглашаюсь с <span>условиями обработки<br>и использования моих персональных данных.</span>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  name: 'CatalogRadioOrange'
}
</script>

<style lang="scss">
.catalog-radio-orange {
  display: flex;
  flex-direction: column;
  &__radio {
    margin-top: 16px;
    display: flex;
    width: 336px;
    height: 22px;
    cursor: pointer;
    &_btn {
      display: flex;
      width: 22px;
      height: 22px;
      margin-left: 11px;
      display: none;
      + span {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 22px;
        height: 22px;
        background: #F0F0F0;
        border-radius: 11px;
      }
      &:checked {
        + span {
          &::before {
            content: "";
            display: block;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: #FFA724;
          }
        }
      }
    }
    & span {
      width: 22px;
      height: 22px;
    }
    &_text {
      margin-left: 11px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 300;
      font-size: 9px;
      line-height: 106.52%;
      color: #000000;
      & span {
        color: #12609E;
        text-decoration: underline;
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 12801px) {
  .catalog-radio-orange {
    display: flex;
    flex-direction: column;
    &__radio {
      margin-top: 10px;
      display: flex;
      width: 336px;
      height: 22px;
      cursor: pointer;
      &_btn {
        display: flex;
        width: 11px;
        height: 11px;
        margin-left: 13px;
        display: none;
        + span {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 11px;
          height: 11px;
          background: #F0F0F0;
          border-radius: 11px;
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
        width: 11px;
        height: 11px;
      }
      &_text {
        margin-left: 11px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 300;
        font-size: 4.71828px;
        line-height: 106.52%;
        color: #000000;
        & span {
          color: #12609E;
          text-decoration: underline;
        }
      }
    }
  }
}

</style>