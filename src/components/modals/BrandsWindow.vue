<template>
  <div class="brands-window">
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
        {name: 'KIA', logo: require('@/assets/images/brands-logo/kia.svg')},
        {name: 'HYUNDAI', logo: require('@/assets/images/brands-logo/hundai.svg')},
        {name: 'TOYOTA', logo: require('@/assets/images/brands-logo/toyota.svg')},
        {name: 'SKODA', logo: require('@/assets/images/brands-logo/skoda.svg')},
        {name: 'VOLKSWAGEN', logo: require('@/assets/images/brands-logo/volkswagen.svg')},
        {name: 'FORD', logo: require('@/assets/images/brands-logo/ford.svg')},
        {name: 'CHEVROLET', logo: require('@/assets/images/brands-logo/chevrolet.svg')},
        {name: 'MITSUBISHI', logo: require('@/assets/images/brands-logo/mitsubishi.svg')},
        {name: 'NISSAN', logo: require('@/assets/images/brands-logo/nissan.svg')},
        {name: 'MAZDA', logo: require('@/assets/images/brands-logo/mazda.svg')},
        {name: 'HONDA', logo: require('@/assets/images/brands-logo/honda.svg')},
        {name: 'LADA', logo: require('@/assets/images/brands-logo/lada.svg')},
        {name: 'OPEL', logo: require('@/assets/images/brands-logo/opel.svg')},
        {name: 'RENAULT', logo: require('@/assets/images/brands-logo/renault.svg')},
        {name: 'JAC', logo: require('@/assets/images/brands-logo/jac.svg')},
        {name: 'SUZUKI', logo: require('@/assets/images/brands-logo/suzuki.svg')},
        {name: 'PEUGEOT', logo: require('@/assets/images/brands-logo/peugeot.svg')},
        {name: 'UAZ', logo: require('@/assets/images/brands-logo/uaz.svg')},
        {name: 'SSANG YONG', logo: require('@/assets/images/brands-logo/ssangyong.svg')},
        {name: 'HAVAL', logo: require('@/assets/images/brands-logo/haval.svg')},
        {name: 'GEELY', logo: require('@/assets/images/brands-logo/geely.svg')},
        {name: 'LIFAN', logo: require('@/assets/images/brands-logo/lifan.svg')},
        {name: 'CHERY', logo: require('@/assets/images/brands-logo/chery.svg')},
        {name: 'DATSUN', logo: require('@/assets/images/brands-logo/datsun.svg')},
        {name: 'CITROEN', logo: require('@/assets/images/brands-logo/citroen.svg')},
        {name: 'DONGFENG', logo: require('@/assets/images/brands-logo/dongfeng.svg')},
        {name: 'CHANGAN', logo: require('@/assets/images/brands-logo/chagan.svg')},
        {name: 'ZOTYE', logo: require('@/assets/images/brands-logo/zotve.svg')},
        {name: 'DWHOWER', logo: require('@/assets/images/brands-logo/dwhover.svg')},
        {name: 'FOTON', logo: require('@/assets/images/brands-logo/foton.svg')},
        {name: 'GREAT WALL', logo: require('@/assets/images/brands-logo/great_wall.svg')},
        {name: 'RAVON', logo: require('@/assets/images/brands-logo/ravon.svg')},
        {name: 'BRILLIANCE', logo: require('@/assets/images/brands-logo/brilliance.svg')},
        {name: 'FAW', logo: require('@/assets/images/brands-logo/faw.svg')},
        {name: 'HAIMA', logo: require('@/assets/images/brands-logo/haima.svg')}
      ],
      // car: {name: 'KIA', logo: require('@/assets/images/brands-logo/kia.svg')},

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
        margin: 0 100px 0 55px;
        &--item {
          width: 304px;
          height: 45px;
          display: flex;
          align-items: center;
          margin: 5px 0;
          &_logo {
            display: flex;
            width: 100px;
          }
          &_name {
            width: 150px;
            margin-left: 15px;
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
    height: 355px;
    background: #FFF;
  }

}

</style>