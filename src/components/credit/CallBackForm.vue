<template>
    <div class="person-form" id="person-form">
    <div class="person-form__title">Персональные данные</div>
    <div class="person-form__errors" v-if="errors.length">
      <b>Пожалуйста исправьте указанные ошибки:</b>
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
    </div>
    <input type="text" class="person-form__name" placeholder="ФИО" v-model="formName">
    <input type="phone" v-phone class="person-form__phone" placeholder="+7 (___)  ___-__-__" v-model="formPhone" required>

    <CustomRadio />

    <button 
      class="person-form__btn" 
      type="button"
      @click="checkForm(e)"
    >
      Отправить заявку
    </button>
    <p class="person-form__info">После отправки заявки вам перезвонит сотрудник банка,<br>проконсультирует и примет недостающие данные по телефону.</p>
  </div>
</template>

<script>
import CustomRadio from '@/components/CustomRadio.vue'
export default {
  name: 'CallBackForm',
  components: { CustomRadio },
  data() {
    return {
      formName: '',
      formPhone: '',
      errors: []
    }
  },
  methods: {
    checkForm(e) {
      if (this.formName && this.formPhone) {
        this.clearForm()
        return true;
      }
      this.errors = [];
      if (!this.formName) {
        this.errors.push('Требуется указать имя');
      }
      if (!this.formPhone) {
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
 .person-form {
    width: 750px;
    height: 814px;
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    box-shadow: 0px 4.98225px 13.7012px rgba(0, 0, 0, 0.25);
    border-radius: 48.5769px;
    &__title {
      display: flex;
      margin: 61px 0 64px 64px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 49.8225px;
      line-height: 60px;
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
      width: 615px;
      height: 90px;
      padding: 0 0 0 30px;
      margin: 0 0 22px 50px;
      background: #F0F0F0;
      border: none;
      border-radius: 123.533px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 36.3918px;
      line-height: 44px;
      color: #939393;
    }
    &__btn {
      margin: 40px 0 0 50px;
      width: 644px;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 36.3918px;
      line-height: 106.52%;
      color: #FFFFFF;
      border: none;
      background: linear-gradient(90.43deg, #12609E 17.95%, #10205E 83.93%);
      box-shadow: 0px 9.08375px 9.08375px rgba(0, 0, 0, 0.25);
      border-radius: 84.0247px;
      cursor: pointer;
    }
    &__info {
      margin: 44px 0 0 59px;
      width: 607px;
      height: 46px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 300;
      font-size: 18.4658px;
      line-height: 106.52%;
      color: #000000;

    }
  }

</style>