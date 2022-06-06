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
        </div>
        <div class="footer__main_left-credits">
          <div class="footer__main_left-credits--title">КРЕДИТЫ</div>
          <ul class="footer__main_left-credits--list">
            <li>АВТОКРЕДИТ</li>
            <li>TRADE-IN</li>
            <li>ПЕРВЫЙ АВТОМОБИЛЬ</li>
            <li>СЕМЕЙНЫЙ АВТОМОБИЛЬ</li>
            <li>УТИЛИЗАЦИЯ</li>
          </ul>
        </div>
      </div>
      <div class="footer__main_right">
        <div class="footer__main_right-title">АВТОМОБИЛИ В НАЛИЧИИ</div>
        <div class="footer__main_right-list">
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
  }
  
}
</script>

<style lang="scss">
.footer {
  display: flex;
  flex-direction: column;
  width: 2065px;
  height: 598px;
  background: #000000;
  &__main {
    width: 100%;
    min-width: 2065px;
    height: 443px;
    display: flex;
    &_left {
      display: flex;
      &-salon {
        display: flex;
        flex-direction: column;
        margin: 44px 0 0 117px;
        &--info, &--contact {
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
      }
      &-credits {
        margin: 44px 182px 0 -45px;
        &--title {
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
          font-family: 'Inter';
          font-style: normal;
          font-weight: 500;
          font-size: 15.7924px;
          line-height: 19px;
          color: #FFFFFF;
          & li {
            width: 220px;
            margin: 24px 0;
          }
        }
      }
    }
    &_right {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 1132px;
      &-title {
        margin-top: 44px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 900;
        font-size: 29.0757px;
        line-height: 35px;
        color: #FFFFFF;
      }
      &-list {
        display: flex;
        flex-wrap: wrap;
        margin: 12px 170px 64px 0;
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
    min-width: 2065px;
    border-top: 1px solid #FFFFFF;
    display: flex;
    justify-content: space-between;
    &_left {
      width: 100%;
      min-width: 430px;
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
      min-width: 1026px;
      margin: 45px 175px 0 71px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 15.7924px;
      line-height: 19px;
      color: #FFFFFF;
    }
  }
}
</style>

