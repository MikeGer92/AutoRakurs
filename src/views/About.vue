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
        </div>
        <div class="about__main_right">
          <yandex-map 
            class="about__main_right-maps"
            :settings="mySet"
            ref="map"
            :coords="[55.576874, 37.697145]"
            zoom="16"
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
    <div class="about__main_btn">
      <button type="button">ПОСТРОИТЬ МАРШРУТ</button>
    </div>
    <div class="popups__block">
      <ThreeMonths :style="{'margin-bottom': '20px'}" />
      <AutoCreditPopup :style="{'margin-bottom': '20px'}"/>
      <AutoCreditPopupMob :style="{'margin-bottom': '20px'}" />
      <TradeInPopup :style="{'margin-bottom': '20px'}"/>
      <TradeInPopupMob :style="{'margin-bottom': '20px'}"/>
      <KaskoPopup :style="{'margin-bottom': '20px'}"/>
      <KaskoPopupMob :style="{'margin-bottom': '20px'}"/>
      <GiftsPopup :style="{'margin-bottom': '20px'}"/>
      <GiftsPopupMob :style="{'margin-bottom': '20px'}"/>
      <TestDrivePopup :style="{'margin-bottom': '20px'}"/>
      <TestDrivePopupMob :style="{'margin-bottom': '20px'}"/>
      <PaysGiftPopup :style="{'margin-bottom': '20px'}"/>
      <PaysGiftPopupMob :style="{'margin-bottom': '20px'}"/>
      <ThreeServePopup :style="{'margin-bottom': '20px'}"/>
      <ThreeServePopupMob :style="{'margin-bottom': '20px'}"/>
    </div>
  </div>
</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'
import Loader from '@/components/app/Loader.vue'
import ThreeMonths from '../components/popups/ThreeMonths.vue'
import AutoCreditPopup from '../components/popups/AutoCreditPopup.vue'
import AutoCreditPopupMob from '../components/popups/AutoCreditPopupMob.vue'
import TradeInPopup from '../components/popups/TradeInPopup.vue'
import TradeInPopupMob from '../components/popups/TradeInPopupMob.vue'
import KaskoPopup from '../components/popups/KaskoPopup.vue'
import KaskoPopupMob from '../components/popups/KaskoPopupMob.vue'
import GiftsPopup from '../components/popups/GiftsPopup.vue'
import GiftsPopupMob from '../components/popups/GiftsPopupMob.vue'
import TestDrivePopup from '../components/popups/TestDrivePopup.vue'
import PaysGiftPopup from '../components/popups/PaysGiftPopup.vue'
import ThreeServePopup from '../components/popups/ThreeServePopup.vue'
import TestDrivePopupMob from '../components/popups/TestDrivePopupMob.vue'
import PaysGiftPopupMob from '../components/popups/PaysGiftPopupMob.vue'
import ThreeServePopupMob from '../components/popups/ThreeServePopupMob.vue'

