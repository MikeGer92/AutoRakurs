<template>
  <div class="about">
    <Loader v-if="showLoader" />
    <h1>О КОМПАНИИ</h1>
  </div>
</template>


<script>
import Loader from '@/components/app/Loader.vue'
export default {
  name: 'About',
  components: { Loader },
  data() {
    return {
      showLoader: false
    }
  },
  mounted() {
    console.log(window.location.href);
    console.log(this.$route.path);
    console.log(this.$router.history);
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