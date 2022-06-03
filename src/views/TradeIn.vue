<template>
  <div>
    <Loader v-if="showLoader" />
    <h1>TRADE-IN</h1>
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
<style lang="sass">
</style>