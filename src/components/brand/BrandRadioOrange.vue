<template>
  <div class="radio-main-orange">
    <label class="radio-main-orange__radio">
      <input class="radio-main-orange__radio_btn" id="radio" type="radio" name="radio-orange" value="1">
      <span></span>
      <div class="radio-main-orange__radio_text">
        <div class="radio-main-orange__radio_text-title">{{ offer.title }}</div>
        <div class="radio-main-orange__radio_text-benef">{{ offer.benef }}</div>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  name: 'BrandRadioOrange',
  props: {
    offer: {
      type: Object,
      default:() => {}
    }
  }
}
</script>

<style lang="scss">
.radio-main-orange {
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
            background: #FFA724;
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

</style>