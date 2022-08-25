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
    <div class="add">
      <div class="add__popup">
        <div class="add__popup_header">
          <div class="add__popup_header-text">
            <div class="add__popup_header-title">УСПЕЙ ПРИОБРЕСТИ ПО ЦЕНАМ<br />СТАРОГО КУРСА</div>
            <div class="add__popup_header-subtitle">и получи острочку платежа по кредиту</div>
            <div class="add__popup_header-offer">НА 3 МЕСЯЦА!</div>
          </div>
          <div class="add__popup_header-close">
            <div class="add__popup_header-close--item"></div>
            <div class="add__popup_header-close--item"></div>
          </div>
        </div>
        <div class="add__popup_main">
          <div class="add__popup_main-image"><img src="@/assets/images/popup-car.png"/></div>
          <div class="add__popup_main-form">
            <input type="text" placeholder="Имя"/>
            <input type="text" placeholder="Телефон"/>
            <CatalogRadioBlue />
            <div class="add__popup_main-form--btn">ПОЛУЧИТЬ СПЕЦ ЦЕНУ</div>
          </div>
        </div>
      </div>
      <div class="add__popup-small">
          <div class="add__popup-small_header">
          <div class="add__popup-small_header-close">
            <div class="add__popup-small_header-close--item"></div>
            <div class="add__popup-small_header-close--item"></div>
          </div>
        </div>
        <div class="add__popup-small_image"><img src="@/assets/images/popup-car.png"/></div>
        <div class="add__popup-small_main">
          <div class="add__popup-small_main-text">
            <div class="add__popup-small_main-title">УСПЕЙ ПРИОБРЕСТИ ПО <br/>ЦЕНАМ СТАРОГО КУРСА</div>
            <div class="add__popup-small_main-subtitle">и получи острочку платежа<br/>по кредиту</div>
            <div class="add__popup-small_main-offer">НА 3 МЕСЯЦА!</div>
          </div>
          <div class="add__popup-small_main-form">
            <input class="add__popup-small_main-form--input" type="text" placeholder="Имя"/>
            <input class="add__popup-small_main-form--input" type="text" placeholder="Телефон"/>
            <CatalogRadioBlue />
            <div class="add__popup-small_main-form--btn">ПОЛУЧИТЬ СПЕЦ ЦЕНУ</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'
