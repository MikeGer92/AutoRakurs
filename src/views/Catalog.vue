<template>
  <div class="catalog">
    <Loader v-if="showLoader" />
    <h1>TRADE-IN</h1>
  </div>
</template>


<script>
import Loader from '@/components/app/Loader.vue'
export default {
  name: 'Catalog',
  components: { Loader },
  data() {
    return {
      showLoader: false
    }
  }

}
</script>
<style lang="scss">
.catalog {
  display: flex;
  justify-content: center;
  text-align: center;
}
</style>