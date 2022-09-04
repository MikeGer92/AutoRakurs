<template>
    <div class="credit-popup">
        <div class="credit-popup__close" @click="closePopup">
                <div class="credit-popup__close_item"></div>
                <div class="credit-popup__close_item"></div>
        </div>
        <div class="credit-popup__wrap">
            <div class="credit-popup__info">
                <div class="credit-popup__info_title">АВТОКРЕДИТ</div> 
                <div class="credit-popup__info_subtitle">Получите одобрение за 15 минут!</div> 
                <div class="credit-popup__info_options">
                <div class="credit-popup__info_options-cash">
                    <div class="credit-popup__info_options-cash--icon"><img src="../../assets/images/popup_options_icon.png" />
                    </div>
                    <div class="credit-popup__info_options-cash--text">Первый взнос от <span> 10% = 99%</span> одобрения </div>
                </div>
                <div class="credit-popup__info_options-perc">                
                    <div class="credit-popup__info_options-perc--icon"><img src="../../assets/images/popup_options_icon.png" />
                    </div>
                    <div class="credit-popup__info_options-perc--text">Ставка от <span>8%</span></div>
                </div>
                <div class="credit-popup__info_options-gift">
                    <div class="credit-popup__info_options-gift--icon"><img src="../../assets/images/popup_options_icon.png" />
                    </div>
                    <div class="credit-popup__info_options-gift--text"><span> КАСКО</span> в Подарок!</div>
                </div>
                </div>
                <div class="credit-popup__info_form">
                    <input type="text" name="name" placeholder="Имя">
                    <input type="phone" name="phone" placeholder="+7 (___) ___-__-__">
                    <div class="credit-popup__info_form-button">Получить одобрение</div>
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
.credit-popup {
    display: flex;
    flex-direction: column;
    width: 743px;
    height: 306px;
    background: url('../../assets/images/pop-up\ credit\ back.png') 0px 0px/cover no-repeat;
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
            font-size: 24px;
            line-height: 28px;
            color: #000000;
        }
        &_subtitle {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 15px;
            color: #939393;
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
                    width: 15px;
                    height: 15px;
                    & img {
                        width: 100%;
                        height: auto;
                    }
                }
                &--text {
                    margin-left: 5px;
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 10px;
                    line-height: 19px;
                    color: #000000;
                    & span {
                        font-family: 'Inter';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 10px;
                        line-height: 190.52%;
                        color: #FFA724;
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