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
      width: 3px;
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
        margin: 25px 0 0 -10px;
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