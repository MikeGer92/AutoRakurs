<template>
    <div class="gifts-popup">
      <ClosePopup :style="{'align-self': 'flex-end', 'margin-top': '12px'}"/>
        <div class="gifts-popup__wrap">
            <div class="gifts-popup__info">
                <div class="gifts-popup__info_title">Время выбирать подарки</div> 
                <div class="gifts-popup__info_options">
                <div class="gifts-popup__info_options-cash">
                    <div class="gifts-popup__info_options-cash--icon"><img src="../../assets/images/popup_options_icon.png" />
                    </div>
                    <div class="gifts-popup__info_options-cash--text">КАСКО</div>
                </div>
                <div class="gifts-popup__info_options-perc">                
                    <div class="gifts-popup__info_options-perc--icon"><img src="../../assets/images/popup_options_icon.png" />
                    </div>
                    <div class="gifts-popup__info_options-perc--text">3 платежа по кредиту</div>
                </div>
                <div class="gifts-popup__info_options-gift">
                    <div class="gifts-popup__info_options-gift--icon"><img src="../../assets/images/popup_options_icon.png" />
                    </div>
                    <div class="gifts-popup__info_options-gift--text">3 ТО</div>
                </div>
                </div>
                <FormPopup />
            </div>
        </div>

    </div>
</template>

<script>
import FormPopup from './FormPopup.vue';
import ClosePopup from './ClosePopup.vue';
    export default {
    name: "GiftsPopup",
    components: { FormPopup, ClosePopup }
}
</script>

<style lang="scss">
.gifts-popup {
    display: flex;
    flex-direction: column;
    width: 743px;
    height: 306px;
    background: url('../../assets/images/pop-up\ gift\ back.png') 0px 0px/cover no-repeat;
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
        margin: -24px 35px 0 0;
        &_title {
            width: 222px;
            height: 41px;    
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 22px;

            color: #10205E;
            
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
                    height: 13px;
                    & img {
                        width: 100%;
                        height: auto;
                    }
                }
                &--text {
                    margin-left: 5px;
                    width: 271px;
                    height: 12px;
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