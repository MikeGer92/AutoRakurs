<template>
<div class="select-main">
  <div 
    class="select-main__field" 
    @click="optionsVisible = !optionsVisible"
  >
    <div 
      class="select-main__field_text"
      :class="{'select-main__field_text-active': selected}"
    >
      {{ select }}</div>
    <div class="select-main__field_icon"></div>
  </div>
  <div class="select-main__options" v-if="optionsVisible">
    <div class="select-main__options_option" 
      v-for="option in options" :key="option.value"
      @click="selectOption(option)"
    >
      {{ option.name }}</div>
  </div>
</div>
  
</template>

<script>
export default {
  name: 'CustomSelect',
  props: {
    options: {
      type: Array,
      default: () => []
    },
    selected: {
      type: String,
      default: ''
    },
    defSelected: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      optionsVisible: false
    }
  },
  computed: {
    select() {
      return this.selected ? this.selected : this.defSelected
    }
  },
  methods: {
    selectOption(option) {
      console.log('OK')
      this.$emit('select', option)
      this.optionsVisible = false
    }
  }
  
}
</script>

<style lang="scss">
.select-main {
  position: relative;
  display: flex;
  flex-direction: column;
  &__field {
    width: 544px;
    height: 77px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #F0F0F0;
    border-radius: 126.981px;
    cursor: pointer;
    &_text {
      margin-left: 28px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 33.6144px;
      line-height: 41px;
      color: #C5C5C5;
      &-active {
        color: #000;
      }
    }
    &_icon {
      display: flex;
      width: 58px;
      height: 28px;
      background: url('../assets/images/select-icon.png') no-repeat;
      background-size: contain;
      margin-right: 23px;
    }
  }
  &__options {
    width: 100%;
    position: absolute;
    top: 78px;
    z-index: 2;
    background: #FFF;
    &_option {
      margin-left: 28px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 33.6144px;
      line-height: 41px;
      color: #000;
      &:hover {
        background: #F0F0F0;
      }
    }
  }
}

</style>