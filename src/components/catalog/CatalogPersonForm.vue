<template>
    <div class="catalog-form">
      <div class="catalog-form__wrapper">
        <div class="catalog-form__title">Ваше персональное<br> предложение на покупку<br> автомобиля уже ждет Вас!</div>
        <input type="text" class="catalog-form__name" placeholder="ФИО">
        <input type="phone" class="catalog-form__phone" placeholder="+7 (___)  ___-__-__">
        <button class="catalog-form__btn" type="button">Отправить заявку</button>

        <CatalogRadioBlue />

    </div>
  </div>
</template>

<script>
import CatalogRadioBlue from '@/components/catalog/CatalogRadioBlue.vue'
export default {
  name: 'CatalogPersonForm',
  components: { CatalogRadioBlue },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss">
 .catalog-form {
    max-width: 458px;
    max-height: 386px;
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    box-shadow: 0px 5.91088px 6.50197px rgba(0, 0, 0, 0.25);
    border-radius: 23.0524px;
    &__wrapper {
      margin: 36px 31px 30px 31px;
      display: flex;
      flex-direction: column;
    }
    &__title {
      margin-bottom: 22px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 23.3333px;
      line-height: 28px;
      color: #FFA724;
    }
    &__name, &__phone {
      display: flex;
      width: 379px;
      height: 43px;
      padding: 0 0 0 16px;
      margin: 0 0 10px 0;
      border: none;
      background: #F0F0F0;
      border-radius: 58.6233px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 17.2699px;
      line-height: 21px;
      color: #939393;
    }
    &__btn {
      margin-top:18px;
      width: 395px;
      height: 47px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 17.2699px;
      line-height: 106.52%;
      color: #FFFFFF;
      border: none;
      background: linear-gradient(90.43deg, #12609E 17.95%, #10205E 83.93%);
      box-shadow: 0px 4.31074px 4.31074px rgba(0, 0, 0, 0.25);
      border-radius: 39.8744px;
      cursor: pointer;
    }
  }

</style>