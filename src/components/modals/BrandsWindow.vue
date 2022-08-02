<template>
  <div class="brands-window" @click="isShow">
    <div class="brands-window__main">
      <div class="brands-window__main_button">ВСЕ МАШИНЫ</div>
      <div class="brands-window__main_wrapper">
        <div class="brands-window__main_left">
          <div class="brands-window__main_left-carstypes">
              <div class="brands-window__main_left-carstypes--item" v-for="(type, idx) in carsTypes" :key="idx">{{ type }}</div>
          </div>
          <div class="brands-window__main_left-divider"></div>
        </div>
        <div class="brands-window__main_right">
          <div class="brands-window__main_right-carsbrands">
            <div class="brands-window__main_right-carsbrands--item" v-for="(brand, idx) in carsBrends" :key="idx">
              <div class="brands-window__main_right-carsbrands--item_logo">
                <img :src="`${brand.logo}`">
              </div>
              <div class="brands-window__main_right-carsbrands--item_name">{{ brand.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="brands-window__add"></div>
  </div>
</template>

<script>
export default {
  name: 'BrandsWindow',
  data() {
    return {
      carsTypes: [
        'СЕДАНЫ', 'ХЭТЧБЕКИ', 'ПИКАПЫ', 'ВНЕДОРОЖНИКИ', 'УНИВЕРСАЛЫ', 'МИНИВЕНЫ', 'МИКРОАВТОБУСЫ',
      ],
      carsBrends: [
        {name: 'KIA', logo: require('@/assets/images/brands-logo/kia.png')},
        {name: 'HYUNDAI', logo: require('@/assets/images/brands-logo/huindai.png')},
        {name: 'TOYOTA', logo: require('@/assets/images/brands-logo/toyota.png')},
        {name: 'SKODA', logo: require('@/assets/images/brands-logo/skoda.png')},
        {name: 'VOLKSWAGEN', logo: require('@/assets/images/brands-logo/volkswagen.png')},
        {name: 'FORD', logo: require('@/assets/images/brands-logo/ford.png')},
        {name: 'CHEVROLET', logo: require('@/assets/images/brands-logo/chevrolet.png')},
        {name: 'MITSUBISHI', logo: require('@/assets/images/brands-logo/mitsubishi.png')},
        {name: 'NISSAN', logo: require('@/assets/images/brands-logo/nissan.png')},
        {name: 'MAZDA', logo: require('@/assets/images/brands-logo/mazda.png')},
        {name: 'HONDA', logo: require('@/assets/images/brands-logo/honda.png')},
        {name: 'LADA', logo: require('@/assets/images/brands-logo/lada.png')},
        {name: 'OPEL', logo: require('@/assets/images/brands-logo/opel.png')},
        {name: 'RENAULT', logo: require('@/assets/images/brands-logo/renault.png')},
        {name: 'JAC', logo: require('@/assets/images/brands-logo/jac.png')},
        {name: 'SUZUKI', logo: require('@/assets/images/brands-logo/suzuki.png')},
        {name: 'PEUGEOT', logo: require('@/assets/images/brands-logo/peugeot.png')},
        {name: 'UAZ', logo: require('@/assets/images/brands-logo/uaz.png')},
        {name: 'SSANG YONG', logo: require('@/assets/images/brands-logo/ssangyong.png')},
        {name: 'HAVAL', logo: require('@/assets/images/brands-logo/haval.png')},
        {name: 'GEELY', logo: require('@/assets/images/brands-logo/geely.png')},
        {name: 'LIFAN', logo: require('@/assets/images/brands-logo/lifan.png')},
        {name: 'CHERY', logo: require('@/assets/images/brands-logo/chery.png')},
        {name: 'DATSUN', logo: require('@/assets/images/brands-logo/datsun.png')},
        {name: 'CITROEN', logo: require('@/assets/images/brands-logo/citroen.png')},
        {name: 'DONGFENG', logo: require('@/assets/images/brands-logo/dongfeng.png')},
        {name: 'CHANGAN', logo: require('@/assets/images/brands-logo/changan.png')},
        {name: 'ZOTYE', logo: require('@/assets/images/brands-logo/zotye.png')},
        {name: 'DWHOWER', logo: require('@/assets/images/brands-logo/hower.png')},
        {name: 'FOTON', logo: require('@/assets/images/brands-logo/foton.png')},
        {name: 'GREAT WALL', logo: require('@/assets/images/brands-logo/great_wall.png')},
        {name: 'RAVON', logo: require('@/assets/images/brands-logo/ravon.png')},
        {name: 'BRILLIANCE', logo: require('@/assets/images/brands-logo/brilliance.png')},
        {name: 'FAW', logo: require('@/assets/images/brands-logo/faw.png')},
        {name: 'HAIMA', logo: require('@/assets/images/brands-logo/haima.png')}
      ],
      // car: {name: 'KIA', logo: require('@/assets/images/brands-logo/kia.svg')},

    }
  },
  methods: {
    isShow() {
      this.$emit('isShow')
    }
  }
}
</script>

<style lang="scss">
.brands-window {
  width: 100%;
  max-width: 2065px;
  display: flex;
  flex-direction: column;
  &__main {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 482px;
    background: #FFF;
    z-index: 2;
    &_button {
      width: 255px;
      height: 49px;
      margin: 12px 0 0 33px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 900;
      font-size: 16px;
      line-height: 19px;
      color: #FFFFFF;
      background: linear-gradient(90.43deg, #12609E 17.95%, #10205E 83.93%);
      border-radius: 111.186px;
    }
    &_wrapper {
      display: flex;
    }
    &_left {
      width: 383px;
      height: 390px;
      display: flex;
      justify-content: space-between;
      &-carstypes {
        display: flex;
        flex-direction: column;
        margin: 14px 0 49px 31px;
        &--item {
          margin: 17px 0;
          font-family: 'Inter';
          font-style: normal;
          font-weight: 900;
          font-size: 16px;
          line-height: 19px;
          color: #000000;
        }
      }
      &-divider {
        width: 3px;
        height: 390px;
        background: linear-gradient(to top,  #FFF 0%, #10205E  20%, #FFF 100%);
      }
    }
    &_right {
      display: flex;
      &-carsbrands {
        display: flex;
        max-width: 1524px;
        flex-wrap: wrap;
        margin: 0 0px 0 55px;
        &--item {
          width: 260px;
          height: 45px;
          display: flex;
          align-items: center;
          margin: 5px 0;
          &_logo {
            display: flex;
            justify-content: center;
            width: 100px;
          }
          &_name {
            width: 120px;
            margin-left: 10px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 900;
            font-size: 16px;
            line-height: 19px;
            color: #000000;
          }
        }
      }
    }
  }
  &__add {
    width: 100%;
    min-width: 2065px;
    height: 0px;
    background: #FFF;
  }

}
@media (min-width: 1280px) and (max-width: 1921px) {
  .brands-window {
    max-width: 1523px;
    margin: 0 auto;
    &__main {
      // margin-top: -41px;
      height: 805px;
      &_button {
        width: 188px;
        height: 36px;
        margin: 75px 0 0 24px;
        font-size: 11.7663px;
        line-height: 14px;
        border-radius: 81.7652px;
        cursor: pointer;
      }
      &_left {
        width: 282px;
        height: 290px;
        &-carstypes {
          &--item {
            margin: 12px 0;
            font-size: 11.7663px;
            line-height: 14px;
            margin: 23px 0 0 67px;
            cursor: pointer;
          }
        }
        &-divider {
          display: block;
          width: 2.21px;
          height: 286px;
          margin-left: 69px;
        }
      }
      &_right {
        &-carsbrands {
          max-width: 1242px;
          margin: -42px 124px 0 87px;
          justify-content: space-between;
          &--item {
            cursor: pointer;
            &_name {
              margin-left: 20px;
              font-size: 17.9282px;
              line-height: 22px;
            }
          }
        }
      }
    }
    &__add {
      min-width: 1920px;
    }
  }
}
@media (min-width: 769px) and (max-width: 1280px) {
  .brands-window {
    max-width: 1022px;
    margin: 0 auto;
    &__main {
      // margin-top: -41px;
      height: 700px;
      &_button {
        width: 126px;
        height: 25px;
        margin: 27px 0 0 16px;
        font-size: 7.8957px;
        line-height: 10px;
        border-radius: 54.8681px;
        cursor: pointer;
      }
      &_left {
        width: 190px;
        height: 290px;
        &-carstypes {
          margin: 15px 0 0 46px;
          &--item {
            margin: 8px 0;
            font-size: 7.8957px;
            line-height: 10px;
            cursor: pointer;
          }
        }
        &-divider {
          display: block;
          width: 1.5px;
          height: 192px;
          margin-left: 47px;
        }
      }
      &_right {
        &-carsbrands {
          max-width: 830px;
          margin: -42px 70px 0 60px;
          justify-content: space-between;
          &--item {
            max-width: 190px;
            cursor: pointer;
            &_name {
              margin-left: 10px;
              font-size: 12.0306px;
              line-height: 15px;
            }
          }
        }
      }
    }
    &__add {
      min-width: 1920px;
    }
  }
}
@media (min-width: 606px) and (max-width: 768px) {
  .brands-window {
    max-width: 610px;
    margin: 0 auto;
    &__main {
      // margin-top: -41px;
      height: 400px;
      &_button {
        width: 75px;
        height: 15px;
        margin: 16px 0 0 10px;
        font-size: 4.69725px;
        line-height: 6px;
        border-radius: 32.6417px;
        cursor: pointer;
      }
      &_left {
        width: 190px;
        height: 112px;
        &-carstypes {
          margin: 8px 0 0 27px;
          &--item {
            margin: 5px 0;
            font-size: 4.69725px;
            line-height: 6px;
            cursor: pointer;
          }
        }
        &-divider {
          display: block;
          width: 1px;
          height: 115px;
          margin-left: 28px;
        }
      }
      &_right {
        &-carsbrands {
          max-width: 450px;
          margin: -27px 30px 0 27px;
          justify-content: space-between;
          &--item {
            max-width: 100px;
            height: 20px;
            cursor: pointer;
            & img {
              width: 30%;
            }
            &_name {
              margin-left: 5px;
              font-size: 7.15714px;
              line-height: 9px;
            }
          }
        }
      }
    }
    &__add {
      min-width: 1920px;
    }
  }
}
</style>