export default {
  name: 'About',
  components: { Loader, yandexMap, ymapMarker, ThreeMonths, AutoCreditPopupMob, KaskoPopupMob, AutoCreditPopup, TradeInPopup, GiftsPopup, TestDrivePopup, KaskoPopup, PaysGiftPopup, ThreeServePopup, TradeInPopupMob, GiftsPopupMob, TestDrivePopupMob, PaysGiftPopupMob, ThreeServePopupMob },
  data() {
    return {
      showLoader: false,
      mapCoordsStart: [55.576874, 37.697145],
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
        imageOffset: [-70, -115],
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
.popups__block {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
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
    margin-bottom: 90px;
    &_wrapper {
      display: flex;
      justify-content: space-between;
      width: 100%;
      // margin: 0 54px 0 66px;// оригинальные отступы
      margin: 0 21px;
      flex-wrap: wrap;
    }
    &_left {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 690px;
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
    }
    &_right {
      padding: 23px 0px 0 0px;
      display: flex;
      max-width: 1150px;
      // height: 570px;
      // filter: grayscale(1);
      &-maps {
        width: 1150px;
        height: 570px;
      }
    }
    &_btn {
      display: flex;
      align-self: flex-start;
      & button {
        margin: -200px 0 0 20px;
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
  }
}
@media (min-width: 1281px) and (max-width: 1920px) {
  .about {
    &__divider {
      margin: 48px auto;
    }
    &__main {
      max-width: 1520px;
      &_left {
        max-width: 507px;
        &-title {
        margin-top: 28px;
        font-size: 40.4601px;
        line-height: 49px;
        }
        &-subtitle {
        margin-top: 9px;
        font-size: 18.7795px;
        line-height: 23px;
        }
        &-operate, &-contacts {
          margin-top: 10px;
          &--title {
            font-size: 18.7795px;
            line-height: 23px;
          }
          &--hours {
              margin: 8px 0 29px;
            font-size: 29.4137px;
            line-height: 36px;
          }
          &--phone, &--addr, &--mail {
            margin-top: 10px;
            & img {
                width: 23px;
            }
            &_text {
              font-size: 18.7795px;
              line-height: 23px;
            }
          }
        }
      }
      &_right {
        max-width: 846px;
      }
      &_btn {
        & button {
          width: 370px;
          height: 56px;
          box-shadow: 0px 8.83726px 8.83726px rgba(0, 0, 0, 0.25);
          border-radius: 81.7447px;   
          font-size: 20.7888px;
          line-height: 25px;
          margin: -250px 0 0 220px;
        }
      }
    }
  }
}
@media (min-width: 769px) and (max-width: 1280px) {
  .about {
    &__divider {
      margin: 32px auto;
      &_line {
        height: 2px;
      }
      &_text {
        margin: 8px 0 8px 0;
        font-size: 30.0529px;
        line-height: 36px;
      }
    }
    &__main {
      max-width: 1020px;
      margin-bottom: 60px;
      &_left {
      max-width: 400px;
      &-title {
        margin-top: 18px;
        font-size: 27.2024px;
        line-height: 33px;
      }
      &-subtitle {
        margin-top: 5px;
        font-size: 12.6259px;
        line-height: 15px;
      }
      &-operate, &-contacts {
          margin-top: 8px;
          &--title {
              font-size: 12.6259px;
              line-height: 15px;
          }
          &--hours {
              margin: 5px 0 19px;
              font-size: 19.7756px;
              line-height: 24px;
          }
          &--phone, &--addr, &--mail {
          margin-top: 4px;
          & img {
            width: 14px;
          }
          &_text {
            font-size: 12.6259px;
            line-height: 15px;
          }
        }
      }
    }
    &_right {
      max-width: 568px;
      &-maps, & .ymap-container {
        width: 568px;
        height: 293px;
      }
    }
    &_btn {
      & button {
          width: 247.9px;
          height: 37.94px;
          box-shadow: 0px 5.94151px 5.94151px rgba(0, 0, 0, 0.25);
          border-radius: 54.959px;  
          font-size: 13.9769px;
          line-height: 17px;
          margin: -160px 0 0 140px;
      }
    }
    }
  }
}
@media (min-width: 606px) and (max-width: 768px) {
  .about {
    &__divider {
      margin: 10px auto;
      &_line {
        height: 1.5px;
      }
      &_text {
        margin: 4px 0 4px 0;
        font-size: 17.8892px;
        line-height: 22px;
      }
    }
    &__main {
      max-width: 610px;
      margin-bottom: 16px;
      &_wrapper {
        margin: 0 9px;
      }
      &_left {
      max-width: 210px;
      &-title {
        margin-top: 11px;
        font-size: 16.1924px;
        line-height: 20px;
      }
      &-subtitle {
        margin-top: 3px;
        font-size: 7.51567px;
        line-height: 9px;
      }
      &-operate, &-contacts {
          margin-top: 5px;
          &--title {
              font-size: 7.51567px;
              line-height: 9px;
          }
          &--hours {
              margin: 5px 0 19px;
              font-size: 11.7715px;
              line-height: 14px;
          }
          &--phone, &--addr, &--mail {
          margin-top: 4px;
          & img {
            width: 9px;
          }
          &_text {
            font-size: 7.51567px;
            line-height: 9px;
          }
        }
      }
    }
    &_right {
      max-width: 350px;
      padding: 11px 0 0 0;
      &-maps, & .ymap-container {
        width: 349px;
        height: 208px;
      }
    }
    &_btn {
      & button {
          width: 148px;
          height: 23px;
          box-shadow: 0px 3.53672px 3.53672px rgba(0, 0, 0, 0.25);
          border-radius: 32.7147px; 
          font-size: 8.31981px;
          line-height: 10px;
          margin: -60px 0 0 80px;
      }
    }
    }
  }
}
@media (max-width: 605px) {
  .about {
    &__divider {
      display: none;
    }
    &__main {
      flex-direction: column;
      margin-bottom: 0;
      &_wrapper {
        margin: 10px 10px 0 10px;
      }
      &_left {
        &-title {
          margin-top: 0px;
          font-size: 26.5976px;
          line-height: 32px;
        }
        &-subtitle {
          font-size: 12.3452px;
          line-height: 15px;
        }
        &-operate, &-contacts {
          &--title {
            font-size: 12.3452px;
            line-height: 15px;
          }
          &--hours {
            margin: 6px 0 20px 0;
            font-size: 19.3359px;
            line-height: 23px;
          }
          &--phone, &--addr, &--mail {
            margin-top: 8px;
            &_text {
              font-size: 12.3452px;
              line-height: 15px;
            }
          }
        }
      }
      &_right {
        padding: 20px 0px 19px 0px;
        width: 98%;
        max-width: 98%;
      }
      &_btn {
        align-self: center;
        & button {
          margin: 0px 0 20px 0;
          width: 307.73px;
          height: 47.09px;
          font-size: 17.3504px;
          line-height: 21px;
        }
      }
    }
  }
}
</style>