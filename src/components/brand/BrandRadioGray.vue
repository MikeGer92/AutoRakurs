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
    margin-top: 65px;
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