<template>
  <div class="header-wrapper">
    <div class="header">
      <div class="header__logo">
          <img src="@/assets/images/arlogo.png" alt="" class="header__wrapper_logo-img">
      </div>
      <div class="header__wrapper">
        <div class="header__wrapper_contact">
          <div class="header__wrapper_contact-left">
            <p class="header__wrapper_contact-info">Москва, Ближние Прудищи, вл. 1, стр. 1</p>
          </div>
          <div class="header__wrapper_contact-right">
            <p class="header__wrapper_contact-info">ЕЖЕДНЕВНО  БЕЗ ВЫХОДНЫХ</p>
            <p class="header__wrapper_contact-info">С 8:00 ДО 21:00</p>
          </div>
        </div>
        <div class="header__wrapper_pages">
          <router-link
            v-for="link in links"
            :key="link.url"
            tag="div"
            active-class="active"
            :to="link.url"
            :exact="link.exact"
            >
            <a href="#"
              class="header__wrapper_pages-link"
              @mouseover="isMain(link.title)"
              :class="{'header__wrapper_pages-link-active': $route.path === `${link.url}`}"
            >
              {{ link.title }}
              <img src="@/assets/images/page-icon.png"  class="header__wrapper_pages-icon">
            </a>
          </router-link>
          <div class="header__wrapper_callback">
            <img class="header__wrapper_callback-img" src="@/assets/images/header-phone.png">
            <div class="header__wrapper_callback-info">+7 (495) 085-71-54</div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-small">
      <div class="header-small__popup">
        <div 
          class="header-small__popup_btn"
          :class="{'header-small__popup_btn-active': showPopup}"
          @click="showPopup = !showPopup"
        >
          <div 
            class="header-small__popup_btn-item"
            :class="{'header-small__popup_btn-item--active': showPopup}"
          >
          </div>
          <div 
            class="header-small__popup_btn-item"
            :class="{'header-small__popup_btn-item--active': showPopup}"
          >
          </div>
          <div 
            class="header-small__popup_btn-item"
            :class="{'header-small__popup_btn-item--active': showPopup}"
          >
          </div>
        </div>
        <div 
          class="header-small__popup_pages" 
          v-if="showPopup"
        >
           <router-link
            v-for="link in links"
            :key="link.url"
            tag="div"
            active-class="active"
            :to="link.url"
            :exact="link.exact"
            >
            <a href="#"
              class="header-small__popup_pages-link"
              @click="showPopup = false"
              :class="{'header-small__popup_pages-link--active': $route.path === `${link.url}`}"
            >
              {{ link.title }}
              <img src="@/assets/images/page-icon.png"  class="header__popup_pages-icon">
            </a>
          </router-link>
        </div>
      </div>
      <div class="header-small__logo">
          <img src="@/assets/images/small-logo.png" alt="" class="header__wrapper_logo-img">
      </div>
      <div class="header-small__wrapper">
        <div class="header-small__wrapper_contact">
          +7 (495) 085-71-54
        </div>
        <div class="header-small__wrapper_info">
          <div class="header-small__wrapper_info-days">
            ЕЖЕДНЕВНО
          </div>
          <div class="header-small__wrapper_info-hours">
            С 8:00 ДО 21:00</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      showPopup: false,
      links: [
        {title: 'НОВЫЕ АВТОМОБИЛИ', url: '/', exact: true},
        {title: 'КРЕДИТ', url: '/credit'},
        {title: 'TRADE-IN', url: '/tradein'},
        {title: 'АКЦИИ', url: '/actions'},
        {title: 'МАРКА', url: '/brand'}, // временная страница
        {title: 'КАТАЛОГ', url: '/catalog'}, // временная страница
        {title: 'О КОМПАНИИ', url: '/about'},
      ]
    }
  },
  methods: {
    modal() {
      this.$emit('modal')
    },
    isMain(title) {
      if (title === 'НОВЫЕ АВТОМОБИЛИ') {
        this.modal()
      }
    }
  }
}
</script>

