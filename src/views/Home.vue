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
}
</style>