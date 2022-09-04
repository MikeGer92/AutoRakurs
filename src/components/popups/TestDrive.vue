<template>
    <div class="Testdrive-popup">
        <div class="Testdrive-popup__close" @click="closePopup">
                <div class="Testdrive-popup__close_item"></div>
                <div class="Testdrive-popup__close_item"></div>
        </div>
        <div class="Testdrive-popup__wrap">
            <div class="Testdrive-popup__info">
                <div class="Testdrive-popup__info_title">Тест-Драйв</div> 
                <div class="Testdrive-popup__info_subtitle">Время попробовать новое!</div>  
                <div class="Testdrive-popup__info_options">
                <div class="Testdrive-popup__info_options-cash">
                    <div class="Testdrive-popup__info_options-cash--icon"><img src="../../assets/images/tets_drive_icon.png" />
                    </div>
                    <div class="Testdrive-popup__info_options-cash--text">Бесплатный тест-драйв в реальных словиях </div>
                </div>
                </div>
                <div class="Testdrive-popup__info_form">
                    <input type="text" name="name" placeholder="Имя">
                    <input type="phone" name="phone" placeholder="+7 (___) ___-__-__">
                    <div class="Testdrive-popup__info_form-button">Записаться на тест-драйв</div>
                </div> 
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'TestDrive'
        
    }
</script>

<style lang="scss">
.Testdrive-popup {
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
            & input {
                width: 226px;
                height: 27px;
                background: #FFFFFF;
                border: 1px solid #E5E5E5;
                box-shadow: inset 0px 3px 6px rgba(147, 147, 147, 0.25);
                border-radius: 17px;
                border: none;
                padding-left: 12px;
                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 15px;
                color: #C4C4C4;
                margin-bottom: 8px;

            }
            &-button {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 240px;
                height: 30px;
                background: linear-gradient(90.43deg, #12609E 17.95%, #10205E 83.93%);
                border-radius: 17px;
                border-radius: 17px;
                font-family: 'Inter';
                font-style: normal;
                font-weight: 700;
                font-size: 12px;
                line-height: 15px;
                color: #FFFFFF;
            }
        }
    }
}

</style>