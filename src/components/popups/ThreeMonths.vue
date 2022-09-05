<template>
  <div class="three-months">
    <div class="three-months__popup">
      <div class="three-months__popup_header">
        <div class="three-months__popup_header-text">
          <div class="three-months__popup_header-title">УСПЕЙ ПРИОБРЕСТИ ПО ЦЕНАМ<br />СТАРОГО КУРСА</div>
          <div class="three-months__popup_header-subtitle">и получи острочку платежа по кредиту</div>
          <div class="three-months__popup_header-offer">НА 3 МЕСЯЦА!</div>
        </div>
        <div class="three-months__popup_header-close" @click="closePopup">
          <div class="three-months__popup_header-close--item"></div>
          <div class="three-months__popup_header-close--item"></div>
        </div>
      </div>
      <div class="three-months__popup_main">
        <div class="three-months__popup_main-image"><img src="@/assets/images/popup-car.png"/></div>
        <div class="three-months__popup_main-form">
          <input type="text" placeholder="Имя"/>
          <input type="text" placeholder="Телефон"/>
          <CatalogRadioBlue />
          <div class="three-months__popup_main-form--btn">ПОЛУЧИТЬ СПЕЦ ЦЕНУ</div>
        </div>
      </div>
    </div>
    <div class="three-months__popup-small">
      <div class="three-months__popup-small_header">
        <div class="three-months__popup-small_header-close">
          <div class="three-months__popup-small_header-close--item"></div>
          <div class="three-months__popup-small_header-close--item"></div>
        </div>
      </div>
      <div class="three-months__popup-small_image"><img src="@/assets/images/popup-car.png"/></div>
      <div class="three-months__popup-small_main">
        <div class="three-months__popup-small_main-text">
          <div class="three-months__popup-small_main-title">УСПЕЙ ПРИОБРЕСТИ ПО <br/>ЦЕНАМ СТАРОГО КУРСА</div>
          <div class="three-months__popup-small_main-subtitle">и получи острочку платежа<br/>по кредиту</div>
          <div class="three-months__popup-small_main-offer">НА 3 МЕСЯЦА!</div>
        </div>
        <div class="three-months__popup-small_main-form">
          <input class="three-months__popup-small_main-form--input" type="text" placeholder="Имя"/>
          <input class="three-months__popup-small_main-form--input" type="text" placeholder="Телефон"/>
          <CatalogRadioBlue />
          <div class="three-months__popup-small_main-form--btn">ПОЛУЧИТЬ СПЕЦ ЦЕНУ</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CatalogRadioBlue from '../catalog/CatalogRadioBlue.vue';
  export default {
    name:'ThreeMonths',
    components: { CatalogRadioBlue },
    methods: {
      closePopup() {
        this.$emit('closePopup')
      }
    }
  }
</script>

