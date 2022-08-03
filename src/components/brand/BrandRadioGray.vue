<template>
  <div class="radio-main-gray">
    <label class="radio-main-gray__radio">
      <input class="radio-main-gray__radio_btn" id="radio" type="radio" name="radio-gray" value="1">
      <span></span>
      <div class="radio-main-gray__radio_text">
        <div class="radio-main-gray__radio_text-title">{{ offer.title }}</div>
        <div class="radio-main-gray__radio_text-benef">{{ offer.benef }}</div>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  name: 'BrandRadioGray',
  props: {
    offer: {
      type: Object,
      default:() => {}
    }
  }
}
</script>

<style lang="scss">
.radio-main-gray {
  display: flex;
  flex-direction: column;
  &__radio {
    margin: 65px 0 0 0;
    display: flex;
    align-items: center;
    cursor: pointer;
    &_btn {
      display: flex;
      width: 49px;
      height: 49px;
      margin-left: 50px;
      display: none;
      + span {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 44px;
        height: 44px;
        background: #F0F0F0;
        border-radius: 22px;
        margin-left: 50px;
      }
      &:checked {
        + span {
          &::before {
            content: "";
            display: block;
            width: 29px;
            height: 29px;
            border-radius: 50%;
            background: #86888A;;
          }
        }
      }
    }
    & span {
      width: 49px;
      height: 49px;
    }
    &_text {
      margin-left: 24px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 300;
      font-size: 18.4658px;
      line-height: 106.52%;
      color: #000000;
      &-title {
        display: flex;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 20.9478px;
        line-height: 25px;
        color: #000000;
      }
      &-benef {
        display: flex;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 43.5738px;
        line-height: 53px;
        color: #000000;
      }
    }
  }
}
@media (min-width: 1280px) and (max-width: 1921px) {
  .radio-main-gray {
    &__radio {
      margin: 54px 0 0 0;
      &_btn {
        width: 46px;
        height: 46px;
        margin-left: 30px;
        + span {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          margin-left: 30px;
        }
        &:checked {
          + span {
            &::before {
              content: "";
              width: 24px;
              height: 24px;
            }
          }
        }
      }
      & span {
        width: 46px;
        height: 46px;
      }
      &_text {
        margin-left: 18px;
        &-title {
          font-size: 17.2481px;
          line-height: 21px;
        }
        &-benef {
          font-size: 35.8779px;
          line-height: 43px;
        }
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 1281px) {
  .radio-main-gray {
    &__radio {
      margin: 35px 0 0 0;
      &_btn {
        width: 46px;
        height: 46px;
        margin-left: 30px;
        + span {
          width: 27px;
          height: 27px;
          border-radius: 50%;
          margin-left: 20px;
        }
        &:checked {
          + span {
            &::before {
              content: "";
              width: 16px;
              height: 16px;
            }
          }
        }
      }
      & span {
        width: 31px;
        height: 31px;
      }
      &_text {
        margin-left: 15px;
        &-title {
          font-size: 11.5088px;
          line-height: 14px;
        }
        &-benef {
          font-size: 23.9395px;
          line-height: 29px;
        }
      }
    }
  }
}
@media (min-width: 606px) and (max-width: 768px) {
  .radio-main-gray {
    &__radio {
      margin: 10px 0 16px 0;
      &_btn {
        width: 18px;
        height: 18px;
        margin-left: 30px;
        + span {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          margin-left: 10px;
        }
        &:checked {
          + span {
            &::before {
              content: "";
              width: 10px;
              height: 10px;
            }
          }
        }
      }
      & span {
        width: 18px;
        height: 18px;
      }
      &_text {
        margin-left: 11px;
        &-title {
          font-size: 6.90283px;
          line-height: 8px;
        }
        &-benef {
          font-size: 14.3586px;
          line-height: 17px;
        }
      }
    }
  }
}
@media (max-width: 605px) {
  .radio-main-gray {
    &__radio {
      margin-top: 35px;
      &_btn {
        width: 25px;
        height: 25px;
        margin-left: 0px;
        + span {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          margin-left: 31px;
        }
        &:checked {
          + span {
            &::before {
              width: 14px;
              height: 14px;
            }
          }
        }
      }
      & span {
        width: 25px;
        height: 25px;
      }
      &_text {
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        // width: 235px;
        &-title {
          font-size: 9.08692px;
          line-height: 11px;
        }
        &-benef {
          font-size: 18.9018px;
          line-height: 23px;    
        }
      }
    }
  }
}
</style>