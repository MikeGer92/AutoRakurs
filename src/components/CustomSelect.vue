<template>
<div class="select-main">
  <div 
    class="select-main__field"
    @click="funcVisible"
  >
    <div
      class="select-main__field_text"
      :class="{'select-main__field_text-active': !disable}"
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
    },
    disable: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      optionsVisible: false,
    }
  },
  computed: {
    select() {
      return this.selected ? this.selected : this.defSelected
    }
  },
  methods: {
    funcVisible() {
      if (!this.disable) {
        this.optionsVisible = !this.optionsVisible
      }
    },
    selectOption(option) {
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
  width: 544px;
  height: 77px;
  margin-bottom: 79px;
  flex-direction: column;
  &__field {
    width: 100%;
    height: 100%;
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
    text-align: left;
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
@media (min-width: 1280px) and (max-width: 1921px) {
  .select-main {
    width: 498px;
    height: 58px;
    margin-bottom: 55px;
    &__field {
      border-radius: 96.6507px;
      &_text {
        font-size: 25.5853px;
        line-height: 31px;
      }
      &_icon {
        width: 43.66px;
        height: 21.83px;
        margin-right: 18px;
      }
    }
    &__options {
      top: 58px;
      &_option {
        font-size: 25.5853px;
        line-height: 31px;
      }
      
    }
  }
}

@media (min-width: 606px) and (max-width: 768px) {
  .select-main {
    width: 140px;
    height: 24px;
    margin-bottom: 9px;
    &__field {
      width: 140px;
      height: 24px;
      border-radius: 96.6507px;
      &_text {
        font-size: 7.79468px;
        line-height: 9px;
      }
      &_icon {
        width: 9px;
        height: 5px;
        margin-right: 8px;
      }
    }
    &__options {
      top: 26px;
      &_option {
        font-size: 7.79468px;
        line-height: 9px;
      }
    }
  }
}
@media ( max-width: 600px) { 
  .select-main {
    width: 238px;
    height: 34px;
    margin-bottom: 34px;
    &__field {
      border-radius: 55.6151px;
      &_text {
        font-size: 14.7224px;
        line-height: 18px;
      }
      &_icon {
        width: 25px;
        height: 13px;
        margin-right: 11px;
      }
    }
    &__options {
      top: 35px;
      &_option {
        font-size: 14.7224px;
        line-height: 18px;
      }
    }
  }
}
</style>