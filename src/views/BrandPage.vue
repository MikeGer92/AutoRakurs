<template>
  <div class="brandpage">
    <Loader v-if="showLoader" />
    <div class="brandpage__main">
      <div class="brandpage__main_left">
        <div class="brandpage__main_left-head">
          <div class="brandpage__main_left-head--wrapp">
            <div class="brandpage__main_left-head--info">
              <div class="brandpage__main_left-head--info_hot">ГОРЯЧЕЕ ПРЕДЛОЖЕНИЕ</div>
              <div class="brandpage__main_left-head--info_title">HYUNDAI CRETA</div>
              <div class="brandpage__main_left-head--info_border"></div>
              <div class="brandpage__main_left-head--info_price">от 724 150 руб.</div>
            </div>
            <div class="brandpage__main_left-head--params">
              <div class="brandpage__main_left-head--technics">
                <div class="brandpage__main_left-head--technics_power">
                  <div class="brandpage__main_left-head--technics_power-icon"><img src="../assets/images/brand-small-power.png"></div>
                  <div class="brandpage__main_left-head--technics_power-text"><span>123 л.с.</span>Мощность<br>двигателя</div>
                  <div class="brandpage__main_left-head--technics_divider"></div>
                </div>
                <div class="brandpage__main_left-head--technics_drive">
                  <div class="brandpage__main_left-head--technics_drive-icon"><img src="../assets/images/brand-small-drive.png"></div>
                  <div class="brandpage__main_left-head--technics_drive-text"><span>Передний</span>Привод</div>
                  <div class="brandpage__main_left-head--technics_divider"></div>
                </div>
                <div class="brandpage__main_left-head--technics_trans">
                  <div class="brandpage__main_left-head--technics_trans-icon"><img src="../assets/images/brand-small-trans.png"></div>
                  <div class="brandpage__main_left-head--technics_trans-text"><span>МКПП 6</span>Коробка</div>
                </div>
              </div>
              <div class="brandpage__main_left-head--colors">
                <div v-for="color in colors" :key="color.id"
                  :class="{'brandpage__main_left-head--colors-item': true,
                  'brandpage__main_left-head--colors-item--active': activeColor===`${color.name}`}"
                  @click="activateColor(color.name)"
                >
                  <div 
                    :class="{'brandpage__main_left-head--colors-item--black':true,
                    'brandpage__main_left-head--colors-item--black_active': activeColor===`${color.name}`}"
                    :style="{'background': `${color.color}`}"
                  >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="brandpage__main_left-head--image"></div>
          <button type="button" class="brandpage__main_left-head--btn">Получить предложение</button>
        </div>
        <div class="brandpage__main_left-gifts">
          <div class="brandpage__main_left-gifts--item" v-for="gift in gifts" :key="gift.id">
            <div class="brandpage__main_left-gifts--item_wrapper">
              <img class="brandpage__main_left-gifts--item_img" :src="`${gift.image}`">
              <div class="brandpage__main_left-gifts--item_text">{{ gift.title }}</div>
            </div>
            <div 
              v-if="gift.id!==gifts.length-1"
              class="brandpage__main_left-gifts--item_border"
            >
            </div>
          </div>
        </div>
      </div>
      <div class="brandpage__main_right">
        <div class="brandpage__main_right-form" id="brandpage-header-form">
          <div class="brandpage__main_right-form--title">ДО КОНЦА АКЦИИ ОСТАЛОСЬ:</div>
          <Timer 
            :deadline="actionFinish"
            :style="{'margin-bottom': '53px', 'width': '371px', 'height': '119px'}"
          />
          <div class="brandpage__main_right-form--errors" v-if="errors.length">
            <b>Ошибки при заполнении формы:</b>
              <ul>
                <li v-for="error in errors" :key="error">{{ error }}</li>
              </ul>
          </div>
          <CustomSelect 
            :options="complectations" 
            @select="complSelect" 
            :selected="selectedCompl" 
            :defSelected="defSelectCompl"
            :style="{'margin-bottom': '25px',  'width': '375px', 'height': '65px'}" 

            :disable="false"
          />
          <CustomSelect 
            :options="giftsList" 
            @select="giftSelect" 
            :selected="selectedGift" 
            :defSelected="defSelectGift" 
            :style="{'margin-bottom': '32px',  'width': '375px', 'height': '65px'}" 
            :disable="disableGifts"
          />
          <input type="text" class="brandpage__main_right-form--name" placeholder="ИМЯ" v-model="formName">
          <input type="phone" 
            class="brandpage__main_right-form--phone" 
            placeholder="ТЕЛЕФОН" 
            v-model="formPhone" required
            v-phone
          >
          <button type="button" @click="checkForm(e)">ПОЛУЧИТЬ СПЕЦ ЦЕНУ</button>
        </div>
      </div>
    </div>
    <div class="brandpage__choise">
      <router-link
        v-for="link in modelLinks"
        :key="link.title"
        tag="div"
        active-class="brandpage__choise_link-active"
        :to="link.url"
        :exact="link.exact"
        >
        <a href="#"
          class="brandpage__choise_link"
          :class="{'brandpage__choise_link-active': $route.path === `${link.url}`}"
        >
          <img v-if="link.title==='ВЫБРАТЬ ДРУГУЮ МОДЕЛЬ'" src="@/assets/images/brand-prev.png"  class="brandpage__choise_prev">
          <img v-else src="@/assets/images/page-icon.png"  class="brandpage__choise_icon">
          {{ link.title }}
        </a>
      </router-link>
    </div>
    <div class="brandpage__divider">
      <div class="brandpage__divider_line"></div>
      <div class="brandpage__divider_text">КОМПЛЕКТАЦИИ И ЦЕНЫ HYUNDAI CRETA</div>
      <div class="brandpage__divider_line"></div>
    </div>
    <div class="brandpage__complectations">
      <Complectation v-for="item in complList" :key="item.id" :compl="item" />
    </div>
    <div class="brandpage__divider">
      <div class="brandpage__divider_line"></div>
      <div class="brandpage__divider_text">ЦЕНА HYUNDAI С УЧЕТОМ СПЕЦИАЛЬНЫХ ПРЕДЛОЖЕНИЙ</div>
      <div class="brandpage__divider_line"></div>
    </div>
    <div class="brandpage__special">
      <div class="brandpage__special_left">
        <div class="brandpage__special_left-item">
          <BrandRadioOrange :offer="tradeinBenef" />
        </div>
        <div class="brandpage__special_left-item">
          <BrandRadioGray :offer="creditBenef" />
        </div>
        <div class="brandpage__special_left-item">
          <BrandRadioOrange :offer="modelBenef" />
        </div>
      </div>
      <div class="brandpage__special_line"></div>
      <div class="brandpage__special_right">
        <div class="brandpage__special_right-item">
          <BrandRadioOrange :offer="cashBenef" />
        </div>
        <div class="brandpage__special_right-item">
          <BrandRadioGray :offer="utilBenef" />
        </div>
        <div class="brandpage__special_right-item">
          <BrandRadioOrange :offer="govBenef" />
        </div>
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
      <div class="brandpage__tradein_form" id="brandpage-tradein-form">
        <div class="brandpage__tradein_form-wrapper">
          <input type="text" class="brandpage__tradein_form-model" placeholder="МАРКА И МОДЕЛЬ АВТО">
          <div class="brandpage__tradein_form-params">
            <input class="brandpage__tradein_form-params--way" placeholder="ПРОБЕГ">
            <input class="brandpage__tradein_form-params--type" placeholder="КУЗОВ">
            <input class="brandpage__tradein_form-params--year" placeholder="ГОД ВЫПУСКА">
          </div>
          <input class="brandpage__tradein_form-yourprice" placeholder="ВАША ЦЕНА">
          <div class="brandpage__main_right-form--errors" v-if="errors.length">
            <b>Ошибки при заполнении формы:</b>
              <!-- <ul>
                <li v-for="error in errors" :key="error">{{ error }}</li>
              </ul> -->
            </div>
          <div class="brandpage__tradein_form-person">
            <input type="text" class="brandpage__tradein_form-person--name" placeholder="ИМЯ" v-model="formName">
            <input type="phone" 
              class="brandpage__tradein_form-person--phone" 
              placeholder="ТЕЛЕФОН" 
              v-model="formPhone" required
              v-phone
            >
          </div>
          <button type="button" @click="checkForm(e)">РАССЧИТАТЬ ВЫГОДУ</button>
        </div>
      </div>
    </div>
    <div class="brandpage__divider">
      <div class="brandpage__divider_line"></div>
      <div class="brandpage__divider_text">ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ HYUNDAI CRETA</div>
      <div class="brandpage__divider_line"></div>
    </div>
    <div class="brandpage__technical">
      <div class="brandpage__technical_head">
        <div class="brandpage__technical_head-size">ГАБАРИТЫ
          <div class="brandpage__technical_head-size--item">
            <div class="brandpage__technical_head-size--icon"><img src="../assets/images/brand-tech-list.png"></div>
            <div class="brandpage__technical_head-size--text">Размеры и вес</div>
          </div>
          <div class="brandpage__technical_head-size--item">
            <div class="brandpage__technical_head-size--icon"><img src="../assets/images/brand-tech-list.png"></div>
            <div class="brandpage__technical_head-size--text">Объем багажника</div>
          </div>
        </div>
        <div class="brandpage__technical_head-chas">ХОДОВАЯ ЧАСТЬ
          <div class="brandpage__technical_head-size--item">
            <div class="brandpage__technical_head-size--icon"><img src="../assets/images/brand-tech-list.png"></div>
            <div class="brandpage__technical_head-size--text">Криленс</div>
          </div>
        </div>
      </div>
      <div class="brandpage__technical_bottom">
        <div class="brandpage__technical_bottom-eng">ДВИГАТЕЛЬ
          <div class="brandpage__technical_bottom-size--item">
            <div class="brandpage__technical_bottom-size--icon"><img src="../assets/images/brand-tech-list.png"></div>
            <div class="brandpage__technical_bottom-size--text">Размеры и вес</div>
          </div>
          <div class="brandpage__technical_bottom-size--item">
            <div class="brandpage__technical_bottom-size--icon"><img src="../assets/images/brand-tech-list.png"></div>
            <div class="brandpage__technical_bottom-size--text">Максимальная скорость</div>
          </div>
          <div class="brandpage__technical_bottom-size--item">
            <div class="brandpage__technical_bottom-size--icon"><img src="../assets/images/brand-tech-list.png"></div>
            <div class="brandpage__technical_bottom-size--text">Разгон до 100</div>
          </div>
        </div>
        <div class="brandpage__technical_bottom-petr">ТОПЛИВО
          <div class="brandpage__technical_bottom-size--item">
            <div class="brandpage__technical_bottom-size--icon"><img src="../assets/images/brand-tech-list.png"></div>
            <div class="brandpage__technical_bottom-size--text">Объем топливного бака</div>
          </div>
          <div class="brandpage__technical_bottom-size--item">
            <div class="brandpage__technical_bottom-size--icon"><img src="../assets/images/brand-tech-list.png"></div>
            <div class="brandpage__technical_bottom-size--text">Расход топлива, л/100 км</div>
          </div>
          <div class="brandpage__technical_bottom-size--item">
            <div class="brandpage__technical_bottom-size--icon"><img src="../assets/images/brand-tech-list.png"></div>
            <div class="brandpage__technical_bottom-size--text">Расход топлива в смешанном цикле, л/100 км</div>
          </div>
          <div class="brandpage__technical_bottom-size--item">
            <div class="brandpage__technical_bottom-size--icon"><img src="../assets/images/brand-tech-list.png"></div>
            <div class="brandpage__technical_bottom-size--text">Расход топлива за городом, л/100 км</div>
          </div>
        </div>
      </div>
    </div>
    <div class="brandpage__divider">
      <div class="brandpage__divider_line"></div>
      <div class="brandpage__divider_text">ФОТО HYUNDAI CRETA</div>
      <div class="brandpage__divider_line"></div>
    </div>
    <div class="brandpage__image">
      <div class="brandpage__image_content"></div>
    </div>
    <MarketBlock 
    class="brandpage__market-block"
      :style="{'margin': '85px 0 0 0'}" 
    />
    <div class="brandpage__divider">
      <div class="brandpage__divider_line"></div>
      <div class="brandpage__divider_text">МАШИНЫ В ЭТУ СТОИМОСТЬ</div>
      <div class="brandpage__divider_line"></div>
    </div>
    <div class="brandpage__similar">
      <CarCard v-for="car in thisPriceList" :key="car.id" :car="car" />
    </div>
  </div>
