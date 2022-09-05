<template>
  <div class="testdrive-popup">
    <div class="testdrive-popup__main">
      <ClosePopup :style="{'align-self': 'flex-end', 'margin': '12px 12px 0 0'}" />
      <div class="testdrive-popup__main_wrap">
        <div class="testdrive-popup__main_info">
          <div class="testdrive-popup__main_info-title">Тест-Драйв</div> 
          <div class="testdrive-popup__main_info-subtitle">Время попробовать новое!</div>  
          <div class="testdrive-popup__main_info-options">
            <div class="testdrive-popup__main_info-options--cash">
              <div class="testdrive-popup__main_info-options--cash_icon"><img src="../../assets/images/test_drive_icon.png" /></div>
              <div class="testdrive-popup__main_info-options--cash_text">Бесплатный тест-драйв в реальных словиях </div>
            </div>
          </div>
          <div class="testdrive-popup__main_info-form">
              <FormPopup/>
          </div> 
        </div>
      </div>
  </div>
  <div class="testdrive-popup__small">
    <div class="testdrive-popup__small_close">
      <div class="testdrive-popup__small_close-item"></div>
      <div class="testdrive-popup__small_close-item"></div>
    </div>
    <div class="testdrive-popup__small_info">
      <div class="testdrive-popup__small_info-title">Тест-Драйв</div>
      <div class="testdrive-popup__small_info-subtitle">Время попробовать новое!</div>
      <div class="testdrive-popup__small_info-options">
        <div class="testdrive-popup__small_info-options--cash">
          <div class="testdrive-popup__small_info-options--cash_icon"><img src="../../assets/images/test_drive_icon.png"/></div>
          <div class="testdrive-popup__small_info-options--cash_text">Бесплатный тест-драйв<br>в реальных словиях</div>
        </div>
      </div>
      <FormPopupMob :style="{'margin-top': '19px'}" />
    </div>
    </div>
  </div>
</template>

<script>
import FormPopup from './FormPopup.vue';
import ClosePopup from './ClosePopup.vue';
import FormPopupMob from './FormPopupMob.vue';
export default {
  name: 'TestDrivePopup',
  components: { FormPopup, ClosePopup, FormPopupMob }
}
</script>

<style lang="scss">
.testdrive-popup {
  width: 100%;
  display: flex;
  justify-content: space-around;
  &__main {
    display: flex;
    flex-direction: column;
    width: 743px;
    height: 306px;
    background: url('../../assets/images/pop-up_test_drive_back.png') 0px 0px/cover no-repeat;
    &_wrap {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      width: 743px;
    }
    &_info {
      display: flex;
      width: 246px;
      flex-direction: column;
      margin: -12px 35px 0 0;
      &-title {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 89.9%;
        color: #000000;
      }
      &-subtitle {
        margin: 5px 0 0 5px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        color: #000000;
      }
      &-options {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        &--cash {
          display: flex;
          margin-bottom: 7px;
          &_icon {
            margin: 0 0 7px 5px;
            display: flex;
            width: 35.51px;
            height: 20.15px;
            & img {
              width: 100%;
              height: auto;
            }
          }
          &_text {
            width: 135px;
            margin-left: 5px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-size: 10px;
            line-height: 10px;
            color: #000000;
          }
        }
      }
      &-form {
        display: flex;
        flex-direction: column;
      }
    }
  }
  &__small {
    display: none;
    flex-direction: column;
    width: 376px;
    height: 323px;
    background: url('../../assets/images/popup_testdrive-small.png') 0px 0px/cover no-repeat;
    &_close {
      width: 12px;
      height: 12px;
      display: flex;
      margin: 12px 24px 0 0;
      align-self: flex-end;
      justify-content: center;
      &-item {
        background: #FFF;
        border: 2px solid #FFF;
        transform: rotate(45deg);
        margin: -2px -4px -4px 0;
        &:last-child {
          transform: rotate(-45deg);
          margin: -2px 2px -4px 0px;
        }
      }
    }
    &_info {
      display: flex;
      flex-direction: column;
      width: 222px;
      align-items: flex-start;
      margin: 12px 12px 0 18px;
      &-title {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        color: #000000;

      }
      &-subtitle {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 10px;
        line-height: 12px;
        color: #000000;
      }
      &-options {
        display: flex;
        flex-direction: column;
        margin: 17px 0 12px 0;
        &--cash, &--perc, &--gift {
          display: flex;
          margin-bottom: 4px;
          &_icon {
            display: flex;
            width: 27px;
            height: 20px;
            & img {
              width: 100%;
              height: auto;
            }
          }
          &_text {
            margin-left: 5px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-size: 10px;
            line-height: 10px;
            color: #000000;
          }
        }
      }
    }
  }
}
@media (max-width: 605px) {
  .testdrive-popup {
    &__main {
      display: none;
    }
    &__small {
      display: flex;
    }
  }
}
</style>