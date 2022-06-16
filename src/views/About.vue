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
          <yandex-map 
            :settings="mySet"
            ref="map"
            :coords="[55.576874, 37.697145]"
            zoom="14"
            :style="{'width': '1150px',  'height': '570px'}"
            :controls="[]"
          >
            <ymap-marker 
              marker-type="placemark"
              :coords="mapCoordsStart"
              marker-id="1" 
              :icon="marker"
            >
            </ymap-marker>
          </yandex-map>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'
import Loader from '@/components/app/Loader.vue'
export default {
  name: 'About',
  components: { Loader, yandexMap, ymapMarker  },
  data() {
    return {
      showLoader: false,
      mapCoordsStart: [55.578666, 37.699562],
      mySet: {
        apiKey: '',
        lang: 'ru_RU',
        coordorder: 'latlong',
        enterprise: false,
        version: '2.1',
        coords: [55.576874, 37.697145]
      },
      marker: {
        layout: 'default#image',
        imageHref: require('../assets/images/about-map-place.png'),
        imageSize: [139, 139],
        imageOffset: [0, 0],
      }
    }
  },
  mounted() {
    console.log(window.location.href);
    console.log(this.$route.path);
    console.log(this.$router.history);
  },
}
</script>
<style lang="scss">
[class*="ymaps-2"][class*="-ground-pane"] {
filter: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale");
/* Firefox 3.5+ */
-webkit-filter: grayscale(100%);
/* Chrome 19+ & Safari 6+ */
}
.ymaps-2-1-79-map-copyrights-promo {
  display: none;
}
.ymaps-2-1-79-copyright__link {
  display: none;
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
    height: 600px;
    margin-bottom: 90px;
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
      // filter: grayscale(1);
    }
  }
}
</style>