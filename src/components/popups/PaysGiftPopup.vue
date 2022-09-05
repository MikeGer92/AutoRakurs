<template>
    <div class="cregift-popup">
        <div class="cregift-popup__close" @click="closePopup">
                <div class="cregift-popup__close_item"></div>
                <div class="cregift-popup__close_item"></div>
        </div>
        <div class="cregift-popup__wrap">
            <div class="cregift-popup__info">
                <div class="cregift-popup__info_title">З ПЛАТЕЖА ПО КРЕДИТУ <span>в подарок!</span></div> 
                <div class="cregift-popup__info_subtitle">При покупке автомобиля в кредит</div> 
                <div class="cregift-popup__info_form">
                    <FormPopup/>
                </div> 
            </div>
        </div>

    </div>
</template>

<script>  import FormPopup from './FormPopup.vue';
    export default {
        name: 'PaysGiftPopup',
        components: { FormPopup }
    }
</script>

<style lang="scss">
.cregift-popup {
    display: flex;
    flex-direction: column;
    width: 743px;
    height: 306px;
    background: url('../../assets/images/pop-up_3_back.png') 0px 0px/cover no-repeat;
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
        width: 222px;
        flex-direction: column;
        margin: 0px 35px 0 0;
        &_title {
            margin: 0 0 20px 0;
            width: 167px;
            height: 66px;
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 26px;
            color: #000000;
            & span {
                font-family: 'Raleway';
                font-style: normal;
                font-weight: 700;
                font-size: 24px;
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
            margin-bottom: 10px;
        }
        &_form {
            display: flex;
            flex-direction: column;
           
        }
    }
}

</style>