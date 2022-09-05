<template>
    <div class="thregift-popup">
      <ClosePopup :style="{'align-self': 'flex-end', 'margin-top': '12px'}"/>
        <div class="thregift-popup__wrap">
            <div class="thregift-popup__info">
                <div class="thregift-popup__info_title">З ТО <span>в подарок!</span></div> 
                <div class="thregift-popup__info_subtitle">При покупке автомобиля в кредит</div> 
                <div class="thregift-popup__info_form">
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
        name: 'ThreeServePopup',
        components: { FormPopup, ClosePopup }
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
    &__info {
        display: flex;
        width: 246px;
        flex-direction: column;
        margin: -12px 35px 0 0;
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
        }
    }
}

</style>