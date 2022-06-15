<template>
  <div class="tradein">
    <Loader v-if="showLoader" />
    <div class="tradein__main"></div>
    <div class="tradein__divider">
      <div class="tradein__divider_line"></div>
      <div class="tradein__divider_text">TRADE-IN</div>
      <div class="tradein__divider_line"></div>
      <OldCarParams :blockNum="1" />
    </div>
  </div>
</template>


<script>
import Loader from '@/components/app/Loader.vue'
import OldCarParams from '@/components/OldCarParams.vue'
export default {
  name: 'Tradein',
  components: { Loader, OldCarParams },
  data() {
    return {
      showLoader: false
    }
  }

}
</script>
<style lang="scss">
.tradein {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  &__main {
    display: flex;
    width: 100%;
    max-width: 2065px;
    height: 464px;
    background: url('../assets/images/tradein-banner.png') no-repeat;
  }
  &__divider {
    margin-top: 27px;
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
}
</style>