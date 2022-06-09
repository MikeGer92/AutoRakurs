<template>
  <div class="tradein">
    <Loader v-if="showLoader" />
    <h1>TRADE-IN</h1>
  </div>
</template>


<script>
import Loader from '@/components/app/Loader.vue'
export default {
  name: 'Tradein',
  components: { Loader },
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
  justify-content: center;
  text-align: center;
}
</style>