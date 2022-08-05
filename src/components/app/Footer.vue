<template>
  <div class="footer">
    <div class="footer__main">
      <div class="footer__main_left">
        <div class="footer__main_left-salon">
          <div class="footer__main_left-salon--info">
            <div class="footer__main_left-salon--info_title">АВТОСАЛОН</div>
            <ul class="footer__main_left-salon--info_list">
              <li>НОВЫЕ АВТОМОБИЛИ</li>
              <li>АКЦИИ</li>
              <li>О КОМПАНИИ</li>
            </ul>
          </div>
          <div class="footer__main_left-salon--contact">
            <div class="footer__main_left-salon--contact_title">КОНТАКТЫ</div>
            <ul class="footer__main_left-salon--contact_list">
              <li>+7 (495) 085-71-54</li>
              <li :style="`width: 389px`">Россия, г. Москва, Ближние Прудищи, вл. 1, стр. 1</li>
              <li>info@auto-racurs.ru</li>
            </ul>
          </div>
          <div class="footer__main_left-salon--credits">
          <div class="footer__main_left-salon--credits_title">КРЕДИТЫ</div>
          <ul class="footer__main_left-salon--credits_list">
            <li>АВТОКРЕДИТ</li>
            <li>TRADE-IN</li>
            <li>ПЕРВЫЙ АВТОМОБИЛЬ</li>
            <li>СЕМЕЙНЫЙ АВТОМОБИЛЬ</li>
            <li>УТИЛИЗАЦИЯ</li>
          </ul>
        </div>
        </div>
      </div>
      <div class="footer__main_right">
        <div class="footer__main_right-title">
          <div 
          class="footer__main_right-title--wrapp" 
          @click="showBrands = !showBrands"
        >
          АВТОМОБИЛИ В НАЛИЧИИ
          <img 
            class="footer__main_right-title--img"
            :class="{'footer__main_right-title--img-active': showBrands}" 
            src="../../assets/images/footer-show-brands.png"
          >
        </div>
        </div>
        <div class="footer__main_right-list" v-if="showBrands">
          <div class="footer__main_right-list--item" v-for="(brand, idx) in brands" :key="idx">{{ brand.name }}</div>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="footer__bottom_left">
        <div class="footer__bottom_left-title">© 1998-2022 “АВТОРАКУРС”</div>
        <div class="footer__bottom_left-confid"><a>Политика конфиденциальности</a></div>
        <div class="footer__bottom_left-confirm"><a>Пользовательское Соглашение Условия кредитования</a></div>
      </div>
      <div class="footer__bottom_right">Обращаем ваше внимание на то, что данный интернет-сайт носит исключительно информационный характер и ни при каких <br>условиях не является публичной офертой, определяемой положением ч. 2 ст. 437 Гражданского кодекса Российской Федерации.</div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Footer',
    props: {
    brands: Array,
    default: () => []
  },
  data() {
    return {
      showBrands: true,
      marks: [
        {name: 'HYUNDAI', logo: '../assets/images/brands-logo/hundai.svg'},
        {name: 'HYUNDAI', logo: '../assets/images/brands-logo/hundai.svg'},
        {name: 'HYUNDAI', logo: '../assets/images/brands-logo/hundai.svg'},
        {name: 'HYUNDAI', logo: '../assets/images/brands-logo/hundai.svg'},
        {name: 'HYUNDAI', logo: '../assets/images/brands-logo/hundai.svg'},
        {name: 'HYUNDAI', logo: '../assets/images/brands-logo/hundai.svg'},
        {name: 'HYUNDAI', logo: '../assets/images/brands-logo/hundai.svg'}
      ]
    }
  },
  mounted() {
    this.getShowBrands()
  },
  methods: {
    getShowBrands() {
      if (window.innerWidth < 600 ) {
        this.showBrands = false
      }
    }
  }
}

</script>

