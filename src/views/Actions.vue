<template>
  <div class="actions">
    <Loader v-if="showLoader" />
    <h1>АКЦИИ</h1>
  </div>
</template>


<script>
import Loader from '@/components/app/Loader.vue'
export default {
  name: 'Actions',
  components: { Loader },
  data() {
    return {
      showLoader: false
    }
  }

}
</script>
<style lang="scss">
.actions {
  display: flex;
  justify-content: center;
  text-align: center;
}
</style>