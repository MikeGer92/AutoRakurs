<template>
  <div class="testdrive">
    <div class="testdrive__popup-small">
      <div class="testdrive__popup-small_close">
        <div class="testdrive__popup-small_close-item"></div>
        <div class="testdrive__popup-small_close-item"></div>
      </div>
      <div class="testdrive__popup-small_info">
        <div class="testdrive__popup-small_info-title">Тест-Драйв</div>
        <div class="testdrive__popup-small_info-subtitle">Время попробовать новое!</div>
        <div class="testdrive__popup-small_info-options">
          <div class="testdrive__popup-small_info-options--cash">
            <!-- <div class="testdrive__popup-small_info-options--cash_icon"><img src="../../assets/images/test_drive_icon.png"/></div> -->
            <div class="testdrive__popup-small_info-options--cash_text">Бесплатный тест-драйв<br>в реальных словиях</div>
          </div>
        </div>
      </div>
      <FormPopupMob :style="{'margin-top': '19px'}" />
    </div>


  </div>
</template>

<script>
import FormPopupMob from './FormPopupMob.vue';
  export default {
      name: 'TestDrivePopupMob',
      components: {  FormPopupMob }
      
  }
</script>

<style lang="scss">
.testdrive {
  width: 376px;
  height: 323px;
  background: url('../../assets/images/popup_ test drive-small.png') 0px 0px/cover no-repeat;
  &__popup-small {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 12px 12px 0 18px;
    &_close {
      width: 12px;
      height: 12px;
      display: flex;
      margin: 0px 10px;
      align-self: flex-end;
      justify-content: center;
      &-item {
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
            width: 12px;
            height: 12px;
            & img {
              width: 100%;
              height: auto;
            }
          }
          &_text {
            margin: 8px 0 0 40px; // не забыть переделать в реальном макете нет
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 8px;
            line-height: 15px;
            color: #000000;
            & span {
              color: #FFA724;
              font-weight: 700px;
            }
          }
        }
      }
    }
  }

}

</style>