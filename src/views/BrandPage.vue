<template>
  <div class="brandpage">
    <Loader v-if="showLoader" />
    <h1>BRAND</h1>
    <Complectation />
  </div>
</template>


<script>
import Complectation from '@/components/Complectation.vue'
import Loader from '@/components/app/Loader.vue'
export default {
  name: 'BrandPage',
  components: { Loader, Complectation },
  data() {
    return {
      showLoader: false
    }
  }
}
</script>
<style lang="scss">
.brandpage {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>