<template>
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
            class="header__wrapper_pages-link "
            :class="{'header__wrapper_pages-link-active': $route.path === `${link.url}`}"
          >
            {{ link.title }}
            <img src="@/assets/images/page-icon.png"  class="header__wrapper_pages-icon">
          </a>
        </router-link>
      </div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      links: [
        {title: 'НОВЫЕ АВТОМОБИЛИ', url: '/', exact: true},
        {title: 'КРЕДИТ', url: '/credit'},
        {title: 'TRADE-IN', url: '/tradein'},
        {title: 'АКЦИИ', url: '/actions'},
        {title: 'О КОМПАНИИ', url: '/about'},
      ]
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
.header {
	display: flex;
	position: absolute;
	width: 2065px;
	height: 156px;
	left: 0px;
	top: 0px;
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
      margin-left: 17px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      &-left, &-right {
        display: flex;
      }
      &-info {
        font-style: normal;
        font-weight: 900;
        font-size: 13px;
        line-height: 16px;
        color: #FFA724;
      }
	}
    &_pages {
      display: flex;
      align-items: center;
      &-link {
        display: flex;
        align-items: center;
        margin-left: 64px;
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
        margin: 0 66px;
      }
    }
  }
}
</style>