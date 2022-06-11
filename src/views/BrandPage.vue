<template>
  <div class="brandpage">
    <Loader v-if="showLoader" />
    <h1>BRAND</h1>
    <div class="brandpage__main">
      <div class="brandpage__main_left">
        <div class="brandpage__main_left-hot">ГОРЯЧЕЕ ПРЕДЛОЖЕНИЕ</div>
        <div class="brandpage__main_left-title">HYUNDAI CRETA</div>
        <div class="brandpage__main_left-price">от 724 150 руб.</div>
        <div class="brandpage__main_left-colors">
          <div class="brandpage__main_left-colors--item"></div>
        </div>
        <div class="brandpage__main_left-gifts"></div>
      </div>
      <div class="brandpage__main_right">
        <div class="brandpage__main_right-action">
          <div class="brandpage__main_right-action--title">ДО КОНЦА АКЦИИ ОСТАЛОСЬ:</div>
          <Timer />
          <CustomSelect 
            :options="carsList" 
            @select="carSelect" 
            :selected="selectedCar" 
            :defSelected="defSelectCar" 
            :style="`margin-bottom: 76px`"
            :disable="false"
          />
          <CustomSelect 
            :options="carsList" 
            @select="carSelect" 
            :selected="selectedCar" 
            :defSelected="defSelectCar" 
            :style="`margin-bottom: 76px`"
            :disable="false"
          />
          <input type="text" class="brandpage__main_right-action--name" placeholder="ИМЯ">
          <input type="phone" class="brandpage__main_right-action--phone" placeholder="ТЕЛЕФОН">
          <button type="button">ПОЛУЧИТЬ СПЕЦ ЦЕНУ</button>
        </div>
      </div>
    </div>
    <div class="brandpage__choise"></div>
    <div class="brandpage__divider">
      <div class="brandpage__divider_line"></div>
      <div class="brandpage__divider_text">КОМПЛЕКТАЦИИ И ЦЕНЫ HYUNDAI CRETA</div>
      <div class="brandpage__divider_line"></div>
    </div>
    <Complectation />
    <div class="brandpage__divider">
      <div class="brandpage__divider_line"></div>
      <div class="brandpage__divider_text">ЦЕНА HYUNDAI С УЧЕТОМ СПЕЦИАЛЬНЫХ ПРЕДЛОЖЕНИЙ</div>
      <div class="brandpage__divider_line"></div>
    </div>
    <div class="brandpage__special">
      <div class="brandpage__special_left">
        <div class="brandpage__special_left-item"></div>
        <div class="brandpage__special_left-item"></div>
        <div class="brandpage__special_left-item"></div>
      </div>
      <div class="brandpage__special_line"></div>
      <div class="brandpage__special_right">
        <div class="brandpage__special_right-item"></div>
        <div class="brandpage__special_right-item"></div>
        <div class="brandpage__special_right-item"></div>
      </div>
    </div>
    <div class="brandpage__divider_line"></div>
    <div class="brandpage__benefit">
      <div class="brandpage__benefit_title">ВАША ВЫГОДА:</div>
      <div class="brandpage__benefit_total">
        <div class="brandpage__benefit_total-sum">180 000 ₽</div>
        <button type="button">ЗАФИКСИРОВАТЬ ЦЕНУ</button>
      </div>
    </div>
    <div class="brandpage__tradein">
      <div class="brandpage__tradein_form">
        <input type="text" class="brandpage__tradein_form-model" placeholder="МАРКА И МОДЕЛЬ АВТО">
        <div class="brandpage__tradein_form-params">
          <input class="brandpage__tradein_form-params--ways" placeholder="ПРОБЕГ">
          <input class="brandpage__tradein_form-params--type" placeholder="КУЗОВ">
          <input class="brandpage__tradein_form-params--years" placeholder="ГОД ВЫПУСКА">
        </div>
        <input class="brandpage__tradein_form-yourprice" placeholder="ВАША ЦЕНА">
        <div class="brandpage__tradein_form-person">
          <input type="text" class="brandpage__tradein_form-person--name" placeholder="ИМЯ">
          <input type="phone" class="brandpage__tradein_form-person--phone" placeholder="ТЕЛЕФОН">
        </div>
        <button type="button">РАССЧИТАТЬ ВЫГОДУ</button>
      </div>
    </div>
    <div class="brandpage__divider">
      <div class="brandpage__divider_line"></div>
      <div class="brandpage__divider_text">ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ HYUNDAI CRETA</div>
      <div class="brandpage__divider_line"></div>
    </div>
    <div class="brandpage__technical">
      <div class="brandpage__technical_left">
        <div class="brandpage__technical_left-size">ГАБАРИТЫ</div>
        <div class="brandpage__technical_left-eng">ДВИГАТЕЛЬ</div>
      </div>
      <div class="brandpage__technical_right">
        <div class="brandpage__technical_right-chas">ХОДОВАЯ ЧАСТЬ</div>
        <div class="brandpage__technical_right-petr">ТОПЛИВО</div>
      </div>
    </div>
    <div class="brandpage__divider">
      <div class="brandpage__divider_line"></div>
      <div class="brandpage__divider_text">ФОТО HYUNDAI CRETA</div>
      <div class="brandpage__divider_line"></div>
    </div>
    <div class="brandpage__image"></div>
    <MarketBlock />
    <div class="brandpage__divider">
      <div class="brandpage__divider_line"></div>
      <div class="brandpage__divider_text">МАШИНЫ В ЭТУ СТОИМОСТЬ</div>
      <div class="brandpage__divider_line"></div>
    </div>
    <CarCard />
  </div>
</template>


<script>
import Loader from '@/components/app/Loader.vue'
import Complectation from '@/components/Complectation.vue'
import Timer from '@/components/Timer.vue'
import CustomSelect from '@/components/CustomSelect.vue'
import MarketBlock from '@/components/MarketBlock.vue'
import CarCard from '@/components/CarCard.vue'
export default {
  name: 'BrandPage',
  components: { Loader, Timer, Complectation, CustomSelect, MarketBlock, CarCard },
  data() {
    return {
      showLoader: false
    }
  }
}
</script>
<style lang="scss">
.brandpage {
  margin: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__main {
    &_right {
      &-action {
        display: flex;
        flex-direction: column;
      }
    }
  }
}
</style>