import Loader from '@/components/app/Loader.vue'
import CatalogRadioBlue from '../components/catalog/CatalogRadioBlue.vue';
export default {
  name: 'About',
  components: { Loader, yandexMap, ymapMarker, CatalogRadioBlue },
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
.add {
  display: flex;
  width: 1564px;
  justify-content: flex-start;
  &__popup {
    width: 743px;
    height: 312px;
    display: flex;
    flex-direction: column;
    background: url('@/assets/images/popup-main.png') no-repeat center;
    background-size: cover;
    border-radius: 28px;
    margin-bottom: 60px;
    &_header {
      display: flex;
      justify-content: flex-end;
      margin: 18px 18px 0 0px;
      &-text {
        display: flex;
        flex-direction: column;
        width: 326px;
        justify-content: flex-start;
      }
      &-title {
        display: flex;
        justify-content: flex-start;
        font-weight: 900;
        font-size: 15.7829px;
        line-height: 19px;
        color: #10205E;
      }
      &-subtitle {
        margin-top: 8px;
        display: flex;
        font-weight: 700;
        font-size: 13.3857px;
        line-height: 16px;
        color: #10205E;
      }
      &-offer {
        font-weight: 900;
        font-size: 36.5192px;
        line-height: 44px;
        color: #FFA724;
      }
      &-close {
        width: 12px;
        height: 12px;
        display: flex;
        margin-left: 10px;
        justify-content: center;
        &--item {
          border: 2px solid #12609E;
          transform: rotate(45deg);
          margin: -2px -4px -4px 0;
          &:last-child {
            transform: rotate(-45deg);
            margin: -2px 2px -4px 0px;
          }
        }
      }
    }
    &_main {
      display: flex;
      justify-content: flex-start;
      margin-right: 40px;
      &-image {
        width: 451px;
        height: 173px;
        margin: -18px 0 0 0;
        display: flex;
        object-fit: contain;
        & img {
          width: 100%;
          height: auto;
        }
      }
      &-form {
        
        margin-top: 9px;
        max-width: 236px;
        display: flex;
        flex-direction: column;
        & input {
          width: 177px;
          height: 28px;
          background: #EDEDED;
          border-radius: 52.2814px;
          border: none;
          padding-left: 11px;
          font-weight: 500;
          font-size: 10.7129px;
          line-height: 13px;
          color: #A8A8A8;
          &:first-child {
            margin-bottom: 15px;
          }
        }
        &--btn {
          margin: 17px 0 18px 0;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 235.81px;
          height: 32.43px;
          left: 464px;
          top: 255px;
          background: linear-gradient(90.43deg, #12609E 17.95%, #10205E 83.93%);
          box-shadow: 0px 4.24594px 4.24594px rgba(0, 0, 0, 0.25);
          border-radius: 39.275px;
          font-weight: 900;
          font-size: 12.2146px;
          line-height: 15px;
          color: #FFFFFF;
          cursor: pointer;
        }
      }
    }
  }
  &__popup-small {
    margin-left: 100px;
    display: flex;
    flex-direction: column;
    width: 376px;
    height: 323px;
    background: url('@/assets/images/popup-small.png') no-repeat center;
    background-size: cover;
    &_header {
      margin-top: 12px;
      width: 100%;
      display: flex;
      justify-content: flex-end;
      &-close {
        margin-right: 19px;
        width: 12px;
        height: 12px;
        display: flex;
        margin-left: 10px;
        justify-content: center;
        &--item {
          border: 2px solid #12609E;
          transform: rotate(45deg);
          margin: -2px -4px -4px 0;
          &:last-child {
            transform: rotate(-45deg);
            margin: -2px 2px -4px 0px;
          }
        }
      }
    }
    &_image {
      display: flex;
      margin: 56px 34px 13px 43px;
      width: 299px;
      height: 115px;
      object-fit: cover;
      & img {
        width: 100%;
        // height: auto;
      }
    }
    &_main {
      display: flex;
      width: 90%;
      margin: 0px 16px 19px 20px;
      justify-content: space-between;
      &-text {
        display: flex;
        flex-direction: column;
      }
      &-title {
        font-weight: 900;
        font-size: 12.6844px;
        line-height: 15px;
        color: #10205E;
      }
      &-subtitle {
        margin-top: 4px;
        font-weight: 700;
        font-size: 8.9984px;
        line-height: 11px;
        color: #000000;
      }
      &-offer {
        margin-top: 4px;
        font-weight: 900;
        font-size: 20.9641px;
        line-height: 25px;
        color: #FFA724;
      }
      &-form {
        display: flex;
        max-width: 162px;
        flex-direction: column;
        &--input {
          width: 150px;
          height: 20px;
          margin-bottom: 7px;
          background: #F0F0F0;
          border-radius: 35.9169px;
          border: none;
          padding-left: 8px;
          font-weight: 500;
          font-size: 7.35966px;
          line-height: 9px;
          color: #A8A8A8;
        }
        .catalog-radio-blue {
            display: flex;
            flex-direction: column;
            cursor: pointer;
            & label {
              margin-top: 0;
              margin-bottom: 7px;
            }
            &__radio {
              margin-top: 8px;
              display: flex;
              width: 173px;
              height: 12px;
              cursor: pointer;
              &_btn {
                display: flex;
                width: 12px;
                height: 12px;
                margin-left: 6px;
                display: none;
                + span {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  width: 12px;
                  height: 12px;
                  background: #F0F0F0;
                  border-radius: 50%;
                }
                &:checked {
                  + span {
                    &::before {
                      content: "";
                      display: block;
                      width: 6px;
                      height: 6px;
                      border-radius: 50%;
                      background: #12609E;
                    }
                  }
                }
              }
              & span {
                width: 12px;
                height: 12px;
              }
              &_text {
                margin-left: 6px;
                font-family: 'Inter';
                font-style: normal;
                font-weight: 300;
                font-size: 4.32px;
                line-height: 106.52%;
                color: #000000;
                & span {
                  color: #12609E;
                  text-decoration: underline;
                }
              }
            }
          }  
        &--btn {
          width: 162px;
          height: 22.28px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(90.43deg, #12609E 17.95%, #10205E 83.93%);
          box-shadow: 0px 2.91692px 2.91692px rgba(0, 0, 0, 0.25);
          border-radius: 26.9816px;
          font-weight: 900;
          font-size: 8.39133px;
          line-height: 10px;
          color: #FFFFFF;
          cursor: pointer;
        }
      }
    }
  }
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