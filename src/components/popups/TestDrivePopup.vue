<template>
    <div class="testdrive-popup">
        <div class="testdrive-popup__close">
                <div class="testdrive-popup__close_item"></div>
                <div class="testdrive-popup__close_item"></div>
        </div>
        <div class="testdrive-popup__wrap">
            <div class="testdrive-popup__info">
                <div class="testdrive-popup__info_title">Тест-Драйв</div> 
                <div class="testdrive-popup__info_subtitle">Время попробовать новое!</div>  
                <div class="testdrive-popup__info_options">
                <div class="testdrive-popup__info_options-cash">
                    <div class="testdrive-popup__info_options-cash--icon"><img src="../../assets/images/test_drive_icon.png" />
                    </div>
                    <div class="testdrive-popup__info_options-cash--text">Бесплатный тест-драйв в реальных словиях </div>
                </div>
                </div>
                <div class="testdrive-popup__info_form">
                    <FormPopup/>
                </div> 
            </div>
        </div>

    </div>
</template>

<script>
    import FormPopup from './FormPopup.vue';
    export default {
        name: 'TestDrivePopup',
        components: { FormPopup }
        
    }
</script>

<style lang="scss">
.testdrive-popup {
    display: flex;
    flex-direction: column;
    width: 743px;
    height: 306px;
    background: url('../../assets/images/pop-up_test_drive_back.png') 0px 0px/cover no-repeat;
    &__wrap {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        width: 743px;
    }
    &__close {
        margin: 12px 10px 0 0;
        width: 12px;
        height: 12px;
        display: flex;
        align-self: flex-end;
        &_item {
          border: 2px solid #FFFFFF;
          transform: rotate(45deg);
          margin: -2px -4px -4px 0;
          &:last-child {
            transform: rotate(-45deg);
            margin: -2px 2px -4px 0px;
          }
      }
    }
    &__info {
        display: flex;
        width: 246px;
        flex-direction: column;
        margin: 0px 35px 0 0;
        &_title {
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 700;
            font-size: 32px;
            line-height: 89.9%;
            color: #000000;
        }
        &_subtitle {
            margin: 5px 0 0 5px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 17px;

            color: #000000;
        }
        &_options {
            margin-top: 10px;
            display: flex;
            flex-direction: column;
            &-cash, &-perc, &-gift {
                display: flex;
                margin-bottom: 7px;
                &--icon {
                    margin: 0 0 7px 5px;
                    display: flex;
                    width: 35.51px;
                    height: 20.15px;
                    & img {
                        width: 100%;
                        height: auto;
                    }
                }
                &--text {
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
        &_form {
            display: flex;
            flex-direction: column;
        
            }
        }
    }


</style>