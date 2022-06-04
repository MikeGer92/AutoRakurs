<template>
  <div class="credit">
    <Loader v-if="showLoader" />
    <h1>КРЕДИТ</h1>
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
.credit {
  display: flex;
  justify-content: center;
  text-align: center;
}
</style>