<style lang="scss">
.active {
  height: 77px;
  display: flex;
  align-items: center;
  background: linear-gradient(266.93deg, #FFFFFF -1.96%, #12609E 92.96%);
  backdrop-filter: blur(12px);
  border-radius: 45px;
  color: #FFFFFF;
}
.header, .header-small {
	display: flex;
  width: 100%;
	max-width: 2065px;
	height: 156px;
	background: #FFFFFF;
  &__logo {
    margin: 14px 46px 13px 30px;
    display: flex;
    width: 129px;
    height: 129px;
  }
  &__wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    &_contact {
      margin: 0 0px 13px 17px;
      display: flex;
      justify-content: space-between;
      &-left, &-right {
        display: flex;
      }
      &-info {
        margin-right: 15px;
        font-style: normal;
        font-weight: 900;
        font-size: 13px;
        line-height: 16px;
        color: #FFA724;
      }
	}
    &_pages {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      &-link {
        display: flex;
        align-items: center;
        margin-left: 26px; // add TODO отступ 60 моpщит элементы меню на 1920 сделал 46px
        height: 77px;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;  
        color: #828282;
        text-decoration: none;
        &-active {
          color: #FFFFFF;
          text-decoration: none;
        }
      }
      &-icon {
        display: flex;
        width: 21px;
        height: 9px;
        margin: 0 28px; // add TODO отступ 66 мощит элементы меню на 1920 сделал 58px
      }
    }
    &_callback {
      display: flex;
      height: 77px;
      align-items: center;
      background: linear-gradient(236.93deg, #FFFFFF -1.96%, #12609E 92.96%);
      backdrop-filter: blur(12px);
      border-radius: 45px;
      &-img {
        width: 32px;
        height: 32px;
        margin: 0 14px 0 20px;
      }
      &-info {
        font-style: normal;
        font-weight: 700;
        font-size: 17.7451px;
        line-height: 21px;
        color: #FFFFFF;
        margin-right: 19px;
      }

    }
  }
}
.header-small {
  display: none;
}
@media (min-width: 1280px) and (max-width: 1921px) {
  .active {
    height: 58px;
    border-radius: 33.3801px;
  }
  .header {
    max-width: 1534px;
    height: 115px;
    margin: 11px auto 22px auto; // оригинальные отступы сверху и снизу 41 и 42
    &__logo {
      width: 96px;
      height: 96px;
      margin: 11px 35px 10px 22px;
    }
    &__wrapper {
      justify-content: center;
      &_contact {
        &-info {
          font-size: 9.64313px;
          line-height: 12px;
          margin: 0;
        }
      }
      &_pages {
        &-link {
          height: 57px;
          margin-left: 14px; // не оригинальный отступ
          font-size: 11.8685px;
          line-height: 20px;
        }
        &-icon {
          width: 15.58px;
          height: 6.68px;
          margin: 0 14px;
        }
      }
      &_callback {
        height: 53px;
        border-radius: 33.3801px;
        &-img {
          width: 23px;
          height: 23px;
          margin: 0 10px 0 18px;

        }
        &-info {
          font-size: 13.163px;
          line-height: 16px;
        }
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 1281px) {
  .active {
    height: 38px;
    background: linear-gradient(266.93deg, #FFFFFF -1.96%, #12609E 92.96%);
    backdrop-filter: blur(5.93359px);
    border-radius: 22.251px;
  }
  .header {
    max-width: 1023px;
    height: 78px;
    margin: 21px auto 28px auto; // оригинальные отступы сверху и снизу 41 и 42
    &__logo {
      width: 64px;
      height: 64px;
      margin: 7px 23px 6px 15px;
    }
    &__wrapper {
      justify-content: center;
      &_contact {
        &-info {
          font-size: 6.42806px;
          line-height: 8px;
          margin: 0;
        }
      }
      &_pages {
        &-link {
          height: 38px;
          margin-left: 14px; // не оригинальный отступ
          font-size: 7.91146px;
          line-height: 10px;
        }
        &-icon {
          width: 11px;
          height: 5px;
          margin: 0 10px;
        }
      }
      &_callback {
        height: 35px;
        background: linear-gradient(266.93deg, #FFFFFF -1.96%, #12609E 92.96%);
        backdrop-filter: blur(5.93359px);
        border-radius: 22.251px;
        &-img {
          width: 16px;
          height: 16px;
          margin: 0 6px 0 13px;

        }
        &-info {
          font-size: 8.77435px;
          line-height: 11px;
        }
      }
    }
  }
}
@media (max-width: 605px) {
  .active {
    height: 38px;
    border-radius: 19px;
  }
  .header {
    display: none;
  }
  .header-small {
    display: flex;
    width: 100%;
    max-width: 600px;
    height: 38px;
    align-items: center;
    &__popup {
      // position: absolute;
      // margin: 10px 12px;
      &_btn {
        margin: 12px;
        display: block;
        width: 23px;
        height: 20px;
        &-active {
          margin-top: 22px;
        }
        &-item {
          display: block;
          width: 24px;
          height: 4px;
          margin-bottom: 4px;
          background: #FFA724;
          border-radius: 50px;
          &:last-child {
            margin-bottom: 0;
          }
          &--active {
            &:nth-child(1) {
              margin: -4px 0;
              transform: rotate(-45deg);
            }
            &:nth-child(2) {
              display: none;
            }
            &:nth-child(3) {
              margin: -4px 0;
              transform: rotate(45deg);
            }
          }
        }
      }
      &_pages {
        width: 200px;
        z-index: 2;
        background-color: #fff;
        position: absolute;
        left: 6px;
        top: 42px;
        &-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 165px;
          height: 38px;
          margin-left: 12px;
          font-size: 12.4343px;
          line-height: 15px;
          font-weight: 700;
          color: #828282;
          text-decoration: none;
          &--active {
            // width: 200px;
            height: 38px;
            color: #fff;
            text-decoration: none;
          }
        }
        & img {
          width: 14px;
          height: 6px;
          margin-left: 12px;
        }
      }
    }
    &__logo {
      display: flex;
      width: 67px;
      height: 33px;
      margin: 3px 0 3px 0px;
    }
    &__wrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-left: 0px;
      &_contact {
        display: flex;
        align-items: center;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 900;
        font-size: 12.4343px;
        line-height: 15px;
        color: #10205F;
      }
      &_info {
        display: flex;
        flex-direction: column;
        &-days, &-hours {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 900;
          font-size: 8.55323px;
          line-height: 10px;
          text-align: right;
          color: #FFA724;

        }

      }
    }

  }
}
</style>