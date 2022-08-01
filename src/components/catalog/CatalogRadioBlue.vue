<template>
  <div class="catalog-radio-blue">
    <label class="catalog-radio-blue__radio">
      <input class="catalog-radio-blue__radio_btn" id="radio" type="radio" name="radio" value="1">
      <span></span>
      <div class="catalog-radio-blue__radio_text">
        Я соглашаюсь с <span>условиями обработки<br>и использования моих персональных данных.</span>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  name: 'CatalogRadioBlue'
}
</script>

<style lang="scss">
.catalog-radio-blue {
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
            background: #12609E;
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
@media (min-width: 768px) and (max-width: 1281px) {
  .catalog-radio-blue {
    display: flex;
    flex-direction: column;
    &__radio {
      margin-top: 8px;
      display: flex;
      width: 173px;
      height: 12px;
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
          border-radius: 50%;
        }
        &:checked {
          + span {
            &::before {
              content: "";
              display: block;
              width: 6px;
              height: 6px;
              border-radius: 50%;
              background: #12609E;
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
        font-family: 'Inter';
        font-style: normal;
        font-weight: 300;
        font-size: 5px;
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
@media (min-width: 606px) and (max-width: 768px) {
  .catalog-radio-blue {
    display: flex;
    flex-direction: column;
    &__radio {
      margin-top: 5px;
      display: flex;
      width: 108px;
      height: 9px;
      cursor: pointer;
      &_btn {
        display: flex;
        width: 8px;
        height: 8px;
        margin-left: 5px;
        display: none;
        + span {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 8px;
          height: 8px;
          background: #F0F0F0;
          border-radius: 50%;
        }
        &:checked {
          + span {
            &::before {
              content: "";
              display: block;
              width: 4px;
              height: 4px;
              border-radius: 50%;
              background: #12609E;
            }
          }
        }
      }
      & span {
        width: 8px;
        height: 8px;
      }
      &_text {
        margin-left: 5px;
        width: 92px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 300;
        font-size: 2.68647px;
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