</template>


<script>
import Loader from '@/components/app/Loader.vue'
import Complectation from '@/components/Complectation.vue'
import Timer from '@/components/Timer.vue'
import CustomSelect from '@/components/CustomSelect.vue'
import BrandRadioOrange from '@/components/brand/BrandRadioOrange.vue'
import BrandRadioGray from '@/components/brand/BrandRadioGray.vue'
import MarketBlock from '@/components/MarketBlock.vue'
import CarCard from '@/components/CarCard.vue'
export default {
  name: 'BrandPage',
  components: { Loader, Timer, Complectation, CustomSelect, MarketBlock, CarCard, BrandRadioOrange, BrandRadioGray },
  data() {
    return {
      actionFinish: ['2022','09','20','23','59','59'],
      showLoader: false,
      activeColor: 'black',
      formName: '',
      formPhone: '',
      errors: [],
      colors: [
        {id: 1, name: 'black', color: '#000'},
        {id: 2, name: 'beige', color: '#95807B'},
        {id: 3, name: 'blue', color: '#12609E'},
        {id: 4, name: 'gray', color: '#7D8A98'},
        {id: 5, name: 'brown', color: '#422E27'},
        {id: 6, name: 'darkRed', color: '#B63D00'},
        {id: 7, name: 'red', color: '#F9192B'},
        {id: 8, name: 'darkBlue', color: '#10205E'},
        {id: 9, name: 'silver', color: '#CDCDCD'}
      ], 
      gifts: [
        {id: 0, image: require('@/assets/images/brand-list.png'), title: '3 ТО в подарок'},
        {id: 1, image: require('@/assets/images/brand-car.png'), title: 'Каско в подарок'},
        {id: 2, image: require('@/assets/images/brand-percent.png'), title: 'Выгодный кредит от 8%'},
        {id: 3, image: require('@/assets/images/brand-setting.png'), title: 'Комплект доп. оборудования'},
        {id: 4, image: require('@/assets/images/brand-cash.png'), title: '3 платежа по кредиту в подарок'},
      ],
      modelLinks: [
        {title: 'ВЫБРАТЬ ДРУГУЮ МОДЕЛЬ', url: '/brand', exact: true},
        {title: 'КОМПЛЕКТАЦИИ', url: '/complect'},
        {title: 'ГАЛЕРЕЯ', url: 'galary'},
        {title: 'ОПИСАНИЕ', url: '/about'},
        {title: 'АВТО В ЭТУ СТОИМОСТЬ', url: 'other'},
      ], 
      complList: [
        {id: 0, title: '1.6 MT SMART', trans: 'МКПП 6', petr: 'БЕНЗИН АИ-92', drive: 'ПЕРЕДНИЙ', pow: '123 (90)/6300 Л.С.', price: '733 000 ₽'},
        {id: 1, title: '1.6 MT SMART', trans: 'МКПП 6', petr: 'БЕНЗИН АИ-92', drive: 'ПЕРЕДНИЙ', pow: '123 (90)/6300 Л.С.', price: '733 000 ₽'},
        {id: 2, title: '1.6 MT SMART', trans: 'МКПП 6', petr: 'БЕНЗИН АИ-92', drive: 'ПЕРЕДНИЙ', pow: '123 (90)/6300 Л.С.', price: '733 000 ₽'},
        {id: 3, title: '1.6 MT SMART', trans: 'МКПП 6', petr: 'БЕНЗИН АИ-92', drive: 'ПЕРЕДНИЙ', pow: '123 (90)/6300 Л.С.', price: '733 000 ₽'},
        {id: 4, title: '1.6 MT SMART', trans: 'МКПП 6', petr: 'БЕНЗИН АИ-92', drive: 'ПЕРЕДНИЙ', pow: '123 (90)/6300 Л.С.', price: '733 000 ₽'},
        {id: 5, title: '1.6 MT SMART', trans: 'МКПП 6', petr: 'БЕНЗИН АИ-92', drive: 'ПЕРЕДНИЙ', pow: '123 (90)/6300 Л.С.', price: '733 000 ₽'},
        {id: 6, title: '1.6 MT SMART', trans: 'МКПП 6', petr: 'БЕНЗИН АИ-92', drive: 'ПЕРЕДНИЙ', pow: '123 (90)/6300 Л.С.', price: '733 000 ₽'},
        {id: 7, title: '1.6 MT SMART', trans: 'МКПП 6', petr: 'БЕНЗИН АИ-92', drive: 'ПЕРЕДНИЙ', pow: '123 (90)/6300 Л.С.', price: '733 000 ₽'},
      ],
      tradeinBenef: { title: 'ВЫГОДА ЗА TRADE-IN', benef: '200 000 ₽'},
      creditBenef: { title: 'СКИДКА ПРИОФОРММЛЕНИИ АВТО КРЕДИТ', benef: '70 000 ₽'},
      modelBenef: { title: 'СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ НА HYUNDAI CRETA', benef: '60 000 ₽'},
      cashBenef: { title: 'СКИДКА ЗА НАЛИЧНЫЕ', benef: '60 000 ₽'},
      utilBenef: { title: 'ВЫГОДА ЗА УТИЛИЗАЦИЮ', benef: '60 000 ₽'},
      govBenef: { title: 'СКИДКА ПО ГОС-ПРОГРАММЕ', benef: '-10% ОТ ЦЕНЫ АВТО'},
      thisPriceList: [
        {
          id: 0,
          brand: 'HUINDAI',
          model: 'Santa Fe - 1',
          image: require('@/assets/images/home-car.png'),
          price: '1 546 050',
          discount: '50 000',
          payment: '15 845'
        },
        {
          id: 1,
          brand: 'HUINDAI',
          model: 'Santa Fe - 2',
          image: require('@/assets/images/home-car.png'),
          price: '1 546 050',
          discount: '50 000',
          payment: '15 845'
        },
        {
          id: 2,
          brand: 'HUINDAI',
          model: 'Santa Fe - 3',
          image: require('@/assets/images/home-car.png'),
          price: '1 546 050',
          discount: '50 000',
          payment: '15 845'
        }
      ],
      defSelectCompl: 'КОМПЛЕКТАЦИЯ',
      selectedCompl: '',
      complectations: [
        {name: '1.6 MT SMART', value: '1.6 MT SMART'},
        {name: '1.6 AT SMART', value: '1.6 AT SMART'},
        {name: '2.0 MT SMART', value: '2.0 MT SMART'},
        {name: '2.0 AT SMART', value: '2.0 AT SMART'},
        {name: '2.0 AT LUXE', value: '2.0 AT LUXE'},
      ],
      disableGifts: true,
      defSelectGift: 'ВЫБЕРИТЕ ПОДАРОК',
      selectedGift: '',
      giftsList: [
        {name: '3 ТО', value: '3 ТО'},
        {name: 'КАСКО', value: 'КАСКО'},
        {name: 'ВЫГОДНЫЙ ПРОЦЕНТ', value: 'ВЫГОДНЫЙ ПРОЦЕНТ'},
        {name: 'ДОП. ОБОРУДОВАНИЕ', value: 'ДОП. ОБОРУДОВАНИЕ'},
        {name: '3 ПЛАТЕЖА', value: '3 ПЛАТЕЖА'},
      ],
    }
  },
  methods: {
    activateColor(color) {
      this.activeColor = color
      console.log(color)
    },
    complSelect(option) {
      this.selectedCompl = option.name
      this.disableGifts = false
    },
    giftSelect(option) {
      this.selectedGift = option.name
    },
    checkForm(e) {
      if (this.formName && this.formPhone && this.formPhone.length===18) {
        this.clearForm()
        return true;
      }
      this.errors = [];
      if (!this.formName) {
        this.errors.push('Введите имя');
      }
      if (!this.formPhone || this.formPhone.length<18) {
        this.errors.push('Введите телефон');
      }
      e.preventDefault();
    },
    clearForm() {
      this.errors = [],
      this.formName = ''
      this.formPhone = ''
      alert('Данные успешно отправлены!')
    }
  }
}
</script>
<style lang="scss">
.select-main {
  &__field {
    &_text {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 20.7984px;
      line-height: 25px;
      color: #6C6C6C;
    }
  }
  &__options {
    width: 100%;
    position: absolute;
    top: 78px;
    z-index: 2;
    background: #FFF;
    &_option {
      margin-left: 28px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 25px;
      color: #000;
      &:hover {
        background: #F0F0F0;
      }
    }
  }
}
.brandpage {
  width: 100%;
  max-width: 2065px;
  margin: 0 0 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__main {
    width: 100%;
    max-width: 2065px;
    // height: 721px;
    margin: 45px 0 60px 0;
    display: flex;
    &_left {
      display: flex;
      flex-direction: column;
      margin: 0 45px 0 102px;
      &-head {
        display: flex;
        justify-content: space-between;
        width: 1365px;
        height: 553px;
        background: url('../assets/images/brand-main-back.png') no-repeat;
        background-size: contain;
        &--wrapp {
          display: flex;
          flex-direction: column;
          margin: 54px 0 0 43px;
        }
        &--info {
          display: flex;
          flex-direction: column;
          &_hot {
            margin: 0 0 0 -15px;
            width: 318px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: url('../assets/images/brand-hot.svg') no-repeat;
            background-size: contain;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 700;
            font-size: 19.1921px;
            line-height: 23px;
            text-align: center;
            color: #FFFFFF;
          }
          &_title {
            margin-top: 22px;
            display: flex;
            width: 452px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 700;
            font-size: 52.0992px;
            line-height: 72px;
            color: #FFFFFF;
          }
          &_border {
            width: 95%;
            height: 2px;
            background: #FFFFFF;
          }
          &_price {
            margin-top: 13px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-size: 31.2595px;
            line-height: 38px;
            color: #FFFFFF;
          }
        }
        &--params {
          display: flex;
          margin-left: 15px;
        }
        &--technics {
          display: none;
          flex-direction: column;
          align-items: center;
          width: 77px;
          &_power, &_drive, &_trans {
            display: flex;
            flex-direction: column;
            &-icon {
              display: flex;
              align-self: center;
              width: 17px;
              height: 17px;
              & img {
                width: auto;
                height: 100%;
              }
            }
            &-text {
              display: flex;
              flex-direction: column;
              align-items: center;
              font-family: 'Inter';
              font-style: normal;
              font-weight: 400;
              font-size: 7.10094px;
              line-height: 9px;
              text-align: center;
              color: #000000;
              & span {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 700;
                font-size: 7.10094px;
                line-height: 9px;
                text-align: center;
              }
            }
          }
          &_divider {
            margin: 8px 0;
            width: 100%;
            height: 1px;
            background: linear-gradient(to right, #FFF 0%, #7D8A98 20%, #7D8A98 80%,#FFF 100%);
          }
        }
        &--colors {
          margin: 60px 0 0 -20px;
          padding: 0 11px;
          display: flex;
          align-items: center;
          justify-content: space-around;
          width: 457px;
          height: 71px;
          background: #FFFFFF;
          backdrop-filter: blur(28.6546px);
          border-radius: 79.4513px;
          &-item {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            &--active {
              border: 2px solid #12609E;
            }
            &--black {
              display: flex;
              width: 24px;
              height: 24px;
              border: 12px solid #FFFFFF;
              border-radius: 50%;
              background: #000;
              &_active {
                width: 35px;
                height: 35px;
                border: 7px solid #FFFFFF;
                border-radius: 50%;
              }
            }
          }
        }
        &--image {
          margin: 30px 0px 0 -50px;
          width: 941px;
          height: 547px;
          display: flex;
          background: url('../assets/images/creta.png') no-repeat;
        }
        &--btn {
          display: none;
          width: 358px;
          height: 33px;
          background: linear-gradient(90.43deg, #12609E 17.95%, #10205E 83.93%);
          box-shadow: 0px 1.76795px 1.76795px rgba(0, 0, 0, 0.25);
          border-radius: 16.3535px;
          font-family: 'Inter';
          font-style: normal;
          font-weight: 700;
          font-size: 17.9542px;
          line-height: 106.52%;
          color: #FFFFFF;

        }
      }
      &-gifts {
        margin-top: 25px;
        width: 100%;
        display: flex;
        justify-content: space-around;

        &--item {
          display: flex;
          &_wrapper {
            margin: 0 40px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          &_text {
            margin-top: 35px;
            display: flex;
            justify-content: center;
            text-align: center;
            width: 185px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 300;
            font-size: 20.3096px;
            line-height: 25px;
            color: #000000;
          }
          &_border {
            width: 1px;
            height: 155px;
            background: linear-gradient(to top, #FFF 0%, #7D8A98 20%, #7D8A98 80%,#FFF 100%);
            &:nth-last-child(4) {
              background: transparent;
            }
          }
        }
      }
    }
    &_right {
      width: 100%;
      max-width: 417px;
      height: 721px;
      display: flex;
      justify-content: center;
      margin: 0 90px 0 45px;
      background: url('../assets/images/brand-action.png') no-repeat;
      background-size: cover;
      &-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        &--title {
          margin: 37px 0 26px 0;
          display: flex;
          font-family: 'Inter';
          font-style: normal;
          font-weight: 900;
          font-size: 19.2071px;
          line-height: 23px;
          color: #6C6C6C;
        }
        &--errors {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-self: center;
          & b {
            font-weight: 900;
            color: red;
          }
          & ul {
            display: flex;
            flex-direction: column;
            text-align: left;
          }
        }
        &--name, &--phone {
          display: flex;
          max-width: 345px;
          height: 63px;
          padding-left: 28px;
          background: #F0F0F0;
          border-radius: 88.6582px;
          border: none;
          font-family: 'Inter';
          font-style: normal;
          font-weight: 500;
          font-size: 25.977px;
          line-height: 31px;
          color: #A8A8A8;
        }
        &--phone {
          margin: 32px 0 20px 0;
        }
        & button {
          margin-bottom: 41px;
          width: 350px;
          height: 48px;
          background: linear-gradient(90.43deg, #12609E 17.95%, #10205E 83.93%);
          box-shadow: 0px 6.31499px 6.31499px rgba(0, 0, 0, 0.25);
          border-radius: 58.4137px;
          font-family: 'Inter';
          font-style: normal;
          font-weight: 900;
          font-size: 18.1668px;
          line-height: 22px;
          color: #FFFFFF;
          border: none;
          cursor: pointer;
        }
      }
    }
  }
  &__choise {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    max-width: 2065px;
    margin: 0 185px 0 103px;
    &_link {
      display: flex;
      align-items: center;
      height: 57px;
      margin: 0 40px;
      text-decoration: none;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 300;
      font-size: 20.3096px;
      line-height: 25px;
      text-align: center;
      color: #000000;
      cursor: pointer;
      &-active {
        background: linear-gradient(108.07deg, #10205E -83.42%, #12609E 175.95%);
        border-radius: 72.775px;
        color: #FFF;
      }
    }
    &_prev {
      display: flex;
      width: 15px;
      height: 31px;
      margin-right: 40px;
    }
    &_icon {
      width: 15px;
      height: 8px;
      display: flex;
      margin: 0 16px;
      }

  }
  &__divider {
    margin-top: 80px;
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
  &__complectations {
    margin: 40px 68px 0 63px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 2065px;
    flex-wrap: wrap;
  }
  &__special {
    margin: 0px 0 85px 0;
    display: flex;
    width: 100%;
    max-width: 2065px;
    &_left, &_right {
      width: 50%;
      display: flex;
      flex-direction: column;
      margin-left: 165px;
      &-item {
        display: flex;
        width: 100%;
        align-items: center;
      }
    }
    &_line {
      display: flex;
      margin-top: 65px;
      width: 1px;
      height: 459px;
      align-self: center;
      background: linear-gradient(to top, #FFF 0%, #7D8A98 20%, #7D8A98 80%, #FFF 100%);
    }
  }
  &__benefit {
    width: 100%;
    max-width: 2065px;
    margin: 41px 246px 0 289px;
    display: flex;
    flex-direction: column;
    &_title {
      margin-left: 260px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 20.9478px;
      line-height: 25px;
      color: #000000;
    }
    &_total {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      &-sum {
        margin-right: 300px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 900;
        font-size: 121.163px;
        line-height: 147px;
        color: #10205E;
      }
      & button {
        width: 612.71px;
        height: 71.42px;
        background: linear-gradient(90.43deg, #12609E 17.95%, #10205E 83.93%);
        box-shadow: 0px 9.68919px 9.68919px rgba(0, 0, 0, 0.25);
        border-radius: 89.625px;
        border: none;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 900;
        font-size: 24.882px;
        line-height: 30px;
        color: #FFFFFF;
        cursor: pointer;
      }
    }
  }
  &__tradein {
    margin: 94px 63px 0 50px;
    width: 100%;
    max-width: 1952px;
    height: 660px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background: url('../assets/images/brand-tradein.png') no-repeat;
    background-size: contain;
    &_form {
      margin-right: 76px;
      display: flex;
      width: 610px;
      background: #FFFFFF;
      box-shadow: 0px 4px 58px rgba(0, 0, 0, 0.25);
      border-radius: 41px;
      &-wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        margin: 36px 34px 8px 34px;
      }
      &-model {
        display: flex;
        align-items: center;
        padding-left: 13px;
        width: 271px;
        height: 38px;
        background: #F0F0F0;
        border-radius: 63.4355px;
        border: none;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 12.9984px;
        line-height: 16px;
        color: #6C6C6C;
      }
      &-params {
        display: flex;
        justify-content: space-between;
        margin-top: 24px;
        &--way, &--type, &--year {
          display: flex;
          align-items: center;
          padding-left: 13px;
          width: 150px;
          height: 35px;
          background: #F0F0F0;
          border-radius: 63.4355px;
          border: none;
          font-family: 'Inter';
          font-style: normal;
          font-weight: 500;
          font-size: 12.9984px;
          line-height: 16px;
          color: #A8A8A8;
        }
      }
      &-yourprice {
        margin: 24px 0 0 0;
        display: flex;
        align-items: center;
        padding-left: 13px;
        width: 258px;
        height: 38px;
        background: #F0F0F0;
        border-radius: 63.4355px;
        border: none;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 12.9984px;
        line-height: 16px;
        color: #6C6C6C;
      }
      &-person {
        display: flex;
        justify-content: space-between;
        &--name, &--phone {
          margin: 34px 0 0 0;
          display: flex;
          align-items: center;
          padding-left: 13px;
          width: 237px;
          height: 35px;
          background: #F0F0F0;
          border-radius: 63.4355px;
          border: none;
          font-family: 'Inter';
          font-style: normal;
          font-weight: 500;
          font-size: 12.9984px;
          line-height: 16px;
          color: #A8A8A8;
        }
      }
      & button {
        margin-top: 30px;
        display: flex;
        align-self: center;
        align-items: center;
        justify-content: center;
        width: 250.94px;
        height: 35px;
        background: linear-gradient(90.43deg, #12609E 17.95%, #10205E 83.93%);
        box-shadow: 0px 4.51841px 4.51841px rgba(0, 0, 0, 0.25);
        border: none;
        border-radius: 41.7953px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 900;
        font-size: 12.9984px;
        line-height: 16px;
        color: #FFFFFF;
        cursor: pointer;
      }
    }
  }
  &__technical {
    display: flex;
    flex-direction: column;
    &_head, &_bottom {
      display: flex;
      &-size, &-eng, &-chas, &-petr {
        width: 50%;
        margin: 88px 0 91px 0;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 44.1374px;
        line-height: 53px;
        color: #000000;
        &--item {
          margin-top: 33px;
          display: flex;
          align-items: center;
        }
        &--icon {
          width: 22px;
          height: 22px;
          display: flex;
        }
        &--text {
          margin-left: 25px;
          font-family: 'Inter';
          font-style: normal;
          font-weight: 400;
          font-size: 21.2188px;
          line-height: 26px;
          color: #000000;
        }
      }
    }
  }
  &__image {
    display: flex;
    width: 100%;
    max-width: 2065px;
    &_content {
      width: 100%;
      max-width: 2065px;
      height: 853px;
      // display: flex;
      background: url('../assets/images/brand-footer-banner.png') no-repeat;
    }
  }
  &__similar {
    width: 100%;
    max-width: 2065px;
    display: flex;
    justify-content: space-around;
  }
}
@media (max-width: 605px) {
  .brandpage {
    margin: 0;
    &__main {
      margin: 2px;
      &_left {
        margin: 0;
        &-head {
          width: 100%;
          max-width: 600px;
          height: 471px;
          // padding-bottom: 50px;
          flex-wrap: wrap;
          background: url('../assets/images/brand-small-main-back.png') no-repeat;
          &--wrapp {
            margin: 15px;
            flex-direction: row;
          }
          &--image {
            margin: -35px 0px 0 -20px;
            width: 100%;
            max-width: 595px;
            height: 243px;
            background-size: contain;
          }
          &--btn {
            margin: 0 0 20px 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: none;
          }
          &--info {
            margin: 0;
            &_hot {
              margin: 9px 0 0 -5px;
              width: 114px;
              height: 18px;
              font-size: 6.88893px;
              line-height: 8px;
              order: 5;
            }
            &_title {
              margin-top: 0;
              width: 234px;
              font-size: 27.0865px;
              line-height: 33px;
              order: 1;
            }
            &_border {
              order: 2;
            }
            &_price {
              margin-top: 8px;
              font-size: 22.6352px;
              line-height: 27px;
              order: 3
            }
          }
          &--technics {
            display: flex;
            margin-top: 30px;
          }
          &--colors {
            margin: 105px 0 0 -115px;
            width: 239px;
            height: 37px;
            transform: rotate(90deg);
            border-radius: 41.5139px;
            background: #DBDBDB;
            &-item {
              width: 27px;
              height: 27px;
              &--active {
                border: 1px solid #12609E;
              }
              &--black {
                width: 12px;
                height: 12px;
                border: 6px solid #DBDBDB;;
                &_active {
                  width: 18px;
                  height: 18px;
                  border: 4px;
                }
              }
            }
          }
        }
        &-gifts {
          display: flex;
          justify-content: center;
          margin-top: 0;
          max-width: 390px;
          flex-wrap: wrap;
          &--item {
            &_wrapper {
              margin: 0 12px;
            }
            &_text {
              margin-top: 20px;
              display: flex;
              max-width: 103px;
              font-size: 11.1105px;
              line-height: 13px;
            }
            &_img {
              width: 30px;
            }
            &_border {
              height: 85px;

            }
          }
        }
      }
      &_right {
        display: none;
      }
    }
    &__choise {
      margin: 0;
      max-width: 600px;
      height: 49px;
      background: linear-gradient(90.43deg, rgba(18, 96, 158, 0.3) 17.96%, rgba(16, 32, 94, 0.3) 83.93%);
      box-shadow: 0px 4.66418px 4.66418px rgba(0, 0, 0, 0.25);
      &_link {
        font-size: 8.24317px;
        line-height: 10px;
        color: #FFFFFF;
        margin: 0 7px;
        &-active {
          display: flex;
          width: 27px;
          height: 27px;
          background: linear-gradient(108.07deg, #10205E -83.42%, #12609E 175.95%);
          border-radius: 50%;
          color: transparent;
        }
      }
      &_prev {
        width: 14px;
        height: 7px;
        margin-left: 7px;
      }
      &_icon {
        width: 8px;
        height: 4px;
        margin: 0 7px;
      }
    }
    &__divider {
      margin-top: 14px;
      max-width: 600px;
      &_line {
        height: 1px;
      }
      &_text {
        margin: 4px 0;
        font-size: 15px;
        line-height: 18px;
      }
    }
    &__complectations {
      margin: 17px 52px -10px 52px;
      max-width: 600px;
    }
    &__special {
      margin: 0;
      max-width: 600px;
      flex-wrap: wrap;
      &_left {
        margin: 0;
        width: 100%;
      }
      &_line {
        display: none;
      }
      &_right {
        margin: 0;
        width: 100%;
      }
    }
    &__benefit {
      max-width: 600px;
      margin: 35px 36px;
      &_title {
        margin-left: 31px;
        font-size: 25.3906px;
        line-height: 31px;
      }
      &_total {
        margin: 0;
        justify-content: flex-start;
        flex-direction: column;
        &-sum {
          margin-right: 0;
          font-size: 61.6503px;
          line-height: 75px;
        }
        & button {
          margin-top: 20px;
          width: 372px;
          height: 43px;
          font-size: 15.1068px;
          line-height: 18px;
        }
      }
    }
    &__tradein {
      margin: 10px 0 6px 0;
      max-width: 600px;
      background: url('../assets/images/brand-small-tradein.png') no-repeat;
      background-size: contain;
      justify-content: center;
      &_form {
        margin-top: 70px;
        margin-right: 0;
        width: 95%;
        align-self: center;
        &-wrapper {
          margin: 26px 0 23px 26px;
        }
        &-model {
          width: 284px;
          height: 40px;
          font-size: 13.5986px;
          line-height: 16px;
          border-radius: 66.3643px;
        }
        &-params {
          flex-wrap: wrap;
          justify-content: flex-start;
          max-width: 100%;
          &--way, &--type, &--year {
            width: 170px;
            height: 36px;
            border-radius: 66.3643px;
            margin: 0 26px 17px 0;
            font-size: 13.5986px;
            line-height: 16px;
          }
        }
        &-yourprice {
          margin: 10px 0 24px 0;
          width: 284px;
          height: 40px;
          border-radius: 66.3643px;
          font-size: 13.5986px;
          line-height: 16px;
        }
        &-person {
          flex-wrap: wrap;
          justify-content: flex-start;
          &--name, &--phone {
            margin: 0 0 17px 0;
            width: 263px;
            height: 36px;
            border-radius: 66.3643px;
            font-size: 13.5986px;
            line-height: 16px;
          }
        }
        & button {
          margin-top: 0;
          width: 309px;
          height: 43px;
          border-radius: 51.4824px;
          font-size: 16.0111px;
          line-height: 19px;
          align-self: flex-start;
        }
      }
    }
    &__technical {
      margin: 15px 0 0 0;
      &_head, &_bottom { 
        flex-wrap: wrap;
        &-size, &-eng, &-chas, &-petr {
          width: 100%;
          margin: 17px 25px;
          font-size: 29.2226px;
          line-height: 35px;
          &--item {
            margin-top: 22px;
          }
          &--icon {
            width: 15px;
            height: 15px;

          }
          &--text {
            margin-left: 16px;
            font-size: 14.0486px;
            line-height: 17px;
          }
        }
      }
    }
    &__image {
      width: 704px;
      height: 291px;
      background-size: cover;
      overflow-x: scroll;
      margin: 0 0 0 280px;
      &_content {
        width: 704px;
        height: 291px;
        background-size: contain;
        overflow: hidden;
      }
    }
    &__market-block {
      display: none;
    }
    &__similar {
      margin-top: 22px;
      max-width: 600px;
      justify-content: center;
      flex-wrap: wrap;
    }
  }

}
</style>