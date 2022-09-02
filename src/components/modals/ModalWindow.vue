<template>
  <div class="modal">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ModalWindow',
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
@media (min-width: 1280px) and (max-width: 1921px) {
  .modal {
    max-width: 1920px;
    top: 206px;
    height: 140%;
  }
}
@media (min-width: 769px) and (max-width: 1281px) {
  .modal {
    max-width: 1280px;
    top: 136px;
    height: 126%;
  }
}
@media (min-width: 606px) and (max-width: 768px) {
  .modal {
    max-width: 768px;
    top: 112px;
    height: 74.6%;
  }
}
</style>