<template>
  <div class="benefit" :style="[screen > 390 ? {'background': `url(${benefitCard.image}) no-repeat`}: {'background': `url(${benefitCard.image_small}) no-repeat`, 'background-size': 'contain'}]">
    <div class="benefit__header">
      <div class="benefit__header_title">{{ benefitCard.title }}</div>
      <div class="benefit__header_descr">{{ benefitCard.descr }}</div>
    </div>
    <div class="benefit__button">{{ benefitCard.button }}</div>
  </div>
  
</template>

<script>
export default {
  name: 'BenefitCard',
    props: {
    benefitCard: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      screen: 0
    }
  },
  created() {
    window.addEventListener('resize', this.updateWidth);
  },
  methods: {
    updateWidth() {
      this.screen = window.innerWidth;
      console.log(this.screen)
    },
  }
}
</script>

<style lang="scss">
.benefit{
  margin: 35px 0;
  width: 100%;
  max-width: 600px;
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
    &_descr {
      max-width: 290px;
      margin-left: 32px;
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
@media (max-width: 390px) { 
  .benefit {
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
      &_descr {
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
