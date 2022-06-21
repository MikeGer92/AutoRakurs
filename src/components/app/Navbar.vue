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
      margin: 0 8px 0 17px;
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
      position: absolute;
      margin: 12px 10px;
      &_btn {
        display: block;
        width: 23px;
        height: 20px;
        &-active {
          margin-top: 18px;
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
        left: -11px;
        top: 39px;
        &-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 170px;
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
      margin: 3px 0 3px 44px;
    }
    &__wrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-left: 30px;
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