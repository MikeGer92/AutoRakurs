<template>
    <div class="person">
    <div class="person__left">
      <div class="person__left_num">{{ blockNum }}</div>
      <div class="person__left_border-y"></div>
    </div>
    <div class="person__right">
      <div class="person__right_title">ЗАПОЛНИТЕ ПЕРСОНАЛЬНЫЕ ДАННЫЕ</div>
      <div class="credit-params__left_border-x"></div>
      <div class="person__right_main">
        <div class="person__right_main-left">

          <CallBackForm />

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
import CallBackForm from '@/components/credit/CallBackForm.vue'
export default {
  name: 'PersonParams',
  components: { CallBackForm },
  props: {
    blockNum: {
      type: String,
      default:() => ''
    }
  },
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
    &_border-y {
      width: 7px;
      height: 408px;
      background: linear-gradient(to top,  #FFF 0%, #FFA724  80%);
    }
    &_border-x {
      display: none;
      width: 408px;
      height: 2px;
      background: linear-gradient(to left,  #FFF 0%, #FFA724  80%);
      margin-left: -12px;
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
  &__howget {
    width: 740px;
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
        text-align: left;
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
            text-align: left;
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
@media (min-width: 1280px) and (max-width: 1921px) {
  .person {
    margin: 0 0 37px 22px;
    &__left {
      margin: 33px 0 0 10px;
      &_num {
        width: 80px;
        height: 80px;
        font-size: 61.844px;
        line-height: 75px;
        box-shadow: 0px 2.3906px 16.1366px rgba(0, 0, 0, 0.25);
      }
      &_border-y {
        width: 3px;
        height: 310px;
      }
    }
    &__right {
      margin-top: 56px;
      &_title {
        margin-left: 76px;
        font-size: 34.9938px;
        line-height: 42px;
      }
      &_main {
        margin: 48px 0 67px 76px;
        &-left {
          margin-right: 88px;
        }
      }
    }
    &__howget {
      width: 540px;
      &_info, &_req {
        font-size: 23.7928px;
        line-height: 52px;
      }
      &_docs {
        font-size: 23.7928px;
        line-height: 52px;
      }
      & ol {
        & li {
          font-size: 23px;
          line-height: 52px;
          margin-bottom: 75px;
          margin-left: 18px;
        }
      }
      &_divider {
        margin-top: 15px;
        width: 427px;
        height: 5px;
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 1281px) {
  .person {
    margin: 0 0 25px 15px;
    &__left {
      margin: 25px 0 0 6px;
      &_num {
        width: 53px;
        height: 53px;
        font-size: 41.2294px;
        line-height: 50px;
        box-shadow: 0px 1.59373px 10.7577px rgba(0, 0, 0, 0.25);
      }
      &_border-y {
        width: 3px;
        height: 207px;
      }
    }
    &__right {
      margin-top: 37px;
      &_title {
        margin-left: 50px;
        font-size: 23.3292px;
        line-height: 28px;
      }
      &_main {
        margin: 48px 0 0px 50px;
        &-left {
          margin-right: 88px;
        }
      }
    }
    &__howget {
      width: 354px;
      &_info, &_req {
        font-size: 15.8619px;
        line-height: 34px;
      }
      &_docs {
        font-size: 15.8619px;
        line-height: 34px;
      }
      & ol {
        padding-inline-start: 10px;
        & li {
          font-size: 15px;
          line-height: 34px;
          margin-bottom: 52px;
          margin-left: -20px;
        }
      }
      &_divider {
        margin-top: 10px;
        width: 285px;
        height: 3px;
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 1281px) {
  .person {
    margin: 0 0 25px 9px;
 &__left {
      margin: 10px 0 0 4px;
      &_num {
        width: 32px;
        height: 32px;
        font-size: 24.7375px;
        line-height: 30px;
        box-shadow: 0px 0.956236px 6.45459px rgba(0, 0, 0, 0.25);
      }
      &_border-y {
        height: 124px;
        width: 2.23px;
      }
    }
    &__right {
      margin-top: 17px;
      &_title {
        margin-left: 30px;
        font-size: 13.9975px;
        line-height: 17px;
      }
      &_main {
        margin: 20px 0 0px 30px;
        &-left {
          margin-right: 35px;
        }
      }
    }
    &__howget {
      width: 211px;
      &_info, &_req {
        font-size: 9.51708px;
        line-height: 21px;
      }
      &_docs {
        font-size: 9.51708px;
        line-height: 21px;
      }
      & ol {
        padding-inline-start: 40px;
        margin: 8px 0;
        & li {
          font-size: 9.51708px;
          line-height: 21px;
          margin-bottom: 10px;
          margin-left: -20px;
        }
      }
      &_divider {
        margin-top: 5px;
        width: 170px;
        height: 2px;
      }
    }
  }
}
@media ( max-width: 600px) {
  .person {
    &__left {
      margin: 8px 0 0 17px;
      &_num {
        width: 38px;
        height: 38px;
        border-radius: 50%;
        font-size: 29.5654px;
        line-height: 36px;
      }
      &_border-y {
        display: none;
      }
      &_border-x {
        display: flex;
        width: 290px;
        margin: 4px 0 0 -2px;
      }
    }
    &__right {
      margin-top: 18px;
      &_title {
        margin-left: 6px;
        font-size: 11.9048px;
        line-height: 14px;
      }
      &_main {
        margin: 25px 0 0 0px;
        flex-wrap: wrap;
        justify-content: center;
        &-left {
          width: 100%;
          margin-right: 0;
        }
        &-right {
          margin-left: 0;
          width: 100%;
        }
      }
    }
    &__howget {
      margin-top: 15px;
      width: 290px;
      &_info, &_req {
        font-size: 12.8012px;
        line-height: 192.02%;
        color: #000000;
      }
      &_docs {
        font-size: 12.8012px;
        line-height: 192.02%;
        color: #12609E;
      }
      & ol {
        padding-inline-start: 0;
        & li {
          font-size: 12.8012px;
          line-height: 154.02%;
          margin-bottom: 0;
          margin-left: 0;
          & ul {
            padding-inline-start: 20px;
          }
        }
      }
      &_divider {
        margin-top: 0px;
        margin-bottom: 20px;
        width: 230px;
        height: 1px;
      }
    }
  } 

}
</style>