<style lang="scss">
.footer {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 2065px;
  // height: 444px;
  background: #000000;
  &__main {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    &_left {
      display: flex;
      flex-flow: column wrap;
      &-salon {
        display: flex;
        margin: 44px 0 0 117px;
        flex-wrap: wrap;
        max-width: 580px;
        justify-content: space-between;
        &--info, &--contact, &--credits {
          display: flex;
          flex-direction: column;
          &_title {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 900;
            font-size: 29.0757px;
            line-height: 35px;
            color: #FFFFFF;
          }
          & ul {
            padding-left: 0;
            list-style: none;
            margin: 0;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-size: 15.7924px;
            line-height: 19px;
            color: #FFFFFF;
            & li {
              margin: 24px -0;
            }
          }
        }
        &--info {
          order: 0;
        }
        &--contact {
          order: 2;
          margin-top: -55px;
        }
        &--credits {
          order: 1;
        }
      }
    }
    &_right {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 1132px;
      &-title {
        display: flex;
        margin: 44px 0 0 0;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 900;
        font-size: 29.0757px;
        line-height: 35px;
        color: #FFFFFF;
        &--img {
          display: none;
        }
      }
      &-list {
        display: flex;
        flex-wrap: wrap;
        margin: 12px auto 64px 0;
        &--item {
          margin: 12px 0;
          width: 192px;
          font-family: 'Inter';
          font-style: normal;
          font-weight: 500;
          font-size: 15.7924px;
          line-height: 19px;
          color: #FFFFFF;
        }
      }
    }
  }
  &__bottom {
    width: 100%;
    max-width: 2065px;
    border-top: 1px solid #FFFFFF;
    display: flex;
    justify-content: space-between;
    // flex-wrap: wrap;
    &_left {
      width: 100%;
      max-width: 430px;
      margin: 26px 0 64px 120px;
      &-title {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 900;
        font-size: 15.79px;
        line-height: 19px;
        color: #FFFFFF;
      }
      &-confid, &-confirm {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 15.79px;
        line-height: 19px;
        text-decoration-line: underline;
        color: #FFFFFF;
      }
    }
    &_right {
      width: 100%;
      max-width: 1026px;
      margin: 45px auto 0 71px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 15.7924px;
      line-height: 19px;
      color: #FFFFFF;
    }
  }
}
@media (min-width: 1281px) and (max-width: 1920px) {
  .footer {
    max-width: 1920px;
    &__main {
      &_left {
        &-salon {
          margin: 41px 0 0 108px;
          &--info, &--contact, &--credits {
            &_title {
              font-size: 27.0199px;
              line-height: 33px;
            }
            & ul {
              font-size: 14.6758px;
              line-height: 18px;
              & li {
                margin: 22px 0;
              }
            }
          }
        }
      }
      &_right {
        &-title {
          margin: 27px 0 0 100px;
        }
        &-list {
          margin: 11px 0 41px 100px;
          &--item {
            font-size: 14.6758px;
            line-height: 18px;
            margin: 11px 0;
          }

        }
      }
    }
    &__bottom {
      max-width: 1920px;
      &_left {
        max-width: 402px;
        margin: 24px 0 60px 112px;
        &-title {
          font-size: 14.6736px;
          line-height: 18px;
        }
        &-confid, &-confirm {
          font-size: 14.6736px;
          line-height: 18px;
        }
      }
      &_right {
        max-width: 954px;
        margin: 43px 97px 0 ;
        font-size: 14.6736px;
        line-height: 18px;
      }
    }
  }

}
@media (min-width: 769px) and (max-width: 1280px) {
  .footer {
    max-width: 1280px;
    &__main {
      &_left {
        &-salon {
          margin: 27px 0 0 72px;
          max-width: 360px;
          &--info, &--contact, &--credits {
            &_title {
              font-size: 18.0113px;
              line-height: 22px;
            }
            & ul {
              font-size: 9.78281px;
              line-height: 12px;
              & li {
                margin: 15px 0;
              }
            }
          }
        }
      }
      &_right {
        max-width: 832px;
        &-title {
          margin: 27px 0 0 80px;
          font-size: 18.0113px;
          line-height: 22px;
        }
        &-list {
          margin: 11px 0 27px 80px;
          &--item {
            width: 148px;
            font-size: 9.78281px;
            line-height: 12px;
            margin: 11px 0;
          }

        }
      }
    }
    &__bottom {
      max-width: 1280px;
      &_left {
        max-width: 267px;
        margin: 16px 0 40px 74px;
        &-title {
          font-size: 9.78135px;
          line-height: 12px;
        }
        &-confid, &-confirm {
          font-size: 9.78135px;
          line-height: 12px;
        }
      }
      &_right {
        max-width: 636px;
        margin: 28px 64px 0 ;
        font-size: 9.78281px;
        line-height: 12px;
      }
    }
  }
}
@media (min-width: 606px) and (max-width: 768px) {
  .footer {
    max-width: 768px;
    &__main {
      &_left {
        &-salon {
          margin: 17px 0 15px 44px;
          max-width: 250px;
          &--info, &--contact, &--credits {
            &_title {
              font-size: 10.9048px;
              line-height: 13px;
            }
            & ul {
              font-size: 5.92293px;
              line-height: 7px;
              & li {
                margin: 9px 0;
              }
            }
          }
          &--contact {
            &_title {
              margin-top: 37px;
            }
          }
        }
      }
      &_right {
        max-width: 450px;
        &-title {
          margin: 17px 0 0 44px;
          font-size: 10.9048px;
          line-height: 13px;
        }
        &-list {
          margin: 4.5px 0 0px 44px;
          &--item {
            width: 72px;
            font-size: 5.92293px;
            line-height: 7px;
            margin: 4.5px 0;
          }

        }
      }
    }
    &__bottom {
      max-width: 768px;
      &_left {
        max-width: 161px;
        margin: 10px 0 30px 44px;
        &-title {
          font-size: 5.92204px;
          line-height: 7px;
        }
        &-confid, &-confirm {
          font-size: 5.92204px;
          line-height: 7px;
        }
      }
      &_right {
        max-width: 385px;
        margin: 15px 44px 30px 0;
        font-size: 5.92293px;
        line-height: 7px;
      }
    }
  }
}
@media (max-width: 605px) {
  .footer {
    &__main {
      flex-direction: column;
      margin: 24px 0 0 45px;
      &_left {
        order: 2;
        &-salon {
          margin: 42px 0 0 0;
          &--contact, &--credits {
            margin: 16px 0 0 0;
            & ul {
              & li {
                max-width: 281px;
              }
            }
          }
        }
      }
      &_right {
        order: 1;
        &-title {
          margin-top: 23px;
          &--img {
            display: inline-flex;
            margin-left: 9px;
            cursor: pointer;
            &-active {
              transform: rotate(180deg);
            }
          }
        }
        &-list {
          margin: 0;
          &--item {
            width: 175px;
          }
        }
      }
    }
    &__bottom {
      margin: 32px 0 23px 15px;
      &_left {
        margin: 0;
        max-width: 343px;
        &-title {
          margin: 23px 0 6px 0;
        }
        &_confirm {
          display: flex;
        }
      }
      &_right {
        display: none;
      }
    }
  }
}
</style>