<style lang="scss">
.three-months {
  display: flex;
  width: 100%;
  justify-content: center;
  &__popup {
    width: 743px;
    height: 312px;
    display: flex;
    flex-direction: column;
    background: url('@/assets/images/popup-main.png') no-repeat center;
    background-size: cover;
    border-radius: 28px;
    margin-bottom: 60px;
    &_header {
      display: flex;
      justify-content: flex-end;
      margin: 18px 18px 0 0px;
      &-text {
        display: flex;
        flex-direction: column;
        width: 326px;
        justify-content: flex-start;
      }
      &-title {
        display: flex;
        justify-content: flex-start;
        font-weight: 900;
        font-size: 15.7829px;
        line-height: 19px;
        color: #10205E;
      }
      &-subtitle {
        margin-top: 8px;
        display: flex;
        font-weight: 700;
        font-size: 13.3857px;
        line-height: 16px;
        color: #10205E;
      }
      &-offer {
        font-weight: 900;
        font-size: 36.5192px;
        line-height: 44px;
        color: #FFA724;
      }
      &-close {
        width: 12px;
        height: 12px;
        display: flex;
        margin-left: 10px;
        justify-content: center;
        &--item {
          border: 2px solid #12609E;
          transform: rotate(45deg);
          margin: -2px -4px -4px 0;
          &:last-child {
            transform: rotate(-45deg);
            margin: -2px 2px -4px 0px;
          }
        }
      }
    }
    &_main {
      display: flex;
      justify-content: flex-start;
      margin-right: 40px;
      &-image {
        width: 451px;
        height: 173px;
        margin: -18px 0 0 0;
        display: flex;
        object-fit: contain;
        & img {
          width: 100%;
          height: auto;
        }
      }
      &-form {
        margin-top: 9px;
        max-width: 236px;
        display: flex;
        flex-direction: column;
        & input {
          width: 177px;
          height: 28px;
          background: #EDEDED;
          border-radius: 52.2814px;
          border: none;
          padding-left: 11px;
          font-weight: 500;
          font-size: 10.7129px;
          line-height: 13px;
          color: #A8A8A8;
          &:first-child {
            margin-bottom: 15px;
          }
        }
        &--btn {
          margin: 17px 0 18px 0;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 235.81px;
          height: 32.43px;
          left: 464px;
          top: 255px;
          background: linear-gradient(90.43deg, #12609E 17.95%, #10205E 83.93%);
          box-shadow: 0px 4.24594px 4.24594px rgba(0, 0, 0, 0.25);
          border-radius: 39.275px;
          font-weight: 900;
          font-size: 12.2146px;
          line-height: 15px;
          color: #FFFFFF;
          cursor: pointer;
        }
      }
    }
  }
  &__popup-small {
    display: flex;
    flex-direction: column;
    width: 376px;
    height: 323px;
    background: url('@/assets/images/popup-small.png') no-repeat center;
    background-size: cover;
    &_header {
      margin-top: 12px;
      width: 100%;
      display: flex;
      justify-content: flex-end;
      &-close {
        margin-right: 19px;
        width: 12px;
        height: 12px;
        display: flex;
        margin-left: 10px;
        justify-content: center;
        &--item {
          border: 2px solid #12609E;
          transform: rotate(45deg);
          margin: -2px -4px -4px 0;
          &:last-child {
            transform: rotate(-45deg);
            margin: -2px 2px -4px 0px;
          }
        }
      }
    }
    &_image {
      display: flex;
      margin: 56px 34px 13px 43px;
      width: 299px;
      height: 115px;
      object-fit: cover;
      & img {
        width: 100%;
        // height: auto;
      }
    }
    &_main {
      display: flex;
      width: 90%;
      margin: 0px 16px 19px 20px;
      justify-content: space-between;
      &-text {
        display: flex;
        flex-direction: column;
      }
      &-title {
        font-weight: 900;
        font-size: 12.6844px;
        line-height: 15px;
        color: #10205E;
      }
      &-subtitle {
        margin-top: 4px;
        font-weight: 700;
        font-size: 8.9984px;
        line-height: 11px;
        color: #000000;
      }
      &-offer {
        margin-top: 4px;
        font-weight: 900;
        font-size: 20.9641px;
        line-height: 25px;
        color: #FFA724;
      }
      &-form {
        display: flex;
        max-width: 162px;
        flex-direction: column;
        &--input {
          width: 150px;
          height: 20px;
          margin-bottom: 7px;
          background: #F0F0F0;
          border-radius: 35.9169px;
          border: none;
          padding-left: 8px;
          font-weight: 500;
          font-size: 7.35966px;
          line-height: 9px;
          color: #A8A8A8;
        }
        .catalog-radio-blue {
            display: flex;
            flex-direction: column;
            cursor: pointer;
            & label {
              margin-top: 0;
              margin-bottom: 7px;
            }
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
                font-size: 4.32px;
                line-height: 106.52%;
                color: #000000;
                & span {
                  color: #12609E;
                  text-decoration: underline;
                }
              }
            }
          }  
        &--btn {
          width: 162px;
          height: 22.28px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(90.43deg, #12609E 17.95%, #10205E 83.93%);
          box-shadow: 0px 2.91692px 2.91692px rgba(0, 0, 0, 0.25);
          border-radius: 26.9816px;
          font-weight: 900;
          font-size: 8.39133px;
          line-height: 10px;
          color: #FFFFFF;
          cursor: pointer;
        }
      }
    }
  }
}
@media (min-width: 606px) and (max-width: 1920px) {
  .three-months {
    justify-content: space-around;
    &__popup-small {
      display: none;
    }
  }
}
@media (max-width: 605px) {
  .three-months {
    &__popup {
      display: none;
    }
  }
}
</style>