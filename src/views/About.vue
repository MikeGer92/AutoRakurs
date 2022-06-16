<template>
  <div class="about">
    <Loader v-if="showLoader" />
    <div class="about__divider">
      <div class="about__divider_line"></div>
      <div class="about__divider_text">О КОМПАНИИ</div>
      <div class="about__divider_line"></div>
    </div>
    <div class="about__main">
      <div class="about__main_wrapper">
        <div class="about__main_left">
          <div class="about__main_left-title">Автоцентр "Авторакурс"</div>
          <div class="about__main_left-subtitle">КОНТАКТНАЯ ИНФОРМАЦИЯ</div>
          <div class="about__main_left-operate">
            <div class="about__main_left-operate--title">Мы работаем ежедневно</div>
            <div class="about__main_left-operate--hours">С 8:00 ДО 21:00</div>
          </div>
          <div class="about__main_left-contacts">
            <div class="about__main_left-contacts--phone">
              <img src="@/assets/images/about-phone.png">
              <div class="about__main_left-contacts--phone_text">+7 (495) 085-71-54</div>
            </div>
            <div class="about__main_left-contacts--addr">
              <img src="@/assets/images/about-place.png">
              <div class="about__main_left-contacts--addr_text">Россия, г. Москва, Ближние Прудищи, вл. 1, стр. 1</div>
            </div>
            <div class="about__main_left-contacts--mail">
              <img src="@/assets/images/about-mail.png">
              <div class="about__main_left-contacts--mail_text">info@auto-racurs.ru</div>
            </div>
          </div>
          <button type="button">ПОСТРОИТЬ МАРШРУТ</button>
        </div>
        <div class="about__main_right">
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A6c72159406a316910542ef90d8623eccdc58994702f16607089f14242f0d26a5&amp;source=constructor" width="1150" height="570" frameborder="0"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Loader from '@/components/app/Loader.vue'
export default {
  name: 'About',
  components: { Loader },
  data() {
    return {
      showLoader: false
    }
  },
  mounted() {
    console.log(window.location.href);
    console.log(this.$route.path);
    console.log(this.$router.history);
  },
  // methods: {
  //   init() {
  //     const myMap = new ymaps.Map("map", {
  //       center: [55.75,37.6], // Координаты центра карты
  //       zoom: 9.5 // Маштаб карты
  //     })

  //     myMap.controls.add(
  //       new ymaps.control.ZoomControl()  // Добавление элемента управления картой
  //     )
  //     const myPlacemark = new ymaps.Placemark([55.58308, 37.681275], { // Координаты метки объекта
  //     // balloonContent: "<div class='ya_map'>JAC-motors</div>" // Подсказка метки
  //   }, 
  //   {
  //     iconLayout: "default#image",
  //     iconImageHref: "/src/img/place-vector.png", // Ссылка на изображение 
  //     iconImageSize: [28, 36], // Размер изображения 
  //     iconImageOffset: [-3, -42] // Положение изображения 
  //   })

  //   myMap.geoObjects.add(myPlacemark)
  //   myPlacemark.balloon.close()
      
  //   }
  // }
}
</script>
<style lang="scss">
.map-circle-placemark {
  background: url('../assets/images/about-map-place.png');
}
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__divider {
    margin: 53px 0 72px 0;
    width: 100%;
    max-width: 1891px;
    text-align: center;
    &_line {
      width: 100%;
      height: 3px;
      background: linear-gradient(to right, #FFF 0%, #10205E 20%, #10205E 80%,#FFF 100%);
    }
    &_text {
      margin: 19px 0 21px 0;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 44.7037px;
      line-height: 54px;
      color: #10205E;
    }
  }
  &__main {
    display: flex;
    width: 100%;
    max-width: 2065px;
    height: 1260px;
    &_wrapper {
      display: flex;
      margin: 0 54px 0 66px;
    }
    &_left {
      display: flex;
      flex-direction: column;
      &-title {
        margin-top: 38px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 55.0322px;
        line-height: 67px;
        color: #10205E;
      }
      &-subtitle {
        margin-top: 11px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 25.5431px;
        line-height: 31px;
        color: #E0E0E0;
      }
      &-operate, &-contacts {
        margin-top: 17px;
        display: flex;
        flex-direction: column;
        &--title {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 700;
          font-size: 25.5431px;
          line-height: 31px;
          color: #10205E;
        }
        &--hours {
          margin: 11px 0 40px 0;
          font-family: 'Inter';
          font-style: normal;
          font-weight: 700;
          font-size: 40.0073px;
          line-height: 48px;
          color: #FFA724;
        }
        &--phone, &--addr, &--mail {
          margin-top: 15px;
          display: flex;
          align-items: center;
          & img {
            width: 28px;
            height: auto;
          }
          &_text {
            margin-left: 13px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 700;
            font-size: 25.5431px;
            line-height: 31px;
            color: #10205E;
          }
        }
      }
      & button {
        margin-top: 50px;
        width: 501px;
        height: 77px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 28.2761px;
        line-height: 34px;
        color: #FFFFFF;
        border :none;
        background: linear-gradient(90.43deg, #12609E 17.95%, #10205E 83.93%);
        box-shadow: 0px 12.0201px 12.0201px rgba(0, 0, 0, 0.25);
        border-radius: 111.186px;
      }
    }
    &_right {
      margin: 23px 0 0 103px;
      display: flex;
      width: 100%;
      max-width: 1150px;
      height: 570px;
      filter: grayscale(1);
    }
  }
}
</style>