<template>
    <div class="casco-popup">
      <ClosePopup :style="{'align-self': 'flex-end', 'margin-top': '12px'}" />
        <!-- <div class="casco-popup__close">
                <div class="casco-popup__close_item"></div>
                <div class="casco-popup__close_item"></div>
        </div> -->
        <div class="casco-popup__wrap">
            <div class="casco-popup__info">
                <div class="casco-popup__info_title">КАСКО <span> в подарок! </span></div> 
                <div class="casco-popup__info_subtitle">При покупке автомобиля в кредит</div> 
                <div class="casco-popup__info_form">
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
        name: 'KaskoPopup',
        components: { FormPopup, ClosePopup }
    }
</script>

<style lang="scss">
.casco-popup {
    display: flex;
    flex-direction: column;
    width: 743px;
    height: 306px;
    background: url('../../assets/images/pop-up_casko_back.png') 0px 0px/cover no-repeat;
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
            width: 176px;
            height: 66px;
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 700;
            font-size: 32px;
            line-height: 28px;
            color: #000000;
            & span {
                font-family: 'Raleway';
                font-style: normal;
                font-weight: 700;
                font-size: 32px;
                line-height: 89.9%;
                color: #12609E;

            }
        }
        &_subtitle {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 15px;
            color: #000000;
            margin: 0px 0px 27px 0;
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
                width: 176px;
                height: 66px;
                font-family: 'Raleway';
                font-style: normal;
                font-weight: 700;
                font-size: 32px;
                line-height: 89.9%;
                color: #12609E;
                    & span {
                        font-family: 'Inter';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 32px;
                        line-height: 190.52%;
                        
                    color: #000000;
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