<template>
    <div class="thregift-popup">
        <div class="thregift-popup__close" @click="closePopup">
                <div class="thregift-popup__close_item"></div>
                <div class="thregift-popup__close_item"></div>
        </div>
        <div class="thregift-popup__wrap">
            <div class="thregift-popup__info">
                <div class="thregift-popup__info_title">З ТО <span>в подарок!</span></div> 
                <div class="thregift-popup__info_subtitle">При покупке автомобиля в кредит</div> 
                <div class="thregift-popup__info_form">
                    <input type="text" name="name" placeholder="Имя">
                    <input type="phone" name="phone" placeholder="+7 (___) ___-__-__">
                    <div class="thregift-popup__info_form-button">Получить одобрение</div>
                </div> 
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'thregift'
        
    }
</script>

<style lang="scss">
.thregift-popup {
    display: flex;
    flex-direction: column;
    width: 743px;
    height: 306px;
    background: url('../../assets/images/pop-up_3_to_back.png') 0px 0px/cover no-repeat;
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
            font-size: 36px;
            line-height: 28px;
            color: #000000;
            & span {
                font-family: 'Raleway';
                font-style: normal;
                font-weight: 700;
                font-size: 24px;
                line-height: 89.9%;
                color: #FFA724;

            }
        }
        &_subtitle {
            margin: 15px 0 35px 0;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 15px;
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
                width: 226px;
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
                margin-bottom: 8px;

            }
            &-button {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 240px;
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