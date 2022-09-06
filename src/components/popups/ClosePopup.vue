<template>
    <div class="close-popup" @click="closePopup">
        <div class="close-popup__elem">
        <div class="close-popup__elem_item"></div>
        <div class="close-popup__elem_item"></div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ClosePopup',
  methods: {
    closePopup() {
      this.$emit('closePopup')
    }
  }
}
</script>

<style lang="scss">
.close-popup {
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
    &__elem {
      width: 12px;
      height: 12px;
      display: flex;
      margin: 12px;
      align-self: flex-end;
      justify-content: center;
      &_item {
        background: #12609E;
        border: 2px solid #12609E;
        transform: rotate(45deg);
        margin: -2px -4px -4px 0;
        &:last-child {
          transform: rotate(-45deg);
          margin: -2px 2px -4px 0px;
        }
      }
    }
}

</style>