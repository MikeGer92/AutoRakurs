<template>
  <div class="about">
    <Loader v-if="showLoader" />
    <h1>О КОМПАНИИ</h1>
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
.about {
  display: flex;
  justify-content: center;
  text-align: center;
}
</style>