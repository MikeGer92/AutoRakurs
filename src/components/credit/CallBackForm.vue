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
@media (min-width: 1281px) and (max-width: 1920px) {
  .person-form {
    width: 570px;
    height: 620px;
    box-shadow: 0px 3.7922px 10.4285px rgba(0, 0, 0, 0.25);
    border-radius: 36.9739px;
    &__title {
      margin: 46px 0 30px 50px;
      font-size: 37.922px;
      line-height: 46px;
    }
    &__name, &__phone {
      width: 468px;
      height: 70px;
      border-radius: 94.0262px;
      font-size: 27.6993px;
      line-height: 34px;
      padding: 0 0 0 22;
      margin: 0 0 16px 38px;
    }
    &__btn {
      width: 490px;
      height: 76px;
      box-shadow: 0px 6.91402px 6.91402px rgba(0, 0, 0, 0.25);
      border-radius: 63.9547px;
    }
    &__info {
      width: 462px;
      font-size: 14.0551px;
      line-height: 106.52%;
      text-align: left;
    }
  }

}
@media (min-width: 769px) and (max-width: 1280px) {
  .person-form {
    width: 380px;
    height: 412px;
    box-shadow: 0px 2.52813px 6.95236px rgba(0, 0, 0, 0.25);
    border-radius: 24.6493px;
    &__title {
      margin: 31px 0 20px 32px;
      font-size: 25.2813px;
      line-height: 31px;
    }
    &__name, &__phone {
      width: 302px;
      height: 46px;
      border-radius: 62.6841px;
      font-size: 18.4662px;
      line-height: 22px;
      padding: 0 0 0 14;
      margin: 0 0 11px 25px;
    }
    &__btn {
      width: 302px;
      height: 50px;
      box-shadow: 0px 4.60935px 4.60935px rgba(0, 0, 0, 0.25);
      border-radius: 42.6365px;
      font-size: 18.4662px;
      line-height: 106.52%;
    }
    &__info {
      width: 308px;
      font-size: 9.37009px;
      line-height: 106.52%;
      text-align: left;
    }
  }

}
@media (min-width: 606px) and (max-width: 768px) {
  .person-form {
    width: 229px;
    height: 248px;
    box-shadow: 0px 1.51687px 4.17139px rgba(0, 0, 0, 0.25);
    border-radius: 14.7895px;
    &__title {
      margin: 19px 0 12px 20px;
      font-size: 15.1687px;
      line-height: 18px;
    }
    &__name, &__phone {
      width: 176px;
      height: 37px;
      border-radius: 37.6103px;
      font-size: 11.0797px;
      line-height: 13px;
      padding: 0 0 0 10px;
      margin: 0 0 11px 20px;
    }
    &__btn {
      margin: 12px 0 0 20px;
      width: 176px;
      height: 31px;
      box-shadow: 0px 2.7656px 2.7656px rgba(0, 0, 0, 0.25);
      border-radius: 25.5818px;
      font-size: 11.0797px;
      line-height: 106.52%;
    }
    &__info {
      margin: 14px 0 0 20px;
      width: 185px;
      font-size: 5.62202px;
      line-height: 106.52%;
      text-align: left;
    }
  }

}
@media (max-width: 605px) {
  .person-form {
    width: 100%;
    max-width: 330px;
    height: 360px;
    box-shadow: 0px 2px 6.05612px rgba(0, 0, 0, 0.25);
    border-radius: 21.4717px;
    margin-left: -10px;
    &__title {
      margin: 26px 0 26px 28px;
      font-size: 22.0223px;
      line-height: 27px;
      font-size: 27.6993px;
      line-height: 106.52%;
    }
    &__name, &__phone {
      width: 285px;
      height: 40px;
      margin: 0 22px 10px 22px;
      font-size: 16.0857px;
      line-height: 19px;
      padding: 0 0 0 13px;
    }
    &__btn {
      margin: 26px 0 26px 22px;
      width: 285px;
      height: 44px;
      font-size: 16.0857px;
      line-height: 106.52%;
      box-shadow: 0px 4.01515px 4.01515px rgba(0, 0, 0, 0.25);
      border-radius: 37.1401px;
    }
    &__info {
      margin: 0 37px 26px 25px;
      font-size: 8.16217px;
      line-height: 106.52%;
      text-align: left;
    }
  }
}
</style>