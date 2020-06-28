<template lang="pug">
.end-button.js-effect-ripple kkkk
</template>

<script>
 export default {
  name: "EndButton",
  data() {
    return {}
  },
  props: {
    value: {
    type: [Boolean, String, Number],
    default: false
    },
    activeValue: {
    type: [Boolean, String, Number],
    default: true
    },
    inactiveValue: {
    type: [Boolean, String, Number],
    default: false
    },
    disabled: {
    type: Boolean,
    default: false
    }
  },
  computed: {
    checked() {
    return this.value === this.activeValue;
    }
  },
  methods: {
    handleChange(value) {
    this.$emit('input', !this.checked ? this.activeValue : this.inactiveValue);
    }
  }
 }
</script>

<style lang="stylus">
  .end-button
    width 100px
    height 50px
</style>
