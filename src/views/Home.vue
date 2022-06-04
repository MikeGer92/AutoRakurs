<template>
  <div class="home">
    <Loader v-if="showLoader" />
    <div class="home__wrapper">
      <div class="home__header" :style="`background: url(${require('../assets/images/home-mask.png')}) no-repeat`">
        <div class="home__header_block">
          <h1 class="home__header_title">НОВЫЕ АВТО <br />ПО СТАРЫМ ЦЕНАМ</h1>
          <div class="home__header_timer">
            <p class="home__header_timer-title">ДО КОНЦА АКЦИИ:</p>
            <div class="home__header_timer-count">
              <div class="home__header_timer-count--item">
                <div class="home__header_timer-count--item_num">-1</div>
                <div class="home__header_timer-count--item_descr">ДНЕЙ</div>
              </div>
              <div class="home__header_timer-count--item">
                <div class="home__header_timer-count--item_num">-8</div>
                <div class="home__header_timer-count--item_descr">ЧАСОВ</div>
              </div>
              <div class="home__header_timer-count--item">
                <div class="home__header_timer-count--item_num">-22</div>
                <div class="home__header_timer-count--item_descr">МИНУТ</div>
              </div>
              <div class="home__header_timer-count--item">
                <div class="home__header_timer-count--item_num">-32</div>
                <div class="home__header_timer-count--item_descr">СЕКУНД</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="home__main">
        <h2 class="home__main_title">ВРЕМЯ <span class="home__main_title-orange">ВКЛАДЫВАТЬСЯ</span><br><span class="home__main_title-blue">В АВТОМОБИЛЬ</span></h2>
        <p class="home__main_oldprice">Успейте забрать по старой цене и получите<br>
        <span class="home__main_oldprice-orange">ДОПОЛНИТЕЛЬНОЕ<br>ОБОРУДОВАНИЕ</span></p>
        <p class="home__main_gift">НА <span class="home__main_gift-blue">50 000</span><br>В ПОДАРОК<span class="home__main_gift-black">*</span></p>

      </div>
    </div>
  </div>
</template>


<script>
import Loader from '@/components/app/Loader.vue'
export default {
  name: 'Home',
  components: { Loader },
  data() {
    return {
      showLoader: false
    }
  }

}
</script>
<style lang="scss">
.home {
  display: flex;
  &__wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  &__header {
    width: 100%;
    height: 180px;
    margin: 22px 0 11px 0;
    &_block {
      display: flex;
      align-self: center;
      justify-content: space-between;
      margin: 0 76px 0 60px;
    }
    &_title {
      font-style: normal;
      font-weight: 700;
      font-size: 45.88px;
      line-height: 56px;
      color: #FFFFFF;
    }
    &_timer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &-title {
      margin: 0 0 6px 0;
      font-style: normal;
      font-weight: 700;
      font-size: 24.4694px;
      line-height: 30px;
      color: #FFFFFF;
      }
      &-count {
        display: flex;
        width: 375px;
        height: 121px;
        justify-content: space-around;
        align-items: center;
        background: linear-gradient(90.43deg, #12609E 17.95%, #10205E 83.93%);
        box-shadow: 0px 6.20628px 6.20628px rgba(0, 0, 0, 0.25);
        border-radius: 37.1592px;
        &--item {
          padding: 0 17px;
          display: flex;
          flex-direction: column;
          align-items: center;
          border-right: 1.28135px solid #FFFFFF;
          &:last-child {
            border-right: none;
          }
          &_num {
            font-style: normal;
            font-weight: 900;
            font-size: 43.0495px;
            line-height: 52px;
            color: #FFFFFF;
          }
          &_descr {
            font-style: normal;
            font-weight: 700;
            font-size: 14.4963px;
            line-height: 18px;
            color: #FFFFFF;
          }
        }
      }
    }
  }
  &__main {
    display: flex;
    width: 100%;
    height: 796px;
    flex-direction: column;
    background: url('../assets/images/home-banner.png') no-repeat;
    background-size: contain;
    &_title {
      margin: 84px 0 0 60px;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 900;
      font-size: 30px;
      line-height: 44px;
      color: #000000;
      &-orange {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 900;
        font-size: 54px;
        line-height: 44px;
        color: #FFA724;
      }
      &-blue {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 900;
        font-size: 54px;
        line-height: 44px;
        color: #10205F;
      }
    }
    &_oldprice {
      margin: 120px 0 0 60px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 23.6547px;
      line-height: 141.9%;
      color: #000000;
      &-orange {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 900;
        font-size: 32px;
        line-height: 34px;
        color: #FFA724;

      }
    }
    &_gift {
      margin: 54px 0 0 60px;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 900;
      font-size: 71.5973px;
      line-height: 87px;
      color: #FFA724;
      &-blue {
        color: #10205F;
      }
      &-black {
        position: relative;
        top: -20px;
        left: 10px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 900;
        font-size: 42.3075px;
        line-height: 52px;
        color: #000000;
      }
    }
  }
}
</style>