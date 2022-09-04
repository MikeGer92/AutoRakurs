<template>
    <div class="tradein-popup">
        <div class="tradein-popup__close" @click="closePopup">
                <div class="tradein-popup__close_item"></div>
                <div class="tradein-popup__close_item"></div>
        </div>
        <div class="tradein-popup__wrap">
            <div class="tradein-popup__info">
                <div class="tradein-popup__info_title">TRADE-IN</div> 

                <div class="tradein-popup__info_options">
                <div class="tradein-popup__info_options-cash">
                    <div class="tradein-popup__info_options-cash--icon"><img src="../../assets/images/popup_option_icon_big.png" />
                    </div>
                    <div class="tradein-popup__info_options-cash--text"><span>+10% к оценке авто</span> при приезде в день обращения </div>
                </div>
                </div>
                <div class="tradein-popup__info_form">
                    <input type="text" name="name" placeholder="Имя">
                    <input type="phone" name="phone" placeholder="+7 (___) ___-__-__">
                    <div class="tradein-popup__info_form-button">Получить выгоду</div>
                </div> 
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'AutoCreditPopup'
        
    }
</script>

<style lang="scss">
.tradein-popup {
    display: flex;
    flex-direction: column;
    width: 743px;
    height: 306px;
    background: url('../../assets/images/pop-up\ Trade-in\ back.png') 0px 0px/cover no-repeat;
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
          border: 2px solid #12609E;
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
            font-size: 40px;
            line-height: 47px;
            color: #12609E;
        }
        
        &_options {
            margin-top: 10px;
            display: flex;
            flex-direction: column;
            &-cash, &-perc, &-gift {
                display: flex;
                margin-bottom: 7px;
                &--icon {
                    display: flex;
                    width: 27px;
                    height: 27px;
                    & img {
                        margin-top: 5px;
                        width: 100%;
                        height: 100%;
                    }
                }
                &--text {
                    width: 135px;
                    height: 38px;
                    margin:0px 5px 9px 5px;
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 13px;
                    color: #FFFFFF;
                    & span {
                        font-family: 'Inter';
                        font-style: normal;
                        font-weight: 900;
                        font-size: 12px;
                        line-height: 13px;
                        color: #FFFFFF;
                    }
                }
            }
        }
        &_form {
            display: flex;
            flex-direction: column;
            & input {
                width: 214px;
                height: 31px;
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
                margin-bottom: 12px;

            }
            &-button {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 226px;
                height: 34px;
                background: linear-gradient(90.43deg, #12609E 17.95%, #10205E 83.93%);
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