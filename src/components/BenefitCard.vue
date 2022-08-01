<template>
  <div class="benefit-wrapper">
    <div class="benefit" :style="{'background': `url(${benefitCard.image}) no-repeat`, 'background-size': 'contain'}">
      <div class="benefit__header">
        <div class="benefit__header_title">{{ benefitCard.title }}</div>
        <div class="benefit__header_event">{{ benefitCard.event }}</div>
        <div class="benefit__header_descr">{{ benefitCard.descr }}</div>
      </div>
      <div class="benefit__button">{{ benefitCard.button }}</div>
    </div>
    <div class="benefit-small" :style="{'background': `url(${benefitCard.image_small}) no-repeat`, 'background-size': 'contain'}">
      <div class="benefit-small__header">
        <div class="benefit-small__header_title">{{ benefitCard.title }}</div>
        <div class="benefit-small__header_event">{{ benefitCard.event }}</div>
        <div class="benefit-small__header_descr">{{ benefitCard.descr }}</div>
      </div>
      <div class="benefit-small__button">{{ benefitCard.button }}</div>
    </div>
  </div> 
</template>

<script>
export default {
  name: 'BenefitCard',
    props: {
    benefitCard: {
      type: Object,
      default: () => {}
    },
  },
  data() {
    return {
      screen: 0,
      screenWidth: false
    }
  },
  created() {
    window.addEventListener('resize', this.updateWidth);
  },
  methods: {
    updateWidth() {
      this.screen = window.innerWidth;
      if (this.screen < 600) {
        this.screenWidth = true
      } 
      console.log(this.screen)
    },
    elementStyle(){
      this.updateWidth()
      if (this.screen < 600) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="scss">
.benefit, .benefit-small {
  margin: 35px 0;
  width: 600px;
  height: 416px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #FFFFFF;
  border-radius: 23.5472px;
  &__header {
    &_title {
      margin: 24px 0 8px 27px;
      max-width: 310px;
      font-family: 'Raleway';
      font-style: normal;
      font-weight: 700;
      font-size: 31.3962px;
      line-height: 37px;
      color: #000000;
    }
    &_descr, &_event {
      max-width: 290px;
      margin: 0 0 0 32px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 18.3145px;
      line-height: 22px;
      color: #939393;
    }
  }
  &__button {
    width: 320px;
    height: 55px;
    margin: 0 32px 26px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
    background: linear-gradient(90.43deg, #12609E 17.95%, #10205E 83.93%);
    box-shadow: 0px 5.2327px 5.2327px rgba(0, 0, 0, 0.25);
    border-radius: 103.346px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 19.6226px;
    line-height: 24px;
    color: #FFFFFF;
    cursor: pointer;
  }
}
.benefit-small {
  display: none;
}
@media (min-width: 1280px) and (max-width: 1921px) {
  .benefit {
    margin: 61px 29px;
    width: 449px;
    height: 310px;
    border-radius: 17.5915px;
    &__header {
      &_title {
        margin: 20px 0 14px 24px;
        font-size: 23.4553px;
        line-height: 28px;
      }
      &_descr, &_event {
        font-size: 13.6823px;
        line-height: 17px;
      }
    }
    &__button {
      width: 239px;
      height: 41px;
      margin: 0 24px 20px 0;
      font-size: 14.6507px;
      line-height: 18px;
      box-shadow: 0px 3.90922px 3.90922px rgba(0, 0, 0, 0.25);
      border-radius: 77.207px;
    }
  }
}
@media (min-width: 768px) and (max-width: 1281px) {
  .benefit {
    margin: 20px 29px;
    width: 300px;
    height: 208px;
    border-radius: 11.7264px;
    &__header {
      &_title {
        margin: 13px 0 5px 10px;
        font-size: 15.6352px;
        line-height: 18px;
      }
      &_descr, &_event {
        width: 151px;
        margin: 0 0 0 10px;
        font-size: 9px;
        line-height: 11px;
      }
    }
    &__button {
      width: 159px;
      height: 27px;
      margin: 0 16px 13px 0;
      font-size: 9.77198px;
      line-height: 12px;
      box-shadow: 0px 3.90922px 3.90922px rgba(0, 0, 0, 0.25);
      border-radius: 52px;
    }
  }
}
@media (max-width: 605px) {
  .benefit {
    display: none;
  }
  .benefit-small {
    display: flex;
    width: 323px;
    height: 286px;
    margin: 36px 0 0 0;
    border-radius: 14.8966px;
    &__header {
      &_title {
        margin: 17px 0 0 21px;
        font-size: 19.8621px;
        line-height: 23px;
      }
      &_descr, &_event {
        font-size: 11.5862px;
        line-height: 14px;
        max-width: 130px;
      }
    }
    &__button {
      width: 167px;
      height: 29px;
      font-size: 9.93103px;
      line-height: 12px;
    }
  }
} 
</style>
