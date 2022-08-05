<template>
    <div class="catalog-form" id="catalog-person-form">
      <div class="catalog-form__wrapper">
        <div class="catalog-form__title">Ваше персональное<br> предложение на покупку<br> автомобиля уже ждет Вас!</div>
        <div class="catalog-form__errors" v-if="errors.length">
          <b>Ошибки при заполнения формы:</b>
            <!-- <ul>
              <li v-for="error in errors" :key="error">{{ error }}</li>
            </ul> -->
        </div>
        <input type="text" class="catalog-form__name" placeholder="ФИО" v-model="formName">
        <input 
          type="phone" 
          class="catalog-form__phone" 
          placeholder="+7 (___)  ___-__-__" 
          v-model="formPhone" required
          v-phone
        >
        <button class="catalog-form__btn" type="button" @click="checkForm(e)">Отправить заявку</button>

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
      formName: '',
      formPhone: '',
      errors: []

    }
  },
  methods: {
    checkForm(e) {
      if (this.formName && this.formPhone && this.formPhone.length===18) {
        this.clearForm()
        return true;
      }
      this.errors = [];
      if (!this.formName) {
        this.errors.push('Требуется указать имя');
      }
      if (!this.formPhone || this.formPhone.length<18) {
        this.errors.push('Требуется указать телефон');
      }
      e.preventDefault();
    },
    clearForm() {
      this.errors = [],
      this.formName = ''
      this.formPhone = ''
      alert('Данные успешно отправлены!')
    }
  }
}
</script>

<style lang="scss">
 .catalog-form {
    max-width: 458px;
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
    &__errors {
      display: flex;
      flex-direction: column;
      align-self: center;
      & b {
        font-weight: 900;
        color: red;
      }
      & ul {
        display: flex;
        flex-direction: column;
        align-self: center;
      }
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
@media (min-width: 1281px) and (max-width: 1920px) {
  .catalog-form {
    max-width: 349px;
    margin: 0;
    box-shadow: 0px 4.49339px 4.94272px rgba(0, 0, 0, 0.25);
    border-radius: 17.5242px;
    &__wrapper {
      margin: 27px 23px 22px 30px;
    }
    &__title {
      font-size: 17.7377px;
      line-height: 21px;
    }
    &__errors {
      margin-bottom: 15px;
    }
    &__name, &__phone {
      width: 275px;
      height: 32px;
      border-radius: 44.5648px;
      font-size: 13.1284px;
      line-height: 16px;
    }
    &__btn {
      width: 290px;
      height: 36px;
      font-size: 13.1284px;
      line-height: 106.52%;
      box-shadow: 0px 3.27698px 3.27698px rgba(0, 0, 0, 0.25);
      border-radius: 30.3121px;
    }
  }
}
@media (min-width: 769px) and (max-width: 1280px) {
  .catalog-form {
    max-width: 232px;
    margin: 0;
    box-shadow: 0px 4.49339px 4.94272px rgba(0, 0, 0, 0.25);
    border-radius: 17.5242px;
    &__wrapper {
      margin: 18px 15px 15px 15px;
    }
    &__title {
     font-size: 11.8379px;
     line-height: 14px;
     margin-bottom: 11px;
    }
    &__errors {
      font-size: 10px;
      margin-bottom: 8px;
    }
    &__name, &__phone {
      padding: 0 0 0 9px;
      width: 191px;
      height: 20px;
      border-radius: 29px;
      font-size: 8.76169px;
      line-height: 11px;
    }
    &__btn {
      margin-top: 14px;
      width: 200px;
      height: 23px;
      font-size: 8.76169px;
      line-height: 106.52%;
      box-shadow: 0px 2.18701px 2.18701px rgba(0, 0, 0, 0.25);
      border-radius: 20.2298px;
    }
  }
}
@media (min-width: 606px) and (max-width: 768px) {
  .catalog-form {
    max-width: 141px;
    margin: 0;
    box-shadow: 0px 1.81208px 1.99329px rgba(0, 0, 0, 0.25);
    border-radius: 7.06711px;
    &__wrapper {
      margin: 11px 10px 10px 12px;
    }
    &__title {
      font-size: 7.15323px;
      line-height: 9px;
      margin-bottom: 7px;
    }
    &__errors {
      font-size: 7px;
      margin-bottom: 8px;
    }
    &__name, &__phone {
      padding: 0 0 0 9px;
      width: 111px;
      height: 14px;
      border-radius: 17.972px;
      font-size: 5.29438px;
      line-height: 6px;
    }
    &__btn {
      margin-top: 0px;
      width: 121px;
      height: 14px;
      font-size: 5.29438px;
      line-height: 106.52%;
      box-shadow: 0px 1.32153px 1.32153px rgba(0, 0, 0, 0.25);
      border-radius: 12.2242px;
    }
  }
}
</style>