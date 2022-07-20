<template>
  <div class="modal">
  </div>
</template>

<script>
export default {
  name: 'BrandsWindow',
  data() {
    return {

    }
  }
}
</script>

<style lang="scss">
.modal {
  width: 100%;
  max-width: 2065px;
  height: 120%;
  position: absolute;
  top: 164px;
  margin: 0 auto;
  // display: flex;
  // flex-direction: column;
  background: rgba(0, 0, 0, 0.5);
  overflow: hidden;
}
@media (min-width: 1280px) and (max-width: 1920px) {
  .modal {
    max-width: 1920px;
    top: 206px;
    height: 150%;
  }
}
</style>