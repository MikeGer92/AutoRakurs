<template>
    <div class="bestoffer-form" id="bestoffer-form">
      <div class="bestoffer-form__wrapper">
        <div class="bestoffer-form__title">УЛУЧШИМ ЛЮБЫЕ<br>УСЛОВИЯ КОНКУРЕНТОВ!</div>
        <div class="bestoffer-form__subtitle">Оставьте заявку и получите самое выгодное<br>предложение на рынке!</div>
        <div class="bestoffer-form__errors" v-if="errors.length">
          <b>Ошибки при заполнении формы:</b>
            <!-- <ul>
              <li v-for="error in errors" :key="error">{{ error }}</li>
            </ul> -->
        </div>
        <input type="text" class="bestoffer-form__name" placeholder="ФИО" v-model="formName">
        <input type="phone" 
          class="bestoffer-form__phone" 
          placeholder="+7 (___)  ___-__-__" 
          v-model="formPhone" required
          v-phone
        >

        <CatalogRadioOrange  />

        <button class="bestoffer-form__btn" type="button" @click="checkForm(e)">Отправить заявку</button>
        <p class="bestoffer-form__info">После отправки заявки вам перезвонит сотрудник банка,<br>проконсультирует и примет недостающие данные по телефону.</p>
    </div>
  </div>
</template>

<script>
import CatalogRadioOrange from '@/components/catalog/CatalogRadioOrange.vue'
export default {
  name: 'BestOfferForm',
  components: { CatalogRadioOrange  },
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
 .bestoffer-form {
    max-width: 356px;
    // max-height: 386px;
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    box-shadow: 0px 5.91088px 6.50197px rgba(0, 0, 0, 0.25);
    border-radius: 23.0524px;
    &__wrapper {
      margin: 13px 40px 28px 17px;
      display: flex;
      flex-direction: column;
    }
    &__title {
      margin-bottom: 14px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 900;
      font-size: 21.3158px;
      line-height: 26px;
      color: #FFA724;
    }
    &__subtitle {
      margin-bottom: 21px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 10.0219px;
      line-height: 12px;
      color: #000000;
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
      width: 293px;
      height: 43px;
      padding: 0 0 0 13px;
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
      margin-top:20px;
      width: 306px;
      height: 48px;
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
    &__info {
      margin-top: 21px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 300;
      font-size: 8.76307px;
      line-height: 106.52%;
      color: #000000;
    }
  }

</style>