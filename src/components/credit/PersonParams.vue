<template>
    <div class="person">
    <div class="person__left">
      <div class="person__left_num">3</div>
      <div class="person__left_border"></div>
    </div>
    <div class="person__right">
      <div class="person__right_title">ЗАПОЛНИТЕ ПЕРСОНАЛЬНЫЕ ДАННЫЕ</div>
      <div class="person__right_main">
        <div class="person__right_main-left">
          <div class="person__form">
            <div class="person__form_title">Персональные данные</div>
            <input type="text" class="person__form_name" placeholder="ФИО">
            <input type="phone" class="person__form_phone" placeholder="+7 (___)  ___-__-__">

            <CustomRadio />

            <button class="person__form_btn" type="button">Отправить заявку</button>
            <p class="person__form_info">После отправки заявки вам перезвонит сотрудник банка,<br>проконсультирует и примет недостающие данные по телефону.</p>
          </div>
        </div>
        <div class="person__right_main-right">
          <div class="person__howget">
            <div class="person__howget_info">Как получить кредит</div>
            <div class="person__howget_req">Требования к заемщику</div>
            <div class="person__howget_docs">Документы</div>
            <ol>
              <li>Паспорт гражданина РФ;</li>
              <li>Оригинал документа, подтверждающего доход за 6 месяцев:
                <ul>
                  <li>справка 2-НДФЛ;</li>
                  <li>справка по форме банка;</li>
                  <li>выписка по личному банковскому счету.</li>
                </ul>
              </li>
            </ol>
            <div class="person__howget_divider"></div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomRadio from '@/components/CustomRadio.vue'
export default {
  name: 'PersonParams',
  components: { CustomRadio }
}
</script>

<style lang="scss">
.person {
  display: flex;
  &__left {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    &_num {
      width: 104px;
      height: 104px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 81.2517px;
      line-height: 98px;
      color: #FFFFFF;
      background: linear-gradient(145.18deg, #12609E 5.86%, #10205E 93.37%);
      box-shadow: 0px 3.14081px 21.2005px rgba(0, 0, 0, 0.25);
      border-radius: 52px;
    }
    &_border {
      width: 3px;
      height: 408px;
      background: linear-gradient(to top,  #FFF 0%, #FFA724  80%);
    }
  }
  &__right {
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    &_title {
      display: flex;
      margin-left: 100px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 45.9755px;
      line-height: 56px;
      color: #000000;
    }
    &_main {
      display: flex;
      margin: 62px 0 136px 100px;
      &-left {
        width: 50%;
        margin-right: 115px;
      }
      &-right {
        width: 50%;
      }
    }
  }
  &__form {
    width: 750px;
    height: 814px;
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    box-shadow: 0px 4.98225px 13.7012px rgba(0, 0, 0, 0.25);
    border-radius: 48.5769px;
    &_title {
      display: flex;
      margin: 61px 0 64px 64px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 49.8225px;
      line-height: 60px;
      color: #000000;
    }
    &_name, &_phone {
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
    &_btn {
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
    }
    &_info {
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
  &__howget {
    width: 740px;
    height: 814px;
    display: flex;
    flex-direction: column;
    &_info, &_req {
      display: flex;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 31.2594px;
      line-height: 68px;
      text-decoration-line: underline;
      color: #10205E;
      cursor: pointer;
    }
    &_docs {
      display: flex;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 31.2594px;
      line-height: 68px;
      color: #FFA724;
      text-decoration: underline;
      cursor: pointer;
    }
    & ol {
      padding: 0;
      display: inline-block;
      text-decoration: none;
      & li {
        margin-bottom: 110px;
        flex-direction: column;
        margin-left: 25px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 300;
        font-size: 31.2594px;
        line-height: 68px;
        color: #000000;
        &:last-child {
          margin-bottom: 0;
        }
        & ul {
          list-style: none;
          & li {
            margin-bottom: 0;
          }
        }
      }
    }
    &_divider {
      display: block;
      margin-top: 50px;
      width: 561px;
      height: 7px;
      background: linear-gradient(to right,  #FFF 0%, #7D8A98  20%, #7D8A98  80%,  #FFF 100%,);
      align-self: center;
    }
  }
}

</style>