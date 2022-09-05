<template>
    <div class="testdrive-popup">
      <ClosePopup :style="{'align-self': 'flex-end', 'margin-top': '12px'}" />
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
import ClosePopup from './ClosePopup.vue';
    export default {
        name: 'TestDrivePopup',
        components: { FormPopup, ClosePopup }
        
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
    &__info {
        display: flex;
        width: 246px;
        flex-direction: column;
        margin: -12px 35px 0 0;
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